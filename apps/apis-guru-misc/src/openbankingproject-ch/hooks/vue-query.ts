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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1AccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounts', keyArgs] as const
}

export function getV1AccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Accounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.accounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>
          >,
          ReturnType<typeof getV1AccountsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.accounts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1AccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account-id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounts/:account-id', keyArgs] as const
}

export function getV1AccountsAccountIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account-id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.accounts)[':account-id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdBalancesQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounts/:account-id/balances', keyArgs] as const
}

export function getV1AccountsAccountIdBalancesQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdBalancesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account-id'].balances.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdBalances<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdBalancesQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['balances']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdBalancesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdBalancesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account-id'].balances.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounts/:account-id/transactions', keyArgs] as const
}

export function getV1AccountsAccountIdTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account-id'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdTransactionsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.accounts)[':account-id']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account-id'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1AccountsAccountIdTransactionsTransactionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/accounts/:account-id/transactions/:transactionId', keyArgs] as const
}

export function getV1AccountsAccountIdTransactionsTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1AccountsAccountIdTransactionsTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.accounts[':account-id'].transactions[':transactionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1AccountsAccountIdTransactionsTransactionId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
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
                    (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
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
                    (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1AccountsAccountIdTransactionsTransactionIdQueryKey>
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
              (typeof client.v1.accounts)[':account-id']['transactions'][':transactionId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1AccountsAccountIdTransactionsTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1AccountsAccountIdTransactionsTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.accounts[':account-id'].transactions[':transactionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1Consents<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.consents.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.consents.$post>,
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
  const mutationDefaults = getPostV1ConsentsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1ConsentsConsentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.consents)[':consentId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/consents/:consentId', keyArgs] as const
}

export function getV1ConsentsConsentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.consents)[':consentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConsentsConsentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.consents[':consentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConsentsConsentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.consents)[':consentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConsentsConsentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConsentsConsentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConsentsConsentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.consents[':consentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1ConsentsConsentId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteV1ConsentsConsentIdMutationOptions<TError, TOnMutateResult>(
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

export function getV1ConsentsConsentIdAuthorisationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/consents/:consentId/authorisations', keyArgs] as const
}

export function getV1ConsentsConsentIdAuthorisationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConsentsConsentIdAuthorisationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.consents[':consentId'].authorisations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConsentsConsentIdAuthorisations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1ConsentsConsentIdAuthorisationsQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConsentsConsentIdAuthorisationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConsentsConsentIdAuthorisationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.consents[':consentId'].authorisations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1ConsentsConsentIdAuthorisations<
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
                  ReturnType<(typeof client.v1.consents)[':consentId']['authorisations']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.consents)[':consentId']['authorisations']['$post']>,
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
  const mutationDefaults = getPostV1ConsentsConsentIdAuthorisationsMutationOptions<
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

export function getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/consents/:consentId/authorisations/:authorisationId', keyArgs] as const
}

export function getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.consents[':consentId'].authorisations[':authorisationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConsentsConsentIdAuthorisationsAuthorisationId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
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
                    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
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
                    (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryKey>
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
              (typeof client.v1.consents)[':consentId']['authorisations'][':authorisationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConsentsConsentIdAuthorisationsAuthorisationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.consents[':consentId'].authorisations[':authorisationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1ConsentsConsentIdAuthorisationsAuthorisationId<
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
  const mutationDefaults = getPutV1ConsentsConsentIdAuthorisationsAuthorisationIdMutationOptions<
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

export function getV1ConsentsConsentIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.consents)[':consentId']['status']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/consents/:consentId/status', keyArgs] as const
}

export function getV1ConsentsConsentIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.consents)[':consentId']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1ConsentsConsentIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.consents[':consentId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1ConsentsConsentIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.consents)[':consentId']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1ConsentsConsentIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.consents)[':consentId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1ConsentsConsentIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1ConsentsConsentIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.consents[':consentId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1FundsConfirmations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV1FundsConfirmationsMutationOptions<TError, TOnMutateResult>(
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

export function usePostV1SigningBaskets<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getPostV1SigningBasketsMutationOptions<TError, TOnMutateResult>(
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

export function getV1SigningBasketsBasketIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/signing-baskets/:basketId', keyArgs] as const
}

export function getV1SigningBasketsBasketIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SigningBasketsBasketIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['signing-baskets'][':basketId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SigningBasketsBasketId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SigningBasketsBasketIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SigningBasketsBasketIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SigningBasketsBasketIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['signing-baskets'][':basketId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1SigningBasketsBasketId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
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
  const mutationDefaults = getDeleteV1SigningBasketsBasketIdMutationOptions<
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

export function getV1SigningBasketsBasketIdAuthorisationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/signing-baskets/:basketId/authorisations', keyArgs] as const
}

export function getV1SigningBasketsBasketIdAuthorisationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SigningBasketsBasketIdAuthorisationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['signing-baskets'][':basketId'].authorisations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SigningBasketsBasketIdAuthorisations<
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']>
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
                    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
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
                    (typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1SigningBasketsBasketIdAuthorisationsQueryKey>
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
            ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['authorisations']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SigningBasketsBasketIdAuthorisationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SigningBasketsBasketIdAuthorisationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['signing-baskets'][':basketId'].authorisations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1SigningBasketsBasketIdAuthorisations<
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
  const mutationDefaults = getPostV1SigningBasketsBasketIdAuthorisationsMutationOptions<
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

export function getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/signing-baskets/:basketId/authorisations/:authorisationId', keyArgs] as const
}

export function getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['signing-baskets'][':basketId'].authorisations[':authorisationId'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1SigningBasketsBasketIdAuthorisationsAuthorisationId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
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
                    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
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
                    (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryKey>
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
              (typeof client.v1)['signing-baskets'][':basketId']['authorisations'][':authorisationId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1SigningBasketsBasketIdAuthorisationsAuthorisationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['signing-baskets'][':basketId'].authorisations[':authorisationId'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1SigningBasketsBasketIdAuthorisationsAuthorisationId<
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
    getPutV1SigningBasketsBasketIdAuthorisationsAuthorisationIdMutationOptions<
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

export function getV1SigningBasketsBasketIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/signing-baskets/:basketId/status', keyArgs] as const
}

export function getV1SigningBasketsBasketIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SigningBasketsBasketIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['signing-baskets'][':basketId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SigningBasketsBasketIdStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getV1SigningBasketsBasketIdStatusQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['signing-baskets'][':basketId']['status']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SigningBasketsBasketIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SigningBasketsBasketIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['signing-baskets'][':basketId'].status.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1PaymentServicePaymentProduct<
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
                  ReturnType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1)[':payment-service'][':payment-product']['$post']>,
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
  const mutationDefaults = getPostV1PaymentServicePaymentProductMutationOptions<
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

export function getV1PaymentServicePaymentProductPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId', keyArgs] as const
}

export function getV1PaymentServicePaymentProductPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentServicePaymentProductPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentServicePaymentProductPaymentId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdQueryKey>
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
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentServicePaymentProductPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function useDeleteV1PaymentServicePaymentProductPaymentId<
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
  const mutationDefaults = getDeleteV1PaymentServicePaymentProductPaymentIdMutationOptions<
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

export function getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId/authorisations', keyArgs] as const
}

export function getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useV1PaymentServicePaymentProductPaymentIdAuthorisations<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryKey>
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
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PaymentServicePaymentProductPaymentIdAuthorisationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1PaymentServicePaymentProductPaymentIdAuthorisations<
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
    getPostV1PaymentServicePaymentProductPaymentIdAuthorisationsMutationOptions<
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

export function getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/authorisations/:authorisationId',
    keyArgs,
  ] as const
}

export function getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations[
          ':authorisationId'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['authorisations'][':authorisationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'].authorisations[
            ':authorisationId'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationId<
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
    getPutV1PaymentServicePaymentProductPaymentIdAuthorisationsAuthorisationIdMutationOptions<
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

export function getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/cancellation-authorisations',
    keyArgs,
  ] as const
}

export function getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'][
          'cancellation-authorisations'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1PaymentServicePaymentProductPaymentIdCancellationAuthorisations<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryKey
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
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'][
            'cancellation-authorisations'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
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

export function usePostV1PaymentServicePaymentProductPaymentIdCancellationAuthorisations<
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
    getPostV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsMutationOptions<
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

export function getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'v1',
    '/v1/:payment-service/:payment-product/:paymentId/cancellation-authorisations/:authorisationId',
    keyArgs,
  ] as const
}

export function getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'][
          'cancellation-authorisations'
        ][':authorisationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationId<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['cancellation-authorisations'][':authorisationId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'][
            'cancellation-authorisations'
          ][':authorisationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
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

export function usePutV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationId<
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
    getPutV1PaymentServicePaymentProductPaymentIdCancellationAuthorisationsAuthorisationIdMutationOptions<
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

export function getV1PaymentServicePaymentProductPaymentIdStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/:payment-service/:payment-product/:paymentId/status', keyArgs] as const
}

export function getV1PaymentServicePaymentProductPaymentIdStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentServicePaymentProductPaymentIdStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1[':payment-service'][':payment-product'][':paymentId'].status.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentServicePaymentProductPaymentIdStatus<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
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
                    (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdStatusQueryKey>
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
              (typeof client.v1)[':payment-service'][':payment-product'][':paymentId']['status']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentServicePaymentProductPaymentIdStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentServicePaymentProductPaymentIdStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1[':payment-service'][':payment-product'][':paymentId'].status.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}
