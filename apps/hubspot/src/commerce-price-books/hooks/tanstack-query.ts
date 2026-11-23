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

export function getCommerceKey() {
  return ['commerce'] as const
}

export function getCommercePriceBooks202609PriceBooksQueryKey(
  args: InferRequestType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>,
) {
  return ['commerce', '/commerce/price-books/2026-09/price-books', args] as const
}

export function getCommercePriceBooks202609PriceBooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommercePriceBooks202609PriceBooksQueryKey>
  >({
    queryKey: getCommercePriceBooks202609PriceBooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCommercePriceBooks202609PriceBooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.commerce)['price-books']['2026-09']['price-books']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommercePriceBooks202609PriceBooksQueryKey>
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
      ...getCommercePriceBooks202609PriceBooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommercePriceBooks202609PriceBooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.commerce)['price-books']['2026-09']['price-books']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommercePriceBooks202609PriceBooksQueryKey>
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
      ...getCommercePriceBooks202609PriceBooksQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCommercePriceBooks202609PriceBooksMutationKey() {
  return ['commerce', '/commerce/price-books/2026-09/price-books', 'POST'] as const
}

export function getPostCommercePriceBooks202609PriceBooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.commerce)['price-books']['2026-09']['price-books']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostCommercePriceBooks202609PriceBooksMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books']['$post']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'].$post(args, options),
      )
    },
  })
}

export function usePostCommercePriceBooks202609PriceBooks<
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
                  (typeof client.commerce)['price-books']['2026-09']['price-books']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books']['$post']
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
  const mutationDefaults = getPostCommercePriceBooks202609PriceBooksMutationOptions<
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

export function getCommercePriceBooks202609PriceBooksPriceBookIdQueryKey(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
  >,
) {
  return ['commerce', '/commerce/price-books/2026-09/price-books/:priceBookId', args] as const
}

export function getCommercePriceBooks202609PriceBooksPriceBookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommercePriceBooks202609PriceBooksPriceBookIdQueryKey>
  >({
    queryKey: getCommercePriceBooks202609PriceBooksPriceBookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCommercePriceBooks202609PriceBooksPriceBookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommercePriceBooks202609PriceBooksPriceBookIdQueryKey>
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
      ...getCommercePriceBooks202609PriceBooksPriceBookIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommercePriceBooks202609PriceBooksPriceBookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommercePriceBooks202609PriceBooksPriceBookIdQueryKey>
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
      ...getCommercePriceBooks202609PriceBooksPriceBookIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCommercePriceBooks202609PriceBooksPriceBookIdMutationKey() {
  return ['commerce', '/commerce/price-books/2026-09/price-books/:priceBookId', 'DELETE'] as const
}

export function getDeleteCommercePriceBooks202609PriceBooksPriceBookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteCommercePriceBooks202609PriceBooksPriceBookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$delete']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function useDeleteCommercePriceBooks202609PriceBooksPriceBookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$delete']
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
  const mutationDefaults = getDeleteCommercePriceBooks202609PriceBooksPriceBookIdMutationOptions<
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

export function getPatchCommercePriceBooks202609PriceBooksPriceBookIdMutationKey() {
  return ['commerce', '/commerce/price-books/2026-09/price-books/:priceBookId', 'PATCH'] as const
}

export function getPatchCommercePriceBooks202609PriceBooksPriceBookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchCommercePriceBooks202609PriceBooksPriceBookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$patch']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function usePatchCommercePriceBooks202609PriceBooksPriceBookId<
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
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['$patch']
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
  const mutationDefaults = getPatchCommercePriceBooks202609PriceBooksPriceBookIdMutationOptions<
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

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdActivateMutationKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/activate',
    'POST',
  ] as const
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdActivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['activate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['activate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommercePriceBooks202609PriceBooksPriceBookIdActivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['activate']['$post']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].activate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdActivate<
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
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['activate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['activate']['$post']
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
    getPostCommercePriceBooks202609PriceBooksPriceBookIdActivateMutationOptions<
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

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdDeactivateMutationKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/deactivate',
    'POST',
  ] as const
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdDeactivateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['deactivate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['deactivate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommercePriceBooks202609PriceBooksPriceBookIdDeactivateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['deactivate']['$post']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].deactivate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdDeactivate<
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
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['deactivate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['deactivate']['$post']
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
    getPostCommercePriceBooks202609PriceBooksPriceBookIdDeactivateMutationOptions<
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

export function getCommercePriceBooks202609PriceBooksPriceBookIdItemsQueryKey(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
  >,
) {
  return ['commerce', '/commerce/price-books/2026-09/price-books/:priceBookId/items', args] as const
}

export function getCommercePriceBooks202609PriceBooksPriceBookIdItemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommercePriceBooks202609PriceBooksPriceBookIdItemsQueryKey>
  >({
    queryKey: getCommercePriceBooks202609PriceBooksPriceBookIdItemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useCommercePriceBooks202609PriceBooksPriceBookIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommercePriceBooks202609PriceBooksPriceBookIdItemsQueryKey>
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
      ...getCommercePriceBooks202609PriceBooksPriceBookIdItemsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommercePriceBooks202609PriceBooksPriceBookIdItems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getCommercePriceBooks202609PriceBooksPriceBookIdItemsQueryKey>
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
      ...getCommercePriceBooks202609PriceBooksPriceBookIdItemsQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsMutationKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items',
    'POST',
  ] as const
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$post']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdItems<
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
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['$post']
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
  const mutationDefaults = getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsMutationOptions<
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

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveMutationKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/batch/archive',
    'POST',
  ] as const
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['archive']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['archive']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['archive']['$post']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][
          ':priceBookId'
        ].items.batch.archive.$post(args, options),
      )
    },
  })
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchive<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['archive']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['archive']['$post']
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
    getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchArchiveMutationOptions<
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

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateMutationKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/batch/create',
    'POST',
  ] as const
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['create']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['create']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['create']['$post']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][
          ':priceBookId'
        ].items.batch.create.$post(args, options),
      )
    },
  })
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreate<
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
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['create']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['create']['$post']
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
    getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchCreateMutationOptions<
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

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateMutationKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/batch/update',
    'POST',
  ] as const
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['update']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['update']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['update']['$post']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][
          ':priceBookId'
        ].items.batch.update.$post(args, options),
      )
    },
  })
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdate<
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
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['update']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items']['batch']['update']['$post']
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
    getPostCommercePriceBooks202609PriceBooksPriceBookIdItemsBatchUpdateMutationOptions<
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

export function getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdQueryKey(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
  >,
) {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/:priceBookItemId',
    args,
  ] as const
}

export function getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdQueryKey>
  >({
    queryKey: getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items[
          ':priceBookItemId'
        ].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdQueryKey
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
      ...getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<
          typeof getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdQueryKey
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
      ...getCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdQueryOptions<
        TData,
        TError
      >(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdMutationKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/:priceBookItemId',
    'DELETE',
  ] as const
}

export function getDeleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getDeleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$delete']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items[
          ':priceBookItemId'
        ].$delete(args, options),
      )
    },
  })
}

export function useDeleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$delete']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$delete']
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
    getDeleteCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdMutationOptions<
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

export function getPatchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdMutationKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/items/:priceBookItemId',
    'PATCH',
  ] as const
}

export function getPatchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$patch']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey:
      getPatchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$patch']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].items[
          ':priceBookItemId'
        ].$patch(args, options),
      )
    },
  })
}

export function usePatchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemId<
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
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$patch']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['items'][':priceBookItemId']['$patch']
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
    getPatchCommercePriceBooks202609PriceBooksPriceBookIdItemsPriceBookItemIdMutationOptions<
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

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdValidateMutationKey() {
  return [
    'commerce',
    '/commerce/price-books/2026-09/price-books/:priceBookId/validate',
    'POST',
  ] as const
}

export function getPostCommercePriceBooks202609PriceBooksPriceBookIdValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['validate']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['validate']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostCommercePriceBooks202609PriceBooksPriceBookIdValidateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['validate']['$post']
      >,
    ) {
      return parseResponse(
        client.commerce['price-books']['2026-09']['price-books'][':priceBookId'].validate.$post(
          args,
          options,
        ),
      )
    },
  })
}

export function usePostCommercePriceBooks202609PriceBooksPriceBookIdValidate<
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
                  (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['validate']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.commerce)['price-books']['2026-09']['price-books'][':priceBookId']['validate']['$post']
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
    getPostCommercePriceBooks202609PriceBooksPriceBookIdValidateMutationOptions<
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
