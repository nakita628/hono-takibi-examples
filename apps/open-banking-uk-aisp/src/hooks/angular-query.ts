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

export function getBalancesKey() {
  return ['balances'] as const
}

export function getBeneficiariesKey() {
  return ['beneficiaries'] as const
}

export function getDirectDebitsKey() {
  return ['direct-debits'] as const
}

export function getOffersKey() {
  return ['offers'] as const
}

export function getPartyKey() {
  return ['party'] as const
}

export function getProductsKey() {
  return ['products'] as const
}

export function getScheduledPaymentsKey() {
  return ['scheduled-payments'] as const
}

export function getStandingOrdersKey() {
  return ['standing-orders'] as const
}

export function getStatementsKey() {
  return ['statements'] as const
}

export function getTransactionsKey() {
  return ['transactions'] as const
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
  args: InferRequestType<(typeof client)['account-access-consents'][':ConsentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['account-access-consents', '/account-access-consents/:ConsentId', keyArgs] as const
}

export function getAccountAccessConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client)['account-access-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['account-access-consents'][':ConsentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client)['account-access-consents'][':ConsentId']['$get']>>
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
        client['account-access-consents'][':ConsentId'].$get(args, {
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
        Awaited<ReturnType<(typeof client)['account-access-consents'][':ConsentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['account-access-consents'][':ConsentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client)['account-access-consents'][':ConsentId']['$get']>>
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
  return ['account-access-consents', '/account-access-consents/:ConsentId', 'DELETE'] as const
}

export function getDeleteAccountAccessConsentsConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client)['account-access-consents'][':ConsentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client)['account-access-consents'][':ConsentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteAccountAccessConsentsConsentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client)['account-access-consents'][':ConsentId']['$delete']>,
    ) {
      return parseResponse(client['account-access-consents'][':ConsentId'].$delete(args, options))
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
                  ReturnType<(typeof client)['account-access-consents'][':ConsentId']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client)['account-access-consents'][':ConsentId']['$delete']>,
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
  args: InferRequestType<(typeof client.accounts)[':AccountId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId', keyArgs] as const
}

export function getAccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':AccountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':AccountId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdQueryKey>
  >({
    queryKey: getAccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AccountId'].$get(args, {
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
      typeof parseResponse<Awaited<ReturnType<(typeof client.accounts)[':AccountId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['$get']>>
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
  args: InferRequestType<(typeof client.accounts)[':AccountId']['balances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/balances', keyArgs] as const
}

export function getAccountsAccountIdBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['balances']['$get']>>
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
        client.accounts[':AccountId'].balances.$get(args, {
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
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['balances']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['balances']['$get']>>
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
  args: InferRequestType<(typeof client.accounts)[':AccountId']['beneficiaries']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/beneficiaries', keyArgs] as const
}

export function getAccountsAccountIdBeneficiariesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['beneficiaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['beneficiaries']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['beneficiaries']['$get']>>
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
        client.accounts[':AccountId'].beneficiaries.$get(args, {
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
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['beneficiaries']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['beneficiaries']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['beneficiaries']['$get']>>
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

export function getAccountsAccountIdDirectDebitsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['direct-debits']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/direct-debits', keyArgs] as const
}

export function getAccountsAccountIdDirectDebitsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['direct-debits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['direct-debits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['direct-debits']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdDirectDebitsQueryKey>
  >({
    queryKey: getAccountsAccountIdDirectDebitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AccountId']['direct-debits'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdDirectDebits<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['direct-debits']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['direct-debits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['direct-debits']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdDirectDebitsQueryKey>
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
      ...getAccountsAccountIdDirectDebitsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdOffersQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['offers']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/offers', keyArgs] as const
}

export function getAccountsAccountIdOffersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['offers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['offers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['offers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdOffersQueryKey>
  >({
    queryKey: getAccountsAccountIdOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AccountId'].offers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdOffers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['offers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['offers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['offers']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdOffersQueryKey>
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
      ...getAccountsAccountIdOffersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdPartiesQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['parties']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/parties', keyArgs] as const
}

export function getAccountsAccountIdPartiesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['parties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['parties']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['parties']['$get']>>
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
        client.accounts[':AccountId'].parties.$get(args, {
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
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['parties']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['parties']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['parties']['$get']>>
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
  args: InferRequestType<(typeof client.accounts)[':AccountId']['party']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/party', keyArgs] as const
}

export function getAccountsAccountIdPartyQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['party']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['party']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['party']['$get']>>
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
        client.accounts[':AccountId'].party.$get(args, {
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
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['party']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['party']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['party']['$get']>>
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

export function getAccountsAccountIdProductQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['product']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/product', keyArgs] as const
}

export function getAccountsAccountIdProductQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['product']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['product']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['product']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getAccountsAccountIdProductQueryKey>
  >({
    queryKey: getAccountsAccountIdProductQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.accounts[':AccountId'].product.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectAccountsAccountIdProduct<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['product']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['product']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['product']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getAccountsAccountIdProductQueryKey>
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
      ...getAccountsAccountIdProductQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getAccountsAccountIdScheduledPaymentsQueryKey(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['scheduled-payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/scheduled-payments', keyArgs] as const
}

export function getAccountsAccountIdScheduledPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['scheduled-payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['scheduled-payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['scheduled-payments']['$get']>>
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
        client.accounts[':AccountId']['scheduled-payments'].$get(args, {
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
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['scheduled-payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':AccountId']['scheduled-payments']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.accounts)[':AccountId']['scheduled-payments']['$get']>
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
  args: InferRequestType<(typeof client.accounts)[':AccountId']['standing-orders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/standing-orders', keyArgs] as const
}

export function getAccountsAccountIdStandingOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['standing-orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['standing-orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['standing-orders']['$get']>>
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
        client.accounts[':AccountId']['standing-orders'].$get(args, {
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
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['standing-orders']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['standing-orders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['standing-orders']['$get']>>
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
  args: InferRequestType<(typeof client.accounts)[':AccountId']['statements']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/statements', keyArgs] as const
}

export function getAccountsAccountIdStatementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['statements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['statements']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['statements']['$get']>>
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
        client.accounts[':AccountId'].statements.$get(args, {
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
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['statements']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['statements']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['statements']['$get']>>
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
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/statements/:StatementId', keyArgs] as const
}

export function getAccountsAccountIdStatementsStatementIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.accounts)[':AccountId']['statements'][':StatementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.accounts)[':AccountId']['statements'][':StatementId']['$get']>
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
        client.accounts[':AccountId'].statements[':StatementId'].$get(args, {
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
          ReturnType<(typeof client.accounts)[':AccountId']['statements'][':StatementId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':AccountId']['statements'][':StatementId']['$get']
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
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['file']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/statements/:StatementId/file', keyArgs] as const
}

export function getAccountsAccountIdStatementsStatementIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':AccountId']['statements'][':StatementId']['file']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['file']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AccountId']['statements'][':StatementId']['file']['$get']
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
        client.accounts[':AccountId'].statements[':StatementId'].file.$get(args, {
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
            (typeof client.accounts)[':AccountId']['statements'][':StatementId']['file']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['file']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':AccountId']['statements'][':StatementId']['file']['$get']
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
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['transactions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/statements/:StatementId/transactions', keyArgs] as const
}

export function getAccountsAccountIdStatementsStatementIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.accounts)[':AccountId']['statements'][':StatementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.accounts)[':AccountId']['statements'][':StatementId']['transactions']['$get']
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
        client.accounts[':AccountId'].statements[':StatementId'].transactions.$get(args, {
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
            (typeof client.accounts)[':AccountId']['statements'][':StatementId']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.accounts)[':AccountId']['statements'][':StatementId']['transactions']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.accounts)[':AccountId']['statements'][':StatementId']['transactions']['$get']
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
  args: InferRequestType<(typeof client.accounts)[':AccountId']['transactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['accounts', '/accounts/:AccountId/transactions', keyArgs] as const
}

export function getAccountsAccountIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.accounts)[':AccountId']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.accounts)[':AccountId']['transactions']['$get']>>
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
        client.accounts[':AccountId'].transactions.$get(args, {
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
        Awaited<ReturnType<(typeof client.accounts)[':AccountId']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.accounts)[':AccountId']['transactions']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.accounts)[':AccountId']['transactions']['$get']>>
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

export function getBalancesQueryKey(args: InferRequestType<typeof client.balances.$get>) {
  const { header: _, ...keyArgs } = args
  return ['balances', '/balances', keyArgs] as const
}

export function getBalancesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balances.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.balances.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balances.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getBalancesQueryKey>
  >({
    queryKey: getBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.balances.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBalances<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balances.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.balances.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.balances.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getBalancesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBalancesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getBeneficiariesQueryKey(args: InferRequestType<typeof client.beneficiaries.$get>) {
  const { header: _, ...keyArgs } = args
  return ['beneficiaries', '/beneficiaries', keyArgs] as const
}

export function getBeneficiariesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beneficiaries.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.beneficiaries.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beneficiaries.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getBeneficiariesQueryKey>
  >({
    queryKey: getBeneficiariesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.beneficiaries.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectBeneficiaries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beneficiaries.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.beneficiaries.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.beneficiaries.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getBeneficiariesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getBeneficiariesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getDirectDebitsQueryKey(
  args: InferRequestType<(typeof client)['direct-debits']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['direct-debits', '/direct-debits', keyArgs] as const
}

export function getDirectDebitsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['direct-debits']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['direct-debits']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['direct-debits']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDirectDebitsQueryKey>
  >({
    queryKey: getDirectDebitsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['direct-debits'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectDirectDebits<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client)['direct-debits']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['direct-debits']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['direct-debits']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDirectDebitsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDirectDebitsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getOffersQueryKey(args: InferRequestType<typeof client.offers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['offers', '/offers', keyArgs] as const
}

export function getOffersQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.offers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOffersQueryKey>
  >({
    queryKey: getOffersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.offers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectOffers<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.$get>>>>>,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.offers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.offers.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOffersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getOffersQueryOptions<TData, TError>(args(), clientOptions), ...query }
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

export function getProductsQueryKey(args: InferRequestType<typeof client.products.$get>) {
  const { header: _, ...keyArgs } = args
  return ['products', '/products', keyArgs] as const
}

export function getProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getProductsQueryKey>
  >({
    queryKey: getProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.products.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getScheduledPaymentsQueryKey(
  args: InferRequestType<(typeof client)['scheduled-payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['scheduled-payments', '/scheduled-payments', keyArgs] as const
}

export function getScheduledPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['scheduled-payments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['scheduled-payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['scheduled-payments']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getScheduledPaymentsQueryKey>
  >({
    queryKey: getScheduledPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['scheduled-payments'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectScheduledPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['scheduled-payments']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['scheduled-payments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['scheduled-payments']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getScheduledPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getScheduledPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStandingOrdersQueryKey(
  args: InferRequestType<(typeof client)['standing-orders']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['standing-orders', '/standing-orders', keyArgs] as const
}

export function getStandingOrdersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['standing-orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client)['standing-orders']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client)['standing-orders']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getStandingOrdersQueryKey>
  >({
    queryKey: getStandingOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client['standing-orders'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStandingOrders<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client)['standing-orders']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client)['standing-orders']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client)['standing-orders']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getStandingOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStandingOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getStatementsQueryKey(args: InferRequestType<typeof client.statements.$get>) {
  const { header: _, ...keyArgs } = args
  return ['statements', '/statements', keyArgs] as const
}

export function getStatementsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.statements.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getStatementsQueryKey>
  >({
    queryKey: getStatementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.statements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectStatements<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.statements.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.statements.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getStatementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getStatementsQueryOptions<TData, TError>(args(), clientOptions), ...query }
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
