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

export function getAccountAccessConsentsKey() {
  return ['account-access-consents'] as const
}

export function getAccountsKey() {
  return ['accounts'] as const
}

export function getPartyKey() {
  return ['party'] as const
}

export function getSandboxKey() {
  return ['sandbox'] as const
}

export function getPostAccountAccessConsentsMutationKey() {
  return ['account-access-consents', '/account-access-consents', 'POST'] as const
}

export function getPostAccountAccessConsentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account-access-consents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client)['account-access-consents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostAccountAccessConsentsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client)['account-access-consents']['$post']>) {
      return parseResponse(client['account-access-consents'].$post(args, options))
    },
  })
}

export function injectPostAccountAccessConsents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['account-access-consents']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client)['account-access-consents']['$post']>,
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
    const mutationDefaults = getPostAccountAccessConsentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getAccountAccessConsentsConsentIdQueryKey(
  args: InferRequestType<(typeof client)['account-access-consents'][':consentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account-access-consents', '/account-access-consents/:consentId', keyArgs] as const
}

export function getAccountAccessConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account-access-consents'][':consentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account-access-consents'][':consentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account-access-consents'][':consentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountAccessConsentsConsentIdQueryKey>
  >({
    queryKey: getAccountAccessConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['account-access-consents'][':consentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountAccessConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account-access-consents'][':consentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['account-access-consents'][':consentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['account-access-consents'][':consentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountAccessConsentsConsentIdQueryKey>
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
      ...getAccountAccessConsentsConsentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteAccountAccessConsentsConsentIdMutationKey() {
  return ['account-access-consents', '/account-access-consents/:consentId', 'DELETE'] as const
}

export function getDeleteAccountAccessConsentsConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account-access-consents'][':consentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['account-access-consents'][':consentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountAccessConsentsConsentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['account-access-consents'][':consentId']['$delete']>,
    ) {
      return parseResponse(client['account-access-consents'][':consentId'].$delete(args, options))
    },
  })
}

export function injectDeleteAccountAccessConsentsConsentId<
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
                  ReturnType<(typeof client)['account-access-consents'][':consentId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['account-access-consents'][':consentId']['$delete']>,
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
    const mutationDefaults = getDeleteAccountAccessConsentsConsentIdMutationOptions<
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
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId', keyArgs] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].$get(args, {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['$get']>>
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

export function getAccountsAccountIdBalancesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['balances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/balances', keyArgs] as const
}

export function getAccountsAccountIdBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBalancesQueryKey>
  >({
    queryKey: getAccountsAccountIdBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['balances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['balances']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdBalancesQueryKey>
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
      ...getAccountsAccountIdBalancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdBeneficiariesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['beneficiaries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/beneficiaries', keyArgs] as const
}

export function getAccountsAccountIdBeneficiariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['beneficiaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['beneficiaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['beneficiaries']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdBeneficiariesQueryKey>
  >({
    queryKey: getAccountsAccountIdBeneficiariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].beneficiaries.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdBeneficiaries<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['beneficiaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['beneficiaries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['beneficiaries']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdBeneficiariesQueryKey>
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
      ...getAccountsAccountIdBeneficiariesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdPartiesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['parties']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/parties', keyArgs] as const
}

export function getAccountsAccountIdPartiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['parties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['parties']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['parties']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdPartiesQueryKey>
  >({
    queryKey: getAccountsAccountIdPartiesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].parties.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdParties<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['parties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['parties']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['parties']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdPartiesQueryKey>
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
      ...getAccountsAccountIdPartiesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdPartyQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['party']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/party', keyArgs] as const
}

export function getAccountsAccountIdPartyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['party']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['party']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['party']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdPartyQueryKey>
  >({
    queryKey: getAccountsAccountIdPartyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].party.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdParty<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['party']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['party']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['party']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdPartyQueryKey>
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
      ...getAccountsAccountIdPartyQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdScheduledPaymentsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['scheduled-payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/scheduled-payments', keyArgs] as const
}

export function getAccountsAccountIdScheduledPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['scheduled-payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['scheduled-payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['scheduled-payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdScheduledPaymentsQueryKey>
  >({
    queryKey: getAccountsAccountIdScheduledPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId']['scheduled-payments'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdScheduledPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['scheduled-payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['scheduled-payments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.accounts)[':accountId']['scheduled-payments']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdScheduledPaymentsQueryKey>
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
      ...getAccountsAccountIdScheduledPaymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdStandingOrdersQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['standing-orders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/standing-orders', keyArgs] as const
}

export function getAccountsAccountIdStandingOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['standing-orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['standing-orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['standing-orders']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdStandingOrdersQueryKey>
  >({
    queryKey: getAccountsAccountIdStandingOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId']['standing-orders'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdStandingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['standing-orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['standing-orders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['standing-orders']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdStandingOrdersQueryKey>
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
      ...getAccountsAccountIdStandingOrdersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdStatementsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['statements']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/statements', keyArgs] as const
}

export function getAccountsAccountIdStatementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['statements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['statements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['statements']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdStatementsQueryKey>
  >({
    queryKey: getAccountsAccountIdStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].statements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdStatements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['statements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['statements']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['statements']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdStatementsQueryKey>
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
      ...getAccountsAccountIdStatementsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdStatementsStatementIdQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/statements/:statementId', keyArgs] as const
}

export function getAccountsAccountIdStatementsStatementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':accountId']['statements'][':statementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':accountId']['statements'][':statementId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdStatementsStatementIdQueryKey>
  >({
    queryKey: getAccountsAccountIdStatementsStatementIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].statements[':statementId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdStatementsStatementId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':accountId']['statements'][':statementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['statements'][':statementId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdStatementsStatementIdQueryKey>
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
      ...getAccountsAccountIdStatementsStatementIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdStatementsStatementIdFileQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['file']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/statements/:statementId/file', keyArgs] as const
}

export function getAccountsAccountIdStatementsStatementIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['statements'][':statementId']['file']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['statements'][':statementId']['file']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdStatementsStatementIdFileQueryKey>
  >({
    queryKey: getAccountsAccountIdStatementsStatementIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].statements[':statementId'].file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdStatementsStatementIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['statements'][':statementId']['file']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['file']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['statements'][':statementId']['file']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdStatementsStatementIdFileQueryKey>
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
      ...getAccountsAccountIdStatementsStatementIdFileQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdStatementsStatementIdTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['transactions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/statements/:statementId/transactions', keyArgs] as const
}

export function getAccountsAccountIdStatementsStatementIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['statements'][':statementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':accountId']['statements'][':statementId']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdStatementsStatementIdTransactionsQueryKey>
  >({
    queryKey: getAccountsAccountIdStatementsStatementIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].statements[':statementId'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdStatementsStatementIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':accountId']['statements'][':statementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':accountId']['statements'][':statementId']['transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':accountId']['statements'][':statementId']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdStatementsStatementIdTransactionsQueryKey>
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
      ...getAccountsAccountIdStatementsStatementIdTransactionsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdTransactionsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':accountId']['transactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:accountId/transactions', keyArgs] as const
}

export function getAccountsAccountIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':accountId']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':accountId']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdTransactionsQueryKey>
  >({
    queryKey: getAccountsAccountIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':accountId'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':accountId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':accountId']['transactions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':accountId']['transactions']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdTransactionsQueryKey>
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
      ...getAccountsAccountIdTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPartyQueryKey(args: InferRequestType<typeof client.party.$get>) {
  const { header: _, ...keyArgs } = args
  return ['party', '/party', keyArgs] as const
}

export function getPartyQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.party.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.party.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.party.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getPartyQueryKey>
  >({
    queryKey: getPartyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.party.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectParty<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.party.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.party.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.party.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getPartyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPartyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPutSandboxMutationKey() {
  return ['sandbox', '/sandbox', 'PUT'] as const
}

export function getPutSandboxMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$put>>>>>
    | undefined,
    TError,
    InferRequestType<typeof client.sandbox.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutSandboxMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.$put>) {
      return parseResponse(client.sandbox.$put(args, options))
    },
  })
}

export function injectPutSandbox<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$put>>>>>
        | undefined,
        TError,
        InferRequestType<typeof client.sandbox.$put>,
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
    const mutationDefaults = getPutSandboxMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostSandboxMutationKey() {
  return ['sandbox', '/sandbox', 'POST'] as const
}

export function getPostSandboxMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$post>>>>>,
    TError,
    InferRequestType<typeof client.sandbox.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostSandboxMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.sandbox.$post>) {
      return parseResponse(client.sandbox.$post(args, options))
    },
  })
}

export function injectPostSandbox<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.sandbox.$post>>>>>,
        TError,
        InferRequestType<typeof client.sandbox.$post>,
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
    const mutationDefaults = getPostSandboxMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getSandboxSandboxIdQueryKey(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['$get']>,
) {
  return ['sandbox', '/sandbox/:sandboxId', args] as const
}

export function getSandboxSandboxIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.sandbox)[':sandboxId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getSandboxSandboxIdQueryKey>
  >({
    queryKey: getSandboxSandboxIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.sandbox[':sandboxId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectSandboxSandboxId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.sandbox)[':sandboxId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSandboxSandboxIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSandboxSandboxIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDeleteSandboxSandboxIdMutationKey() {
  return ['sandbox', '/sandbox/:sandboxId', 'DELETE'] as const
}

export function getDeleteSandboxSandboxIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.sandbox)[':sandboxId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteSandboxSandboxIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.sandbox)[':sandboxId']['$delete']>) {
      return parseResponse(client.sandbox[':sandboxId'].$delete(args, options))
    },
  })
}

export function injectDeleteSandboxSandboxId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.sandbox)[':sandboxId']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.sandbox)[':sandboxId']['$delete']>,
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
    const mutationDefaults = getDeleteSandboxSandboxIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
