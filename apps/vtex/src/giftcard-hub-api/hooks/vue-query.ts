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

export function getGiftcardprovidersKey() {
  return ['giftcardproviders'] as const
}

export function getGiftcardprovidersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.giftcardproviders.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['giftcardproviders', '/giftcardproviders', keyArgs] as const
}

export function getGiftcardprovidersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.giftcardproviders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGiftcardprovidersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcardproviders.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGiftcardproviders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.giftcardproviders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>
            >
          >,
          ReturnType<typeof getGiftcardprovidersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.giftcardproviders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGiftcardprovidersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcardproviders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderID']['$put']>,
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey>
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
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].$get(
            toValue(args),
            { ...clientOptions, init: { ...clientOptions?.init, signal } },
          ),
        )
      },
    },
    queryClient,
  )
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey(args),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions.$get(
          toValue(args),
          { ...options, init: { ...options?.init, signal } },
        ),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey
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
              (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsQueryKey(args),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards[
            ':giftCardID'
          ].transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/cancellations',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':tId'
        ].cancellations.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['cancellations']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdCancellationsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':tId'
          ].cancellations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:tId/settlements',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':tId'
        ].settlements.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':tId']['settlements']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTIdSettlementsQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':tId'
          ].settlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:transactionID',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':transactionID'
        ].$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':transactionID'
          ].$get(toValue(args), { ...clientOptions, init: { ...clientOptions?.init, signal } }),
        )
      },
    },
    queryClient,
  )
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return [
    'giftcardproviders',
    '/giftcardproviders/:giftCardProviderID/giftcards/:giftCardID/transactions/:transactionID/authorization',
    keyArgs,
  ] as const
}

export function getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() =>
      getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(
        args,
      ),
    ),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
          ':transactionID'
        ].authorization.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
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
                    (typeof client.giftcardproviders)[':giftCardProviderID']['giftcards'][':giftCardID']['transactions'][':transactionID']['authorization']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<
            typeof getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() =>
        getGiftcardprovidersGiftCardProviderIDGiftcardsGiftCardIDTransactionsTransactionIDAuthorizationQueryKey(
          args,
        ),
      ),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcardproviders[':giftCardProviderID'].giftcards[':giftCardID'].transactions[
            ':transactionID'
          ].authorization.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGiftcardprovidersGiftCardProviderIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['giftcardproviders', '/giftcardproviders/:giftCardProviderId', keyArgs] as const
}

export function getGiftcardprovidersGiftCardProviderIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGiftcardprovidersGiftCardProviderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.giftcardproviders[':giftCardProviderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>
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
                  ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getGiftcardprovidersGiftCardProviderIdQueryKey>
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
          Awaited<ReturnType<(typeof client.giftcardproviders)[':giftCardProviderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGiftcardprovidersGiftCardProviderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGiftcardprovidersGiftCardProviderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.giftcardproviders[':giftCardProviderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
