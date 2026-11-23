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

export function getGiftcardprovidersKey() {
  return ['giftcardproviders'] as const
}

export function getGiftcardprovidersQueryKey(
  args: InferRequestType<typeof client.giftcardproviders.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcardproviders', '/giftcardproviders', keyArgs] as const
}

export function getGiftcardprovidersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.giftcardproviders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersQueryKey>
  >({
    queryKey: getGiftcardprovidersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGiftcardproviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.giftcardproviders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGiftcardprovidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGiftcardprovidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGiftcardproviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.giftcardproviders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGiftcardprovidersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGiftcardprovidersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutGiftcardprovidersGiftCardProviderIDMutationKey() {
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderID', 'PUT'] as const
}

export function getPutGiftcardprovidersGiftCardProviderIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutGiftcardprovidersGiftCardProviderIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>,
    ) {
      return parseResponse(client.giftcardproviders[':giftCardProviderID'].$put(args, options))
    },
  })
}

export function usePutGiftcardprovidersGiftCardProviderID<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutGiftcardprovidersGiftCardProviderIDMutationOptions<
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

export function getDeleteGiftcardprovidersGiftCardProviderIDMutationKey() {
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderID', 'DELETE'] as const
}

export function getDeleteGiftcardprovidersGiftCardProviderIDMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteGiftcardprovidersGiftCardProviderIDMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>,
    ) {
      return parseResponse(client.giftcardproviders[':giftCardProviderID'].$delete(args, options))
    },
  })
}

export function useDeleteGiftcardprovidersGiftCardProviderID<
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
                ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$delete']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteGiftcardprovidersGiftCardProviderIDMutationOptions<
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

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsMutationKey() {
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderID/giftcards', 'POST'] as const
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGiftcardprovidersGiftCardProviderIDGiftcardsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards.$post(args, options),
      )
    },
  })
}

export function usePostGiftcardprovidersGiftCardProviderIDGiftcards<
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
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['$post']
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
  const mutationDefaults = getPostGiftcardprovidersGiftCardProviderIDGiftcardsMutationOptions<
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

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsSearchMutationKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/_search',
    'POST',
  ] as const
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsSearchMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostGiftcardprovidersGiftCardProviderIDGiftcardsSearchMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards._search.$post(args, options),
      )
    },
  })
}

export function usePostGiftcardprovidersGiftCardProviderIDGiftcardsSearch<
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
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards']['_search']['$post']
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
  const mutationDefaults = getPostGiftcardprovidersGiftCardProviderIDGiftcardsSearchMutationOptions<
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

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey>
  >({
    queryKey: getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey>
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey>
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey>
  >({
    queryKey: getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions.$get(
          args,
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  })
}

export function useGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey
        >
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey
        >
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsMutationKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions',
    'POST',
  ] as const
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactions<
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
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$post']
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
    getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsMutationOptions<
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

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/cancellations',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey
    >
  >({
    queryKey:
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':tId'
        ].cancellations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey
        >
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellations<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey
        >
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsMutationKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/cancellations',
    'POST',
  ] as const
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':tId'
        ].cancellations.$post(args, options),
      )
    },
  })
}

export function usePostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellations<
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
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$post']
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
    getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsMutationOptions<
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

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/settlements',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey
    >
  >({
    queryKey:
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':tId'
        ].settlements.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey
        >
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey
        >
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsMutationKey() {
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/settlements',
    'POST',
  ] as const
}

export function getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
      >,
    ) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':tId'
        ].settlements.$post(args, options),
      )
    },
  })
}

export function usePostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlements<
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
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$post']
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
    getPostGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsMutationOptions<
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

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:transactionID',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey
    >
  >({
    queryKey:
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':transactionID'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey
        >
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionID<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey
        >
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:transactionID/authorization',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<
      typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey
    >
  >({
    queryKey:
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(
        args,
      ),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':transactionID'
        ].authorization.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey
        >
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorization<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey
        >
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
      ...getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGiftcardprovidersGiftCardProviderIdQueryKey(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderId', keyArgs] as const
}

export function getGiftcardprovidersGiftCardProviderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersGiftCardProviderIdQueryKey>
  >({
    queryKey: getGiftcardprovidersGiftCardProviderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGiftcardprovidersGiftCardProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGiftcardprovidersGiftCardProviderIdQueryKey>
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
      ...getGiftcardprovidersGiftCardProviderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGiftcardprovidersGiftCardProviderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGiftcardprovidersGiftCardProviderIdQueryKey>
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
      ...getGiftcardprovidersGiftCardProviderIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
