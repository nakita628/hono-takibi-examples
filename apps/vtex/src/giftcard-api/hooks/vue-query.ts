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

export function getGiftcardsKey() {
  return ['giftcards'] as const
}

export function getPostGiftcardsMutationKey() {
  return ['giftcards', '/giftcards', 'POST'] as const
}

export function getPostGiftcardsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcards.$post>>>>>,
    TError,
    InferRequestType<typeof client.giftcards.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGiftcardsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.giftcards.$post>) {
      return parseResponse(client.giftcards.$post(args, options))
    },
  })
}

export function usePostGiftcards<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcards.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.giftcards.$post>,
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
  const mutationDefaults = getPostGiftcardsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostGiftcardsSearchMutationKey() {
  return ['giftcards', '/giftcards/_search', 'POST'] as const
}

export function getPostGiftcardsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcards._search.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.giftcards._search.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGiftcardsSearchMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.giftcards._search.$post>) {
      return parseResponse(client.giftcards._search.$post(args, options))
    },
  })
}

export function usePostGiftcardsSearch<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.giftcards._search.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.giftcards._search.$post>,
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
  const mutationDefaults = getPostGiftcardsSearchMutationOptions<TError, TOnMutateResult>(
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

export function getGiftcardsGiftCardIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['giftcards', '/giftcards/:giftCardID', keyArgs] as const
}

export function getGiftcardsGiftCardIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGiftcardsGiftCardIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcards[':giftCardID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGiftcardsGiftCardID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>
              >
            >
          >,
          ReturnType<typeof getGiftcardsGiftCardIDQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardsGiftCardIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGiftcardsGiftCardIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcards[':giftCardID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGiftcardsGiftCardIDTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['giftcards', '/giftcards/:giftCardID/transactions', keyArgs] as const
}

export function getGiftcardsGiftCardIDTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGiftcardsGiftCardIDTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGiftcardsGiftCardIDTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>
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
                  ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGiftcardsGiftCardIDTransactionsQueryKey>
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
          Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardsGiftCardIDTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGiftcardsGiftCardIDTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcards[':giftCardID'].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGiftcardsGiftCardIDTransactionsMutationKey() {
  return ['giftcards', '/giftcards/:giftCardID/transactions', 'POST'] as const
}

export function getPostGiftcardsGiftCardIDTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostGiftcardsGiftCardIDTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$post']>,
    ) {
      return parseResponse(client.giftcards[':giftCardID'].transactions.$post(args, options))
    },
  })
}

export function usePostGiftcardsGiftCardIDTransactions<
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
                  ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$post']>,
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
  const mutationDefaults = getPostGiftcardsGiftCardIDTransactionsMutationOptions<
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

export function getGiftcardsGiftCardIDTransactionsTransactionIDQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['giftcards', '/giftcards/:giftCardID/transactions/:transactionID', keyArgs] as const
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGiftcardsGiftCardIDTransactionsTransactionIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions[':transactionID'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGiftcardsGiftCardIDTransactionsTransactionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
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
                    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
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
                    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDQueryKey>
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
              (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGiftcardsGiftCardIDTransactionsTransactionIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcards[':giftCardID'].transactions[':transactionID'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/authorization',
    keyArgs,
  ] as const
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions[':transactionID'].authorization.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGiftcardsGiftCardIDTransactionsTransactionIDAuthorization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
                    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
                    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey>
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
              (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcards[':giftCardID'].transactions[':transactionID'].authorization.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/cancellations',
    keyArgs,
  ] as const
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions[':transactionID'].cancellations.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGiftcardsGiftCardIDTransactionsTransactionIDCancellations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
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
                    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
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
                    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryKey>
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
              (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcards[':giftCardID'].transactions[':transactionID'].cancellations.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostGiftcardsGiftCardIDTransactionsTransactionIDCancellationsMutationKey() {
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/cancellations',
    'POST',
  ] as const
}

export function getPostGiftcardsGiftCardIDTransactionsTransactionIDCancellationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGiftcardsGiftCardIDTransactionsTransactionIDCancellationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions[':transactionID'].cancellations.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGiftcardsGiftCardIDTransactionsTransactionIDCancellations<
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
                    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$post']
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
    getPostGiftcardsGiftCardIDTransactionsTransactionIDCancellationsMutationOptions<
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

export function getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/settlements',
    keyArgs,
  ] as const
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions[':transactionID'].settlements.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
}

export function useGiftcardsGiftCardIDTransactionsTransactionIDSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
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
                    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
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
                    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryKey>
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
              (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcards[':giftCardID'].transactions[':transactionID'].settlements.$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getPostGiftcardsGiftCardIDTransactionsTransactionIDSettlementsMutationKey() {
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/settlements',
    'POST',
  ] as const
}

export function getPostGiftcardsGiftCardIDTransactionsTransactionIDSettlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGiftcardsGiftCardIDTransactionsTransactionIDSettlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions[':transactionID'].settlements.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGiftcardsGiftCardIDTransactionsTransactionIDSettlements<
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
                    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$post']
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
    getPostGiftcardsGiftCardIDTransactionsTransactionIDSettlementsMutationOptions<
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
