import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/solid-query'
import type {
  UndefinedInitialDataOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/solid-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AccountsQueryKey(args: InferRequestType<typeof client.v1.accounts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts', keyArgs] as const
}

export function getV1AccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.accounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AccountsQueryKey>
  >({
    queryKey: getV1AccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.accounts.$get>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
          >,
          TError,
          TData,
          ReturnType<typeof getV1AccountsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1AccountsAccountIdQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-id', keyArgs] as const
}

export function getV1AccountsAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account-id']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AccountsAccountIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1AccountsAccountIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1AccountsAccountIdBalancesQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-id/balances', keyArgs] as const
}

export function getV1AccountsAccountIdBalancesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdBalancesQueryKey>
  >({
    queryKey: getV1AccountsAccountIdBalancesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account-id'].balances.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountsAccountIdBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AccountsAccountIdBalancesQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdBalancesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AccountsAccountIdTransactionsQueryKey(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-id/transactions', keyArgs] as const
}

export function getV1AccountsAccountIdTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTransactionsQueryKey>
  >({
    queryKey: getV1AccountsAccountIdTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account-id'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountsAccountIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AccountsAccountIdTransactionsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1AccountsAccountIdTransactionsTransactionIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/accounts/:account-id/transactions/:transactionId', keyArgs] as const
}

export function getV1AccountsAccountIdTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTransactionsTransactionIdQueryKey>
  >({
    queryKey: getV1AccountsAccountIdTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.accounts[':account-id'].transactions[':transactionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1AccountsAccountIdTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1AccountsAccountIdTransactionsTransactionIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1AccountsAccountIdTransactionsTransactionIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ConsentsMutationKey() {
  return ['v1', '/v1/consents', 'POST'] as const
}

export function getPostV1ConsentsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.consents.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.consents.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConsentsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.consents.$post>) {
      return parseResponse(client.v1.consents.$post(args, options))
    },
  })
}

export function createPostV1Consents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.consents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.consents.$post>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConsentsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConsentsConsentIdQueryKey(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/consents/:consentId', keyArgs] as const
}

export function getV1ConsentsConsentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConsentsConsentIdQueryKey>
  >({
    queryKey: getV1ConsentsConsentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.consents[':consentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.consents)[':consentId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConsentsConsentIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1ConsentsConsentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteV1ConsentsConsentIdMutationKey() {
  return ['v1', '/v1/consents/:consentId', 'DELETE'] as const
}

export function getDeleteV1ConsentsConsentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.consents)[':consentId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1ConsentsConsentIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.consents)[':consentId']['$delete']>) {
      return parseResponse(client.v1.consents[':consentId'].$delete(args, options))
    },
  })
}

export function createDeleteV1ConsentsConsentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.consents)[':consentId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1ConsentsConsentIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConsentsConsentIdAuthorisationsQueryKey(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/consents/:consentId/authorisations', keyArgs] as const
}

export function getV1ConsentsConsentIdAuthorisationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConsentsConsentIdAuthorisationsQueryKey>
  >({
    queryKey: getV1ConsentsConsentIdAuthorisationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.consents[':consentId'].authorisations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConsentsConsentIdAuthorisations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConsentsConsentIdAuthorisationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConsentsConsentIdAuthorisationsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1ConsentsConsentIdAuthorisationsMutationKey() {
  return ['v1', '/v1/consents/:consentId/authorisations', 'POST'] as const
}

export function getPostV1ConsentsConsentIdAuthorisationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ConsentsConsentIdAuthorisationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$post']>,
    ) {
      return parseResponse(client.v1.consents[':consentId'].authorisations.$post(args, options))
    },
  })
}

export function createPostV1ConsentsConsentIdAuthorisations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1ConsentsConsentIdAuthorisationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryKey(
  args: InferRequestType<
    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/consents/:consentId/authorisations/:authorisationId', keyArgs] as const
}

export function getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryKey>
  >({
    queryKey: getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.consents[':consentId'].authorisations[':authorisationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConsentsConsentIdAuthorisationsAuthorisationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV1ConsentsConsentIdAuthorisationsAuthorisationIdMutationKey() {
  return ['v1', '/v1/consents/:consentId/authorisations/:authorisationId', 'PUT'] as const
}

export function getPutV1ConsentsConsentIdAuthorisationsAuthorisationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1ConsentsConsentIdAuthorisationsAuthorisationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1.consents[':consentId'].authorisations[':authorisationId'].$put(args, options),
      )
    },
  })
}

export function createPutV1ConsentsConsentIdAuthorisationsAuthorisationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutV1ConsentsConsentIdAuthorisationsAuthorisationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1ConsentsConsentIdStatusQueryKey(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/consents/:consentId/status', keyArgs] as const
}

export function getV1ConsentsConsentIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.consents)[':consentId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConsentsConsentIdStatusQueryKey>
  >({
    queryKey: getV1ConsentsConsentIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.consents[':consentId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1ConsentsConsentIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.consents)[':consentId']['status']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1ConsentsConsentIdStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1ConsentsConsentIdStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1FundsConfirmationsMutationKey() {
  return ['v1', '/v1/funds-confirmations', 'POST'] as const
}

export function getPostV1FundsConfirmationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['funds-confirmations']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['funds-confirmations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1FundsConfirmationsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['funds-confirmations']['$post']>) {
      return parseResponse(client.v1['funds-confirmations'].$post(args, options))
    },
  })
}

export function createPostV1FundsConfirmations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['funds-confirmations']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['funds-confirmations']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1FundsConfirmationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostV1SigningBasketsMutationKey() {
  return ['v1', '/v1/signing-baskets', 'POST'] as const
}

export function getPostV1SigningBasketsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['signing-baskets']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['signing-baskets']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SigningBasketsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1)['signing-baskets']['$post']>) {
      return parseResponse(client.v1['signing-baskets'].$post(args, options))
    },
  })
}

export function createPostV1SigningBaskets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['signing-baskets']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)['signing-baskets']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SigningBasketsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SigningBasketsBasketIdQueryKey(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/signing-baskets/:basketId', keyArgs] as const
}

export function getV1SigningBasketsBasketIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SigningBasketsBasketIdQueryKey>
  >({
    queryKey: getV1SigningBasketsBasketIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['signing-baskets'][':basketId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SigningBasketsBasketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1SigningBasketsBasketIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SigningBasketsBasketIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1SigningBasketsBasketIdMutationKey() {
  return ['v1', '/v1/signing-baskets/:basketId', 'DELETE'] as const
}

export function getDeleteV1SigningBasketsBasketIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SigningBasketsBasketIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$delete']>,
    ) {
      return parseResponse(client.v1['signing-baskets'][':basketId'].$delete(args, options))
    },
  })
}

export function createDeleteV1SigningBasketsBasketId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$delete']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1SigningBasketsBasketIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SigningBasketsBasketIdAuthorisationsQueryKey(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/signing-baskets/:basketId/authorisations', keyArgs] as const
}

export function getV1SigningBasketsBasketIdAuthorisationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SigningBasketsBasketIdAuthorisationsQueryKey>
  >({
    queryKey: getV1SigningBasketsBasketIdAuthorisationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['signing-baskets'][':basketId'].authorisations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SigningBasketsBasketIdAuthorisations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1SigningBasketsBasketIdAuthorisationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SigningBasketsBasketIdAuthorisationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1SigningBasketsBasketIdAuthorisationsMutationKey() {
  return ['v1', '/v1/signing-baskets/:basketId/authorisations', 'POST'] as const
}

export function getPostV1SigningBasketsBasketIdAuthorisationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1SigningBasketsBasketIdAuthorisationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1['signing-baskets'][':basketId'].authorisations.$post(args, options),
      )
    },
  })
}

export function createPostV1SigningBasketsBasketIdAuthorisations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SigningBasketsBasketIdAuthorisationsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/signing-baskets/:basketId/authorisations/:authorisationId', keyArgs] as const
}

export function getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryKey>
  >({
    queryKey: getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['signing-baskets'][':basketId'].authorisations[':authorisationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SigningBasketsBasketIdAuthorisationsAuthorisationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPutV1SigningBasketsBasketIdAuthorisationsAuthorisationIdMutationKey() {
  return ['v1', '/v1/signing-baskets/:basketId/authorisations/:authorisationId', 'PUT'] as const
}

export function getPutV1SigningBasketsBasketIdAuthorisationsAuthorisationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey: getPutV1SigningBasketsBasketIdAuthorisationsAuthorisationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1['signing-baskets'][':basketId'].authorisations[':authorisationId'].$put(
          args,
          options,
        ),
      )
    },
  })
}

export function createPutV1SigningBasketsBasketIdAuthorisationsAuthorisationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1SigningBasketsBasketIdAuthorisationsAuthorisationIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SigningBasketsBasketIdStatusQueryKey(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/signing-baskets/:basketId/status', keyArgs] as const
}

export function getV1SigningBasketsBasketIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SigningBasketsBasketIdStatusQueryKey>
  >({
    queryKey: getV1SigningBasketsBasketIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['signing-baskets'][':basketId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SigningBasketsBasketIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)['signing-baskets'][':basketId']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1SigningBasketsBasketIdStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SigningBasketsBasketIdStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1PaymentServicePaymentProductMutationKey() {
  return ['v1', '/v1/:payment-service/:payment-product', 'POST'] as const
}

export function getPostV1PaymentServicePaymentProductMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentServicePaymentProductMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>,
    ) {
      return parseResponse(client.v1[':payment-service'][':payment-product'].$post(args, options))
    },
  })
}

export function createPostV1PaymentServicePaymentProduct<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentServicePaymentProductMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentServicePaymentProductPaymentIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId', keyArgs] as const
}

export function getV1PaymentServicePaymentProductPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdQueryKey>
  >({
    queryKey: getV1PaymentServicePaymentProductPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentServicePaymentProductPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PaymentServicePaymentProductPaymentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getDeleteV1PaymentServicePaymentProductPaymentIdMutationKey() {
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId', 'DELETE'] as const
}

export function getDeleteV1PaymentServicePaymentProductPaymentIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1PaymentServicePaymentProductPaymentIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$delete']
      >,
    ) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].$delete(args, options),
      )
    },
  })
}

export function createDeleteV1PaymentServicePaymentProductPaymentId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<
                      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$delete']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$delete']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1PaymentServicePaymentProductPaymentIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId/authorisations', keyArgs] as const
}

export function getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryKey>
  >({
    queryKey: getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentServicePaymentProductPaymentIdAuthorisations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}

export function getPostV1PaymentServicePaymentProductPaymentIdAuthorisationsMutationKey() {
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId/authorisations', 'POST'] as const
}

export function getPostV1PaymentServicePaymentProductPaymentIdAuthorisationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentServicePaymentProductPaymentIdAuthorisationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function createPostV1PaymentServicePaymentProductPaymentIdAuthorisations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1PaymentServicePaymentProductPaymentIdAuthorisationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/authorisations/:authorisationId',
    keyArgs,
  ] as const
}

export function getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryKey
    >
  >({
    queryKey: getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations[
          ':authorisationId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdMutationKey() {
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/authorisations/:authorisationId',
    'PUT',
  ] as const
}

export function getPutV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations[
          ':authorisationId'
        ].$put(args, options),
      )
    },
  })
}

export function createPutV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/cancellation-authorisations',
    keyArgs,
  ] as const
}

export function getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryKey>
  >({
    queryKey: getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'][
          'cancellation-authorisations'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PaymentServicePaymentProductPaymentIdCancellationAuthorisations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPostV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsMutationKey() {
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/cancellation-authorisations',
    'POST',
  ] as const
}

export function getPostV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$post']
      >,
    ) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'][
          'cancellation-authorisations'
        ].$post(args, options),
      )
    },
  })
}

export function createPostV1PaymentServicePaymentProductPaymentIdCancellationAuthorisations<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$post']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/cancellation-authorisations/:authorisationId',
    keyArgs,
  ] as const
}

export function getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryKey
    >
  >({
    queryKey:
      getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'][
          'cancellation-authorisations'
        ][':authorisationId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<
            typeof getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryKey
          >
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryOptions<
        TData,
        TError
      >(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getPutV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdMutationKey() {
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/cancellation-authorisations/:authorisationId',
    'PUT',
  ] as const
}

export function getPutV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$put']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$put']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPutV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$put']
      >,
    ) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'][
          'cancellation-authorisations'
        ][':authorisationId'].$put(args, options),
      )
    },
  })
}

export function createPutV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      ReturnType<
        CreateMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$put']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$put']
          >,
          TOnMutateResult
        >
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPutV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentServicePaymentProductPaymentIdStatusQueryKey(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId/status', keyArgs] as const
}

export function getV1PaymentServicePaymentProductPaymentIdStatusQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdStatusQueryKey>
  >({
    queryKey: getV1PaymentServicePaymentProductPaymentIdStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].status.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentServicePaymentProductPaymentIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
  >,
  options?: () => {
    query?: Omit<
      ReturnType<
        UndefinedInitialDataOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
                  >
                >
              >
            >
          >,
          TError,
          TData,
          ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdStatusQueryKey>
        >
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1PaymentServicePaymentProductPaymentIdStatusQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, queryClient)
}
