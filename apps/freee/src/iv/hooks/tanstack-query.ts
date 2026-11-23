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

export function getDeliverySlipsKey() {
  return ['delivery_slips'] as const
}

export function getInvoicesKey() {
  return ['invoices'] as const
}

export function getPaymentNoticesKey() {
  return ['payment_notices'] as const
}

export function getPurchaseOrdersKey() {
  return ['purchase_orders'] as const
}

export function getQuotationsKey() {
  return ['quotations'] as const
}

export function getReceiptsKey() {
  return ['receipts'] as const
}

export function getDeliverySlipsQueryKey(
  args: InferRequestType<typeof client.delivery_slips.$get>,
) {
  return ['delivery_slips', '/delivery_slips', args] as const
}

export function getDeliverySlipsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.delivery_slips.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getDeliverySlipsQueryKey>
  >({
    queryKey: getDeliverySlipsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.delivery_slips.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDeliverySlips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.delivery_slips.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeliverySlipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeliverySlipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeliverySlips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.delivery_slips.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDeliverySlipsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeliverySlipsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostDeliverySlipsMutationKey() {
  return ['delivery_slips', '/delivery_slips', 'POST'] as const
}

export function getPostDeliverySlipsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.delivery_slips.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostDeliverySlipsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.delivery_slips.$post>) {
      return parseResponse(client.delivery_slips.$post(args, options))
    },
  })
}

export function usePostDeliverySlips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.delivery_slips.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostDeliverySlipsMutationOptions<TError, TOnMutateResult>(
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

export function getDeliverySlipsTemplatesQueryKey(
  args: InferRequestType<typeof client.delivery_slips.templates.$get>,
) {
  return ['delivery_slips', '/delivery_slips/templates', args] as const
}

export function getDeliverySlipsTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.delivery_slips.templates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeliverySlipsTemplatesQueryKey>
  >({
    queryKey: getDeliverySlipsTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.delivery_slips.templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useDeliverySlipsTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.delivery_slips.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeliverySlipsTemplatesQueryKey>
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
      ...getDeliverySlipsTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseDeliverySlipsTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.delivery_slips.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeliverySlipsTemplatesQueryKey>
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
      ...getDeliverySlipsTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getDeliverySlipsIdQueryKey(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['$get']>,
) {
  return ['delivery_slips', '/delivery_slips/:id', args] as const
}

export function getDeliverySlipsIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getDeliverySlipsIdQueryKey>
  >({
    queryKey: getDeliverySlipsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.delivery_slips[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDeliverySlipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeliverySlipsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDeliverySlipsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDeliverySlipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getDeliverySlipsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDeliverySlipsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutDeliverySlipsIdMutationKey() {
  return ['delivery_slips', '/delivery_slips/:id', 'PUT'] as const
}

export function getPutDeliverySlipsIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.delivery_slips)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeliverySlipsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.delivery_slips)[':id']['$put']>) {
      return parseResponse(client.delivery_slips[':id'].$put(args, options))
    },
  })
}

export function usePutDeliverySlipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.delivery_slips)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDeliverySlipsIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutDeliverySlipsIdCancelMutationKey() {
  return ['delivery_slips', '/delivery_slips/:id/cancel', 'PUT'] as const
}

export function getPutDeliverySlipsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery_slips)[':id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.delivery_slips)[':id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeliverySlipsIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.delivery_slips)[':id']['cancel']['$put']>,
    ) {
      return parseResponse(client.delivery_slips[':id'].cancel.$put(args, options))
    },
  })
}

export function usePutDeliverySlipsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.delivery_slips)[':id']['cancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.delivery_slips)[':id']['cancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDeliverySlipsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPutDeliverySlipsIdUncancelMutationKey() {
  return ['delivery_slips', '/delivery_slips/:id/uncancel', 'PUT'] as const
}

export function getPutDeliverySlipsIdUncancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery_slips)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.delivery_slips)[':id']['uncancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutDeliverySlipsIdUncancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.delivery_slips)[':id']['uncancel']['$put']>,
    ) {
      return parseResponse(client.delivery_slips[':id'].uncancel.$put(args, options))
    },
  })
}

export function usePutDeliverySlipsIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.delivery_slips)[':id']['uncancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.delivery_slips)[':id']['uncancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutDeliverySlipsIdUncancelMutationOptions<TError, TOnMutateResult>(
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

export function getInvoicesQueryKey(args: InferRequestType<typeof client.invoices.$get>) {
  return ['invoices', '/invoices', args] as const
}

export function getInvoicesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invoices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getInvoicesQueryKey>
  >({
    queryKey: getInvoicesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInvoicesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostInvoicesMutationKey() {
  return ['invoices', '/invoices', 'POST'] as const
}

export function getPostInvoicesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>>,
    TError,
    InferRequestType<typeof client.invoices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostInvoicesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.invoices.$post>) {
      return parseResponse(client.invoices.$post(args, options))
    },
  })
}

export function usePostInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.invoices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getInvoicesTemplatesQueryKey(
  args: InferRequestType<typeof client.invoices.templates.$get>,
) {
  return ['invoices', '/invoices/templates', args] as const
}

export function getInvoicesTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.invoices.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesTemplatesQueryKey>
  >({
    queryKey: getInvoicesTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInvoicesTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.invoices.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInvoicesTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInvoicesTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.invoices.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInvoicesTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getInvoicesIdQueryKey(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
) {
  return ['invoices', '/invoices/:id', args] as const
}

export function getInvoicesIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.invoices)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getInvoicesIdQueryKey>
  >({
    queryKey: getInvoicesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.invoices[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useInvoicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getInvoicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseInvoicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getInvoicesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getInvoicesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutInvoicesIdMutationKey() {
  return ['invoices', '/invoices/:id', 'PUT'] as const
}

export function getPutInvoicesIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvoicesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':id']['$put']>) {
      return parseResponse(client.invoices[':id'].$put(args, options))
    },
  })
}

export function usePutInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.invoices)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInvoicesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutInvoicesIdCancelMutationKey() {
  return ['invoices', '/invoices/:id/cancel', 'PUT'] as const
}

export function getPutInvoicesIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['cancel']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvoicesIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':id']['cancel']['$put']>) {
      return parseResponse(client.invoices[':id'].cancel.$put(args, options))
    },
  })
}

export function usePutInvoicesIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.invoices)[':id']['cancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.invoices)[':id']['cancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInvoicesIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPutInvoicesIdUncancelMutationKey() {
  return ['invoices', '/invoices/:id/uncancel', 'PUT'] as const
}

export function getPutInvoicesIdUncancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.invoices)[':id']['uncancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutInvoicesIdUncancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.invoices)[':id']['uncancel']['$put']>) {
      return parseResponse(client.invoices[':id'].uncancel.$put(args, options))
    },
  })
}

export function usePutInvoicesIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.invoices)[':id']['uncancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.invoices)[':id']['uncancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutInvoicesIdUncancelMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentNoticesQueryKey(
  args: InferRequestType<typeof client.payment_notices.$get>,
) {
  return ['payment_notices', '/payment_notices', args] as const
}

export function getPaymentNoticesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.payment_notices.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentNoticesQueryKey>
  >({
    queryKey: getPaymentNoticesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_notices.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePaymentNotices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_notices.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentNoticesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaymentNoticesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePaymentNotices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_notices.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentNoticesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaymentNoticesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPaymentNoticesMutationKey() {
  return ['payment_notices', '/payment_notices', 'POST'] as const
}

export function getPostPaymentNoticesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.payment_notices.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentNoticesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.payment_notices.$post>) {
      return parseResponse(client.payment_notices.$post(args, options))
    },
  })
}

export function usePostPaymentNotices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.payment_notices.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentNoticesMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentNoticesTemplatesQueryKey(
  args: InferRequestType<typeof client.payment_notices.templates.$get>,
) {
  return ['payment_notices', '/payment_notices/templates', args] as const
}

export function getPaymentNoticesTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_notices.templates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentNoticesTemplatesQueryKey>
  >({
    queryKey: getPaymentNoticesTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_notices.templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentNoticesTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_notices.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentNoticesTemplatesQueryKey>
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
      ...getPaymentNoticesTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentNoticesTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_notices.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentNoticesTemplatesQueryKey>
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
      ...getPaymentNoticesTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPaymentNoticesIdQueryKey(
  args: InferRequestType<(typeof client.payment_notices)[':id']['$get']>,
) {
  return ['payment_notices', '/payment_notices/:id', args] as const
}

export function getPaymentNoticesIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_notices)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentNoticesIdQueryKey>
  >({
    queryKey: getPaymentNoticesIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_notices[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentNoticesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_notices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentNoticesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPaymentNoticesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePaymentNoticesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_notices)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentNoticesIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPaymentNoticesIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPaymentNoticesIdMutationKey() {
  return ['payment_notices', '/payment_notices/:id', 'PUT'] as const
}

export function getPutPaymentNoticesIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.payment_notices)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPaymentNoticesIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.payment_notices)[':id']['$put']>) {
      return parseResponse(client.payment_notices[':id'].$put(args, options))
    },
  })
}

export function usePutPaymentNoticesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment_notices)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payment_notices)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPaymentNoticesIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutPaymentNoticesIdCancelMutationKey() {
  return ['payment_notices', '/payment_notices/:id/cancel', 'PUT'] as const
}

export function getPutPaymentNoticesIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_notices)[':id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payment_notices)[':id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPaymentNoticesIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payment_notices)[':id']['cancel']['$put']>,
    ) {
      return parseResponse(client.payment_notices[':id'].cancel.$put(args, options))
    },
  })
}

export function usePutPaymentNoticesIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment_notices)[':id']['cancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payment_notices)[':id']['cancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPaymentNoticesIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPutPaymentNoticesIdUncancelMutationKey() {
  return ['payment_notices', '/payment_notices/:id/uncancel', 'PUT'] as const
}

export function getPutPaymentNoticesIdUncancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_notices)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.payment_notices)[':id']['uncancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPaymentNoticesIdUncancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.payment_notices)[':id']['uncancel']['$put']>,
    ) {
      return parseResponse(client.payment_notices[':id'].uncancel.$put(args, options))
    },
  })
}

export function usePutPaymentNoticesIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment_notices)[':id']['uncancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.payment_notices)[':id']['uncancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPaymentNoticesIdUncancelMutationOptions<TError, TOnMutateResult>(
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

export function getPurchaseOrdersQueryKey(
  args: InferRequestType<typeof client.purchase_orders.$get>,
) {
  return ['purchase_orders', '/purchase_orders', args] as const
}

export function getPurchaseOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.purchase_orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersQueryKey>
  >({
    queryKey: getPurchaseOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.purchase_orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePurchaseOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.purchase_orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPurchaseOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePurchaseOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.purchase_orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPurchaseOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostPurchaseOrdersMutationKey() {
  return ['purchase_orders', '/purchase_orders', 'POST'] as const
}

export function getPostPurchaseOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.purchase_orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostPurchaseOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.purchase_orders.$post>) {
      return parseResponse(client.purchase_orders.$post(args, options))
    },
  })
}

export function usePostPurchaseOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.purchase_orders.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPurchaseOrdersMutationOptions<TError, TOnMutateResult>(
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

export function getPurchaseOrdersTemplatesQueryKey(
  args: InferRequestType<typeof client.purchase_orders.templates.$get>,
) {
  return ['purchase_orders', '/purchase_orders/templates', args] as const
}

export function getPurchaseOrdersTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.purchase_orders.templates.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersTemplatesQueryKey>
  >({
    queryKey: getPurchaseOrdersTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.purchase_orders.templates.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePurchaseOrdersTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.purchase_orders.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersTemplatesQueryKey>
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
      ...getPurchaseOrdersTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePurchaseOrdersTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.purchase_orders.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersTemplatesQueryKey>
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
      ...getPurchaseOrdersTemplatesQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPurchaseOrdersIdQueryKey(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
) {
  return ['purchase_orders', '/purchase_orders/:id', args] as const
}

export function getPurchaseOrdersIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPurchaseOrdersIdQueryKey>
  >({
    queryKey: getPurchaseOrdersIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.purchase_orders[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePurchaseOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPurchaseOrdersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePurchaseOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPurchaseOrdersIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPurchaseOrdersIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutPurchaseOrdersIdMutationKey() {
  return ['purchase_orders', '/purchase_orders/:id', 'PUT'] as const
}

export function getPutPurchaseOrdersIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.purchase_orders)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPurchaseOrdersIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.purchase_orders)[':id']['$put']>) {
      return parseResponse(client.purchase_orders[':id'].$put(args, options))
    },
  })
}

export function usePutPurchaseOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.purchase_orders)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPurchaseOrdersIdMutationOptions<TError, TOnMutateResult>(
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

export function getPutPurchaseOrdersIdCancelMutationKey() {
  return ['purchase_orders', '/purchase_orders/:id/cancel', 'PUT'] as const
}

export function getPutPurchaseOrdersIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.purchase_orders)[':id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.purchase_orders)[':id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPurchaseOrdersIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.purchase_orders)[':id']['cancel']['$put']>,
    ) {
      return parseResponse(client.purchase_orders[':id'].cancel.$put(args, options))
    },
  })
}

export function usePutPurchaseOrdersIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.purchase_orders)[':id']['cancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.purchase_orders)[':id']['cancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPurchaseOrdersIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPutPurchaseOrdersIdUncancelMutationKey() {
  return ['purchase_orders', '/purchase_orders/:id/uncancel', 'PUT'] as const
}

export function getPutPurchaseOrdersIdUncancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.purchase_orders)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.purchase_orders)[':id']['uncancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPurchaseOrdersIdUncancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.purchase_orders)[':id']['uncancel']['$put']>,
    ) {
      return parseResponse(client.purchase_orders[':id'].uncancel.$put(args, options))
    },
  })
}

export function usePutPurchaseOrdersIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.purchase_orders)[':id']['uncancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.purchase_orders)[':id']['uncancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutPurchaseOrdersIdUncancelMutationOptions<TError, TOnMutateResult>(
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

export function getQuotationsQueryKey(args: InferRequestType<typeof client.quotations.$get>) {
  return ['quotations', '/quotations', args] as const
}

export function getQuotationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quotations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getQuotationsQueryKey>
  >({
    queryKey: getQuotationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuotations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quotations.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuotationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuotationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuotations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quotations.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getQuotationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuotationsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostQuotationsMutationKey() {
  return ['quotations', '/quotations', 'POST'] as const
}

export function getPostQuotationsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$post>>>>>,
    TError,
    InferRequestType<typeof client.quotations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostQuotationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.quotations.$post>) {
      return parseResponse(client.quotations.$post(args, options))
    },
  })
}

export function usePostQuotations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.quotations.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostQuotationsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getQuotationsTemplatesQueryKey(
  args: InferRequestType<typeof client.quotations.templates.$get>,
) {
  return ['quotations', '/quotations/templates', args] as const
}

export function getQuotationsTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.quotations.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getQuotationsTemplatesQueryKey>
  >({
    queryKey: getQuotationsTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotations.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuotationsTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quotations.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotationsTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuotationsTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuotationsTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.quotations.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotationsTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuotationsTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getQuotationsIdQueryKey(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
) {
  return ['quotations', '/quotations/:id', args] as const
}

export function getQuotationsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getQuotationsIdQueryKey>
  >({
    queryKey: getQuotationsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.quotations[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useQuotationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getQuotationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseQuotationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getQuotationsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getQuotationsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutQuotationsIdMutationKey() {
  return ['quotations', '/quotations/:id', 'PUT'] as const
}

export function getPutQuotationsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.quotations)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQuotationsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.quotations)[':id']['$put']>) {
      return parseResponse(client.quotations[':id'].$put(args, options))
    },
  })
}

export function usePutQuotationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.quotations)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQuotationsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutQuotationsIdCancelMutationKey() {
  return ['quotations', '/quotations/:id/cancel', 'PUT'] as const
}

export function getPutQuotationsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotations)[':id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quotations)[':id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQuotationsIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.quotations)[':id']['cancel']['$put']>) {
      return parseResponse(client.quotations[':id'].cancel.$put(args, options))
    },
  })
}

export function usePutQuotationsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.quotations)[':id']['cancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.quotations)[':id']['cancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQuotationsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPutQuotationsIdUncancelMutationKey() {
  return ['quotations', '/quotations/:id/uncancel', 'PUT'] as const
}

export function getPutQuotationsIdUncancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotations)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.quotations)[':id']['uncancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutQuotationsIdUncancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.quotations)[':id']['uncancel']['$put']>,
    ) {
      return parseResponse(client.quotations[':id'].uncancel.$put(args, options))
    },
  })
}

export function usePutQuotationsIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.quotations)[':id']['uncancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.quotations)[':id']['uncancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutQuotationsIdUncancelMutationOptions<TError, TOnMutateResult>(
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

export function getReceiptsQueryKey(args: InferRequestType<typeof client.receipts.$get>) {
  return ['receipts', '/receipts', args] as const
}

export function getReceiptsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.receipts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getReceiptsQueryKey>
  >({
    queryKey: getReceiptsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.receipts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.receipts.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReceiptsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.receipts.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReceiptsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPostReceiptsMutationKey() {
  return ['receipts', '/receipts', 'POST'] as const
}

export function getPostReceiptsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$post>>>>>,
    TError,
    InferRequestType<typeof client.receipts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostReceiptsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.receipts.$post>) {
      return parseResponse(client.receipts.$post(args, options))
    },
  })
}

export function usePostReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.receipts.$post>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostReceiptsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getReceiptsTemplatesQueryKey(
  args: InferRequestType<typeof client.receipts.templates.$get>,
) {
  return ['receipts', '/receipts/templates', args] as const
}

export function getReceiptsTemplatesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.receipts.templates.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsTemplatesQueryKey>
  >({
    queryKey: getReceiptsTemplatesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.receipts.templates.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReceiptsTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.receipts.templates.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReceiptsTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReceiptsTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReceiptsTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.receipts.templates.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReceiptsTemplatesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReceiptsTemplatesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getReceiptsIdQueryKey(
  args: InferRequestType<(typeof client.receipts)[':id']['$get']>,
) {
  return ['receipts', '/receipts/:id', args] as const
}

export function getReceiptsIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<(typeof client.receipts)[':id']['$get']>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getReceiptsIdQueryKey>
  >({
    queryKey: getReceiptsIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.receipts[':id'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useReceiptsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.receipts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReceiptsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getReceiptsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseReceiptsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.receipts)[':id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getReceiptsIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getReceiptsIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPutReceiptsIdMutationKey() {
  return ['receipts', '/receipts/:id', 'PUT'] as const
}

export function getPutReceiptsIdMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$put']>>>>
    >,
    TError,
    InferRequestType<(typeof client.receipts)[':id']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReceiptsIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.receipts)[':id']['$put']>) {
      return parseResponse(client.receipts[':id'].$put(args, options))
    },
  })
}

export function usePutReceiptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$put']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.receipts)[':id']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutReceiptsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPutReceiptsIdCancelMutationKey() {
  return ['receipts', '/receipts/:id/cancel', 'PUT'] as const
}

export function getPutReceiptsIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['cancel']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.receipts)[':id']['cancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReceiptsIdCancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.receipts)[':id']['cancel']['$put']>) {
      return parseResponse(client.receipts[':id'].cancel.$put(args, options))
    },
  })
}

export function usePutReceiptsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.receipts)[':id']['cancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.receipts)[':id']['cancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutReceiptsIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function getPutReceiptsIdUncancelMutationKey() {
  return ['receipts', '/receipts/:id/uncancel', 'PUT'] as const
}

export function getPutReceiptsIdUncancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.receipts)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.receipts)[':id']['uncancel']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutReceiptsIdUncancelMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.receipts)[':id']['uncancel']['$put']>) {
      return parseResponse(client.receipts[':id'].uncancel.$put(args, options))
    },
  })
}

export function usePutReceiptsIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.receipts)[':id']['uncancel']['$put']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.receipts)[':id']['uncancel']['$put']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPutReceiptsIdUncancelMutationOptions<TError, TOnMutateResult>(
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
