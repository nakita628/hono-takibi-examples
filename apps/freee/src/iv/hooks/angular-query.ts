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

export function injectDeliverySlips<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.delivery_slips.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeliverySlipsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostDeliverySlips<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostDeliverySlipsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeliverySlipsTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.delivery_slips.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getDeliverySlipsTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeliverySlipsId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.delivery_slips)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDeliverySlipsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutDeliverySlipsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDeliverySlipsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutDeliverySlipsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDeliverySlipsIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutDeliverySlipsIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutDeliverySlipsIdUncancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectInvoices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invoices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getInvoicesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostInvoices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostInvoicesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectInvoicesTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.invoices.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicesTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectInvoicesId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getInvoicesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutInvoicesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutInvoicesIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutInvoicesIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutInvoicesIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutInvoicesIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutInvoicesIdUncancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPaymentNotices<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.payment_notices.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentNoticesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPaymentNotices<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPaymentNoticesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPaymentNoticesTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.payment_notices.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPaymentNoticesTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPaymentNoticesId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.payment_notices)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPaymentNoticesIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutPaymentNoticesId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPaymentNoticesIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutPaymentNoticesIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPaymentNoticesIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutPaymentNoticesIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPaymentNoticesIdUncancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPurchaseOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.purchase_orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPurchaseOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostPurchaseOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostPurchaseOrdersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPurchaseOrdersTemplates<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.purchase_orders.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getPurchaseOrdersTemplatesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPurchaseOrdersId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getPurchaseOrdersIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutPurchaseOrdersId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPurchaseOrdersIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutPurchaseOrdersIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPurchaseOrdersIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutPurchaseOrdersIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutPurchaseOrdersIdUncancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectQuotations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.quotations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostQuotations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostQuotationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectQuotationsTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.quotations.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotationsTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectQuotationsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getQuotationsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutQuotationsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutQuotationsIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutQuotationsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutQuotationsIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutQuotationsIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutQuotationsIdUncancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectReceipts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.receipts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getReceiptsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReceiptsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostReceipts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostReceiptsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectReceiptsTemplates<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.receipts.templates.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReceiptsTemplatesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectReceiptsId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.receipts)[':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getReceiptsIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutReceiptsId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutReceiptsIdMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutReceiptsIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutReceiptsIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPutReceiptsIdUncancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutReceiptsIdUncancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
