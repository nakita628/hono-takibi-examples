import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcards.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.giftcards.$post>,
        TOnMutateResult
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
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcards', '/giftcards/:giftCardID', keyArgs] as const
}

export function getGiftcardsGiftCardIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardsGiftCardIDQueryKey>
  >({
    queryKey: getGiftcardsGiftCardIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcards[':giftCardID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGiftcardsGiftCardID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGiftcardsGiftCardIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGiftcardsGiftCardIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGiftcardsGiftCardID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGiftcardsGiftCardIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGiftcardsGiftCardIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGiftcardsGiftCardIDTransactionsQueryKey(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcards', '/giftcards/:giftCardID/transactions', keyArgs] as const
}

export function getGiftcardsGiftCardIDTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGiftcardsGiftCardIDTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGiftcardsGiftCardIDTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardsGiftCardIDTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.giftcards)[':giftCardID']['transactions']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGiftcardsGiftCardIDTransactionsQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcards', '/giftcards/:giftCardID/transactions/:transactionID', keyArgs] as const
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDQueryOptions<
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGiftcardsGiftCardIDTransactionsTransactionIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions[':transactionID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGiftcardsGiftCardIDTransactionsTransactionIDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardsGiftCardIDTransactionsTransactionID<
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGiftcardsGiftCardIDTransactionsTransactionIDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/authorization',
    keyArgs,
  ] as const
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryOptions<
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions[':transactionID'].authorization.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardsGiftCardIDTransactionsTransactionIDAuthorization<
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryKey(
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/cancellations',
    keyArgs,
  ] as const
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryOptions<
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions[':transactionID'].cancellations.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardsGiftCardIDTransactionsTransactionIDCancellations<
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['cancellations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGiftcardsGiftCardIDTransactionsTransactionIDCancellationsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcards',
    '/giftcards/:giftCardID/transactions/:transactionID/settlements',
    keyArgs,
  ] as const
}

export function getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryOptions<
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcards[':giftCardID'].transactions[':transactionID'].settlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardsGiftCardIDTransactionsTransactionIDSettlements<
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
  args: InferRequestType<
    (typeof client.giftcards)[':giftCardID']['transactions'][':transactionID']['settlements']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getGiftcardsGiftCardIDTransactionsTransactionIDSettlementsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
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
