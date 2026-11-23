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

export function getAccountNameValidationKey() {
  return ['account-name-validation'] as const
}

export function getAccountingCategoriesKey() {
  return ['accounting-categories'] as const
}

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getCardInvitationsKey() {
  return ['card-invitations'] as const
}

export function getCardsKey() {
  return ['cards'] as const
}

export function getCounterpartiesKey() {
  return ['counterparties'] as const
}

export function getCounterpartyKey() {
  return ['counterparty'] as const
}

export function getDepartmentsKey() {
  return ['departments'] as const
}

export function getExchangeKey() {
  return ['exchange'] as const
}

export function getExchangeReasonsKey() {
  return ['exchange-reasons'] as const
}

export function getExpensesKey() {
  return ['expenses'] as const
}

export function getLabelGroupsKey() {
  return ['label-groups'] as const
}

export function getPayKey() {
  return ['pay'] as const
}

export function getPaymentDraftsKey() {
  return ['payment-drafts'] as const
}

export function getPayoutLinksKey() {
  return ['payout-links'] as const
}

export function getRateKey() {
  return ['rate'] as const
}

export function getRolesKey() {
  return ['roles'] as const
}

export function getSandboxKey() {
  return ['sandbox'] as const
}

export function getTaxRatesKey() {
  return ['tax-rates'] as const
}

export function getTeamMembersKey() {
  return ['team-members'] as const
}

export function getTransactionKey() {
  return ['transaction'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
}

export function getTransferKey() {
  return ['transfer'] as const
}

export function getTransferReasonsKey() {
  return ['transfer-reasons'] as const
}

export function getWebhookKey() {
  return ['webhook'] as const
}

export function getWebhooksKey() {
  return ['webhooks'] as const
}

export function getAccountingCategoriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['accounting-categories']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounting-categories', '/accounting-categories', keyArgs] as const
}

export function getAccountingCategoriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['accounting-categories']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCategoriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['accounting-categories'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['accounting-categories']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountingCategoriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCategoriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCategoriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['accounting-categories'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostAccountingCategoriesMutationKey() {
  return ['accounting-categories', '/accounting-categories', 'POST'] as const
}

export function getPostAccountingCategoriesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['accounting-categories']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['accounting-categories']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountingCategoriesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['accounting-categories']['$post']>) {
      return parseResponse(client['accounting-categories'].$post(args, options))
    },
  })
}

export function usePostAccountingCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['accounting-categories']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['accounting-categories']['$post']>,
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
  const mutationDefaults = getPostAccountingCategoriesMutationOptions<TError, TOnMutateResult>(
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

export function getAccountingCategoriesAccountingCategoryIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['accounting-categories'][':accounting_category_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'accounting-categories',
    '/accounting-categories/:accounting_category_id',
    keyArgs,
  ] as const
}

export function getAccountingCategoriesAccountingCategoryIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['accounting-categories'][':accounting_category_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountingCategoriesAccountingCategoryIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['accounting-categories'][':accounting_category_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountingCategoriesAccountingCategoryId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client)['accounting-categories'][':accounting_category_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['accounting-categories'][':accounting_category_id']['$get']>
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
                    (typeof client)['accounting-categories'][':accounting_category_id']['$get']
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
                    (typeof client)['accounting-categories'][':accounting_category_id']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getAccountingCategoriesAccountingCategoryIdQueryKey>
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
            ReturnType<(typeof client)['accounting-categories'][':accounting_category_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCategoriesAccountingCategoryIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountingCategoriesAccountingCategoryIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['accounting-categories'][':accounting_category_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteAccountingCategoriesAccountingCategoryIdMutationKey() {
  return [
    'accounting-categories',
    '/accounting-categories/:accounting_category_id',
    'DELETE',
  ] as const
}

export function getDeleteAccountingCategoriesAccountingCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['accounting-categories'][':accounting_category_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['accounting-categories'][':accounting_category_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountingCategoriesAccountingCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['accounting-categories'][':accounting_category_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['accounting-categories'][':accounting_category_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteAccountingCategoriesAccountingCategoryId<
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
                      (typeof client)['accounting-categories'][':accounting_category_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['accounting-categories'][':accounting_category_id']['$delete']
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
  const mutationDefaults = getDeleteAccountingCategoriesAccountingCategoryIdMutationOptions<
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

export function getPatchAccountingCategoriesAccountingCategoryIdMutationKey() {
  return [
    'accounting-categories',
    '/accounting-categories/:accounting_category_id',
    'PATCH',
  ] as const
}

export function getPatchAccountingCategoriesAccountingCategoryIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['accounting-categories'][':accounting_category_id']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['accounting-categories'][':accounting_category_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchAccountingCategoriesAccountingCategoryIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['accounting-categories'][':accounting_category_id']['$patch']
      >,
    ) {
      return parseResponse(
        client['accounting-categories'][':accounting_category_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchAccountingCategoriesAccountingCategoryId<
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
                      (typeof client)['accounting-categories'][':accounting_category_id']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['accounting-categories'][':accounting_category_id']['$patch']
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
  const mutationDefaults = getPatchAccountingCategoriesAccountingCategoryIdMutationOptions<
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

export function getPostAccountNameValidationMutationKey() {
  return ['account-name-validation', '/account-name-validation', 'POST'] as const
}

export function getPostAccountNameValidationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account-name-validation']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['account-name-validation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountNameValidationMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['account-name-validation']['$post']>) {
      return parseResponse(client['account-name-validation'].$post(args, options))
    },
  })
}

export function usePostAccountNameValidation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['account-name-validation']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['account-name-validation']['$post']>,
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
  const mutationDefaults = getPostAccountNameValidationMutationOptions<TError, TOnMutateResult>(
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

export function getAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts', keyArgs] as const
}

export function getAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
          >,
          ReturnType<typeof getAccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:account_id', keyArgs] as const
}

export function getAccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.accounts)[':account_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getAccountsAccountIdBankDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['bank-details']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['accounts', '/accounts/:account_id/bank-details', keyArgs] as const
}

export function getAccountsAccountIdBankDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['bank-details']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getAccountsAccountIdBankDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.accounts[':account_id']['bank-details'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useAccountsAccountIdBankDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['bank-details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.accounts)[':account_id']['bank-details']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['bank-details']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.accounts)[':account_id']['bank-details']['$get']>>
              >
            >
          >,
          ReturnType<typeof getAccountsAccountIdBankDetailsQueryKey>
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
          Awaited<ReturnType<(typeof client.accounts)[':account_id']['bank-details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBankDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getAccountsAccountIdBankDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.accounts[':account_id']['bank-details'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCardInvitationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['card-invitations']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['card-invitations', '/card-invitations', keyArgs] as const
}

export function getCardInvitationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['card-invitations']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardInvitationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['card-invitations'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['card-invitations']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
            >
          >,
          ReturnType<typeof getCardInvitationsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardInvitationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardInvitationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['card-invitations'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardInvitationsMutationKey() {
  return ['card-invitations', '/card-invitations', 'POST'] as const
}

export function getPostCardInvitationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['card-invitations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardInvitationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['card-invitations']['$post']>) {
      return parseResponse(client['card-invitations'].$post(args, options))
    },
  })
}

export function usePostCardInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['card-invitations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['card-invitations']['$post']>,
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
  const mutationDefaults = getPostCardInvitationsMutationOptions<TError, TOnMutateResult>(
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

export function getCardInvitationsCardInvitationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['card-invitations', '/card-invitations/:card_invitation_id', keyArgs] as const
}

export function getCardInvitationsCardInvitationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardInvitationsCardInvitationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['card-invitations'][':card_invitation_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardInvitationsCardInvitationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>
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
                  ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getCardInvitationsCardInvitationIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardInvitationsCardInvitationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardInvitationsCardInvitationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['card-invitations'][':card_invitation_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchCardInvitationsCardInvitationIdMutationKey() {
  return ['card-invitations', '/card-invitations/:card_invitation_id', 'PATCH'] as const
}

export function getPatchCardInvitationsCardInvitationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCardInvitationsCardInvitationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$patch']>,
    ) {
      return parseResponse(client['card-invitations'][':card_invitation_id'].$patch(args, options))
    },
  })
}

export function usePatchCardInvitationsCardInvitationId<
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
                  ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$patch']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$patch']>,
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
  const mutationDefaults = getPatchCardInvitationsCardInvitationIdMutationOptions<
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

export function getPostCardInvitationsCardInvitationIdCancelMutationKey() {
  return ['card-invitations', '/card-invitations/:cardInvitationId/cancel', 'POST'] as const
}

export function getPostCardInvitationsCardInvitationIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['card-invitations'][':cardInvitationId']['cancel']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['card-invitations'][':cardInvitationId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardInvitationsCardInvitationIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['card-invitations'][':cardInvitationId']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client['card-invitations'][':cardInvitationId'].cancel.$post(args, options),
      )
    },
  })
}

export function usePostCardInvitationsCardInvitationIdCancel<
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
                      (typeof client)['card-invitations'][':cardInvitationId']['cancel']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['card-invitations'][':cardInvitationId']['cancel']['$post']
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
  const mutationDefaults = getPostCardInvitationsCardInvitationIdCancelMutationOptions<
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

export function getCardsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cards.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['cards', '/cards', keyArgs] as const
}

export function getCardsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cards.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useCards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.cards.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
          ReturnType<typeof getCardsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCardsMutationKey() {
  return ['cards', '/cards', 'POST'] as const
}

export function getPostCardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
    TError,
    InferRequestType<typeof client.cards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.cards.$post>) {
      return parseResponse(client.cards.$post(args, options))
    },
  })
}

export function usePostCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
          TError,
          InferRequestType<typeof client.cards.$post>,
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
  const mutationDefaults = getPostCardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getCardsCardIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['cards', '/cards/:card_id', keyArgs] as const
}

export function getCardsCardIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsCardIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':card_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsCardId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.cards)[':card_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
            >
          >,
          ReturnType<typeof getCardsCardIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsCardIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':card_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCardsCardIdMutationKey() {
  return ['cards', '/cards/:card_id', 'DELETE'] as const
}

export function getDeleteCardsCardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCardsCardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':card_id']['$delete']>) {
      return parseResponse(client.cards[':card_id'].$delete(args, options))
    },
  })
}

export function useDeleteCardsCardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.cards)[':card_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['$delete']>,
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
  const mutationDefaults = getDeleteCardsCardIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchCardsCardIdMutationKey() {
  return ['cards', '/cards/:card_id', 'PATCH'] as const
}

export function getPatchCardsCardIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchCardsCardIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':card_id']['$patch']>) {
      return parseResponse(client.cards[':card_id'].$patch(args, options))
    },
  })
}

export function usePatchCardsCardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$patch']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['$patch']>,
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
  const mutationDefaults = getPatchCardsCardIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutCardsCardIdContactsMutationKey() {
  return ['cards', '/cards/:card_id/contacts', 'PUT'] as const
}

export function getPutCardsCardIdContactsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':card_id']['contacts']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['contacts']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsCardIdContactsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':card_id']['contacts']['$put']>,
    ) {
      return parseResponse(client.cards[':card_id'].contacts.$put(args, options))
    },
  })
}

export function usePutCardsCardIdContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':card_id']['contacts']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['contacts']['$put']>,
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
  const mutationDefaults = getPutCardsCardIdContactsMutationOptions<TError, TOnMutateResult>(
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

export function getPutCardsCardIdReferencesMutationKey() {
  return ['cards', '/cards/:card_id/references', 'PUT'] as const
}

export function getPutCardsCardIdReferencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':card_id']['references']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['references']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutCardsCardIdReferencesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':card_id']['references']['$put']>,
    ) {
      return parseResponse(client.cards[':card_id'].references.$put(args, options))
    },
  })
}

export function usePutCardsCardIdReferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':card_id']['references']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['references']['$put']>,
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
  const mutationDefaults = getPutCardsCardIdReferencesMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsCardIdFreezeMutationKey() {
  return ['cards', '/cards/:card_id/freeze', 'POST'] as const
}

export function getPostCardsCardIdFreezeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['freeze']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['freeze']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsCardIdFreezeMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':card_id']['freeze']['$post']>) {
      return parseResponse(client.cards[':card_id'].freeze.$post(args, options))
    },
  })
}

export function usePostCardsCardIdFreeze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.cards)[':card_id']['freeze']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['freeze']['$post']>,
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
  const mutationDefaults = getPostCardsCardIdFreezeMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsCardIdUnfreezeMutationKey() {
  return ['cards', '/cards/:card_id/unfreeze', 'POST'] as const
}

export function getPostCardsCardIdUnfreezeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['unfreeze']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['unfreeze']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsCardIdUnfreezeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.cards)[':card_id']['unfreeze']['$post']>,
    ) {
      return parseResponse(client.cards[':card_id'].unfreeze.$post(args, options))
    },
  })
}

export function usePostCardsCardIdUnfreeze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.cards)[':card_id']['unfreeze']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['unfreeze']['$post']>,
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
  const mutationDefaults = getPostCardsCardIdUnfreezeMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsCardIdLockMutationKey() {
  return ['cards', '/cards/:card_id/lock', 'POST'] as const
}

export function getPostCardsCardIdLockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['lock']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['lock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsCardIdLockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':card_id']['lock']['$post']>) {
      return parseResponse(client.cards[':card_id'].lock.$post(args, options))
    },
  })
}

export function usePostCardsCardIdLock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.cards)[':card_id']['lock']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['lock']['$post']>,
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
  const mutationDefaults = getPostCardsCardIdLockMutationOptions<TError, TOnMutateResult>(
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

export function getPostCardsCardIdUnlockMutationKey() {
  return ['cards', '/cards/:card_id/unlock', 'POST'] as const
}

export function getPostCardsCardIdUnlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['unlock']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.cards)[':card_id']['unlock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCardsCardIdUnlockMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.cards)[':card_id']['unlock']['$post']>) {
      return parseResponse(client.cards[':card_id'].unlock.$post(args, options))
    },
  })
}

export function usePostCardsCardIdUnlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.cards)[':card_id']['unlock']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.cards)[':card_id']['unlock']['$post']>,
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
  const mutationDefaults = getPostCardsCardIdUnlockMutationOptions<TError, TOnMutateResult>(
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

export function getCardsCardIdSensitiveDetailsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['cards', '/cards/:card_id/sensitive-details', keyArgs] as const
}

export function getCardsCardIdSensitiveDetailsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCardsCardIdSensitiveDetailsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.cards[':card_id']['sensitive-details'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCardsCardIdSensitiveDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCardsCardIdSensitiveDetailsQueryKey>
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
          Awaited<ReturnType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdSensitiveDetailsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCardsCardIdSensitiveDetailsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.cards[':card_id']['sensitive-details'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCounterpartiesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.counterparties.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['counterparties', '/counterparties', keyArgs] as const
}

export function getCounterpartiesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.counterparties.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCounterpartiesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.counterparties.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCounterparties<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.counterparties.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
          >,
          ReturnType<typeof getCounterpartiesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCounterpartiesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCounterpartiesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.counterparties.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostCounterpartyMutationKey() {
  return ['counterparty', '/counterparty', 'POST'] as const
}

export function getPostCounterpartyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparty.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.counterparty.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostCounterpartyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.counterparty.$post>) {
      return parseResponse(client.counterparty.$post(args, options))
    },
  })
}

export function usePostCounterparty<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparty.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.counterparty.$post>,
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
  const mutationDefaults = getPostCounterpartyMutationOptions<TError, TOnMutateResult>(
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

export function getCounterpartiesCountriesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.counterparties.countries.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['counterparties', '/counterparties/countries', keyArgs] as const
}

export function getCounterpartiesCountriesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.counterparties.countries.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCounterpartiesCountriesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.counterparties.countries.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCounterpartiesCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.counterparties.countries.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
            >
          >,
          ReturnType<typeof getCounterpartiesCountriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCounterpartiesCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCounterpartiesCountriesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.counterparties.countries.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCounterpartiesFieldsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.counterparties.fields.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['counterparties', '/counterparties/fields', keyArgs] as const
}

export function getCounterpartiesFieldsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.counterparties.fields.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCounterpartiesFieldsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.counterparties.fields.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCounterpartiesFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.counterparties.fields.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>
            >
          >,
          ReturnType<typeof getCounterpartiesFieldsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCounterpartiesFieldsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCounterpartiesFieldsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.counterparties.fields.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getCounterpartyCounterpartyIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.counterparty)[':counterparty_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['counterparty', '/counterparty/:counterparty_id', keyArgs] as const
}

export function getCounterpartyCounterpartyIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.counterparty)[':counterparty_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getCounterpartyCounterpartyIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.counterparty[':counterparty_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useCounterpartyCounterpartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.counterparty)[':counterparty_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getCounterpartyCounterpartyIdQueryKey>
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
          Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCounterpartyCounterpartyIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getCounterpartyCounterpartyIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.counterparty[':counterparty_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteCounterpartyCounterpartyIdMutationKey() {
  return ['counterparty', '/counterparty/:counterparty_id', 'DELETE'] as const
}

export function getDeleteCounterpartyCounterpartyIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.counterparty)[':counterparty_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteCounterpartyCounterpartyIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.counterparty)[':counterparty_id']['$delete']>,
    ) {
      return parseResponse(client.counterparty[':counterparty_id'].$delete(args, options))
    },
  })
}

export function useDeleteCounterpartyCounterpartyId<
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
                  Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.counterparty)[':counterparty_id']['$delete']>,
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
  const mutationDefaults = getDeleteCounterpartyCounterpartyIdMutationOptions<
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

export function getPatchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdMutationKey() {
  return [
    'counterparties',
    '/counterparties/:counterparty_id/payment-methods/:payment_method_id',
    'PATCH',
  ] as const
}

export function getPatchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.counterparties)[':counterparty_id']['payment-methods'][':payment_method_id']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.counterparties)[':counterparty_id']['payment-methods'][':payment_method_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.counterparties)[':counterparty_id']['payment-methods'][':payment_method_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.counterparties[':counterparty_id']['payment-methods'][':payment_method_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodId<
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
                      (typeof client.counterparties)[':counterparty_id']['payment-methods'][':payment_method_id']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.counterparties)[':counterparty_id']['payment-methods'][':payment_method_id']['$patch']
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
    getPatchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdMutationOptions<
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

export function getRateQueryKey(args: MaybeRefOrGetter<InferRequestType<typeof client.rate.$get>>) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['rate', '/rate', keyArgs] as const
}

export function getRateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.rate.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRate<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.rate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
          ReturnType<typeof getRateQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.rate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostExchangeMutationKey() {
  return ['exchange', '/exchange', 'POST'] as const
}

export function getPostExchangeMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange.$post>>>>>,
    TError,
    InferRequestType<typeof client.exchange.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostExchangeMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.exchange.$post>) {
      return parseResponse(client.exchange.$post(args, options))
    },
  })
}

export function usePostExchange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.exchange.$post>,
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
  const mutationDefaults = getPostExchangeMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getExchangeReasonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['exchange-reasons']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['exchange-reasons', '/exchange-reasons', keyArgs] as const
}

export function getExchangeReasonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['exchange-reasons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExchangeReasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['exchange-reasons'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExchangeReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['exchange-reasons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
            >
          >,
          ReturnType<typeof getExchangeReasonsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExchangeReasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExchangeReasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['exchange-reasons'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExpensesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.expenses.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['expenses', '/expenses', keyArgs] as const
}

export function getExpensesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.expenses.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExpensesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.expenses.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useExpenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.expenses.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>
          >,
          ReturnType<typeof getExpensesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExpensesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExpensesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.expenses.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExpensesExpenseIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.expenses)[':expense_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['expenses', '/expenses/:expense_id', keyArgs] as const
}

export function getExpensesExpenseIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.expenses)[':expense_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExpensesExpenseIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.expenses[':expense_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExpensesExpenseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.expenses)[':expense_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getExpensesExpenseIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExpensesExpenseIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExpensesExpenseIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.expenses[':expense_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getExpensesExpenseIdReceiptsReceiptIdContentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['expenses', '/expenses/:expense_id/receipts/:receipt_id/content', keyArgs] as const
}

export function getExpensesExpenseIdReceiptsReceiptIdContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getExpensesExpenseIdReceiptsReceiptIdContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.expenses[':expense_id'].receipts[':receipt_id'].content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useExpensesExpenseIdReceiptsReceiptIdContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
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
                    (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
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
                    (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getExpensesExpenseIdReceiptsReceiptIdContentQueryKey>
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
              (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExpensesExpenseIdReceiptsReceiptIdContentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getExpensesExpenseIdReceiptsReceiptIdContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.expenses[':expense_id'].receipts[':receipt_id'].content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getLabelGroupsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['label-groups']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['label-groups', '/label-groups', keyArgs] as const
}

export function getLabelGroupsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['label-groups']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelGroupsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['label-groups'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['label-groups']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>
            >
          >,
          ReturnType<typeof getLabelGroupsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLabelGroupsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelGroupsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['label-groups'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLabelGroupsMutationKey() {
  return ['label-groups', '/label-groups', 'POST'] as const
}

export function getPostLabelGroupsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['label-groups']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLabelGroupsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['label-groups']['$post']>) {
      return parseResponse(client['label-groups'].$post(args, options))
    },
  })
}

export function usePostLabelGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['label-groups']['$post']>,
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
  const mutationDefaults = getPostLabelGroupsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getLabelGroupsGroupIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['label-groups'][':group_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['label-groups', '/label-groups/:group_id', keyArgs] as const
}

export function getLabelGroupsGroupIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['label-groups'][':group_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelGroupsGroupIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['label-groups'][':group_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['label-groups'][':group_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLabelGroupsGroupIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelGroupsGroupIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelGroupsGroupIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['label-groups'][':group_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteLabelGroupsGroupIdMutationKey() {
  return ['label-groups', '/label-groups/:group_id', 'DELETE'] as const
}

export function getDeleteLabelGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['label-groups'][':group_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteLabelGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['label-groups'][':group_id']['$delete']>,
    ) {
      return parseResponse(client['label-groups'][':group_id'].$delete(args, options))
    },
  })
}

export function useDeleteLabelGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['label-groups'][':group_id']['$delete']>,
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
  const mutationDefaults = getDeleteLabelGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchLabelGroupsGroupIdMutationKey() {
  return ['label-groups', '/label-groups/:group_id', 'PATCH'] as const
}

export function getPatchLabelGroupsGroupIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['label-groups'][':group_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLabelGroupsGroupIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['label-groups'][':group_id']['$patch']>,
    ) {
      return parseResponse(client['label-groups'][':group_id'].$patch(args, options))
    },
  })
}

export function usePatchLabelGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['label-groups'][':group_id']['$patch']>,
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
  const mutationDefaults = getPatchLabelGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
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

export function getLabelGroupsGroupIdLabelsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['label-groups', '/label-groups/:group_id/labels', keyArgs] as const
}

export function getLabelGroupsGroupIdLabelsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getLabelGroupsGroupIdLabelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['label-groups'][':group_id'].labels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useLabelGroupsGroupIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$get']>>
              >
            >
          >,
          ReturnType<typeof getLabelGroupsGroupIdLabelsQueryKey>
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
          Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getLabelGroupsGroupIdLabelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getLabelGroupsGroupIdLabelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['label-groups'][':group_id'].labels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostLabelGroupsGroupIdLabelsMutationKey() {
  return ['label-groups', '/label-groups/:group_id/labels', 'POST'] as const
}

export function getPostLabelGroupsGroupIdLabelsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostLabelGroupsGroupIdLabelsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$post']>,
    ) {
      return parseResponse(client['label-groups'][':group_id'].labels.$post(args, options))
    },
  })
}

export function usePostLabelGroupsGroupIdLabels<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$post']>,
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
  const mutationDefaults = getPostLabelGroupsGroupIdLabelsMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteLabelGroupsGroupIdLabelsLabelIdMutationKey() {
  return ['label-groups', '/label-groups/:group_id/labels/:label_id', 'DELETE'] as const
}

export function getDeleteLabelGroupsGroupIdLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteLabelGroupsGroupIdLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['label-groups'][':group_id'].labels[':label_id'].$delete(args, options),
      )
    },
  })
}

export function useDeleteLabelGroupsGroupIdLabelsLabelId<
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
                      (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$delete']
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
  const mutationDefaults = getDeleteLabelGroupsGroupIdLabelsLabelIdMutationOptions<
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

export function getPatchLabelGroupsGroupIdLabelsLabelIdMutationKey() {
  return ['label-groups', '/label-groups/:group_id/labels/:label_id', 'PATCH'] as const
}

export function getPatchLabelGroupsGroupIdLabelsLabelIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['label-groups'][':group_id']['labels'][':label_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchLabelGroupsGroupIdLabelsLabelIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$patch']
      >,
    ) {
      return parseResponse(
        client['label-groups'][':group_id'].labels[':label_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchLabelGroupsGroupIdLabelsLabelId<
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
                      (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$patch']
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
  const mutationDefaults = getPatchLabelGroupsGroupIdLabelsLabelIdMutationOptions<
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

export function getPaymentDraftsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-drafts']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['payment-drafts', '/payment-drafts', keyArgs] as const
}

export function getPaymentDraftsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-drafts']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentDraftsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['payment-drafts'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentDrafts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payment-drafts']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>
            >
          >,
          ReturnType<typeof getPaymentDraftsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentDraftsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentDraftsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['payment-drafts'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPaymentDraftsMutationKey() {
  return ['payment-drafts', '/payment-drafts', 'POST'] as const
}

export function getPostPaymentDraftsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$post']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['payment-drafts']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentDraftsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['payment-drafts']['$post']>) {
      return parseResponse(client['payment-drafts'].$post(args, options))
    },
  })
}

export function usePostPaymentDrafts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['payment-drafts']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['payment-drafts']['$post']>,
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
  const mutationDefaults = getPostPaymentDraftsMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentDraftsPaymentDraftIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['payment-drafts', '/payment-drafts/:payment_draft_id', keyArgs] as const
}

export function getPaymentDraftsPaymentDraftIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentDraftsPaymentDraftIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['payment-drafts'][':payment_draft_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentDraftsPaymentDraftId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentDraftsPaymentDraftIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentDraftsPaymentDraftIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentDraftsPaymentDraftIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['payment-drafts'][':payment_draft_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeletePaymentDraftsPaymentDraftIdMutationKey() {
  return ['payment-drafts', '/payment-drafts/:payment_draft_id', 'DELETE'] as const
}

export function getDeletePaymentDraftsPaymentDraftIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePaymentDraftsPaymentDraftIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$delete']>,
    ) {
      return parseResponse(client['payment-drafts'][':payment_draft_id'].$delete(args, options))
    },
  })
}

export function useDeletePaymentDraftsPaymentDraftId<
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
                    ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$delete']>,
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
  const mutationDefaults = getDeletePaymentDraftsPaymentDraftIdMutationOptions<
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

export function getPatchPaymentDraftsPaymentDraftIdMutationKey() {
  return ['payment-drafts', '/payment-drafts/:payment_draft_id', 'PATCH'] as const
}

export function getPatchPaymentDraftsPaymentDraftIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchPaymentDraftsPaymentDraftIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$patch']>,
    ) {
      return parseResponse(client['payment-drafts'][':payment_draft_id'].$patch(args, options))
    },
  })
}

export function usePatchPaymentDraftsPaymentDraftId<
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
                    ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$patch']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$patch']>,
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
  const mutationDefaults = getPatchPaymentDraftsPaymentDraftIdMutationOptions<
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

export function getPostPaymentDraftsPaymentDraftIdPaymentsMutationKey() {
  return ['payment-drafts', '/payment-drafts/:payment_draft_id/payments', 'POST'] as const
}

export function getPostPaymentDraftsPaymentDraftIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['payments']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentDraftsPaymentDraftIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['payment-drafts'][':payment_draft_id']['payments']['$post']
      >,
    ) {
      return parseResponse(
        client['payment-drafts'][':payment_draft_id'].payments.$post(args, options),
      )
    },
  })
}

export function usePostPaymentDraftsPaymentDraftIdPayments<
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
                    (typeof client)['payment-drafts'][':payment_draft_id']['payments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client)['payment-drafts'][':payment_draft_id']['payments']['$post']
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
  const mutationDefaults = getPostPaymentDraftsPaymentDraftIdPaymentsMutationOptions<
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

export function getDeletePaymentDraftsPaymentDraftIdPaymentsPaymentIdMutationKey() {
  return [
    'payment-drafts',
    '/payment-drafts/:payment_draft_id/payments/:payment_id',
    'DELETE',
  ] as const
}

export function getDeletePaymentDraftsPaymentDraftIdPaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePaymentDraftsPaymentDraftIdPaymentsPaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$delete']
      >,
    ) {
      return parseResponse(
        client['payment-drafts'][':payment_draft_id'].payments[':payment_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeletePaymentDraftsPaymentDraftIdPaymentsPaymentId<
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
                      (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$delete']
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
  const mutationDefaults = getDeletePaymentDraftsPaymentDraftIdPaymentsPaymentIdMutationOptions<
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

export function getPatchPaymentDraftsPaymentDraftIdPaymentsPaymentIdMutationKey() {
  return [
    'payment-drafts',
    '/payment-drafts/:payment_draft_id/payments/:payment_id',
    'PATCH',
  ] as const
}

export function getPatchPaymentDraftsPaymentDraftIdPaymentsPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$patch']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchPaymentDraftsPaymentDraftIdPaymentsPaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$patch']
      >,
    ) {
      return parseResponse(
        client['payment-drafts'][':payment_draft_id'].payments[':payment_id'].$patch(args, options),
      )
    },
  })
}

export function usePatchPaymentDraftsPaymentDraftIdPaymentsPaymentId<
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
                      (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$patch']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$patch']
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
  const mutationDefaults = getPatchPaymentDraftsPaymentDraftIdPaymentsPaymentIdMutationOptions<
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

export function getPayoutLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payout-links']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['payout-links', '/payout-links', keyArgs] as const
}

export function getPayoutLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payout-links']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayoutLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['payout-links'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePayoutLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['payout-links']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>
            >
          >,
          ReturnType<typeof getPayoutLinksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPayoutLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayoutLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['payout-links'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPayoutLinksMutationKey() {
  return ['payout-links', '/payout-links', 'POST'] as const
}

export function getPostPayoutLinksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['payout-links']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutLinksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['payout-links']['$post']>) {
      return parseResponse(client['payout-links'].$post(args, options))
    },
  })
}

export function usePostPayoutLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['payout-links']['$post']>,
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
  const mutationDefaults = getPostPayoutLinksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPayoutLinksPayoutLinkIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['payout-links'][':payout_link_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['payout-links', '/payout-links/:payout_link_id', keyArgs] as const
}

export function getPayoutLinksPayoutLinkIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['payout-links'][':payout_link_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPayoutLinksPayoutLinkIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['payout-links'][':payout_link_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePayoutLinksPayoutLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['payout-links'][':payout_link_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['payout-links'][':payout_link_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payout-links'][':payout_link_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['payout-links'][':payout_link_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPayoutLinksPayoutLinkIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['payout-links'][':payout_link_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPayoutLinksPayoutLinkIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPayoutLinksPayoutLinkIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['payout-links'][':payout_link_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPayoutLinksPayoutLinkIdCancelMutationKey() {
  return ['payout-links', '/payout-links/:payout_link_id/cancel', 'POST'] as const
}

export function getPostPayoutLinksPayoutLinkIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['payout-links'][':payout_link_id']['cancel']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['payout-links'][':payout_link_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPayoutLinksPayoutLinkIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['payout-links'][':payout_link_id']['cancel']['$post']>,
    ) {
      return parseResponse(client['payout-links'][':payout_link_id'].cancel.$post(args, options))
    },
  })
}

export function usePostPayoutLinksPayoutLinkIdCancel<
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
                      (typeof client)['payout-links'][':payout_link_id']['cancel']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['payout-links'][':payout_link_id']['cancel']['$post']>,
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
  const mutationDefaults = getPostPayoutLinksPayoutLinkIdCancelMutationOptions<
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

export function getPostSandboxTransactionsIdActionMutationKey() {
  return ['sandbox', '/sandbox/transactions/:id/:action', 'POST'] as const
}

export function getPostSandboxTransactionsIdActionMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox.transactions)[':id'][':action']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.sandbox.transactions)[':id'][':action']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTransactionsIdActionMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.sandbox.transactions)[':id'][':action']['$post']>,
    ) {
      return parseResponse(client.sandbox.transactions[':id'][':action'].$post(args, options))
    },
  })
}

export function usePostSandboxTransactionsIdAction<
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
                Awaited<ReturnType<(typeof client.sandbox.transactions)[':id'][':action']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.sandbox.transactions)[':id'][':action']['$post']>,
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
  const mutationDefaults = getPostSandboxTransactionsIdActionMutationOptions<
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

export function getPostSandboxTopupMutationKey() {
  return ['sandbox', '/sandbox/topup', 'POST'] as const
}

export function getPostSandboxTopupMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.topup.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.sandbox.topup.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxTopupMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.topup.$post>) {
      return parseResponse(client.sandbox.topup.$post(args, options))
    },
  })
}

export function usePostSandboxTopup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.topup.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.sandbox.topup.$post>,
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
  const mutationDefaults = getPostSandboxTopupMutationOptions<TError, TOnMutateResult>(
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

export function getTaxRatesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tax-rates']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tax-rates', '/tax-rates', keyArgs] as const
}

export function getTaxRatesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tax-rates']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxRatesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tax-rates'].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTaxRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tax-rates']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>
            >
          >,
          ReturnType<typeof getTaxRatesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaxRatesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxRatesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tax-rates'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTaxRatesMutationKey() {
  return ['tax-rates', '/tax-rates', 'POST'] as const
}

export function getPostTaxRatesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$post']>>>>
    >,
    TError,
    InferRequestType<(typeof client)['tax-rates']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTaxRatesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['tax-rates']['$post']>) {
      return parseResponse(client['tax-rates'].$post(args, options))
    },
  })
}

export function usePostTaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['tax-rates']['$post']>,
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
  const mutationDefaults = getPostTaxRatesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTaxRatesTaxRateIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['tax-rates', '/tax-rates/:tax_rate_id', keyArgs] as const
}

export function getTaxRatesTaxRateIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTaxRatesTaxRateIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['tax-rates'][':tax_rate_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTaxRatesTaxRateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTaxRatesTaxRateIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTaxRatesTaxRateIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTaxRatesTaxRateIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['tax-rates'][':tax_rate_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTaxRatesTaxRateIdMutationKey() {
  return ['tax-rates', '/tax-rates/:tax_rate_id', 'DELETE'] as const
}

export function getDeleteTaxRatesTaxRateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTaxRatesTaxRateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$delete']>,
    ) {
      return parseResponse(client['tax-rates'][':tax_rate_id'].$delete(args, options))
    },
  })
}

export function useDeleteTaxRatesTaxRateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$delete']>,
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
  const mutationDefaults = getDeleteTaxRatesTaxRateIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchTaxRatesTaxRateIdMutationKey() {
  return ['tax-rates', '/tax-rates/:tax_rate_id', 'PATCH'] as const
}

export function getPatchTaxRatesTaxRateIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchTaxRatesTaxRateIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$patch']>,
    ) {
      return parseResponse(client['tax-rates'][':tax_rate_id'].$patch(args, options))
    },
  })
}

export function usePatchTaxRatesTaxRateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$patch']>,
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
  const mutationDefaults = getPatchTaxRatesTaxRateIdMutationOptions<TError, TOnMutateResult>(
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

export function getTeamMembersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team-members']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team-members', '/team-members', keyArgs] as const
}

export function getTeamMembersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team-members']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamMembersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['team-members'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['team-members']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>
            >
          >,
          ReturnType<typeof getTeamMembersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamMembersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamMembersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['team-members'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostTeamMembersMutationKey() {
  return ['team-members', '/team-members', 'POST'] as const
}

export function getPostTeamMembersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client)['team-members']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamMembersMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['team-members']['$post']>) {
      return parseResponse(client['team-members'].$post(args, options))
    },
  })
}

export function usePostTeamMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$post']>>>
            >
          >,
          TError,
          InferRequestType<(typeof client)['team-members']['$post']>,
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
  const mutationDefaults = getPostTeamMembersMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTeamMembersTeamMemberIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['team-members'][':team_member_id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['team-members', '/team-members/:team_member_id', keyArgs] as const
}

export function getTeamMembersTeamMemberIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['team-members'][':team_member_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTeamMembersTeamMemberIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['team-members'][':team_member_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTeamMembersTeamMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client)['team-members'][':team_member_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getTeamMembersTeamMemberIdQueryKey>
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
          Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTeamMembersTeamMemberIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTeamMembersTeamMemberIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['team-members'][':team_member_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteTeamMembersTeamMemberIdMutationKey() {
  return ['team-members', '/team-members/:team_member_id', 'DELETE'] as const
}

export function getDeleteTeamMembersTeamMemberIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamMembersTeamMemberIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['team-members'][':team_member_id']['$delete']>,
    ) {
      return parseResponse(client['team-members'][':team_member_id'].$delete(args, options))
    },
  })
}

export function useDeleteTeamMembersTeamMemberId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['team-members'][':team_member_id']['$delete']>,
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
  const mutationDefaults = getDeleteTeamMembersTeamMemberIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutTeamMembersTeamMemberIdDepartmentMutationKey() {
  return ['team-members', '/team-members/:team_member_id/department', 'PUT'] as const
}

export function getPutTeamMembersTeamMemberIdDepartmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['team-members'][':team_member_id']['department']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['department']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamMembersTeamMemberIdDepartmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['team-members'][':team_member_id']['department']['$put']
      >,
    ) {
      return parseResponse(client['team-members'][':team_member_id'].department.$put(args, options))
    },
  })
}

export function usePutTeamMembersTeamMemberIdDepartment<
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
                      (typeof client)['team-members'][':team_member_id']['department']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['team-members'][':team_member_id']['department']['$put']
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
  const mutationDefaults = getPutTeamMembersTeamMemberIdDepartmentMutationOptions<
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

export function getDeleteTeamMembersTeamMemberIdDepartmentMutationKey() {
  return ['team-members', '/team-members/:team_member_id/department', 'DELETE'] as const
}

export function getDeleteTeamMembersTeamMemberIdDepartmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client)['team-members'][':team_member_id']['department']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['department']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamMembersTeamMemberIdDepartmentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['team-members'][':team_member_id']['department']['$delete']
      >,
    ) {
      return parseResponse(
        client['team-members'][':team_member_id'].department.$delete(args, options),
      )
    },
  })
}

export function useDeleteTeamMembersTeamMemberIdDepartment<
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
                      (typeof client)['team-members'][':team_member_id']['department']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['team-members'][':team_member_id']['department']['$delete']
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
  const mutationDefaults = getDeleteTeamMembersTeamMemberIdDepartmentMutationOptions<
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

export function getPutTeamMembersTeamMemberIdManagerMutationKey() {
  return ['team-members', '/team-members/:team_member_id/manager', 'PUT'] as const
}

export function getPutTeamMembersTeamMemberIdManagerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['team-members'][':team_member_id']['manager']['$put']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['manager']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamMembersTeamMemberIdManagerMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['team-members'][':team_member_id']['manager']['$put']>,
    ) {
      return parseResponse(client['team-members'][':team_member_id'].manager.$put(args, options))
    },
  })
}

export function usePutTeamMembersTeamMemberIdManager<
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
                      (typeof client)['team-members'][':team_member_id']['manager']['$put']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['team-members'][':team_member_id']['manager']['$put']>,
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
  const mutationDefaults = getPutTeamMembersTeamMemberIdManagerMutationOptions<
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

export function getDeleteTeamMembersTeamMemberIdManagerMutationKey() {
  return ['team-members', '/team-members/:team_member_id/manager', 'DELETE'] as const
}

export function getDeleteTeamMembersTeamMemberIdManagerMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['team-members'][':team_member_id']['manager']['$delete']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['manager']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteTeamMembersTeamMemberIdManagerMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['team-members'][':team_member_id']['manager']['$delete']
      >,
    ) {
      return parseResponse(client['team-members'][':team_member_id'].manager.$delete(args, options))
    },
  })
}

export function useDeleteTeamMembersTeamMemberIdManager<
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
                      (typeof client)['team-members'][':team_member_id']['manager']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['team-members'][':team_member_id']['manager']['$delete']
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
  const mutationDefaults = getDeleteTeamMembersTeamMemberIdManagerMutationOptions<
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

export function getPutTeamMembersTeamMemberIdRoleMutationKey() {
  return ['team-members', '/team-members/:team_member_id/role', 'PUT'] as const
}

export function getPutTeamMembersTeamMemberIdRoleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['role']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['role']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutTeamMembersTeamMemberIdRoleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['team-members'][':team_member_id']['role']['$put']>,
    ) {
      return parseResponse(client['team-members'][':team_member_id'].role.$put(args, options))
    },
  })
}

export function usePutTeamMembersTeamMemberIdRole<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client)['team-members'][':team_member_id']['role']['$put']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['team-members'][':team_member_id']['role']['$put']>,
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
  const mutationDefaults = getPutTeamMembersTeamMemberIdRoleMutationOptions<
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

export function getPostTeamMembersTeamMemberIdSuspendMutationKey() {
  return ['team-members', '/team-members/:team_member_id/suspend', 'POST'] as const
}

export function getPostTeamMembersTeamMemberIdSuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['team-members'][':team_member_id']['suspend']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['suspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamMembersTeamMemberIdSuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['team-members'][':team_member_id']['suspend']['$post']
      >,
    ) {
      return parseResponse(client['team-members'][':team_member_id'].suspend.$post(args, options))
    },
  })
}

export function usePostTeamMembersTeamMemberIdSuspend<
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
                      (typeof client)['team-members'][':team_member_id']['suspend']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client)['team-members'][':team_member_id']['suspend']['$post']>,
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
  const mutationDefaults = getPostTeamMembersTeamMemberIdSuspendMutationOptions<
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

export function getPostTeamMembersTeamMemberIdUnsuspendMutationKey() {
  return ['team-members', '/team-members/:team_member_id/unsuspend', 'POST'] as const
}

export function getPostTeamMembersTeamMemberIdUnsuspendMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client)['team-members'][':team_member_id']['unsuspend']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['unsuspend']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostTeamMembersTeamMemberIdUnsuspendMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client)['team-members'][':team_member_id']['unsuspend']['$post']
      >,
    ) {
      return parseResponse(client['team-members'][':team_member_id'].unsuspend.$post(args, options))
    },
  })
}

export function usePostTeamMembersTeamMemberIdUnsuspend<
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
                      (typeof client)['team-members'][':team_member_id']['unsuspend']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client)['team-members'][':team_member_id']['unsuspend']['$post']
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
  const mutationDefaults = getPostTeamMembersTeamMemberIdUnsuspendMutationOptions<
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

export function getRolesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['roles', '/roles', keyArgs] as const
}

export function getRolesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRolesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.roles.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.roles.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
          ReturnType<typeof getRolesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRolesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.roles.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDepartmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.departments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['departments', '/departments', keyArgs] as const
}

export function getDepartmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.departments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDepartmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.departments.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDepartments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.departments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>
          >,
          ReturnType<typeof getDepartmentsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDepartmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDepartmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.departments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostDepartmentsMutationKey() {
  return ['departments', '/departments', 'POST'] as const
}

export function getPostDepartmentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$post>>>>>,
    TError,
    InferRequestType<typeof client.departments.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDepartmentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.departments.$post>) {
      return parseResponse(client.departments.$post(args, options))
    },
  })
}

export function usePostDepartments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.departments.$post>,
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
  const mutationDefaults = getPostDepartmentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDepartmentsDepartmentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.departments)[':department_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['departments', '/departments/:department_id', keyArgs] as const
}

export function getDepartmentsDepartmentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.departments)[':department_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDepartmentsDepartmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.departments[':department_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useDepartmentsDepartmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.departments)[':department_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.departments)[':department_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.departments)[':department_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.departments)[':department_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getDepartmentsDepartmentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.departments)[':department_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDepartmentsDepartmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDepartmentsDepartmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.departments[':department_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteDepartmentsDepartmentIdMutationKey() {
  return ['departments', '/departments/:department_id', 'DELETE'] as const
}

export function getDeleteDepartmentsDepartmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.departments)[':department_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.departments)[':department_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteDepartmentsDepartmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.departments)[':department_id']['$delete']>,
    ) {
      return parseResponse(client.departments[':department_id'].$delete(args, options))
    },
  })
}

export function useDeleteDepartmentsDepartmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.departments)[':department_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.departments)[':department_id']['$delete']>,
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
  const mutationDefaults = getDeleteDepartmentsDepartmentIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchDepartmentsDepartmentIdMutationKey() {
  return ['departments', '/departments/:department_id', 'PATCH'] as const
}

export function getPatchDepartmentsDepartmentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.departments)[':department_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.departments)[':department_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchDepartmentsDepartmentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.departments)[':department_id']['$patch']>,
    ) {
      return parseResponse(client.departments[':department_id'].$patch(args, options))
    },
  })
}

export function usePatchDepartmentsDepartmentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.departments)[':department_id']['$patch']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.departments)[':department_id']['$patch']>,
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
  const mutationDefaults = getPatchDepartmentsDepartmentIdMutationOptions<TError, TOnMutateResult>(
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

export function getTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['transactions', '/transactions', keyArgs] as const
}

export function getTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transactions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
          >,
          ReturnType<typeof getTransactionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTransactionIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transaction)[':id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['transaction', '/transaction/:id', keyArgs] as const
}

export function getTransactionIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transaction)[':id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.transaction[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.transaction)[':id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
            >
          >,
          ReturnType<typeof getTransactionIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.transaction[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPayMutationKey() {
  return ['pay', '/pay', 'POST'] as const
}

export function getPostPayMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pay.$post>>>>>,
    TError,
    InferRequestType<typeof client.pay.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pay.$post>) {
      return parseResponse(client.pay.$post(args, options))
    },
  })
}

export function usePostPay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pay.$post>>>>>,
          TError,
          InferRequestType<typeof client.pay.$post>,
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
  const mutationDefaults = getPostPayMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostPayIndicativeQuoteMutationKey() {
  return ['pay', '/pay/indicative-quote', 'POST'] as const
}

export function getPostPayIndicativeQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pay)['indicative-quote']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pay)['indicative-quote']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPayIndicativeQuoteMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pay)['indicative-quote']['$post']>) {
      return parseResponse(client.pay['indicative-quote'].$post(args, options))
    },
  })
}

export function usePostPayIndicativeQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pay)['indicative-quote']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pay)['indicative-quote']['$post']>,
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
  const mutationDefaults = getPostPayIndicativeQuoteMutationOptions<TError, TOnMutateResult>(
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

export function getPostPayFieldsMutationKey() {
  return ['pay', '/pay/fields', 'POST'] as const
}

export function getPostPayFieldsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pay.fields.$post>>>>>,
    TError,
    InferRequestType<typeof client.pay.fields.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPayFieldsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.pay.fields.$post>) {
      return parseResponse(client.pay.fields.$post(args, options))
    },
  })
}

export function usePostPayFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pay.fields.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.pay.fields.$post>,
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
  const mutationDefaults = getPostPayFieldsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostTransferMutationKey() {
  return ['transfer', '/transfer', 'POST'] as const
}

export function getPostTransferMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.$post>>>>>,
    TError,
    InferRequestType<typeof client.transfer.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostTransferMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.transfer.$post>) {
      return parseResponse(client.transfer.$post(args, options))
    },
  })
}

export function usePostTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.transfer.$post>,
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
  const mutationDefaults = getPostTransferMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getTransferReasonsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['transfer-reasons']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['transfer-reasons', '/transfer-reasons', keyArgs] as const
}

export function getTransferReasonsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['transfer-reasons']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTransferReasonsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client['transfer-reasons'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useTransferReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client)['transfer-reasons']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
            >
          >,
          ReturnType<typeof getTransferReasonsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransferReasonsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTransferReasonsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client['transfer-reasons'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getWebhookQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['webhook', '/webhook', keyArgs] as const
}

export function getWebhookQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhookQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhook.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhook<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhook.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
          >,
          ReturnType<typeof getWebhookQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhookQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhookQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhook.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhookMutationKey() {
  return ['webhook', '/webhook', 'POST'] as const
}

export function getPostWebhookMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$post>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.webhook.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhook.$post>) {
      return parseResponse(client.webhook.$post(args, options))
    },
  })
}

export function usePostWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$post>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.webhook.$post>,
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
  const mutationDefaults = getPostWebhookMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getDeleteWebhookMutationKey() {
  return ['webhook', '/webhook', 'DELETE'] as const
}

export function getDeleteWebhookMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$delete>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.webhook.$delete>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhookMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhook.$delete>) {
      return parseResponse(client.webhook.$delete(args, options))
    },
  })
}

export function useDeleteWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$delete>>>>
            >
          | undefined,
          TError,
          InferRequestType<typeof client.webhook.$delete>,
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
  const mutationDefaults = getDeleteWebhookMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['webhooks', '/webhooks', keyArgs] as const
}

export function getWebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
          >,
          ReturnType<typeof getWebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostWebhooksMutationKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function getPostWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.webhooks.$post>) {
      return parseResponse(client.webhooks.$post(args, options))
    },
  })
}

export function usePostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.webhooks.$post>,
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
  const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getWebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['webhooks', '/webhooks/:webhook_id', keyArgs] as const
}

export function getWebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>) {
      return parseResponse(client.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function useDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>,
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
  const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPatchWebhooksWebhookIdMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'PATCH'] as const
}

export function getPatchWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchWebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>) {
      return parseResponse(client.webhooks[':webhook_id'].$patch(args, options))
    },
  })
}

export function usePatchWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>,
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
  const mutationDefaults = getPatchWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostWebhooksWebhookIdRotateSigningSecretMutationKey() {
  return ['webhooks', '/webhooks/:webhook_id/rotate-signing-secret', 'POST'] as const
}

export function getPostWebhooksWebhookIdRotateSigningSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.webhooks)[':webhook_id']['rotate-signing-secret']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['rotate-signing-secret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostWebhooksWebhookIdRotateSigningSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.webhooks)[':webhook_id']['rotate-signing-secret']['$post']
      >,
    ) {
      return parseResponse(
        client.webhooks[':webhook_id']['rotate-signing-secret'].$post(args, options),
      )
    },
  })
}

export function usePostWebhooksWebhookIdRotateSigningSecret<
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
                    (typeof client.webhooks)[':webhook_id']['rotate-signing-secret']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.webhooks)[':webhook_id']['rotate-signing-secret']['$post']
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
  const mutationDefaults = getPostWebhooksWebhookIdRotateSigningSecretMutationOptions<
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

export function getWebhooksWebhookIdFailedEventsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['webhooks', '/webhooks/:webhook_id/failed-events', keyArgs] as const
}

export function getWebhooksWebhookIdFailedEventsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getWebhooksWebhookIdFailedEventsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.webhooks[':webhook_id']['failed-events'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useWebhooksWebhookIdFailedEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>
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
                  ReturnType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getWebhooksWebhookIdFailedEventsQueryKey>
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
          Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdFailedEventsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getWebhooksWebhookIdFailedEventsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.webhooks[':webhook_id']['failed-events'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
