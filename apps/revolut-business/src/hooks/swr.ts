import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetAccountingCategoriesKey(
  args: InferRequestType<(typeof client)['accounting-categories']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounting-categories', '/accounting-categories', keyArgs] as const
}

export function useGetAccountingCategories<TError = unknown>(
  args: InferRequestType<(typeof client)['accounting-categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountingCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['accounting-categories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingCategories<TError = unknown>(
  args: InferRequestType<(typeof client)['accounting-categories']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountingCategoriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['accounting-categories']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['accounting-categories'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostAccountingCategoriesKey() {
  return ['accounting-categories', '/accounting-categories', 'POST'] as const
}

export function usePostAccountingCategories<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['accounting-categories']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['accounting-categories']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountingCategoriesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['accounting-categories']['$post']> },
      ) => parseResponse(client['accounting-categories'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountingCategoriesAccountingCategoryIdKey(
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

export function useGetAccountingCategoriesAccountingCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['accounting-categories'][':accounting_category_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountingCategoriesAccountingCategoryIdKey(args)
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
                (typeof client)['accounting-categories'][':accounting_category_id']['$get']
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
          client['accounting-categories'][':accounting_category_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountingCategoriesAccountingCategoryId<TError = unknown>(
  args: InferRequestType<
    (typeof client)['accounting-categories'][':accounting_category_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountingCategoriesAccountingCategoryIdKey(args)
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
                (typeof client)['accounting-categories'][':accounting_category_id']['$get']
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
          client['accounting-categories'][':accounting_category_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteAccountingCategoriesAccountingCategoryIdKey() {
  return [
    'accounting-categories',
    '/accounting-categories/:accounting_category_id',
    'DELETE',
  ] as const
}

export function useDeleteAccountingCategoriesAccountingCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['accounting-categories'][':accounting_category_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteAccountingCategoriesAccountingCategoryIdKey()
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
            (typeof client)['accounting-categories'][':accounting_category_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['accounting-categories'][':accounting_category_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchAccountingCategoriesAccountingCategoryIdKey() {
  return [
    'accounting-categories',
    '/accounting-categories/:accounting_category_id',
    'PATCH',
  ] as const
}

export function usePatchAccountingCategoriesAccountingCategoryId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['accounting-categories'][':accounting_category_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchAccountingCategoriesAccountingCategoryIdKey()
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
            (typeof client)['accounting-categories'][':accounting_category_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['accounting-categories'][':accounting_category_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostAccountNameValidationKey() {
  return ['account-name-validation', '/account-name-validation', 'POST'] as const
}

export function usePostAccountNameValidation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account-name-validation']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['account-name-validation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostAccountNameValidationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['account-name-validation']['$post']> },
      ) => parseResponse(client['account-name-validation'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetAccountsKey(args: InferRequestType<typeof client.accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts', keyArgs] as const
}

export function useGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetAccounts<TError = unknown>(
  args: InferRequestType<typeof client.accounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetAccountsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.accounts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.accounts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetAccountsAccountIdKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:account_id', keyArgs] as const
}

export function useGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':account_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.accounts[':account_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetAccountsAccountIdBankDetailsKey(
  args: InferRequestType<(typeof client.accounts)[':account_id']['bank-details']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:account_id/bank-details', keyArgs] as const
}

export function useGetAccountsAccountIdBankDetails<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['bank-details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['bank-details']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdBankDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['bank-details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':account_id']['bank-details'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetAccountsAccountIdBankDetails<TError = unknown>(
  args: InferRequestType<(typeof client.accounts)[':account_id']['bank-details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['bank-details']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetAccountsAccountIdBankDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.accounts)[':account_id']['bank-details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.accounts[':account_id']['bank-details'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCardInvitationsKey(
  args: InferRequestType<(typeof client)['card-invitations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['card-invitations', '/card-invitations', keyArgs] as const
}

export function useGetCardInvitations<TError = unknown>(
  args: InferRequestType<(typeof client)['card-invitations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['card-invitations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardInvitations<TError = unknown>(
  args: InferRequestType<(typeof client)['card-invitations']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardInvitationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['card-invitations'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCardInvitationsKey() {
  return ['card-invitations', '/card-invitations', 'POST'] as const
}

export function usePostCardInvitations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['card-invitations']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['card-invitations']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardInvitationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['card-invitations']['$post']> },
      ) => parseResponse(client['card-invitations'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardInvitationsCardInvitationIdKey(
  args: InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['card-invitations', '/card-invitations/:card_invitation_id', keyArgs] as const
}

export function useGetCardInvitationsCardInvitationId<TError = unknown>(
  args: InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardInvitationsCardInvitationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['card-invitations'][':card_invitation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardInvitationsCardInvitationId<TError = unknown>(
  args: InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardInvitationsCardInvitationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['card-invitations'][':card_invitation_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchCardInvitationsCardInvitationIdKey() {
  return ['card-invitations', '/card-invitations/:card_invitation_id', 'PATCH'] as const
}

export function usePatchCardInvitationsCardInvitationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['card-invitations'][':card_invitation_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['card-invitations'][':card_invitation_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCardInvitationsCardInvitationIdKey()
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
            (typeof client)['card-invitations'][':card_invitation_id']['$patch']
          >
        },
      ) =>
        parseResponse(client['card-invitations'][':card_invitation_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardInvitationsCardInvitationIdCancelKey() {
  return ['card-invitations', '/card-invitations/:cardInvitationId/cancel', 'POST'] as const
}

export function usePostCardInvitationsCardInvitationIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['card-invitations'][':cardInvitationId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardInvitationsCardInvitationIdCancelKey()
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
            (typeof client)['card-invitations'][':cardInvitationId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client['card-invitations'][':cardInvitationId'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetCardsKey(args: InferRequestType<typeof client.cards.$get>) {
  const { header: _, ...keyArgs } = args
  return ['cards', '/cards', keyArgs] as const
}

export function useGetCards<TError = unknown>(
  args: InferRequestType<typeof client.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetCards<TError = unknown>(
  args: InferRequestType<typeof client.cards.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.cards.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostCardsKey() {
  return ['cards', '/cards', 'POST'] as const
}

export function usePostCards<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.cards.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.cards.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.cards.$post> }) =>
        parseResponse(client.cards.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsCardIdKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cards', '/cards/:card_id', keyArgs] as const
}

export function useGetCardsCardId<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsCardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':card_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsCardId<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCardsCardIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.cards[':card_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCardsCardIdKey() {
  return ['cards', '/cards/:card_id', 'DELETE'] as const
}

export function useDeleteCardsCardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCardsCardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['$delete']> },
      ) => parseResponse(client.cards[':card_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCardsCardIdKey() {
  return ['cards', '/cards/:card_id', 'PATCH'] as const
}

export function usePatchCardsCardId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.cards)[':card_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCardsCardIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['$patch']> },
      ) => parseResponse(client.cards[':card_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsCardIdContactsKey() {
  return ['cards', '/cards/:card_id/contacts', 'PUT'] as const
}

export function usePutCardsCardIdContacts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':card_id']['contacts']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['contacts']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsCardIdContactsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['contacts']['$put']> },
      ) => parseResponse(client.cards[':card_id'].contacts.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutCardsCardIdReferencesKey() {
  return ['cards', '/cards/:card_id/references', 'PUT'] as const
}

export function usePutCardsCardIdReferences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.cards)[':card_id']['references']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['references']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutCardsCardIdReferencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['references']['$put']> },
      ) => parseResponse(client.cards[':card_id'].references.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsCardIdFreezeKey() {
  return ['cards', '/cards/:card_id/freeze', 'POST'] as const
}

export function usePostCardsCardIdFreeze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['freeze']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['freeze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsCardIdFreezeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['freeze']['$post']> },
      ) => parseResponse(client.cards[':card_id'].freeze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsCardIdUnfreezeKey() {
  return ['cards', '/cards/:card_id/unfreeze', 'POST'] as const
}

export function usePostCardsCardIdUnfreeze<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['unfreeze']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['unfreeze']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsCardIdUnfreezeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['unfreeze']['$post']> },
      ) => parseResponse(client.cards[':card_id'].unfreeze.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsCardIdLockKey() {
  return ['cards', '/cards/:card_id/lock', 'POST'] as const
}

export function usePostCardsCardIdLock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['lock']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['lock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsCardIdLockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['lock']['$post']> },
      ) => parseResponse(client.cards[':card_id'].lock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostCardsCardIdUnlockKey() {
  return ['cards', '/cards/:card_id/unlock', 'POST'] as const
}

export function usePostCardsCardIdUnlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['unlock']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.cards)[':card_id']['unlock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCardsCardIdUnlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.cards)[':card_id']['unlock']['$post']> },
      ) => parseResponse(client.cards[':card_id'].unlock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCardsCardIdSensitiveDetailsKey(
  args: InferRequestType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['cards', '/cards/:card_id/sensitive-details', keyArgs] as const
}

export function useGetCardsCardIdSensitiveDetails<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsCardIdSensitiveDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cards[':card_id']['sensitive-details'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCardsCardIdSensitiveDetails<TError = unknown>(
  args: InferRequestType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCardsCardIdSensitiveDetailsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.cards)[':card_id']['sensitive-details']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.cards[':card_id']['sensitive-details'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCounterpartiesKey(args: InferRequestType<typeof client.counterparties.$get>) {
  const { header: _, ...keyArgs } = args
  return ['counterparties', '/counterparties', keyArgs] as const
}

export function useGetCounterparties<TError = unknown>(
  args: InferRequestType<typeof client.counterparties.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCounterpartiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.counterparties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCounterparties<TError = unknown>(
  args: InferRequestType<typeof client.counterparties.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetCounterpartiesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.counterparties.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostCounterpartyKey() {
  return ['counterparty', '/counterparty', 'POST'] as const
}

export function usePostCounterparty<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.counterparty.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.counterparty.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostCounterpartyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.counterparty.$post> }) =>
        parseResponse(client.counterparty.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetCounterpartiesCountriesKey(
  args: InferRequestType<typeof client.counterparties.countries.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['counterparties', '/counterparties/countries', keyArgs] as const
}

export function useGetCounterpartiesCountries<TError = unknown>(
  args: InferRequestType<typeof client.counterparties.countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCounterpartiesCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.counterparties.countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCounterpartiesCountries<TError = unknown>(
  args: InferRequestType<typeof client.counterparties.countries.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCounterpartiesCountriesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.countries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.counterparties.countries.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCounterpartiesFieldsKey(
  args: InferRequestType<typeof client.counterparties.fields.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['counterparties', '/counterparties/fields', keyArgs] as const
}

export function useGetCounterpartiesFields<TError = unknown>(
  args: InferRequestType<typeof client.counterparties.fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCounterpartiesFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.counterparties.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCounterpartiesFields<TError = unknown>(
  args: InferRequestType<typeof client.counterparties.fields.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCounterpartiesFieldsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.counterparties.fields.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.counterparties.fields.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetCounterpartyCounterpartyIdKey(
  args: InferRequestType<(typeof client.counterparty)[':counterparty_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['counterparty', '/counterparty/:counterparty_id', keyArgs] as const
}

export function useGetCounterpartyCounterpartyId<TError = unknown>(
  args: InferRequestType<(typeof client.counterparty)[':counterparty_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCounterpartyCounterpartyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.counterparty[':counterparty_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetCounterpartyCounterpartyId<TError = unknown>(
  args: InferRequestType<(typeof client.counterparty)[':counterparty_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetCounterpartyCounterpartyIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.counterparty[':counterparty_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteCounterpartyCounterpartyIdKey() {
  return ['counterparty', '/counterparty/:counterparty_id', 'DELETE'] as const
}

export function useDeleteCounterpartyCounterpartyId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.counterparty)[':counterparty_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.counterparty)[':counterparty_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteCounterpartyCounterpartyIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.counterparty)[':counterparty_id']['$delete']> },
      ) => parseResponse(client.counterparty[':counterparty_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdKey() {
  return [
    'counterparties',
    '/counterparties/:counterparty_id/payment-methods/:payment_method_id',
    'PATCH',
  ] as const
}

export function usePatchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.counterparties)[':counterparty_id']['payment-methods'][':payment_method_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchCounterpartiesCounterpartyIdPaymentMethodsPaymentMethodIdKey()
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
            (typeof client.counterparties)[':counterparty_id']['payment-methods'][':payment_method_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.counterparties[':counterparty_id']['payment-methods'][':payment_method_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRateKey(args: InferRequestType<typeof client.rate.$get>) {
  const { header: _, ...keyArgs } = args
  return ['rate', '/rate', keyArgs] as const
}

export function useGetRate<TError = unknown>(
  args: InferRequestType<typeof client.rate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rate.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRate<TError = unknown>(
  args: InferRequestType<typeof client.rate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.rate.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.rate.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostExchangeKey() {
  return ['exchange', '/exchange', 'POST'] as const
}

export function usePostExchange<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.exchange.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.exchange.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostExchangeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.exchange.$post> }) =>
        parseResponse(client.exchange.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetExchangeReasonsKey(
  args: InferRequestType<(typeof client)['exchange-reasons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['exchange-reasons', '/exchange-reasons', keyArgs] as const
}

export function useGetExchangeReasons<TError = unknown>(
  args: InferRequestType<(typeof client)['exchange-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExchangeReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['exchange-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExchangeReasons<TError = unknown>(
  args: InferRequestType<(typeof client)['exchange-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExchangeReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['exchange-reasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['exchange-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExpensesKey(args: InferRequestType<typeof client.expenses.$get>) {
  const { header: _, ...keyArgs } = args
  return ['expenses', '/expenses', keyArgs] as const
}

export function useGetExpenses<TError = unknown>(
  args: InferRequestType<typeof client.expenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExpensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.expenses.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetExpenses<TError = unknown>(
  args: InferRequestType<typeof client.expenses.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetExpensesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.expenses.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.expenses.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetExpensesExpenseIdKey(
  args: InferRequestType<(typeof client.expenses)[':expense_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['expenses', '/expenses/:expense_id', keyArgs] as const
}

export function useGetExpensesExpenseId<TError = unknown>(
  args: InferRequestType<(typeof client.expenses)[':expense_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExpensesExpenseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.expenses[':expense_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExpensesExpenseId<TError = unknown>(
  args: InferRequestType<(typeof client.expenses)[':expense_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExpensesExpenseIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.expenses)[':expense_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.expenses[':expense_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetExpensesExpenseIdReceiptsReceiptIdContentKey(
  args: InferRequestType<
    (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['expenses', '/expenses/:expense_id/receipts/:receipt_id/content', keyArgs] as const
}

export function useGetExpensesExpenseIdReceiptsReceiptIdContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExpensesExpenseIdReceiptsReceiptIdContentKey(args)
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
                (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
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
          client.expenses[':expense_id'].receipts[':receipt_id'].content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetExpensesExpenseIdReceiptsReceiptIdContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetExpensesExpenseIdReceiptsReceiptIdContentKey(args)
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
                (typeof client.expenses)[':expense_id']['receipts'][':receipt_id']['content']['$get']
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
          client.expenses[':expense_id'].receipts[':receipt_id'].content.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetLabelGroupsKey(
  args: InferRequestType<(typeof client)['label-groups']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['label-groups', '/label-groups', keyArgs] as const
}

export function useGetLabelGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['label-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['label-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelGroups<TError = unknown>(
  args: InferRequestType<(typeof client)['label-groups']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetLabelGroupsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['label-groups'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLabelGroupsKey() {
  return ['label-groups', '/label-groups', 'POST'] as const
}

export function usePostLabelGroups<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['label-groups']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['label-groups']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLabelGroupsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['label-groups']['$post']> },
      ) => parseResponse(client['label-groups'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLabelGroupsGroupIdKey(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['label-groups', '/label-groups/:group_id', keyArgs] as const
}

export function useGetLabelGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLabelGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['label-groups'][':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelGroupsGroupId<TError = unknown>(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLabelGroupsGroupIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['label-groups'][':group_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteLabelGroupsGroupIdKey() {
  return ['label-groups', '/label-groups/:group_id', 'DELETE'] as const
}

export function useDeleteLabelGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['label-groups'][':group_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLabelGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['label-groups'][':group_id']['$delete']> },
      ) => parseResponse(client['label-groups'][':group_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchLabelGroupsGroupIdKey() {
  return ['label-groups', '/label-groups/:group_id', 'PATCH'] as const
}

export function usePatchLabelGroupsGroupId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['label-groups'][':group_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLabelGroupsGroupIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['label-groups'][':group_id']['$patch']> },
      ) => parseResponse(client['label-groups'][':group_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetLabelGroupsGroupIdLabelsKey(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['label-groups', '/label-groups/:group_id/labels', keyArgs] as const
}

export function useGetLabelGroupsGroupIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLabelGroupsGroupIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['label-groups'][':group_id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetLabelGroupsGroupIdLabels<TError = unknown>(
  args: InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetLabelGroupsGroupIdLabelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['label-groups'][':group_id'].labels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostLabelGroupsGroupIdLabelsKey() {
  return ['label-groups', '/label-groups/:group_id/labels', 'POST'] as const
}

export function usePostLabelGroupsGroupIdLabels<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['label-groups'][':group_id']['labels']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostLabelGroupsGroupIdLabelsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['label-groups'][':group_id']['labels']['$post']>
        },
      ) => parseResponse(client['label-groups'][':group_id'].labels.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteLabelGroupsGroupIdLabelsLabelIdKey() {
  return ['label-groups', '/label-groups/:group_id/labels/:label_id', 'DELETE'] as const
}

export function useDeleteLabelGroupsGroupIdLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['label-groups'][':group_id']['labels'][':label_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteLabelGroupsGroupIdLabelsLabelIdKey()
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
            (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['label-groups'][':group_id'].labels[':label_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchLabelGroupsGroupIdLabelsLabelIdKey() {
  return ['label-groups', '/label-groups/:group_id/labels/:label_id', 'PATCH'] as const
}

export function usePatchLabelGroupsGroupIdLabelsLabelId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['label-groups'][':group_id']['labels'][':label_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchLabelGroupsGroupIdLabelsLabelIdKey()
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
            (typeof client)['label-groups'][':group_id']['labels'][':label_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['label-groups'][':group_id'].labels[':label_id'].$patch(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentDraftsKey(
  args: InferRequestType<(typeof client)['payment-drafts']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-drafts', '/payment-drafts', keyArgs] as const
}

export function useGetPaymentDrafts<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-drafts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentDraftsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payment-drafts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentDrafts<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-drafts']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentDraftsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payment-drafts'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentDraftsKey() {
  return ['payment-drafts', '/payment-drafts', 'POST'] as const
}

export function usePostPaymentDrafts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payment-drafts']['$post']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['payment-drafts']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentDraftsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['payment-drafts']['$post']> },
      ) => parseResponse(client['payment-drafts'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentDraftsPaymentDraftIdKey(
  args: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payment-drafts', '/payment-drafts/:payment_draft_id', keyArgs] as const
}

export function useGetPaymentDraftsPaymentDraftId<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentDraftsPaymentDraftIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['payment-drafts'][':payment_draft_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentDraftsPaymentDraftId<TError = unknown>(
  args: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentDraftsPaymentDraftIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['payment-drafts'][':payment_draft_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeletePaymentDraftsPaymentDraftIdKey() {
  return ['payment-drafts', '/payment-drafts/:payment_draft_id', 'DELETE'] as const
}

export function useDeletePaymentDraftsPaymentDraftId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePaymentDraftsPaymentDraftIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$delete']>
        },
      ) => parseResponse(client['payment-drafts'][':payment_draft_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchPaymentDraftsPaymentDraftIdKey() {
  return ['payment-drafts', '/payment-drafts/:payment_draft_id', 'PATCH'] as const
}

export function usePatchPaymentDraftsPaymentDraftId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payment-drafts'][':payment_draft_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPaymentDraftsPaymentDraftIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['$patch']>
        },
      ) => parseResponse(client['payment-drafts'][':payment_draft_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentDraftsPaymentDraftIdPaymentsKey() {
  return ['payment-drafts', '/payment-drafts/:payment_draft_id/payments', 'POST'] as const
}

export function usePostPaymentDraftsPaymentDraftIdPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['payment-drafts'][':payment_draft_id']['payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentDraftsPaymentDraftIdPaymentsKey()
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
            (typeof client)['payment-drafts'][':payment_draft_id']['payments']['$post']
          >
        },
      ) =>
        parseResponse(
          client['payment-drafts'][':payment_draft_id'].payments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePaymentDraftsPaymentDraftIdPaymentsPaymentIdKey() {
  return [
    'payment-drafts',
    '/payment-drafts/:payment_draft_id/payments/:payment_id',
    'DELETE',
  ] as const
}

export function useDeletePaymentDraftsPaymentDraftIdPaymentsPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePaymentDraftsPaymentDraftIdPaymentsPaymentIdKey()
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
            (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['payment-drafts'][':payment_draft_id'].payments[':payment_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchPaymentDraftsPaymentDraftIdPaymentsPaymentIdKey() {
  return [
    'payment-drafts',
    '/payment-drafts/:payment_draft_id/payments/:payment_id',
    'PATCH',
  ] as const
}

export function usePatchPaymentDraftsPaymentDraftIdPaymentsPaymentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchPaymentDraftsPaymentDraftIdPaymentsPaymentIdKey()
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
            (typeof client)['payment-drafts'][':payment_draft_id']['payments'][':payment_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client['payment-drafts'][':payment_draft_id'].payments[':payment_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPayoutLinksKey(
  args: InferRequestType<(typeof client)['payout-links']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payout-links', '/payout-links', keyArgs] as const
}

export function useGetPayoutLinks<TError = unknown>(
  args: InferRequestType<(typeof client)['payout-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPayoutLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payout-links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayoutLinks<TError = unknown>(
  args: InferRequestType<(typeof client)['payout-links']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPayoutLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['payout-links'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPayoutLinksKey() {
  return ['payout-links', '/payout-links', 'POST'] as const
}

export function usePostPayoutLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['payout-links']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['payout-links']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['payout-links']['$post']> },
      ) => parseResponse(client['payout-links'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPayoutLinksPayoutLinkIdKey(
  args: InferRequestType<(typeof client)['payout-links'][':payout_link_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['payout-links', '/payout-links/:payout_link_id', keyArgs] as const
}

export function useGetPayoutLinksPayoutLinkId<TError = unknown>(
  args: InferRequestType<(typeof client)['payout-links'][':payout_link_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payout-links'][':payout_link_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPayoutLinksPayoutLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payout-links'][':payout_link_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['payout-links'][':payout_link_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPayoutLinksPayoutLinkId<TError = unknown>(
  args: InferRequestType<(typeof client)['payout-links'][':payout_link_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payout-links'][':payout_link_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPayoutLinksPayoutLinkIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['payout-links'][':payout_link_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['payout-links'][':payout_link_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPayoutLinksPayoutLinkIdCancelKey() {
  return ['payout-links', '/payout-links/:payout_link_id/cancel', 'POST'] as const
}

export function usePostPayoutLinksPayoutLinkIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['payout-links'][':payout_link_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayoutLinksPayoutLinkIdCancelKey()
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
            (typeof client)['payout-links'][':payout_link_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(client['payout-links'][':payout_link_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTransactionsIdActionKey() {
  return ['sandbox', '/sandbox/transactions/:id/:action', 'POST'] as const
}

export function usePostSandboxTransactionsIdAction<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.sandbox.transactions)[':id'][':action']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.sandbox.transactions)[':id'][':action']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTransactionsIdActionKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.sandbox.transactions)[':id'][':action']['$post']>
        },
      ) => parseResponse(client.sandbox.transactions[':id'][':action'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostSandboxTopupKey() {
  return ['sandbox', '/sandbox/topup', 'POST'] as const
}

export function usePostSandboxTopup<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.topup.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.sandbox.topup.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostSandboxTopupKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.sandbox.topup.$post> }) =>
        parseResponse(client.sandbox.topup.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaxRatesKey(args: InferRequestType<(typeof client)['tax-rates']['$get']>) {
  const { header: _, ...keyArgs } = args
  return ['tax-rates', '/tax-rates', keyArgs] as const
}

export function useGetTaxRates<TError = unknown>(
  args: InferRequestType<(typeof client)['tax-rates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tax-rates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxRates<TError = unknown>(
  args: InferRequestType<(typeof client)['tax-rates']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTaxRatesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$get']>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tax-rates'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTaxRatesKey() {
  return ['tax-rates', '/tax-rates', 'POST'] as const
}

export function usePostTaxRates<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['tax-rates']['$post']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['tax-rates']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTaxRatesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client)['tax-rates']['$post']> }) =>
        parseResponse(client['tax-rates'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTaxRatesTaxRateIdKey(
  args: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['tax-rates', '/tax-rates/:tax_rate_id', keyArgs] as const
}

export function useGetTaxRatesTaxRateId<TError = unknown>(
  args: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxRatesTaxRateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tax-rates'][':tax_rate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTaxRatesTaxRateId<TError = unknown>(
  args: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTaxRatesTaxRateIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['tax-rates'][':tax_rate_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTaxRatesTaxRateIdKey() {
  return ['tax-rates', '/tax-rates/:tax_rate_id', 'DELETE'] as const
}

export function useDeleteTaxRatesTaxRateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTaxRatesTaxRateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$delete']> },
      ) => parseResponse(client['tax-rates'][':tax_rate_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchTaxRatesTaxRateIdKey() {
  return ['tax-rates', '/tax-rates/:tax_rate_id', 'PATCH'] as const
}

export function usePatchTaxRatesTaxRateId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['tax-rates'][':tax_rate_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchTaxRatesTaxRateIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['tax-rates'][':tax_rate_id']['$patch']> },
      ) => parseResponse(client['tax-rates'][':tax_rate_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamMembersKey(
  args: InferRequestType<(typeof client)['team-members']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team-members', '/team-members', keyArgs] as const
}

export function useGetTeamMembers<TError = unknown>(
  args: InferRequestType<(typeof client)['team-members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team-members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamMembers<TError = unknown>(
  args: InferRequestType<(typeof client)['team-members']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTeamMembersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['team-members'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostTeamMembersKey() {
  return ['team-members', '/team-members', 'POST'] as const
}

export function usePostTeamMembers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['team-members']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client)['team-members']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamMembersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client)['team-members']['$post']> },
      ) => parseResponse(client['team-members'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTeamMembersTeamMemberIdKey(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['team-members', '/team-members/:team_member_id', keyArgs] as const
}

export function useGetTeamMembersTeamMemberId<TError = unknown>(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamMembersTeamMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['team-members'][':team_member_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTeamMembersTeamMemberId<TError = unknown>(
  args: InferRequestType<(typeof client)['team-members'][':team_member_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTeamMembersTeamMemberIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client['team-members'][':team_member_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteTeamMembersTeamMemberIdKey() {
  return ['team-members', '/team-members/:team_member_id', 'DELETE'] as const
}

export function useDeleteTeamMembersTeamMemberId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamMembersTeamMemberIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client)['team-members'][':team_member_id']['$delete']> },
      ) => parseResponse(client['team-members'][':team_member_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutTeamMembersTeamMemberIdDepartmentKey() {
  return ['team-members', '/team-members/:team_member_id/department', 'PUT'] as const
}

export function usePutTeamMembersTeamMemberIdDepartment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['department']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamMembersTeamMemberIdDepartmentKey()
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
            (typeof client)['team-members'][':team_member_id']['department']['$put']
          >
        },
      ) =>
        parseResponse(
          client['team-members'][':team_member_id'].department.$put(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamMembersTeamMemberIdDepartmentKey() {
  return ['team-members', '/team-members/:team_member_id/department', 'DELETE'] as const
}

export function useDeleteTeamMembersTeamMemberIdDepartment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['department']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamMembersTeamMemberIdDepartmentKey()
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
            (typeof client)['team-members'][':team_member_id']['department']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['team-members'][':team_member_id'].department.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutTeamMembersTeamMemberIdManagerKey() {
  return ['team-members', '/team-members/:team_member_id/manager', 'PUT'] as const
}

export function usePutTeamMembersTeamMemberIdManager<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['manager']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamMembersTeamMemberIdManagerKey()
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
            (typeof client)['team-members'][':team_member_id']['manager']['$put']
          >
        },
      ) =>
        parseResponse(client['team-members'][':team_member_id'].manager.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteTeamMembersTeamMemberIdManagerKey() {
  return ['team-members', '/team-members/:team_member_id/manager', 'DELETE'] as const
}

export function useDeleteTeamMembersTeamMemberIdManager<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['manager']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteTeamMembersTeamMemberIdManagerKey()
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
            (typeof client)['team-members'][':team_member_id']['manager']['$delete']
          >
        },
      ) =>
        parseResponse(
          client['team-members'][':team_member_id'].manager.$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPutTeamMembersTeamMemberIdRoleKey() {
  return ['team-members', '/team-members/:team_member_id/role', 'PUT'] as const
}

export function usePutTeamMembersTeamMemberIdRole<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['team-members'][':team_member_id']['role']['$put']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['role']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutTeamMembersTeamMemberIdRoleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client)['team-members'][':team_member_id']['role']['$put']>
        },
      ) => parseResponse(client['team-members'][':team_member_id'].role.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTeamMembersTeamMemberIdSuspendKey() {
  return ['team-members', '/team-members/:team_member_id/suspend', 'POST'] as const
}

export function usePostTeamMembersTeamMemberIdSuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['suspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamMembersTeamMemberIdSuspendKey()
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
            (typeof client)['team-members'][':team_member_id']['suspend']['$post']
          >
        },
      ) =>
        parseResponse(client['team-members'][':team_member_id'].suspend.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTeamMembersTeamMemberIdUnsuspendKey() {
  return ['team-members', '/team-members/:team_member_id/unsuspend', 'POST'] as const
}

export function usePostTeamMembersTeamMemberIdUnsuspend<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client)['team-members'][':team_member_id']['unsuspend']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTeamMembersTeamMemberIdUnsuspendKey()
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
            (typeof client)['team-members'][':team_member_id']['unsuspend']['$post']
          >
        },
      ) =>
        parseResponse(
          client['team-members'][':team_member_id'].unsuspend.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetRolesKey(args: InferRequestType<typeof client.roles.$get>) {
  const { header: _, ...keyArgs } = args
  return ['roles', '/roles', keyArgs] as const
}

export function useGetRoles<TError = unknown>(
  args: InferRequestType<typeof client.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.roles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetRoles<TError = unknown>(
  args: InferRequestType<typeof client.roles.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRolesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.roles.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.roles.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetDepartmentsKey(args: InferRequestType<typeof client.departments.$get>) {
  const { header: _, ...keyArgs } = args
  return ['departments', '/departments', keyArgs] as const
}

export function useGetDepartments<TError = unknown>(
  args: InferRequestType<typeof client.departments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDepartmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.departments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDepartments<TError = unknown>(
  args: InferRequestType<typeof client.departments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDepartmentsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.departments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDepartmentsKey() {
  return ['departments', '/departments', 'POST'] as const
}

export function usePostDepartments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.departments.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.departments.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDepartmentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.departments.$post> }) =>
        parseResponse(client.departments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDepartmentsDepartmentIdKey(
  args: InferRequestType<(typeof client.departments)[':department_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['departments', '/departments/:department_id', keyArgs] as const
}

export function useGetDepartmentsDepartmentId<TError = unknown>(
  args: InferRequestType<(typeof client.departments)[':department_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.departments)[':department_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDepartmentsDepartmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.departments)[':department_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.departments[':department_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDepartmentsDepartmentId<TError = unknown>(
  args: InferRequestType<(typeof client.departments)[':department_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.departments)[':department_id']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDepartmentsDepartmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.departments)[':department_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.departments[':department_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteDepartmentsDepartmentIdKey() {
  return ['departments', '/departments/:department_id', 'DELETE'] as const
}

export function useDeleteDepartmentsDepartmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.departments)[':department_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.departments)[':department_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteDepartmentsDepartmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.departments)[':department_id']['$delete']> },
      ) => parseResponse(client.departments[':department_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchDepartmentsDepartmentIdKey() {
  return ['departments', '/departments/:department_id', 'PATCH'] as const
}

export function usePatchDepartmentsDepartmentId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.departments)[':department_id']['$patch']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.departments)[':department_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchDepartmentsDepartmentIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.departments)[':department_id']['$patch']> },
      ) => parseResponse(client.departments[':department_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransactionsKey(args: InferRequestType<typeof client.transactions.$get>) {
  const { header: _, ...keyArgs } = args
  return ['transactions', '/transactions', keyArgs] as const
}

export function useGetTransactions<TError = unknown>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactions<TError = unknown>(
  args: InferRequestType<typeof client.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transactions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTransactionIdKey(
  args: InferRequestType<(typeof client.transaction)[':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transaction', '/transaction/:id', keyArgs] as const
}

export function useGetTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.transaction)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transaction[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.transaction)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTransactionIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.transaction)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.transaction[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPayKey() {
  return ['pay', '/pay', 'POST'] as const
}

export function usePostPay<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pay.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pay.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pay.$post> }) =>
        parseResponse(client.pay.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPayIndicativeQuoteKey() {
  return ['pay', '/pay/indicative-quote', 'POST'] as const
}

export function usePostPayIndicativeQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pay)['indicative-quote']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pay)['indicative-quote']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayIndicativeQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pay)['indicative-quote']['$post']> },
      ) => parseResponse(client.pay['indicative-quote'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostPayFieldsKey() {
  return ['pay', '/pay/fields', 'POST'] as const
}

export function usePostPayFields<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pay.fields.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.pay.fields.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPayFieldsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.pay.fields.$post> }) =>
        parseResponse(client.pay.fields.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostTransferKey() {
  return ['transfer', '/transfer', 'POST'] as const
}

export function usePostTransfer<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.transfer.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.transfer.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostTransferKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.transfer.$post> }) =>
        parseResponse(client.transfer.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetTransferReasonsKey(
  args: InferRequestType<(typeof client)['transfer-reasons']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['transfer-reasons', '/transfer-reasons', keyArgs] as const
}

export function useGetTransferReasons<TError = unknown>(
  args: InferRequestType<(typeof client)['transfer-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransferReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['transfer-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTransferReasons<TError = unknown>(
  args: InferRequestType<(typeof client)['transfer-reasons']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetTransferReasonsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client)['transfer-reasons']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client['transfer-reasons'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetWebhookKey(args: InferRequestType<typeof client.webhook.$get>) {
  const { header: _, ...keyArgs } = args
  return ['webhook', '/webhook', keyArgs] as const
}

export function useGetWebhook<TError = unknown>(
  args: InferRequestType<typeof client.webhook.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhookKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhook.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWebhook<TError = unknown>(
  args: InferRequestType<typeof client.webhook.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhookKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhook.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostWebhookKey() {
  return ['webhook', '/webhook', 'POST'] as const
}

export function usePostWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$post>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.webhook.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhook.$post> }) =>
        parseResponse(client.webhook.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteWebhookKey() {
  return ['webhook', '/webhook', 'DELETE'] as const
}

export function useDeleteWebhook<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhook.$delete>>>>>
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.webhook.$delete>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhookKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhook.$delete> }) =>
        parseResponse(client.webhook.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksKey(args: InferRequestType<typeof client.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['webhooks', '/webhooks', keyArgs] as const
}

export function useGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.webhooks.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostWebhooksKey() {
  return ['webhooks', '/webhooks', 'POST'] as const
}

export function usePostWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.webhooks.$post> }) =>
        parseResponse(client.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhooks', '/webhooks/:webhook_id', keyArgs] as const
}

export function useGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhook_id']['$delete']> },
      ) => parseResponse(client.webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchWebhooksWebhookIdKey() {
  return ['webhooks', '/webhooks/:webhook_id', 'PATCH'] as const
}

export function usePatchWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.webhooks)[':webhook_id']['$patch']> },
      ) => parseResponse(client.webhooks[':webhook_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostWebhooksWebhookIdRotateSigningSecretKey() {
  return ['webhooks', '/webhooks/:webhook_id/rotate-signing-secret', 'POST'] as const
}

export function usePostWebhooksWebhookIdRotateSigningSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.webhooks)[':webhook_id']['rotate-signing-secret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostWebhooksWebhookIdRotateSigningSecretKey()
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
            (typeof client.webhooks)[':webhook_id']['rotate-signing-secret']['$post']
          >
        },
      ) =>
        parseResponse(
          client.webhooks[':webhook_id']['rotate-signing-secret'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetWebhooksWebhookIdFailedEventsKey(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['webhooks', '/webhooks/:webhook_id/failed-events', keyArgs] as const
}

export function useGetWebhooksWebhookIdFailedEvents<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookIdFailedEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhooks[':webhook_id']['failed-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetWebhooksWebhookIdFailedEvents<TError = unknown>(
  args: InferRequestType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>>
          >
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetWebhooksWebhookIdFailedEventsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.webhooks)[':webhook_id']['failed-events']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.webhooks[':webhook_id']['failed-events'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
