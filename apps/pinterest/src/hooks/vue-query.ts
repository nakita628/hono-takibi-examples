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

export function getAdAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ad_accounts.$get>>,
) {
  return ['ad_accounts', '/ad_accounts', toValue(args)] as const
}

export function getAdAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ad_accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ad_accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>
          >,
          ReturnType<typeof getAdAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAdAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.ad_accounts.$post>,
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
  const mutationDefaults = getPostAdAccountsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsEntityHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ad_accounts.entity_history.$get>>,
) {
  return ['ad_accounts', '/ad_accounts/entity_history', toValue(args)] as const
}

export function getAdAccountsEntityHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ad_accounts.entity_history.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsEntityHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts.entity_history.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsEntityHistory<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.ad_accounts.entity_history.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>
              >
            >
          >,
          ReturnType<typeof getAdAccountsEntityHistoryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.ad_accounts.entity_history.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsEntityHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsEntityHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts.entity_history.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id', toValue(args)] as const
}

export function getAdAccountsAdAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAbTestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ab_tests', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAbTestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAbTestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ab_tests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAbTests<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>
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
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAbTestsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ab_tests']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAbTestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAbTestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ab_tests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdAbTests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdAbTestsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdAbTests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdAbTestsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAbTestsAbTestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
    >
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ab_tests/:ab_test_id', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAbTestsAbTestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAbTestsAbTestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ab_tests[':ab_test_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAbTestsAbTestId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAbTestsAbTestIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ab_tests'][':ab_test_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAbTestsAbTestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAbTestsAbTestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ab_tests[':ab_test_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdGroupsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAdGroupsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAdGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdGroupsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ad_groups']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAdGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdAdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdAdGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdAdGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdAdGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdGroupsAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
    >
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ad_groups/analytics', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAdGroupsAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAdGroupsAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdGroupsAnalytics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAnalyticsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['analytics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAdGroupsAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdAdGroupsAudienceSizing<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdAdGroupsAudienceSizingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/targeting_analytics',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups.targeting_analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdGroupsTargetingAnalytics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ad_groups']['targeting_analytics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAdGroupsTargetingAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups.targeting_analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdGroupsAdGroupId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAdGroupsAdGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitles<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/dynamic_titles/csv',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.csv.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsv<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['csv']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesCsvQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.csv.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/dynamic_titles/status',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/dynamic_titles/uploads',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].dynamic_titles.uploads.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploads<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['dynamic_titles']['uploads']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdAccountsAdAccountIdAdGroupsAdGroupIdDynamicTitlesUploadsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups[
            ':ad_group_id'
          ].dynamic_titles.uploads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ad_groups/:ad_group_id/publisher_blocklists',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].publisher_blocklists.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklists<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ad_groups'][':ad_group_id']['publisher_blocklists']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ad_groups[':ad_group_id'].publisher_blocklists.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAdAccountsAdAccountIdAdGroupsAdGroupIdPublisherBlocklistsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdAdPreviews<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdAdPreviewsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAdsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAdsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAdsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ads.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdAds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdAdsMutationOptions<TError, TOnMutateResult>(
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

export function usePatchAdAccountsAdAccountIdAds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdAdsMutationOptions<TError, TOnMutateResult>(
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

export function getAdAccountsAdAccountIdAdsAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads/analytics', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAdsAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAdsAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdsAnalytics<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdsAnalyticsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads']['analytics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdsAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAdsAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ads.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ads/targeting_analytics',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads.targeting_analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdsTargetingAnalytics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ads']['targeting_analytics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAdsTargetingAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ads.targeting_analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdsAdIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads/:ad_id', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAdsAdIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAdsAdIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads[':ad_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdsAdId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdsAdIdQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ads'][':ad_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdsAdIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAdsAdIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ads[':ad_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdsCreditDiscountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
    >
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ads_credit/discounts', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAdsCreditDiscountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAdsCreditDiscountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ads_credit.discounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdsCreditDiscounts<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdsCreditDiscountsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ads_credit']['discounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdsCreditDiscountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAdsCreditDiscountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ads_credit.discounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdAdsCreditRedeem<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdAdsCreditRedeemMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/advertiser_defined_events',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].advertiser_defined_events.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAdvertiserDefinedEvents<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['advertiser_defined_events']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAdvertiserDefinedEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].advertiser_defined_events.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdAdvertiserDefinedEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdAdvertiserDefinedEventsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAdAccountsAdAccountIdAdvertiserDefinedEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdAccountsAdAccountIdAdvertiserDefinedEventsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdAdvertiserDefinedEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdAdvertiserDefinedEventsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAllowedDomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/allowed_domains', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAllowedDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAllowedDomainsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].allowed_domains.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAllowedDomains<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAllowedDomainsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['allowed_domains']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAllowedDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAllowedDomainsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].allowed_domains.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/analytics', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAnalyticsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAudienceInsightsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audience_insights', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAudienceInsightsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAudienceInsightsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audience_insights.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAudienceInsights<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAudienceInsightsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audience_insights']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAudienceInsightsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAudienceInsightsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].audience_insights.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAudiencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/audiences', toValue(args)] as const
}

export function getAdAccountsAdAccountIdAudiencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAudiencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audiences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAudiences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAudiencesQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['audiences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAudiencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAudiencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].audiences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdAudiences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdAudiencesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdAudiencesAdAccountsShared<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdAudiencesAdAccountsSharedMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdAudiencesBusinessesShared<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdAudiencesBusinessesSharedMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAudiencesSharedAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/audiences/shared/accounts',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdAudiencesSharedAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAudiencesSharedAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audiences.shared.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAudiencesSharedAccounts<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAudiencesSharedAccountsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['audiences']['shared']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAudiencesSharedAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAudiencesSharedAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].audiences.shared.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdAudiencesAudienceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/audiences/:audience_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdAudiencesAudienceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdAudiencesAudienceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].audiences[':audience_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdAudiencesAudienceId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdAudiencesAudienceIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['audiences'][':audience_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdAudiencesAudienceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdAudiencesAudienceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].audiences[':audience_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdAudiencesAudienceId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdAudiencesAudienceIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdBidFloor<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdBidFloorMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/billing_invoice/:billing_invoice_id/download',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].billing_invoice[':billing_invoice_id'].download.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownload<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['billing_invoice'][':billing_invoice_id']['download']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdAccountsAdAccountIdBillingInvoiceBillingInvoiceIdDownloadQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].billing_invoice[':billing_invoice_id'].download.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdBillingInvoicesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/billing_invoices', toValue(args)] as const
}

export function getAdAccountsAdAccountIdBillingInvoicesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdBillingInvoicesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].billing_invoices.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdBillingInvoices<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdBillingInvoicesQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_invoices']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdBillingInvoicesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdBillingInvoicesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].billing_invoices.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdBillingProfilesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/billing_profiles', toValue(args)] as const
}

export function getAdAccountsAdAccountIdBillingProfilesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdBillingProfilesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].billing_profiles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdBillingProfiles<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdBillingProfilesQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['billing_profiles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdBillingProfilesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdBillingProfilesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].billing_profiles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdBulkDownload<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdBulkDownloadMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdBulkUpsert<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ad_accounts)[':ad_account_id']['bulk']['upsert']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ad_accounts)[':ad_account_id']['bulk']['upsert']['$post']
          >,
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
  const mutationDefaults = getPostAdAccountsAdAccountIdBulkUpsertMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdBulkBulkRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/bulk/:bulk_request_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdBulkBulkRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdBulkBulkRequestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].bulk[':bulk_request_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdBulkBulkRequestId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdBulkBulkRequestIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['bulk'][':bulk_request_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdBulkBulkRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdBulkBulkRequestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].bulk[':bulk_request_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdCampaignAdPreviewQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaign_ad_preview', toValue(args)] as const
}

export function getAdAccountsAdAccountIdCampaignAdPreviewQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdCampaignAdPreviewQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaign_ad_preview.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdCampaignAdPreview<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdCampaignAdPreviewQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaign_ad_preview']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCampaignAdPreviewQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdCampaignAdPreviewQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].campaign_ad_preview.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdCampaignAdPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdCampaignAdPreviewMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAdAccountsAdAccountIdCampaignAdPreview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdAccountsAdAccountIdCampaignAdPreviewMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdCampaignsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns', toValue(args)] as const
}

export function getAdAccountsAdAccountIdCampaignsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdCampaignsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaigns.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdCampaigns<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdCampaignsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['campaigns']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCampaignsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdCampaignsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].campaigns.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdCampaigns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdCampaignsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdCampaigns<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdCampaignsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdCampaignsAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
    >
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/campaigns/analytics', toValue(args)] as const
}

export function getAdAccountsAdAccountIdCampaignsAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdCampaignsAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaigns.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdCampaignsAnalytics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdCampaignsAnalyticsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['campaigns']['analytics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCampaignsAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdCampaignsAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].campaigns.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdCampaignsDeliveryEstimates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdCampaignsDeliveryEstimatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/campaigns/targeting_analytics',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaigns.targeting_analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdCampaignsTargetingAnalytics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['campaigns']['targeting_analytics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdCampaignsTargetingAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].campaigns.targeting_analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdCampaignsCampaignIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/campaigns/:campaign_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdCampaignsCampaignIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdCampaignsCampaignIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].campaigns[':campaign_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdCampaignsCampaignId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdCampaignsCampaignIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['campaigns'][':campaign_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCampaignsCampaignIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdCampaignsCampaignIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].campaigns[':campaign_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdConversionDeletionRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_deletion_requests',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdConversionDeletionRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdConversionDeletionRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_deletion_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdConversionDeletionRequests<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdConversionDeletionRequestsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionDeletionRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdConversionDeletionRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_deletion_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdConversionDeletionRequests<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdConversionDeletionRequestsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_deletion_requests/:request_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_deletion_requests[':request_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdAccountsAdAccountIdConversionDeletionRequestsRequestId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['conversion_deletion_requests'][':request_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdAccountsAdAccountIdConversionDeletionRequestsRequestIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_deletion_requests[':request_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAdAccountsAdAccountIdConversionDeletionRequestsRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAdAccountsAdAccountIdConversionDeletionRequestsRequestIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdConversionEqsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_eqs', toValue(args)] as const
}

export function getAdAccountsAdAccountIdConversionEqsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdConversionEqsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_eqs.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdConversionEqs<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdConversionEqsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_eqs']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionEqsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdConversionEqsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_eqs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdConversionSegments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdConversionSegmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdConversionSegmentsConversionSegmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchAdAccountsAdAccountIdConversionSegmentsConversionSegmentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdConversionTagsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/conversion_tags', toValue(args)] as const
}

export function getAdAccountsAdAccountIdConversionTagsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdConversionTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdConversionTags<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdConversionTagsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdConversionTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdConversionTags<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['$post']
          >,
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
  const mutationDefaults = getPostAdAccountsAdAccountIdConversionTagsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_tags/ocpm_eligible',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_tags.ocpm_eligible.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdConversionTagsOcpmEligible<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['ocpm_eligible']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdConversionTagsOcpmEligibleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_tags.ocpm_eligible.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdConversionTagsPageVisitQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_tags/page_visit',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdConversionTagsPageVisitQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdConversionTagsPageVisitQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_tags.page_visit.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdConversionTagsPageVisit<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdConversionTagsPageVisitQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['conversion_tags']['page_visit']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionTagsPageVisitQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdConversionTagsPageVisitQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_tags.page_visit.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/conversion_tags/:conversion_tag_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].conversion_tags[':conversion_tag_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdAccountsAdAccountIdConversionTagsConversionTagId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['conversion_tags'][':conversion_tag_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdConversionTagsConversionTagIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].conversion_tags[':conversion_tag_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdCustomerListsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_lists', toValue(args)] as const
}

export function getAdAccountsAdAccountIdCustomerListsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdCustomerListsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_lists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdCustomerLists<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdCustomerListsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCustomerListsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdCustomerListsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].customer_lists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdCustomerLists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ad_accounts)[':ad_account_id']['customer_lists']['$post']
          >,
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
  const mutationDefaults = getPostAdAccountsAdAccountIdCustomerListsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/customer_lists/:customer_list_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdAccountsAdAccountIdCustomerListsCustomerListId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdCustomerListsCustomerListIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdCustomerListsCustomerListId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdCustomerListsCustomerListIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdCustomerListsCustomerListIdUploads<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/customer_lists/:customer_list_id/uploads/:customer_list_upload_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads[
          ':customer_list_upload_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['customer_lists'][':customer_list_id']['uploads'][':customer_list_upload_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].customer_lists[':customer_list_id'].uploads[
            ':customer_list_upload_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRun<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostAdAccountsAdAccountIdCustomerListsCustomerListIdUploadsCustomerListUploadIdRunMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdCustomerSegmentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/customer_segments', toValue(args)] as const
}

export function getAdAccountsAdAccountIdCustomerSegmentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdCustomerSegmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].customer_segments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdCustomerSegments<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdCustomerSegmentsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['customer_segments']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdCustomerSegmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdCustomerSegmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].customer_segments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdCustomerSegments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdCustomerSegmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdCustomerSegments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdCustomerSegmentsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['events']['$post']>,
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
  const mutationDefaults = getPostAdAccountsAdAccountIdEventsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdInsightsAudiencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/insights/audiences', toValue(args)] as const
}

export function getAdAccountsAdAccountIdInsightsAudiencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdInsightsAudiencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].insights.audiences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdInsightsAudiences<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdInsightsAudiencesQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['insights']['audiences']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdInsightsAudiencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdInsightsAudiencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].insights.audiences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdKeywordsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/keywords', toValue(args)] as const
}

export function getAdAccountsAdAccountIdKeywordsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdKeywordsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].keywords.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdKeywords<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>
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
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdKeywordsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdKeywordsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdKeywordsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].keywords.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdKeywords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdKeywordsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdKeywords<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdKeywordsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdKeywordsMetricsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/keywords/metrics', toValue(args)] as const
}

export function getAdAccountsAdAccountIdKeywordsMetricsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdKeywordsMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].keywords.metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdKeywordsMetrics<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdKeywordsMetricsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['keywords']['metrics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdKeywordsMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdKeywordsMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].keywords.metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/labels', toValue(args)] as const
}

export function getAdAccountsAdAccountIdLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$post']>,
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
  const mutationDefaults = getPostAdAccountsAdAccountIdLabelsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['labels']['$patch']>,
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
  const mutationDefaults = getPatchAdAccountsAdAccountIdLabelsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdLabelsLabelIdApply<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdLabelsLabelIdApplyMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdLabelsLabelIdRemove<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdLabelsLabelIdRemoveMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdLeadFormsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/lead_forms', toValue(args)] as const
}

export function getAdAccountsAdAccountIdLeadFormsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdLeadFormsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].lead_forms.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdLeadForms<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdLeadFormsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['lead_forms']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLeadFormsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdLeadFormsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].lead_forms.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdLeadForms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdLeadFormsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdLeadForms<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdLeadFormsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/lead_forms/:lead_form_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].lead_forms[':lead_form_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdLeadFormsLeadFormId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['lead_forms'][':lead_form_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdLeadFormsLeadFormIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].lead_forms[':lead_form_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdLeadFormsLeadFormIdTest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdLeadFormsLeadFormIdTestMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdLeadsSubscriptionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
    >
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/leads/subscriptions', toValue(args)] as const
}

export function getAdAccountsAdAccountIdLeadsSubscriptionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdLeadsSubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].leads.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdLeadsSubscriptions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdLeadsSubscriptionsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLeadsSubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdLeadsSubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].leads.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdLeadsSubscriptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdLeadsSubscriptionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/leads/subscriptions/:subscription_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].leads.subscriptions[':subscription_id'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['leads']['subscriptions'][':subscription_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].leads.subscriptions[':subscription_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteAdAccountsAdAccountIdLeadsSubscriptionsSubscriptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdLeadsExport<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdLeadsExportMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/leads_export/:leads_export_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].leads_export[':leads_export_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdLeadsExportLeadsExportId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['leads_export'][':leads_export_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdLeadsExportLeadsExportIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].leads_export[':leads_export_id'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdMmmReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/mmm_reports', toValue(args)] as const
}

export function getAdAccountsAdAccountIdMmmReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdMmmReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].mmm_reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdMmmReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdMmmReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['mmm_reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdMmmReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdMmmReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].mmm_reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdMmmReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdMmmReportsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdMsotEvents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.ad_accounts)[':ad_account_id']['msot']['events']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.ad_accounts)[':ad_account_id']['msot']['events']['$post']
          >,
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
  const mutationDefaults = getPostAdAccountsAdAccountIdMsotEventsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdOrderLinesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/order_lines', toValue(args)] as const
}

export function getAdAccountsAdAccountIdOrderLinesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdOrderLinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].order_lines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdOrderLines<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdOrderLinesQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['order_lines']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdOrderLinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdOrderLinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].order_lines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/order_lines/:order_line_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].order_lines[':order_line_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdOrderLinesOrderLineId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['order_lines'][':order_line_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdOrderLinesOrderLineIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].order_lines[':order_line_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdPinsAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/pins/analytics', toValue(args)] as const
}

export function getAdAccountsAdAccountIdPinsAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdPinsAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].pins.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdPinsAnalytics<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdPinsAnalyticsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['pins']['analytics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdPinsAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdPinsAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].pins.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdProductGroupPromotionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/product_group_promotions',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdProductGroupPromotionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdProductGroupPromotionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].product_group_promotions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdProductGroupPromotions<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdProductGroupPromotionsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdProductGroupPromotionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdProductGroupPromotionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].product_group_promotions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdProductGroupPromotions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdProductGroupPromotionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdProductGroupPromotions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdProductGroupPromotionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/product_group_promotions/:product_group_promotion_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].product_group_promotions[
          ':product_group_promotion_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryKey
          >
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
              (typeof client.ad_accounts)[':ad_account_id']['product_group_promotions'][':product_group_promotion_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdAccountsAdAccountIdProductGroupPromotionsProductGroupPromotionIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].product_group_promotions[
            ':product_group_promotion_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdProductGroupsAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/product_groups/analytics',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdProductGroupsAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdProductGroupsAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].product_groups.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdProductGroupsAnalytics<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdProductGroupsAnalyticsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['product_groups']['analytics']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdProductGroupsAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdProductGroupsAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].product_groups.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/promotion_applied_entities',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].promotion_applied_entities.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdPromotionAppliedEntities<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['promotion_applied_entities']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdPromotionAppliedEntitiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].promotion_applied_entities.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdPromotionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/promotions', toValue(args)] as const
}

export function getAdAccountsAdAccountIdPromotionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdPromotionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].promotions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdPromotions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdPromotionsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['promotions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdPromotionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdPromotionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].promotions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdPromotions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdPromotionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdPromotions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdPromotionsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdPromotionsPromotionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/promotions/:promotion_id',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdPromotionsPromotionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdPromotionsPromotionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].promotions[':promotion_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdPromotionsPromotionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdPromotionsPromotionIdQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['promotions'][':promotion_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdPromotionsPromotionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdPromotionsPromotionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].promotions[':promotion_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteAdAccountsAdAccountIdPromotionsPromotionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdAccountsAdAccountIdPromotionsPromotionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdPublisherBlocklistsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/publisher_blocklists', toValue(args)] as const
}

export function getAdAccountsAdAccountIdPublisherBlocklistsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdPublisherBlocklistsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].publisher_blocklists.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdPublisherBlocklists<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdPublisherBlocklistsQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['publisher_blocklists']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdPublisherBlocklistsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdPublisherBlocklistsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].publisher_blocklists.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdPublisherBlocklists<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdPublisherBlocklistsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdReportsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/reports', toValue(args)] as const
}

export function getAdAccountsAdAccountIdReportsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdReports<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>
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
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdReportsQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['reports']['$post']>,
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
  const mutationDefaults = getPostAdAccountsAdAccountIdReportsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdReportsBrandCategorySkuQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/reports/brand_category_sku',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdReportsBrandCategorySkuQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdReportsBrandCategorySkuQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].reports.brand_category_sku.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdReportsBrandCategorySku<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdReportsBrandCategorySkuQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['reports']['brand_category_sku']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdReportsBrandCategorySkuQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdReportsBrandCategorySkuQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].reports.brand_category_sku.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdReportsBrandCategorySku<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdReportsBrandCategorySkuMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteAdAccountsAdAccountIdSandbox<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteAdAccountsAdAccountIdSandboxMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdSchedulesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/schedules', toValue(args)] as const
}

export function getAdAccountsAdAccountIdSchedulesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdSchedulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].schedules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdSchedules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdSchedulesQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['schedules']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdSchedulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdSchedulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].schedules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdSchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdSchedulesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdSchedules<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdSchedulesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdSsioAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/accounts', toValue(args)] as const
}

export function getAdAccountsAdAccountIdSsioAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdSsioAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ssio.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdSsioAccounts<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdSsioAccountsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['accounts']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdSsioAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdSsioAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ssio.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdSsioInsertionOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdSsioInsertionOrdersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdSsioInsertionOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdSsioInsertionOrdersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ssio/insertion_orders/status',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ssio.insertion_orders.status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdSsioInsertionOrdersStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdSsioInsertionOrdersStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ssio.insertion_orders.status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
    >
  >,
) {
  return [
    'ad_accounts',
    '/ad_accounts/:ad_account_id/ssio/insertion_orders/:pin_order_id/status',
    toValue(args),
  ] as const
}

export function getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ssio.insertion_orders[':pin_order_id'].status.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryKey>
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
              (typeof client.ad_accounts)[':ad_account_id']['ssio']['insertion_orders'][':pin_order_id']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getAdAccountsAdAccountIdSsioInsertionOrdersPinOrderIdStatusQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ssio.insertion_orders[':pin_order_id'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdSsioOrderLinesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/ssio/order_lines', toValue(args)] as const
}

export function getAdAccountsAdAccountIdSsioOrderLinesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdSsioOrderLinesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].ssio.order_lines.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdSsioOrderLines<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdSsioOrderLinesQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['ssio']['order_lines']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdSsioOrderLinesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdSsioOrderLinesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].ssio.order_lines.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdTargetingAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/targeting_analytics', toValue(args)] as const
}

export function getAdAccountsAdAccountIdTargetingAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdTargetingAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].targeting_analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdTargetingAnalytics<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdTargetingAnalyticsQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['targeting_analytics']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdTargetingAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdTargetingAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].targeting_analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdTargetingTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/targeting_templates', toValue(args)] as const
}

export function getAdAccountsAdAccountIdTargetingTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdTargetingTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].targeting_templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdTargetingTemplates<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdTargetingTemplatesQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['targeting_templates']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdTargetingTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdTargetingTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].targeting_templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdTargetingTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdTargetingTemplatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchAdAccountsAdAccountIdTargetingTemplates<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchAdAccountsAdAccountIdTargetingTemplatesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdTemplatesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/templates', toValue(args)] as const
}

export function getAdAccountsAdAccountIdTemplatesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdTemplatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].templates.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdTemplatesQueryKey>
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
          Awaited<ReturnType<(typeof client.ad_accounts)[':ad_account_id']['templates']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdTemplatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdTemplatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].templates.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdAccountsAdAccountIdTemplatesTemplateIdReports<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdAccountsAdAccountIdTemplatesTemplateIdReportsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getAdAccountsAdAccountIdTermsOfServiceQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
  >,
) {
  return ['ad_accounts', '/ad_accounts/:ad_account_id/terms_of_service', toValue(args)] as const
}

export function getAdAccountsAdAccountIdTermsOfServiceQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAdAccountsAdAccountIdTermsOfServiceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.ad_accounts[':ad_account_id'].terms_of_service.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAdAccountsAdAccountIdTermsOfService<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
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
                    (typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']
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
                    (typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAdAccountsAdAccountIdTermsOfServiceQueryKey>
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
            ReturnType<(typeof client.ad_accounts)[':ad_account_id']['terms_of_service']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAdAccountsAdAccountIdTermsOfServiceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAdAccountsAdAccountIdTermsOfServiceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.ad_accounts[':ad_account_id'].terms_of_service.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostAdvancedAuctionItemsGet<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdvancedAuctionItemsGetMutationOptions<TError, TOnMutateResult>(
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

export function usePostAdvancedAuctionItemsSubmit<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostAdvancedAuctionItemsSubmitMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBoardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.boards.$get>>,
) {
  return ['boards', '/boards', toValue(args)] as const
}

export function getBoardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.boards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useBoards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.boards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
          ReturnType<typeof getBoardsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBoardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBoards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.boards.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.boards.$post>,
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
  const mutationDefaults = getPostBoardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBoardsBoardIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':board_id']['$get']>>,
) {
  return ['boards', '/boards/:board_id', toValue(args)] as const
}

export function getBoardsBoardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':board_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsBoardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':board_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsBoardId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':board_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
            >
          >,
          ReturnType<typeof getBoardsBoardIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsBoardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':board_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteBoardsBoardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBoardsBoardIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchBoardsBoardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':board_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.boards)[':board_id']['$patch']>,
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
  const mutationDefaults = getPatchBoardsBoardIdMutationOptions<TError, TOnMutateResult>(
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

export function getBoardsBoardIdPinsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':board_id']['pins']['$get']>>,
) {
  return ['boards', '/boards/:board_id/pins', toValue(args)] as const
}

export function getBoardsBoardIdPinsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':board_id']['pins']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsBoardIdPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':board_id'].pins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsBoardIdPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':board_id']['pins']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsBoardIdPinsQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':board_id']['pins']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsBoardIdPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':board_id'].pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBoardsBoardIdSectionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':board_id']['sections']['$get']>>,
) {
  return ['boards', '/boards/:board_id/sections', toValue(args)] as const
}

export function getBoardsBoardIdSectionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':board_id']['sections']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsBoardIdSectionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':board_id'].sections.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsBoardIdSections<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.boards)[':board_id']['sections']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBoardsBoardIdSectionsQueryKey>
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
          Awaited<ReturnType<(typeof client.boards)[':board_id']['sections']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdSectionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsBoardIdSectionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':board_id'].sections.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBoardsBoardIdSections<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBoardsBoardIdSectionsMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteBoardsBoardIdSectionsSectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.boards)[':board_id']['sections'][':section_id']['$delete']
          >,
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
  const mutationDefaults = getDeleteBoardsBoardIdSectionsSectionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchBoardsBoardIdSectionsSectionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.boards)[':board_id']['sections'][':section_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.boards)[':board_id']['sections'][':section_id']['$patch']
          >,
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
  const mutationDefaults = getPatchBoardsBoardIdSectionsSectionIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBoardsBoardIdSectionsSectionIdPinsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']>
  >,
) {
  return ['boards', '/boards/:board_id/sections/:section_id/pins', toValue(args)] as const
}

export function getBoardsBoardIdSectionsSectionIdPinsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBoardsBoardIdSectionsSectionIdPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.boards[':board_id'].sections[':section_id'].pins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBoardsBoardIdSectionsSectionIdPins<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']>
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
                    (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
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
                    (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBoardsBoardIdSectionsSectionIdPinsQueryKey>
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
              (typeof client.boards)[':board_id']['sections'][':section_id']['pins']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBoardsBoardIdSectionsSectionIdPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBoardsBoardIdSectionsSectionIdPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.boards[':board_id'].sections[':section_id'].pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccounts<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchBusinessAccessBusinessHierarchyBusinessHierarchyIdBrandAccountsBrandAccountIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBusinessAccessBusinessRmnInvitesBusinessRelationshipInviteIdAuthProcessActionMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusinessesEmployersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.businesses.employers.$get>>,
) {
  return ['businesses', '/businesses/employers', toValue(args)] as const
}

export function getBusinessesEmployersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.businesses.employers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesEmployersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses.employers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesEmployers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.businesses.employers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>
            >
          >,
          ReturnType<typeof getBusinessesEmployersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.businesses.employers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesEmployersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesEmployersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses.employers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchBusinessesInvites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.businesses.invites.$patch>>>
            >
          >,
          TError,
          InferRequestType<typeof client.businesses.invites.$patch>,
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
  const mutationDefaults = getPatchBusinessesInvitesMutationOptions<TError, TOnMutateResult>(
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

export function getBusinessesBusinessIdAdAccountRequestsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
  >,
) {
  return ['businesses', '/businesses/:business_id/ad_account_requests', toValue(args)] as const
}

export function getBusinessesBusinessIdAdAccountRequestsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdAdAccountRequestsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].ad_account_requests.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdAdAccountRequests<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
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
                    (typeof client.businesses)[':business_id']['ad_account_requests']['$get']
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
                    (typeof client.businesses)[':business_id']['ad_account_requests']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdAdAccountRequestsQueryKey>
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
            ReturnType<(typeof client.businesses)[':business_id']['ad_account_requests']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAdAccountRequestsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdAdAccountRequestsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].ad_account_requests.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBusinessesBusinessIdAdAccountRequestsAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBusinessesBusinessIdAdAccountRequestsAcceptMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostBusinessesBusinessIdAdAccountRequestsReject<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBusinessesBusinessIdAdAccountRequestsRejectMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdAnalyticsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['analytics']['$get']>
  >,
) {
  return ['businesses', '/businesses/:business_id/analytics', toValue(args)] as const
}

export function getBusinessesBusinessIdAnalyticsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['analytics']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['analytics']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdAnalyticsQueryKey>
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
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
    >
  >,
) {
  return [
    'businesses',
    '/businesses/:business_id/analytics/aggregated_timeline',
    toValue(args),
  ] as const
}

export function getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].analytics.aggregated_timeline.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdAnalyticsAggregatedTimeline<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
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
                    (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
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
                    (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryKey>
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
              (typeof client.businesses)[':business_id']['analytics']['aggregated_timeline']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdAnalyticsAggregatedTimelineQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].analytics.aggregated_timeline.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBusinessesBusinessIdAssetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBusinessesBusinessIdAssetGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteBusinessesBusinessIdAssetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBusinessesBusinessIdAssetGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchBusinessesBusinessIdAssetGroups<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBusinessesBusinessIdAssetGroupsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdAssetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['assets']['$get']>
  >,
) {
  return ['businesses', '/businesses/:business_id/assets', toValue(args)] as const
}

export function getBusinessesBusinessIdAssetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['assets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdAssets<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['assets']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdAssetsQueryKey>
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
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['assets']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdAssetsAssetIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
    >
  >,
) {
  return ['businesses', '/businesses/:business_id/assets/:asset_id/members', toValue(args)] as const
}

export function getBusinessesBusinessIdAssetsAssetIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdAssetsAssetIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].assets[':asset_id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdAssetsAssetIdMembers<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
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
                    (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
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
                    (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdAssetsAssetIdMembersQueryKey>
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
              (typeof client.businesses)[':business_id']['assets'][':asset_id']['members']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAssetsAssetIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdAssetsAssetIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].assets[':asset_id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdAssetsAssetIdPartnersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
    >
  >,
) {
  return [
    'businesses',
    '/businesses/:business_id/assets/:asset_id/partners',
    toValue(args),
  ] as const
}

export function getBusinessesBusinessIdAssetsAssetIdPartnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdAssetsAssetIdPartnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].assets[':asset_id'].partners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdAssetsAssetIdPartners<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
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
                    (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
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
                    (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdAssetsAssetIdPartnersQueryKey>
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
              (typeof client.businesses)[':business_id']['assets'][':asset_id']['partners']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAssetsAssetIdPartnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdAssetsAssetIdPartnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].assets[':asset_id'].partners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdAudiencesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['audiences']['$get']>
  >,
) {
  return ['businesses', '/businesses/:business_id/audiences', toValue(args)] as const
}

export function getBusinessesBusinessIdAudiencesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['audiences']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdAudiencesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].audiences.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdAudiences<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['audiences']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdAudiencesQueryKey>
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
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['audiences']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAudiencesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdAudiencesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].audiences.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchBusinessesBusinessIdAudiencesAdAccountsShared<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBusinessesBusinessIdAudiencesAdAccountsSharedMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchBusinessesBusinessIdAudiencesBusinessesShared<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBusinessesBusinessIdAudiencesBusinessesSharedMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdAudiencesSharedAccountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
    >
  >,
) {
  return [
    'businesses',
    '/businesses/:business_id/audiences/shared/accounts',
    toValue(args),
  ] as const
}

export function getBusinessesBusinessIdAudiencesSharedAccountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdAudiencesSharedAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].audiences.shared.accounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdAudiencesSharedAccounts<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
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
                    (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
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
                    (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdAudiencesSharedAccountsQueryKey>
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
              (typeof client.businesses)[':business_id']['audiences']['shared']['accounts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdAudiencesSharedAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdAudiencesSharedAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].audiences.shared.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdInvitesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['invites']['$get']>
  >,
) {
  return ['businesses', '/businesses/:business_id/invites', toValue(args)] as const
}

export function getBusinessesBusinessIdInvitesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['invites']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdInvitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].invites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdInvites<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['invites']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdInvitesQueryKey>
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
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['invites']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdInvitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdInvitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].invites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBusinessesBusinessIdInvites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBusinessesBusinessIdInvitesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteBusinessesBusinessIdInvites<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.businesses)[':business_id']['invites']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.businesses)[':business_id']['invites']['$delete']>,
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
  const mutationDefaults = getDeleteBusinessesBusinessIdInvitesMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostBusinessesBusinessIdInvitesAssetsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBusinessesBusinessIdInvitesAssetsAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdMembersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['members']['$get']>
  >,
) {
  return ['businesses', '/businesses/:business_id/members', toValue(args)] as const
}

export function getBusinessesBusinessIdMembersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['members']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].members.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdMembers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['members']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdMembersQueryKey>
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
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['members']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].members.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteBusinessesBusinessIdMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.businesses)[':business_id']['members']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.businesses)[':business_id']['members']['$delete']>,
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
  const mutationDefaults = getDeleteBusinessesBusinessIdMembersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchBusinessesBusinessIdMembers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBusinessesBusinessIdMembersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteBusinessesBusinessIdMembersAssetsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBusinessesBusinessIdMembersAssetsAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchBusinessesBusinessIdMembersAssetsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBusinessesBusinessIdMembersAssetsAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdMembersMemberIdAssetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
    >
  >,
) {
  return [
    'businesses',
    '/businesses/:business_id/members/:member_id/assets',
    toValue(args),
  ] as const
}

export function getBusinessesBusinessIdMembersMemberIdAssetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdMembersMemberIdAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].members[':member_id'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdMembersMemberIdAssets<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
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
                    (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
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
                    (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdMembersMemberIdAssetsQueryKey>
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
              (typeof client.businesses)[':business_id']['members'][':member_id']['assets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdMembersMemberIdAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdMembersMemberIdAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].members[':member_id'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdPartnersQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['partners']['$get']>
  >,
) {
  return ['businesses', '/businesses/:business_id/partners', toValue(args)] as const
}

export function getBusinessesBusinessIdPartnersQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['partners']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdPartnersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].partners.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdPartners<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.businesses)[':business_id']['partners']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdPartnersQueryKey>
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
          Awaited<ReturnType<(typeof client.businesses)[':business_id']['partners']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdPartnersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdPartnersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].partners.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteBusinessesBusinessIdPartners<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.businesses)[':business_id']['partners']['$delete']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.businesses)[':business_id']['partners']['$delete']>,
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
  const mutationDefaults = getDeleteBusinessesBusinessIdPartnersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteBusinessesBusinessIdPartnersAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteBusinessesBusinessIdPartnersAssetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchBusinessesBusinessIdPartnersAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBusinessesBusinessIdPartnersAssetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostBusinessesBusinessIdPartnersPartnerIdAdAccountRequest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostBusinessesBusinessIdPartnersPartnerIdAdAccountRequestMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getDeleteBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPatchBusinessesBusinessIdPartnersPartnerIdAdAccountRequestsAgencyOwnedAdAccountRequestIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdPartnersPartnerIdAssetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
    >
  >,
) {
  return [
    'businesses',
    '/businesses/:business_id/partners/:partner_id/assets',
    toValue(args),
  ] as const
}

export function getBusinessesBusinessIdPartnersPartnerIdAssetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdPartnersPartnerIdAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].partners[':partner_id'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdPartnersPartnerIdAssets<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
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
                    (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
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
                    (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdPartnersPartnerIdAssetsQueryKey>
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
              (typeof client.businesses)[':business_id']['partners'][':partner_id']['assets']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdPartnersPartnerIdAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdPartnersPartnerIdAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].partners[':partner_id'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostBusinessesBusinessIdRequestsAssetsAccess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBusinessesBusinessIdRequestsAssetsAccessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdRmnContractsContractIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
    >
  >,
) {
  return [
    'businesses',
    '/businesses/:business_id/rmn/contracts/:contract_id',
    toValue(args),
  ] as const
}

export function getBusinessesBusinessIdRmnContractsContractIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getBusinessesBusinessIdRmnContractsContractIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].rmn.contracts[':contract_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useBusinessesBusinessIdRmnContractsContractId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
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
                    (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
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
                    (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdRmnContractsContractIdQueryKey>
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
              (typeof client.businesses)[':business_id']['rmn']['contracts'][':contract_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdRmnContractsContractIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getBusinessesBusinessIdRmnContractsContractIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].rmn.contracts[':contract_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePatchBusinessesBusinessIdRmnContractsContractIdProcess<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBusinessesBusinessIdRmnContractsContractIdProcessMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
    >
  >,
) {
  return [
    'businesses',
    '/businesses/:business_id/rmn/partners/:partner_id/allowed_domains',
    toValue(args),
  ] as const
}

export function getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].rmn.partners[':partner_id'].allowed_domains.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomains<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
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
                    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
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
                    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryKey>
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
              (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['allowed_domains']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBusinessesBusinessIdRmnPartnersPartnerIdAllowedDomainsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].rmn.partners[':partner_id'].allowed_domains.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
    >
  >,
) {
  return [
    'businesses',
    '/businesses/:business_id/rmn/partners/:partner_id/contracts/history',
    toValue(args),
  ] as const
}

export function getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.businesses[':business_id'].rmn.partners[':partner_id'].contracts.history.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useBusinessesBusinessIdRmnPartnersPartnerIdContractsHistory<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
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
                    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
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
                    (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryKey>
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
              (typeof client.businesses)[':business_id']['rmn']['partners'][':partner_id']['contracts']['history']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getBusinessesBusinessIdRmnPartnersPartnerIdContractsHistoryQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.businesses[':business_id'].rmn.partners[':partner_id'].contracts.history.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostBusinessesBusinessIdRmnPartnersPartnerIdInvite<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostBusinessesBusinessIdRmnPartnersPartnerIdInviteMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchBusinessesBusinessIdSystemUsersSystemUserId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchBusinessesBusinessIdSystemUsersSystemUserIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.$get>>,
) {
  return ['catalogs', '/catalogs', toValue(args)] as const
}

export function getCatalogsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCatalogs<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>
          >,
          ReturnType<typeof getCatalogsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCatalogsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCatalogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.catalogs.$post>,
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
  const mutationDefaults = getPostCatalogsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsAvailableFilterValuesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.available_filter_values.$get>>,
) {
  return ['catalogs', '/catalogs/available_filter_values', toValue(args)] as const
}

export function getCatalogsAvailableFilterValuesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.available_filter_values.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsAvailableFilterValuesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.available_filter_values.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsAvailableFilterValues<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.available_filter_values.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>
              >
            >
          >,
          ReturnType<typeof getCatalogsAvailableFilterValuesQueryKey>
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
          Awaited<ReturnType<typeof client.catalogs.available_filter_values.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsAvailableFilterValuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsAvailableFilterValuesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.available_filter_values.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCatalogsFeedsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.feeds.$get>>,
) {
  return ['catalogs', '/catalogs/feeds', toValue(args)] as const
}

export function getCatalogsFeedsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.feeds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsFeedsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.feeds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsFeeds<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.feeds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
          >,
          ReturnType<typeof getCatalogsFeedsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsFeedsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsFeedsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.feeds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCatalogsFeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.feeds.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.catalogs.feeds.$post>,
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
  const mutationDefaults = getPostCatalogsFeedsMutationOptions<TError, TOnMutateResult>(
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

export function getCatalogsFeedsFeedIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>,
) {
  return ['catalogs', '/catalogs/feeds/:feed_id', toValue(args)] as const
}

export function getCatalogsFeedsFeedIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsFeedsFeedIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.feeds[':feed_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsFeedsFeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCatalogsFeedsFeedIdQueryKey>
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
          Awaited<ReturnType<(typeof client.catalogs.feeds)[':feed_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsFeedsFeedIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsFeedsFeedIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.feeds[':feed_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCatalogsFeedsFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCatalogsFeedsFeedIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchCatalogsFeedsFeedId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCatalogsFeedsFeedIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostCatalogsFeedsFeedIdIngest<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCatalogsFeedsFeedIdIngestMutationOptions<TError, TOnMutateResult>(
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

export function getCatalogsFeedsFeedIdProcessingResultsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
  >,
) {
  return ['catalogs', '/catalogs/feeds/:feed_id/processing_results', toValue(args)] as const
}

export function getCatalogsFeedsFeedIdProcessingResultsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsFeedsFeedIdProcessingResultsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.feeds[':feed_id'].processing_results.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsFeedsFeedIdProcessingResults<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
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
                    (typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']
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
                    (typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCatalogsFeedsFeedIdProcessingResultsQueryKey>
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
            ReturnType<(typeof client.catalogs.feeds)[':feed_id']['processing_results']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsFeedsFeedIdProcessingResultsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsFeedsFeedIdProcessingResultsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.feeds[':feed_id'].processing_results.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCatalogsItems<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.items.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.catalogs.items.$post>,
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
  const mutationDefaults = getPostCatalogsItemsMutationOptions<TError, TOnMutateResult>(
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

export function usePostCatalogsItemsBatch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.items.batch.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.catalogs.items.batch.$post>,
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
  const mutationDefaults = getPostCatalogsItemsBatchMutationOptions<TError, TOnMutateResult>(
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

export function getCatalogsItemsBatchBatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>
  >,
) {
  return ['catalogs', '/catalogs/items/batch/:batch_id', toValue(args)] as const
}

export function getCatalogsItemsBatchBatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsItemsBatchBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.items.batch[':batch_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsItemsBatchBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCatalogsItemsBatchBatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.catalogs.items.batch)[':batch_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsItemsBatchBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsItemsBatchBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.items.batch[':batch_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
    >
  >,
) {
  return [
    'catalogs',
    '/catalogs/processing_results/:processing_result_id/item_issues',
    toValue(args),
  ] as const
}

export function getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.processing_results[':processing_result_id'].item_issues.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useCatalogsProcessingResultsProcessingResultIdItemIssues<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
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
                    (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
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
                    (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryKey>
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
              (typeof client.catalogs.processing_results)[':processing_result_id']['item_issues']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCatalogsProcessingResultsProcessingResultIdItemIssuesQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.processing_results[':processing_result_id'].item_issues.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getCatalogsProductGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.product_groups.$get>>,
) {
  return ['catalogs', '/catalogs/product_groups', toValue(args)] as const
}

export function getCatalogsProductGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.product_groups.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsProductGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.product_groups.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsProductGroups<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.product_groups.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
            >
          >,
          ReturnType<typeof getCatalogsProductGroupsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsProductGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsProductGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.product_groups.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCatalogsProductGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.product_groups.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.catalogs.product_groups.$post>,
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
  const mutationDefaults = getPostCatalogsProductGroupsMutationOptions<TError, TOnMutateResult>(
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

export function usePostCatalogsProductGroupsMultiple<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCatalogsProductGroupsMultipleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCatalogsProductGroupsMultiple<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCatalogsProductGroupsMultipleMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsProductGroupsProductGroupIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>
  >,
) {
  return ['catalogs', '/catalogs/product_groups/:product_group_id', toValue(args)] as const
}

export function getCatalogsProductGroupsProductGroupIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsProductGroupsProductGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.product_groups[':product_group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsProductGroupsProductGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCatalogsProductGroupsProductGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client.catalogs.product_groups)[':product_group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsProductGroupsProductGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsProductGroupsProductGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.product_groups[':product_group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCatalogsProductGroupsProductGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCatalogsProductGroupsProductGroupIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchCatalogsProductGroupsProductGroupId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCatalogsProductGroupsProductGroupIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsProductGroupsProductGroupIdProductCountsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
    >
  >,
) {
  return [
    'catalogs',
    '/catalogs/product_groups/:product_group_id/product_counts',
    toValue(args),
  ] as const
}

export function getCatalogsProductGroupsProductGroupIdProductCountsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsProductGroupsProductGroupIdProductCountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.product_groups[':product_group_id'].product_counts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsProductGroupsProductGroupIdProductCounts<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
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
                    (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
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
                    (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCatalogsProductGroupsProductGroupIdProductCountsQueryKey>
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
              (typeof client.catalogs.product_groups)[':product_group_id']['product_counts']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsProductGroupsProductGroupIdProductCountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsProductGroupsProductGroupIdProductCountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.product_groups[':product_group_id'].product_counts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCatalogsProductGroupsProductGroupIdProductsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
    >
  >,
) {
  return ['catalogs', '/catalogs/product_groups/:product_group_id/products', toValue(args)] as const
}

export function getCatalogsProductGroupsProductGroupIdProductsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsProductGroupsProductGroupIdProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.product_groups[':product_group_id'].products.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsProductGroupsProductGroupIdProducts<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
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
                    (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
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
                    (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCatalogsProductGroupsProductGroupIdProductsQueryKey>
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
              (typeof client.catalogs.product_groups)[':product_group_id']['products']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsProductGroupsProductGroupIdProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsProductGroupsProductGroupIdProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.product_groups[':product_group_id'].products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCatalogsProductsGetByProductGroupFilters<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCatalogsProductsGetByProductGroupFiltersMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsReportsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.reports.$get>>,
) {
  return ['catalogs', '/catalogs/reports', toValue(args)] as const
}

export function getCatalogsReportsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.reports.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsReportsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.reports.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsReports<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.reports.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>
            >
          >,
          ReturnType<typeof getCatalogsReportsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsReportsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsReportsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.reports.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCatalogsReports<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.catalogs.reports.$post>,
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
  const mutationDefaults = getPostCatalogsReportsMutationOptions<TError, TOnMutateResult>(
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

export function getCatalogsReportsStatsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.reports.stats.$get>>,
) {
  return ['catalogs', '/catalogs/reports/stats', toValue(args)] as const
}

export function getCatalogsReportsStatsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.reports.stats.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsReportsStatsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.reports.stats.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsReportsStats<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.reports.stats.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>
            >
          >,
          ReturnType<typeof getCatalogsReportsStatsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.reports.stats.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsReportsStatsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsReportsStatsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.reports.stats.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCatalogsSupplementalFeedsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.supplemental_feeds.$get>>,
) {
  return ['catalogs', '/catalogs/supplemental_feeds', toValue(args)] as const
}

export function getCatalogsSupplementalFeedsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.supplemental_feeds.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsSupplementalFeedsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.supplemental_feeds.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsSupplementalFeeds<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.catalogs.supplemental_feeds.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>
              >
            >
          >,
          ReturnType<typeof getCatalogsSupplementalFeedsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.catalogs.supplemental_feeds.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsSupplementalFeedsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsSupplementalFeedsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.supplemental_feeds.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCatalogsSupplementalFeeds<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCatalogsSupplementalFeedsMutationOptions<TError, TOnMutateResult>(
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

export function getCatalogsSupplementalFeedsFeedIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>
  >,
) {
  return ['catalogs', '/catalogs/supplemental_feeds/:feed_id', toValue(args)] as const
}

export function getCatalogsSupplementalFeedsFeedIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsSupplementalFeedsFeedIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs.supplemental_feeds[':feed_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsSupplementalFeedsFeedId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCatalogsSupplementalFeedsFeedIdQueryKey>
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
          Awaited<ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsSupplementalFeedsFeedIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsSupplementalFeedsFeedIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs.supplemental_feeds[':feed_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteCatalogsSupplementalFeedsFeedId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCatalogsSupplementalFeedsFeedIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchCatalogsSupplementalFeedsFeedId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.catalogs.supplemental_feeds)[':feed_id']['$patch']>,
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
  const mutationDefaults = getPatchCatalogsSupplementalFeedsFeedIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchCatalogsCatalogId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchCatalogsCatalogIdMutationOptions<TError, TOnMutateResult>(
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

export function usePostCatalogsCatalogIdAutoLocalizationConfigs<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCatalogsCatalogIdAutoLocalizationConfigsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
    >
  >,
) {
  return [
    'catalogs',
    '/catalogs/:catalog_id/auto_localization_configs/:auto_localization_config_id',
    toValue(args),
  ] as const
}

export function getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs[':catalog_id'].auto_localization_configs[
          ':auto_localization_config_id'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
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
                    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
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
                    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryKey
          >
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
              (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs[':catalog_id'].auto_localization_configs[
            ':auto_localization_config_id'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPutCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
    >
  >,
) {
  return [
    'catalogs',
    '/catalogs/:catalog_id/auto_localization_configs/:auto_localization_config_id/translations',
    toValue(args),
  ] as const
}

export function getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs[':catalog_id'].auto_localization_configs[
          ':auto_localization_config_id'
        ].translations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslations<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
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
                    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
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
                    (typeof client.catalogs)[':catalog_id']['auto_localization_configs'][':auto_localization_config_id']['translations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryKey
          >
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs[':catalog_id'].auto_localization_configs[
            ':auto_localization_config_id'
          ].translations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReview<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults =
    getPostCatalogsCatalogIdAutoLocalizationConfigsAutoLocalizationConfigIdTranslationsReviewMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsCatalogIdCountryLocaleMappingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
  >,
) {
  return ['catalogs', '/catalogs/:catalog_id/country_locale_mapping', toValue(args)] as const
}

export function getCatalogsCatalogIdCountryLocaleMappingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsCatalogIdCountryLocaleMappingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs[':catalog_id'].country_locale_mapping.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsCatalogIdCountryLocaleMapping<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
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
                    (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']
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
                    (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCatalogsCatalogIdCountryLocaleMappingQueryKey>
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
            ReturnType<(typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogIdCountryLocaleMappingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsCatalogIdCountryLocaleMappingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs[':catalog_id'].country_locale_mapping.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutCatalogsCatalogIdCountryLocaleMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.catalogs)[':catalog_id']['country_locale_mapping']['$put']
          >,
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
  const mutationDefaults = getPutCatalogsCatalogIdCountryLocaleMappingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCatalogsCatalogIdCountryLocaleMapping<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCatalogsCatalogIdCountryLocaleMappingMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCatalogsCatalogIdLocalInventoryItemsBatch<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCatalogsCatalogIdLocalInventoryItemsBatchMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostCatalogsCatalogIdLocalInventoryItemsQuery<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostCatalogsCatalogIdLocalInventoryItemsQueryMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsCatalogIdLocalStoresQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>
  >,
) {
  return ['catalogs', '/catalogs/:catalog_id/local_stores', toValue(args)] as const
}

export function getCatalogsCatalogIdLocalStoresQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsCatalogIdLocalStoresQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs[':catalog_id'].local_stores.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsCatalogIdLocalStores<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCatalogsCatalogIdLocalStoresQueryKey>
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
          Awaited<ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogIdLocalStoresQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsCatalogIdLocalStoresQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs[':catalog_id'].local_stores.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCatalogsCatalogIdLocalStores<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$post']>,
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
  const mutationDefaults = getPostCatalogsCatalogIdLocalStoresMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteCatalogsCatalogIdLocalStores<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteCatalogsCatalogIdLocalStoresMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchCatalogsCatalogIdLocalStores<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.catalogs)[':catalog_id']['local_stores']['$patch']>,
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
  const mutationDefaults = getPatchCatalogsCatalogIdLocalStoresMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
    >
  >,
) {
  return [
    'catalogs',
    '/catalogs/:catalog_id/supplemental_items/batch/:batch_id',
    toValue(args),
  ] as const
}

export function getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.catalogs[':catalog_id'].supplemental_items.batch[':batch_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCatalogsCatalogIdSupplementalItemsBatchBatchId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
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
                    (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
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
                    (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryKey>
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
              (typeof client.catalogs)[':catalog_id']['supplemental_items']['batch'][':batch_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCatalogsCatalogIdSupplementalItemsBatchBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.catalogs[':catalog_id'].supplemental_items.batch[':batch_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostCollaborativeCatalogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.collaborative_catalogs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.collaborative_catalogs.$post>,
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
  const mutationDefaults = getPostCollaborativeCatalogsMutationOptions<TError, TOnMutateResult>(
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

export function getIntegrationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.integrations.$get>>,
) {
  return ['integrations', '/integrations', toValue(args)] as const
}

export function getIntegrationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.integrations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntegrationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useIntegrations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.integrations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>
          >,
          ReturnType<typeof getIntegrationsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.integrations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getIntegrationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntegrationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostIntegrationsCommerce<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.commerce.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.integrations.commerce.$post>,
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
  const mutationDefaults = getPostIntegrationsCommerceMutationOptions<TError, TOnMutateResult>(
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

export function getIntegrationsCommerceExternalBusinessIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
  >,
) {
  return ['integrations', '/integrations/commerce/:external_business_id', toValue(args)] as const
}

export function getIntegrationsCommerceExternalBusinessIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntegrationsCommerceExternalBusinessIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations.commerce[':external_business_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntegrationsCommerceExternalBusinessId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getIntegrationsCommerceExternalBusinessIdQueryKey>
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
            ReturnType<(typeof client.integrations.commerce)[':external_business_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsCommerceExternalBusinessIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntegrationsCommerceExternalBusinessIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations.commerce[':external_business_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteIntegrationsCommerceExternalBusinessId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
          InferRequestType<
            (typeof client.integrations.commerce)[':external_business_id']['$delete']
          >,
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
  const mutationDefaults = getDeleteIntegrationsCommerceExternalBusinessIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchIntegrationsCommerceExternalBusinessId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.integrations.commerce)[':external_business_id']['$patch']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.integrations.commerce)[':external_business_id']['$patch']
          >,
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
  const mutationDefaults = getPatchIntegrationsCommerceExternalBusinessIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostIntegrationsLogs<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.integrations.logs.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.integrations.logs.$post>,
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
  const mutationDefaults = getPostIntegrationsLogsMutationOptions<TError, TOnMutateResult>(
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

export function getIntegrationsIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.integrations)[':id']['$get']>>,
) {
  return ['integrations', '/integrations/:id', toValue(args)] as const
}

export function getIntegrationsIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.integrations)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getIntegrationsIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.integrations[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useIntegrationsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.integrations)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getIntegrationsIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.integrations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getIntegrationsIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getIntegrationsIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.integrations[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMediaQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.media.$get>>,
) {
  return ['media', '/media', toValue(args)] as const
}

export function getMediaQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.media.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useMedia<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.media.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
          ReturnType<typeof getMediaQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getMediaQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.media.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMedia<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.media.$post>>>>>,
          TError,
          InferRequestType<typeof client.media.$post>,
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
  const mutationDefaults = getPostMediaMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMediaMediaIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media)[':media_id']['$get']>>,
) {
  return ['media', '/media/:media_id', toValue(args)] as const
}

export function getMediaMediaIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media)[':media_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaMediaIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media[':media_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaMediaId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.media)[':media_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
            >
          >,
          ReturnType<typeof getMediaMediaIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.media)[':media_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaMediaIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaMediaIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.media[':media_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMediaLibraryBusinessesBusinessIdAssetsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
  >,
) {
  return ['media_library', '/media_library/businesses/:business_id/assets', toValue(args)] as const
}

export function getMediaLibraryBusinessesBusinessIdAssetsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaLibraryBusinessesBusinessIdAssetsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media_library.businesses[':business_id'].assets.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaLibraryBusinessesBusinessIdAssets<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
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
                    (typeof client.media_library.businesses)[':business_id']['assets']['$get']
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
                    (typeof client.media_library.businesses)[':business_id']['assets']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaLibraryBusinessesBusinessIdAssetsQueryKey>
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
            ReturnType<(typeof client.media_library.businesses)[':business_id']['assets']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaLibraryBusinessesBusinessIdAssetsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaLibraryBusinessesBusinessIdAssetsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.media_library.businesses[':business_id'].assets.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostMediaLibraryBusinessesBusinessIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostMediaLibraryBusinessesBusinessIdAssetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useDeleteMediaLibraryBusinessesBusinessIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteMediaLibraryBusinessesBusinessIdAssetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchMediaLibraryBusinessesBusinessIdAssets<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchMediaLibraryBusinessesBusinessIdAssetsMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
    >
  >,
) {
  return [
    'media_library',
    '/media_library/businesses/:business_id/assets/:asset_id',
    toValue(args),
  ] as const
}

export function getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.media_library.businesses[':business_id'].assets[':asset_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMediaLibraryBusinessesBusinessIdAssetsAssetId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
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
                    (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
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
                    (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryKey>
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
              (typeof client.media_library.businesses)[':business_id']['assets'][':asset_id']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMediaLibraryBusinessesBusinessIdAssetsAssetIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.media_library.businesses[':business_id'].assets[':asset_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getMerchantMerchantIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.merchant)[':merchant_id']['status']['$get']>
  >,
) {
  return ['merchant', '/merchant/:merchant_id/status', toValue(args)] as const
}

export function getMerchantMerchantIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.merchant)[':merchant_id']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getMerchantMerchantIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.merchant[':merchant_id'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useMerchantMerchantIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.merchant)[':merchant_id']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getMerchantMerchantIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.merchant)[':merchant_id']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getMerchantMerchantIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getMerchantMerchantIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.merchant[':merchant_id'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostNotifications<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.notifications.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.notifications.$post>,
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
  const mutationDefaults = getPostNotificationsMutationOptions<TError, TOnMutateResult>(
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

export function usePostOauthConversionToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.conversion_token.$post>>>
            >
          >,
          TError,
          void,
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
  const mutationDefaults = getPostOauthConversionTokenMutationOptions<TError, TOnMutateResult>(
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

export function usePostOauthToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.oauth.token.$post>,
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
  const mutationDefaults = getPostOauthTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostOauthTokenRevoke<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.oauth.token.revoke.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.oauth.token.revoke.$post>,
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
  const mutationDefaults = getPostOauthTokenRevokeMutationOptions<TError, TOnMutateResult>(
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

export function getOverlayAssignmentRulesQueryKey() {
  return ['overlay_assignment_rules', '/overlay_assignment_rules'] as const
}

export function getOverlayAssignmentRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getOverlayAssignmentRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.overlay_assignment_rules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOverlayAssignmentRules<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
            >
          >,
          ReturnType<typeof getOverlayAssignmentRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.overlay_assignment_rules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOverlayAssignmentRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getOverlayAssignmentRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.overlay_assignment_rules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOverlayAssignmentRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.overlay_assignment_rules.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.overlay_assignment_rules.$post>,
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
  const mutationDefaults = getPostOverlayAssignmentRulesMutationOptions<TError, TOnMutateResult>(
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

export function getOverlayAssignmentRulesIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$get']>>,
) {
  return ['overlay_assignment_rules', '/overlay_assignment_rules/:id', toValue(args)] as const
}

export function getOverlayAssignmentRulesIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOverlayAssignmentRulesIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.overlay_assignment_rules[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOverlayAssignmentRulesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.overlay_assignment_rules)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getOverlayAssignmentRulesIdQueryKey>
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
          Awaited<ReturnType<(typeof client.overlay_assignment_rules)[':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOverlayAssignmentRulesIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOverlayAssignmentRulesIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.overlay_assignment_rules[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOverlayAssignmentRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteOverlayAssignmentRulesIdMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchOverlayAssignmentRulesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPatchOverlayAssignmentRulesIdMutationOptions<TError, TOnMutateResult>(
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

export function getOverlaysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.overlays.$get>>,
) {
  return ['overlays', '/overlays', toValue(args)] as const
}

export function getOverlaysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.overlays.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOverlaysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.overlays.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOverlays<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.overlays.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>
          >,
          ReturnType<typeof getOverlaysQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOverlaysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOverlaysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.overlays.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostOverlays<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.overlays.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.overlays.$post>,
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
  const mutationDefaults = getPostOverlaysMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getOverlaysIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.overlays)[':id']['$get']>>,
) {
  return ['overlays', '/overlays/:id', toValue(args)] as const
}

export function getOverlaysIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.overlays)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOverlaysIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.overlays[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOverlaysId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.overlays)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getOverlaysIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getOverlaysIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOverlaysIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.overlays[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteOverlaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.overlays)[':id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.overlays)[':id']['$delete']>,
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
  const mutationDefaults = getDeleteOverlaysIdMutationOptions<TError, TOnMutateResult>(
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

export function usePatchOverlaysId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.overlays)[':id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.overlays)[':id']['$patch']>,
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
  const mutationDefaults = getPatchOverlaysIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPinsQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.pins.$get>>) {
  return ['pins', '/pins', toValue(args)] as const
}

export function getPinsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pins.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function usePins<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
          ReturnType<typeof getPinsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPins<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.$post>>>>>,
          TError,
          InferRequestType<typeof client.pins.$post>,
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
  const mutationDefaults = getPostPinsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPinsAnalyticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pins.analytics.$get>>,
) {
  return ['pins', '/pins/analytics', toValue(args)] as const
}

export function getPinsAnalyticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pins.analytics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPinsAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pins.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePinsAnalytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pins.analytics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
          >,
          ReturnType<typeof getPinsAnalyticsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pins.analytics.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPinsAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPinsAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pins.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPinsPinIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pins)[':pin_id']['$get']>>,
) {
  return ['pins', '/pins/:pin_id', toValue(args)] as const
}

export function getPinsPinIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pins)[':pin_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPinsPinIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pins[':pin_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePinsPinId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pins)[':pin_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>
            >
          >,
          ReturnType<typeof getPinsPinIdQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPinsPinIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPinsPinIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pins[':pin_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeletePinsPinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.pins)[':pin_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.pins)[':pin_id']['$delete']>,
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
  const mutationDefaults = getDeletePinsPinIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePatchPinsPinId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.pins)[':pin_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.pins)[':pin_id']['$patch']>,
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
  const mutationDefaults = getPatchPinsPinIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPinsPinIdAnalyticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pins)[':pin_id']['analytics']['$get']>>,
) {
  return ['pins', '/pins/:pin_id/analytics', toValue(args)] as const
}

export function getPinsPinIdAnalyticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pins)[':pin_id']['analytics']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPinsPinIdAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pins[':pin_id'].analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePinsPinIdAnalytics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pins)[':pin_id']['analytics']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPinsPinIdAnalyticsQueryKey>
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
          Awaited<ReturnType<(typeof client.pins)[':pin_id']['analytics']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPinsPinIdAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPinsPinIdAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pins[':pin_id'].analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPinsPinIdProductTagsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>,
) {
  return ['pins', '/pins/:pin_id/product_tags', toValue(args)] as const
}

export function getPinsPinIdProductTagsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPinsPinIdProductTagsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pins[':pin_id'].product_tags.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePinsPinIdProductTags<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPinsPinIdProductTagsQueryKey>
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
          Awaited<ReturnType<(typeof client.pins)[':pin_id']['product_tags']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPinsPinIdProductTagsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPinsPinIdProductTagsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pins[':pin_id'].product_tags.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostPinsPinIdProductTags<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPinsPinIdProductTagsMutationOptions<TError, TOnMutateResult>(
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

export function usePostPinsPinIdProductTagsBulkDelete<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPinsPinIdProductTagsBulkDeleteMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostPinsPinIdSave<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPinsPinIdSaveMutationOptions<TError, TOnMutateResult>(
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

export function getResourcesAdAccountCountriesQueryKey() {
  return ['resources', '/resources/ad_account_countries'] as const
}

export function getResourcesAdAccountCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getResourcesAdAccountCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.ad_account_countries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesAdAccountCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>>
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
                Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>
              >
            >
          >,
          ReturnType<typeof getResourcesAdAccountCountriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.ad_account_countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesAdAccountCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getResourcesAdAccountCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.ad_account_countries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesDeliveryMetricsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.delivery_metrics.$get>>,
) {
  return ['resources', '/resources/delivery_metrics', toValue(args)] as const
}

export function getResourcesDeliveryMetricsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.delivery_metrics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesDeliveryMetricsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.delivery_metrics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesDeliveryMetrics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.delivery_metrics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>
              >
            >
          >,
          ReturnType<typeof getResourcesDeliveryMetricsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.delivery_metrics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesDeliveryMetricsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesDeliveryMetricsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.delivery_metrics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesLeadFormQuestionsQueryKey() {
  return ['resources', '/resources/lead_form_questions'] as const
}

export function getResourcesLeadFormQuestionsQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getResourcesLeadFormQuestionsQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.lead_form_questions.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesLeadFormQuestions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>>
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
                Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>
              >
            >
          >,
          ReturnType<typeof getResourcesLeadFormQuestionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.lead_form_questions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesLeadFormQuestionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getResourcesLeadFormQuestionsQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.lead_form_questions.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesMetricsReadyStateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.metrics_ready_state.$get>>,
) {
  return ['resources', '/resources/metrics_ready_state', toValue(args)] as const
}

export function getResourcesMetricsReadyStateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.metrics_ready_state.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesMetricsReadyStateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.metrics_ready_state.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesMetricsReadyState<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.resources.metrics_ready_state.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>
              >
            >
          >,
          ReturnType<typeof getResourcesMetricsReadyStateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.resources.metrics_ready_state.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesMetricsReadyStateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesMetricsReadyStateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.metrics_ready_state.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesTargetingInterestsInterestIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>
  >,
) {
  return ['resources', '/resources/targeting/interests/:interest_id', toValue(args)] as const
}

export function getResourcesTargetingInterestsInterestIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesTargetingInterestsInterestIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.targeting.interests[':interest_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesTargetingInterestsInterestId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getResourcesTargetingInterestsInterestIdQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.targeting.interests)[':interest_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTargetingInterestsInterestIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesTargetingInterestsInterestIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.targeting.interests[':interest_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getResourcesTargetingTargetingTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.targeting)[':targeting_type']['$get']>
  >,
) {
  return ['resources', '/resources/targeting/:targeting_type', toValue(args)] as const
}

export function getResourcesTargetingTargetingTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.targeting)[':targeting_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getResourcesTargetingTargetingTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.resources.targeting[':targeting_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useResourcesTargetingTargetingType<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.resources.targeting)[':targeting_type']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
              >
            >
          >,
          ReturnType<typeof getResourcesTargetingTargetingTypeQueryKey>
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
          Awaited<ReturnType<(typeof client.resources.targeting)[':targeting_type']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getResourcesTargetingTargetingTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getResourcesTargetingTargetingTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.resources.targeting[':targeting_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchBoardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.boards.$get>>,
) {
  return ['search', '/search/boards', toValue(args)] as const
}

export function getSearchBoardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.boards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchBoardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.boards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchBoards<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.boards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
          >,
          ReturnType<typeof getSearchBoardsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.boards.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchBoardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchBoardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.boards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchPartnerPinsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.partner.pins.$get>>,
) {
  return ['search', '/search/partner/pins', toValue(args)] as const
}

export function getSearchPartnerPinsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.partner.pins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchPartnerPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.partner.pins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSearchPartnerPins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.partner.pins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>
            >
          >,
          ReturnType<typeof getSearchPartnerPinsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.partner.pins.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSearchPartnerPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchPartnerPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.partner.pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSearchPinsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.pins.$get>>,
) {
  return ['search', '/search/pins', toValue(args)] as const
}

export function getSearchPinsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.pins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSearchPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.search.pins.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSearchPins<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.search.pins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>
          >,
          ReturnType<typeof getSearchPinsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.search.pins.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSearchPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSearchPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.search.pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTermsRelatedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms.related.$get>>,
) {
  return ['terms', '/terms/related', toValue(args)] as const
}

export function getTermsRelatedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms.related.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTermsRelatedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.terms.related.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTermsRelated<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms.related.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
          >,
          ReturnType<typeof getTermsRelatedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.related.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTermsRelatedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTermsRelatedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.terms.related.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTermsSuggestedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms.suggested.$get>>,
) {
  return ['terms', '/terms/suggested', toValue(args)] as const
}

export function getTermsSuggestedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms.suggested.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTermsSuggestedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.terms.suggested.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTermsSuggested<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.terms.suggested.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>
            >
          >,
          ReturnType<typeof getTermsSuggestedQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.terms.suggested.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTermsSuggestedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTermsSuggestedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.terms.suggested.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrendsEditorialArticlesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.editorial_articles.$get>>,
) {
  return ['trends', '/trends/editorial_articles', toValue(args)] as const
}

export function getTrendsEditorialArticlesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.editorial_articles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrendsEditorialArticlesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trends.editorial_articles.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrendsEditorialArticles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.editorial_articles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>
              >
            >
          >,
          ReturnType<typeof getTrendsEditorialArticlesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.trends.editorial_articles.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendsEditorialArticlesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrendsEditorialArticlesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trends.editorial_articles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrendsKeywordsRegionTopTrendTypeQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
  >,
) {
  return ['trends', '/trends/keywords/:region/top/:trend_type', toValue(args)] as const
}

export function getTrendsKeywordsRegionTopTrendTypeQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrendsKeywordsRegionTopTrendTypeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trends.keywords[':region'].top[':trend_type'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrendsKeywordsRegionTopTrendType<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
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
                    (typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']
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
                    (typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getTrendsKeywordsRegionTopTrendTypeQueryKey>
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
            ReturnType<(typeof client.trends.keywords)[':region']['top'][':trend_type']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendsKeywordsRegionTopTrendTypeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrendsKeywordsRegionTopTrendTypeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trends.keywords[':region'].top[':trend_type'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrendsProductCategoriesDetailsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.product_categories.details.$get>>,
) {
  return ['trends', '/trends/product_categories/details', toValue(args)] as const
}

export function getTrendsProductCategoriesDetailsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.product_categories.details.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrendsProductCategoriesDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trends.product_categories.details.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrendsProductCategoriesDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.product_categories.details.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
              >
            >
          >,
          ReturnType<typeof getTrendsProductCategoriesDetailsQueryKey>
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
          Awaited<ReturnType<typeof client.trends.product_categories.details.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendsProductCategoriesDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrendsProductCategoriesDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trends.product_categories.details.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrendsProductCategoriesTrendingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.product_categories.trending.$get>>,
) {
  return ['trends', '/trends/product_categories/trending', toValue(args)] as const
}

export function getTrendsProductCategoriesTrendingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.product_categories.trending.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrendsProductCategoriesTrendingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trends.product_categories.trending.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrendsProductCategoriesTrending<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.product_categories.trending.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
              >
            >
          >,
          ReturnType<typeof getTrendsProductCategoriesTrendingQueryKey>
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
          Awaited<ReturnType<typeof client.trends.product_categories.trending.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendsProductCategoriesTrendingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrendsProductCategoriesTrendingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trends.product_categories.trending.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTrendsTopicsFeaturedQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.topics.featured.$get>>,
) {
  return ['trends', '/trends/topics/featured', toValue(args)] as const
}

export function getTrendsTopicsFeaturedQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.topics.featured.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTrendsTopicsFeaturedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.trends.topics.featured.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTrendsTopicsFeatured<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.trends.topics.featured.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>
            >
          >,
          ReturnType<typeof getTrendsTopicsFeaturedQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.trends.topics.featured.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTrendsTopicsFeaturedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTrendsTopicsFeaturedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.trends.topics.featured.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserAccountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.$get>>,
) {
  return ['user_account', '/user_account', toValue(args)] as const
}

export function getUserAccountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_account.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useUserAccount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>
          >,
          ReturnType<typeof getUserAccountQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getUserAccountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_account.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserAccountAnalyticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.analytics.$get>>,
) {
  return ['user_account', '/user_account/analytics', toValue(args)] as const
}

export function getUserAccountAnalyticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.analytics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountAnalyticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_account.analytics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccountAnalytics<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.analytics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>
            >
          >,
          ReturnType<typeof getUserAccountAnalyticsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountAnalyticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountAnalyticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_account.analytics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserAccountAnalyticsTopPinsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.analytics.top_pins.$get>>,
) {
  return ['user_account', '/user_account/analytics/top_pins', toValue(args)] as const
}

export function getUserAccountAnalyticsTopPinsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.analytics.top_pins.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountAnalyticsTopPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_account.analytics.top_pins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccountAnalyticsTopPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.analytics.top_pins.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>
              >
            >
          >,
          ReturnType<typeof getUserAccountAnalyticsTopPinsQueryKey>
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
          Awaited<ReturnType<typeof client.user_account.analytics.top_pins.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountAnalyticsTopPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountAnalyticsTopPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_account.analytics.top_pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserAccountAnalyticsTopVideoPinsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.user_account.analytics.top_video_pins.$get>
  >,
) {
  return ['user_account', '/user_account/analytics/top_video_pins', toValue(args)] as const
}

export function getUserAccountAnalyticsTopVideoPinsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.user_account.analytics.top_video_pins.$get>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountAnalyticsTopVideoPinsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_account.analytics.top_video_pins.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccountAnalyticsTopVideoPins<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<typeof client.user_account.analytics.top_video_pins.$get>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
              >
            >
          >,
          ReturnType<typeof getUserAccountAnalyticsTopVideoPinsQueryKey>
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
          Awaited<ReturnType<typeof client.user_account.analytics.top_video_pins.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountAnalyticsTopVideoPinsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountAnalyticsTopVideoPinsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_account.analytics.top_video_pins.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserAccountBusinessesQueryKey() {
  return ['user_account', '/user_account/businesses'] as const
}

export function getUserAccountBusinessesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getUserAccountBusinessesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_account.businesses.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccountBusinesses<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
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
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
            >
          >,
          ReturnType<typeof getUserAccountBusinessesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.businesses.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountBusinessesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getUserAccountBusinessesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.user_account.businesses.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserAccountFollowersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.followers.$get>>,
) {
  return ['user_account', '/user_account/followers', toValue(args)] as const
}

export function getUserAccountFollowersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.followers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountFollowersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_account.followers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccountFollowers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.followers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>
            >
          >,
          ReturnType<typeof getUserAccountFollowersQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.followers.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountFollowersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountFollowersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_account.followers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserAccountFollowingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.following.$get>>,
) {
  return ['user_account', '/user_account/following', toValue(args)] as const
}

export function getUserAccountFollowingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.following.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountFollowingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_account.following.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccountFollowing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.following.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>
            >
          >,
          ReturnType<typeof getUserAccountFollowingQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountFollowingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountFollowingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_account.following.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUserAccountFollowingBoardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.following.boards.$get>>,
) {
  return ['user_account', '/user_account/following/boards', toValue(args)] as const
}

export function getUserAccountFollowingBoardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.following.boards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountFollowingBoardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_account.following.boards.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccountFollowingBoards<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.boards.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.following.boards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_account.following.boards.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_account.following.boards.$get>>
              >
            >
          >,
          ReturnType<typeof getUserAccountFollowingBoardsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.following.boards.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountFollowingBoardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountFollowingBoardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_account.following.boards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserAccountFollowingUsername<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
        { mutationFn?: unknown }
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostUserAccountFollowingUsernameMutationOptions<
    TError,
    TOnMutateResult
  >(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getUserAccountWebsitesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.websites.$get>>,
) {
  return ['user_account', '/user_account/websites', toValue(args)] as const
}

export function getUserAccountWebsitesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.websites.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountWebsitesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_account.websites.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccountWebsites<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.websites.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>
            >
          >,
          ReturnType<typeof getUserAccountWebsitesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountWebsitesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountWebsitesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_account.websites.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostUserAccountWebsites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.user_account.websites.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.user_account.websites.$post>,
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
  const mutationDefaults = getPostUserAccountWebsitesMutationOptions<TError, TOnMutateResult>(
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

export function useDeleteUserAccountWebsites<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.user_account.websites.$delete>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.user_account.websites.$delete>,
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
  const mutationDefaults = getDeleteUserAccountWebsitesMutationOptions<TError, TOnMutateResult>(
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

export function getUserAccountWebsitesVerificationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.websites.verification.$get>>,
) {
  return ['user_account', '/user_account/websites/verification', toValue(args)] as const
}

export function getUserAccountWebsitesVerificationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.websites.verification.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUserAccountWebsitesVerificationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.user_account.websites.verification.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUserAccountWebsitesVerification<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.user_account.websites.verification.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
              >
            >
          >,
          ReturnType<typeof getUserAccountWebsitesVerificationQueryKey>
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
          Awaited<ReturnType<typeof client.user_account.websites.verification.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUserAccountWebsitesVerificationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUserAccountWebsitesVerificationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.user_account.websites.verification.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getUsersUsernameInterestsFollowQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['interests']['follow']['$get']>
  >,
) {
  return ['users', '/users/:username/interests/follow', toValue(args)] as const
}

export function getUsersUsernameInterestsFollowQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['interests']['follow']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getUsersUsernameInterestsFollowQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.users[':username'].interests.follow.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useUsersUsernameInterestsFollow<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.users)[':username']['interests']['follow']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>
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
                  ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getUsersUsernameInterestsFollowQueryKey>
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
          Awaited<ReturnType<(typeof client.users)[':username']['interests']['follow']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getUsersUsernameInterestsFollowQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getUsersUsernameInterestsFollowQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.users[':username'].interests.follow.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
