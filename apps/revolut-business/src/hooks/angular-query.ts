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
  args: InferRequestType<(typeof client)['accounting-categories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting-categories', '/accounting-categories', keyArgs] as const
}

export function getAccountingCategoriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['accounting-categories']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountingCategoriesQueryKey>
  >({
    queryKey: getAccountingCategoriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['accounting-categories'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingCategories<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['accounting-categories']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountingCategoriesQueryKey>
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
      ...getAccountingCategoriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostAccountingCategories<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountingCategoriesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountingCategoriesAccountingCategoryIdQueryKey(
  args: InferRequestType<
    (typeof client)['accounting-categories'][':accounting_category_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'accounting-categories',
    '/accounting-categories/:accounting_category_id',
    keyArgs,
  ] as const
}

export function getAccountingCategoriesAccountingCategoryIdQueryOptions<
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
  args: InferRequestType<
    (typeof client)['accounting-categories'][':accounting_category_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountingCategoriesAccountingCategoryIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['accounting-categories'][':accounting_category_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountingCategoriesAccountingCategoryId<
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
  args: () => InferRequestType<
    (typeof client)['accounting-categories'][':accounting_category_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getAccountingCategoriesAccountingCategoryIdQueryKey>
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
      ...getAccountingCategoriesAccountingCategoryIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteAccountingCategoriesAccountingCategoryId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteAccountingCategoriesAccountingCategoryIdMutationOptions<
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

export function injectPatchAccountingCategoriesAccountingCategoryId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchAccountingCategoriesAccountingCategoryIdMutationOptions<
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

export function injectPostAccountNameValidation<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostAccountNameValidationMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountsQueryKey(args: InferRequestType<typeof client.accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts', keyArgs] as const
}

export function getAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getAccountsQueryKey>
  >({
    queryKey: getAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.accounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:account_id', keyArgs] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getAccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getAccountsAccountIdBankDetailsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['bank-details']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:account_id/bank-details', keyArgs] as const
}

export function getAccountsAccountIdBankDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['bank-details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['bank-details']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getAccountsAccountIdBankDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':account_id']['bank-details'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdBankDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':account_id']['bank-details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':account_id']['bank-details']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getAccountsAccountIdBankDetailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCardInvitationsQueryKey(
  args: InferRequestType<(typeof client)['card-invitations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['card-invitations', '/card-invitations', keyArgs] as const
}

export function getCardInvitationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['card-invitations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardInvitationsQueryKey>
  >({
    queryKey: getCardInvitationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['card-invitations'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCardInvitations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['card-invitations']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardInvitationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardInvitationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCardInvitations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['card-invitations']['$post']>,
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
    const mutationDefaults = getPostCardInvitationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardInvitationsCardInvitationIdQueryKey(
  args: InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['card-invitations', '/card-invitations/:card_invitation_id', keyArgs] as const
}

export function getCardInvitationsCardInvitationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardInvitationsCardInvitationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['card-invitations'][':card_invitation_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardInvitationsCardInvitationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        ReturnType<typeof getCardInvitationsCardInvitationIdQueryKey>
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
      ...getCardInvitationsCardInvitationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPatchCardInvitationsCardInvitationId<
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
                ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$patch']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$patch']>,
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
    const mutationDefaults = getPatchCardInvitationsCardInvitationIdMutationOptions<
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

export function injectPostCardInvitationsCardInvitationIdCancel<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardInvitationsCardInvitationIdCancelMutationOptions<
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

export function getCardsQueryKey(args: InferRequestType<typeof client.cards.$get>) {
  const { header: _, ...keyArgs } = args
  return ['cards', '/cards', keyArgs] as const
}

export function getCardsQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.cards.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getCardsQueryKey>
  >({
    queryKey: getCardsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCards<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.cards.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getCardsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
        TError,
        InferRequestType<typeof client.cards.$post>,
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
    const mutationDefaults = getPostCardsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsCardIdQueryKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cards', '/cards/:card_id', keyArgs] as const
}

export function getCardsCardIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCardsCardIdQueryKey>
  >({
    queryKey: getCardsCardIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':card_id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCardsCardId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCardsCardIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCardsCardIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteCardsCardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCardsCardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchCardsCardId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$patch']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.cards)[':card_id']['$patch']>,
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
    const mutationDefaults = getPatchCardsCardIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCardsCardIdContacts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsCardIdContactsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutCardsCardIdReferences<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutCardsCardIdReferencesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCardsCardIdFreeze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsCardIdFreezeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCardsCardIdUnfreeze<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsCardIdUnfreezeMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCardsCardIdLock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsCardIdLockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostCardsCardIdUnlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostCardsCardIdUnlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCardsCardIdSensitiveDetailsQueryKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cards', '/cards/:card_id/sensitive-details', keyArgs] as const
}

export function getCardsCardIdSensitiveDetailsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCardsCardIdSensitiveDetailsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.cards[':card_id']['sensitive-details'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCardsCardIdSensitiveDetails<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCardsCardIdSensitiveDetailsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCounterpartiesQueryKey(
  args: InferRequestType<typeof client.counterparties.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['counterparties', '/counterparties', keyArgs] as const
}

export function getCounterpartiesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.counterparties.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getCounterpartiesQueryKey>
  >({
    queryKey: getCounterpartiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.counterparties.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCounterparties<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.counterparties.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getCounterpartiesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getCounterpartiesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostCounterparty<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparty.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.counterparty.$post>,
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
    const mutationDefaults = getPostCounterpartyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getCounterpartiesCountriesQueryKey(
  args: InferRequestType<typeof client.counterparties.countries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['counterparties', '/counterparties/countries', keyArgs] as const
}

export function getCounterpartiesCountriesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.counterparties.countries.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCounterpartiesCountriesQueryKey>
  >({
    queryKey: getCounterpartiesCountriesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.counterparties.countries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCounterpartiesCountries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.counterparties.countries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCounterpartiesCountriesQueryKey>
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
      ...getCounterpartiesCountriesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCounterpartiesFieldsQueryKey(
  args: InferRequestType<typeof client.counterparties.fields.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['counterparties', '/counterparties/fields', keyArgs] as const
}

export function getCounterpartiesFieldsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.counterparties.fields.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCounterpartiesFieldsQueryKey>
  >({
    queryKey: getCounterpartiesFieldsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.counterparties.fields.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectCounterpartiesFields<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.counterparties.fields.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCounterpartiesFieldsQueryKey>
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
      ...getCounterpartiesFieldsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getCounterpartyCounterpartyIdQueryKey(
  args: InferRequestType<(typeof client.counterparty)[':counterparty_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['counterparty', '/counterparty/:counterparty_id', keyArgs] as const
}

export function getCounterpartyCounterpartyIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.counterparty)[':counterparty_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getCounterpartyCounterpartyIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.counterparty[':counterparty_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectCounterpartyCounterpartyId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.counterparty)[':counterparty_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getCounterpartyCounterpartyIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteCounterpartyCounterpartyId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteCounterpartyCounterpartyIdMutationOptions<
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

export function injectPatchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPatchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdMutationOptions<
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

export function getRateQueryKey(args: InferRequestType<typeof client.rate.$get>) {
  const { header: _, ...keyArgs } = args
  return ['rate', '/rate', keyArgs] as const
}

export function getRateQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.rate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRateQueryKey>
  >({
    queryKey: getRateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.rate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRate<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.rate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostExchange<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.exchange.$post>,
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
    const mutationDefaults = getPostExchangeMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getExchangeReasonsQueryKey(
  args: InferRequestType<(typeof client)['exchange-reasons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['exchange-reasons', '/exchange-reasons', keyArgs] as const
}

export function getExchangeReasonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['exchange-reasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExchangeReasonsQueryKey>
  >({
    queryKey: getExchangeReasonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['exchange-reasons'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExchangeReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['exchange-reasons']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExchangeReasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExchangeReasonsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getExpensesQueryKey(args: InferRequestType<typeof client.expenses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['expenses', '/expenses', keyArgs] as const
}

export function getExpensesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.expenses.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getExpensesQueryKey>
  >({
    queryKey: getExpensesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.expenses.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectExpenses<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.expenses.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getExpensesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExpensesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getExpensesExpenseIdQueryKey(
  args: InferRequestType<(typeof client.expenses)[':expense_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['expenses', '/expenses/:expense_id', keyArgs] as const
}

export function getExpensesExpenseIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.expenses)[':expense_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getExpensesExpenseIdQueryKey>
  >({
    queryKey: getExpensesExpenseIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.expenses[':expense_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExpensesExpenseId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.expenses)[':expense_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getExpensesExpenseIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getExpensesExpenseIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getExpensesExpenseIdReceiptsReceiptIdContentQueryKey(
  args: InferRequestType<
    (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['expenses', '/expenses/:expense_id/receipts/:receipt_id/content', keyArgs] as const
}

export function getExpensesExpenseIdReceiptsReceiptIdContentQueryOptions<
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
  args: InferRequestType<
    (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getExpensesExpenseIdReceiptsReceiptIdContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.expenses[':expense_id'].receipts[':receipt_id'].content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectExpensesExpenseIdReceiptsReceiptIdContent<
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
  args: () => InferRequestType<
    (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getExpensesExpenseIdReceiptsReceiptIdContentQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getLabelGroupsQueryKey(
  args: InferRequestType<(typeof client)['label-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['label-groups', '/label-groups', keyArgs] as const
}

export function getLabelGroupsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['label-groups']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getLabelGroupsQueryKey>
  >({
    queryKey: getLabelGroupsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['label-groups'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectLabelGroups<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['label-groups']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getLabelGroupsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelGroupsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostLabelGroups<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['label-groups']['$post']>,
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
    const mutationDefaults = getPostLabelGroupsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLabelGroupsGroupIdQueryKey(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['label-groups', '/label-groups/:group_id', keyArgs] as const
}

export function getLabelGroupsGroupIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLabelGroupsGroupIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['label-groups'][':group_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLabelGroupsGroupId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['label-groups'][':group_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getLabelGroupsGroupIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteLabelGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLabelGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchLabelGroupsGroupId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLabelGroupsGroupIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getLabelGroupsGroupIdLabelsQueryKey(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['label-groups', '/label-groups/:group_id/labels', keyArgs] as const
}

export function getLabelGroupsGroupIdLabelsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getLabelGroupsGroupIdLabelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['label-groups'][':group_id'].labels.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectLabelGroupsGroupIdLabels<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getLabelGroupsGroupIdLabelsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostLabelGroupsGroupIdLabels<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostLabelGroupsGroupIdLabelsMutationOptions<
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

export function injectDeleteLabelGroupsGroupIdLabelsLabelId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteLabelGroupsGroupIdLabelsLabelIdMutationOptions<
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

export function injectPatchLabelGroupsGroupIdLabelsLabelId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchLabelGroupsGroupIdLabelsLabelIdMutationOptions<
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

export function getPaymentDraftsQueryKey(
  args: InferRequestType<(typeof client)['payment-drafts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-drafts', '/payment-drafts', keyArgs] as const
}

export function getPaymentDraftsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['payment-drafts']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentDraftsQueryKey>
  >({
    queryKey: getPaymentDraftsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['payment-drafts'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPaymentDrafts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['payment-drafts']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentDraftsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentDraftsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPaymentDrafts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$post']>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['payment-drafts']['$post']>,
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
    const mutationDefaults = getPostPaymentDraftsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPaymentDraftsPaymentDraftIdQueryKey(
  args: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-drafts', '/payment-drafts/:payment_draft_id', keyArgs] as const
}

export function getPaymentDraftsPaymentDraftIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPaymentDraftsPaymentDraftIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['payment-drafts'][':payment_draft_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPaymentDraftsPaymentDraftId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPaymentDraftsPaymentDraftIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeletePaymentDraftsPaymentDraftId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePaymentDraftsPaymentDraftIdMutationOptions<
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

export function injectPatchPaymentDraftsPaymentDraftId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPaymentDraftsPaymentDraftIdMutationOptions<
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

export function injectPostPaymentDraftsPaymentDraftIdPayments<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPaymentDraftsPaymentDraftIdPaymentsMutationOptions<
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

export function injectDeletePaymentDraftsPaymentDraftIdPaymentsPaymentId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeletePaymentDraftsPaymentDraftIdPaymentsPaymentIdMutationOptions<
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

export function injectPatchPaymentDraftsPaymentDraftIdPaymentsPaymentId<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchPaymentDraftsPaymentDraftIdPaymentsPaymentIdMutationOptions<
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

export function getPayoutLinksQueryKey(
  args: InferRequestType<(typeof client)['payout-links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payout-links', '/payout-links', keyArgs] as const
}

export function getPayoutLinksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['payout-links']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPayoutLinksQueryKey>
  >({
    queryKey: getPayoutLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['payout-links'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectPayoutLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['payout-links']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPayoutLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPayoutLinksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPayoutLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['payout-links']['$post']>,
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
    const mutationDefaults = getPostPayoutLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPayoutLinksPayoutLinkIdQueryKey(
  args: InferRequestType<(typeof client)['payout-links'][':payout_link_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payout-links', '/payout-links/:payout_link_id', keyArgs] as const
}

export function getPayoutLinksPayoutLinkIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['payout-links'][':payout_link_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['payout-links'][':payout_link_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPayoutLinksPayoutLinkIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['payout-links'][':payout_link_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectPayoutLinksPayoutLinkId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['payout-links'][':payout_link_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['payout-links'][':payout_link_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getPayoutLinksPayoutLinkIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostPayoutLinksPayoutLinkIdCancel<
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
                  ReturnType<(typeof client)['payout-links'][':payout_link_id']['cancel']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['payout-links'][':payout_link_id']['cancel']['$post']>,
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
    const mutationDefaults = getPostPayoutLinksPayoutLinkIdCancelMutationOptions<
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

export function injectPostSandboxTransactionsIdAction<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostSandboxTransactionsIdActionMutationOptions<
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

export function injectPostSandboxTopup<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.topup.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.sandbox.topup.$post>,
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
    const mutationDefaults = getPostSandboxTopupMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTaxRatesQueryKey(args: InferRequestType<(typeof client)['tax-rates']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['tax-rates', '/tax-rates', keyArgs] as const
}

export function getTaxRatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['tax-rates']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTaxRatesQueryKey>
  >({
    queryKey: getTaxRatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['tax-rates'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTaxRates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['tax-rates']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTaxRatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaxRatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTaxRates<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['tax-rates']['$post']>,
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
    const mutationDefaults = getPostTaxRatesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTaxRatesTaxRateIdQueryKey(
  args: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tax-rates', '/tax-rates/:tax_rate_id', keyArgs] as const
}

export function getTaxRatesTaxRateIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTaxRatesTaxRateIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['tax-rates'][':tax_rate_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTaxRatesTaxRateId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTaxRatesTaxRateIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteTaxRatesTaxRateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTaxRatesTaxRateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchTaxRatesTaxRateId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchTaxRatesTaxRateIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTeamMembersQueryKey(
  args: InferRequestType<(typeof client)['team-members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team-members', '/team-members', keyArgs] as const
}

export function getTeamMembersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client)['team-members']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getTeamMembersQueryKey>
  >({
    queryKey: getTeamMembersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['team-members'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTeamMembers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['team-members']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTeamMembersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTeamMembersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostTeamMembers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client)['team-members']['$post']>,
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
    const mutationDefaults = getPostTeamMembersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTeamMembersTeamMemberIdQueryKey(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team-members', '/team-members/:team_member_id', keyArgs] as const
}

export function getTeamMembersTeamMemberIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getTeamMembersTeamMemberIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['team-members'][':team_member_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectTeamMembersTeamMemberId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['team-members'][':team_member_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getTeamMembersTeamMemberIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteTeamMembersTeamMemberId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeamMembersTeamMemberIdMutationOptions<
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

export function injectPutTeamMembersTeamMemberIdDepartment<
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
                    (typeof client)['team-members'][':team_member_id']['department']['$put']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['team-members'][':team_member_id']['department']['$put']>,
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
    const mutationDefaults = getPutTeamMembersTeamMemberIdDepartmentMutationOptions<
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

export function injectDeleteTeamMembersTeamMemberIdDepartment<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteTeamMembersTeamMemberIdDepartmentMutationOptions<
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

export function injectPutTeamMembersTeamMemberIdManager<
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
                  ReturnType<(typeof client)['team-members'][':team_member_id']['manager']['$put']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['team-members'][':team_member_id']['manager']['$put']>,
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
    const mutationDefaults = getPutTeamMembersTeamMemberIdManagerMutationOptions<
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

export function injectDeleteTeamMembersTeamMemberIdManager<
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
                    (typeof client)['team-members'][':team_member_id']['manager']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['team-members'][':team_member_id']['manager']['$delete']>,
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
    const mutationDefaults = getDeleteTeamMembersTeamMemberIdManagerMutationOptions<
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

export function injectPutTeamMembersTeamMemberIdRole<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutTeamMembersTeamMemberIdRoleMutationOptions<
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

export function injectPostTeamMembersTeamMemberIdSuspend<
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
                  ReturnType<(typeof client)['team-members'][':team_member_id']['suspend']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['team-members'][':team_member_id']['suspend']['$post']>,
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
    const mutationDefaults = getPostTeamMembersTeamMemberIdSuspendMutationOptions<
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

export function injectPostTeamMembersTeamMemberIdUnsuspend<
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
                    (typeof client)['team-members'][':team_member_id']['unsuspend']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['team-members'][':team_member_id']['unsuspend']['$post']>,
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
    const mutationDefaults = getPostTeamMembersTeamMemberIdUnsuspendMutationOptions<
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

export function getRolesQueryKey(args: InferRequestType<typeof client.roles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['roles', '/roles', keyArgs] as const
}

export function getRolesQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.roles.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRolesQueryKey>
  >({
    queryKey: getRolesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.roles.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectRoles<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.roles.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getRolesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRolesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDepartmentsQueryKey(args: InferRequestType<typeof client.departments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['departments', '/departments', keyArgs] as const
}

export function getDepartmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.departments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDepartmentsQueryKey>
  >({
    queryKey: getDepartmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.departments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDepartments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.departments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDepartmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDepartmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDepartments<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.departments.$post>,
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
    const mutationDefaults = getPostDepartmentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDepartmentsDepartmentIdQueryKey(
  args: InferRequestType<(typeof client.departments)[':department_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['departments', '/departments/:department_id', keyArgs] as const
}

export function getDepartmentsDepartmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.departments)[':department_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.departments)[':department_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getDepartmentsDepartmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.departments[':department_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectDepartmentsDepartmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.departments)[':department_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.departments)[':department_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getDepartmentsDepartmentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteDepartmentsDepartmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteDepartmentsDepartmentIdMutationOptions<
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

export function injectPatchDepartmentsDepartmentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchDepartmentsDepartmentIdMutationOptions<
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

export function getTransactionsQueryKey(args: InferRequestType<typeof client.transactions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions', keyArgs] as const
}

export function getTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.transactions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTransactionsQueryKey>
  >({
    queryKey: getTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transactions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTransactions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransactionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getTransactionIdQueryKey(
  args: InferRequestType<(typeof client.transaction)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transaction', '/transaction/:id', keyArgs] as const
}

export function getTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.transaction)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransactionIdQueryKey>
  >({
    queryKey: getTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.transaction[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.transaction)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransactionIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransactionIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPay<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pay.$post>>>>>,
        TError,
        InferRequestType<typeof client.pay.$post>,
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
    const mutationDefaults = getPostPayMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostPayIndicativeQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPayIndicativeQuoteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostPayFields<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pay.fields.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.pay.fields.$post>,
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
    const mutationDefaults = getPostPayFieldsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostTransfer<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.transfer.$post>,
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
    const mutationDefaults = getPostTransferMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getTransferReasonsQueryKey(
  args: InferRequestType<(typeof client)['transfer-reasons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transfer-reasons', '/transfer-reasons', keyArgs] as const
}

export function getTransferReasonsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['transfer-reasons']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getTransferReasonsQueryKey>
  >({
    queryKey: getTransferReasonsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['transfer-reasons'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectTransferReasons<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['transfer-reasons']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getTransferReasonsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTransferReasonsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getWebhookQueryKey(args: InferRequestType<typeof client.webhook.$get>) {
  const { header: _, ...keyArgs } = args
  return ['webhook', '/webhook', keyArgs] as const
}

export function getWebhookQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhook.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhookQueryKey>
  >({
    queryKey: getWebhookQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhook.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhook<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhook.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhookQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhookQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$post>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.webhook.$post>,
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
    const mutationDefaults = getPostWebhookMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteWebhook<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$delete>>>>
          >
        | undefined,
        TError,
        InferRequestType<typeof client.webhook.$delete>,
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
    const mutationDefaults = getDeleteWebhookMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksQueryKey(args: InferRequestType<typeof client.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['webhooks', '/webhooks', keyArgs] as const
}

export function getWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getWebhooksQueryKey>
  >({
    queryKey: getWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.webhooks.$post>,
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
    const mutationDefaults = getPostWebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhooks', '/webhooks/:webhook_id', keyArgs] as const
}

export function getWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getWebhooksWebhookIdQueryKey>
  >({
    queryKey: getWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getWebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPatchWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostWebhooksWebhookIdRotateSigningSecret<
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
                  (typeof client.webhooks)[':webhook_id']['rotate-signing-secret']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.webhooks)[':webhook_id']['rotate-signing-secret']['$post']>,
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
    const mutationDefaults = getPostWebhooksWebhookIdRotateSigningSecretMutationOptions<
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

export function getWebhooksWebhookIdFailedEventsQueryKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhooks', '/webhooks/:webhook_id/failed-events', keyArgs] as const
}

export function getWebhooksWebhookIdFailedEventsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getWebhooksWebhookIdFailedEventsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.webhooks[':webhook_id']['failed-events'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectWebhooksWebhookIdFailedEvents<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getWebhooksWebhookIdFailedEventsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
