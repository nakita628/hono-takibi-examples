import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetDeliverySlipsKey(args: InferRequestType<typeof client.delivery_slips.$get>) {
  return ['delivery_slips', '/delivery_slips', args] as const
}

export function useGetDeliverySlips<TError = unknown>(
  args: InferRequestType<typeof client.delivery_slips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeliverySlipsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery_slips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliverySlips<TError = unknown>(
  args: InferRequestType<typeof client.delivery_slips.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDeliverySlipsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery_slips.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostDeliverySlipsKey() {
  return ['delivery_slips', '/delivery_slips', 'POST'] as const
}

export function usePostDeliverySlips<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.delivery_slips.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostDeliverySlipsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.delivery_slips.$post> }) =>
        parseResponse(client.delivery_slips.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetDeliverySlipsTemplatesKey(
  args: InferRequestType<typeof client.delivery_slips.templates.$get>,
) {
  return ['delivery_slips', '/delivery_slips/templates', args] as const
}

export function useGetDeliverySlipsTemplates<TError = unknown>(
  args: InferRequestType<typeof client.delivery_slips.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliverySlipsTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery_slips.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliverySlipsTemplates<TError = unknown>(
  args: InferRequestType<typeof client.delivery_slips.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliverySlipsTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.delivery_slips.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery_slips.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDeliverySlipsIdKey(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['$get']>,
) {
  return ['delivery_slips', '/delivery_slips/:id', args] as const
}

export function useGetDeliverySlipsId<TError = unknown>(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliverySlipsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery_slips[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDeliverySlipsId<TError = unknown>(
  args: InferRequestType<(typeof client.delivery_slips)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetDeliverySlipsIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.delivery_slips[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutDeliverySlipsIdKey() {
  return ['delivery_slips', '/delivery_slips/:id', 'PUT'] as const
}

export function usePutDeliverySlipsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.delivery_slips)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delivery_slips)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeliverySlipsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.delivery_slips)[':id']['$put']> },
      ) => parseResponse(client.delivery_slips[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDeliverySlipsIdCancelKey() {
  return ['delivery_slips', '/delivery_slips/:id/cancel', 'PUT'] as const
}

export function usePutDeliverySlipsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery_slips)[':id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delivery_slips)[':id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeliverySlipsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.delivery_slips)[':id']['cancel']['$put']> },
      ) => parseResponse(client.delivery_slips[':id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutDeliverySlipsIdUncancelKey() {
  return ['delivery_slips', '/delivery_slips/:id/uncancel', 'PUT'] as const
}

export function usePutDeliverySlipsIdUncancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.delivery_slips)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.delivery_slips)[':id']['uncancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutDeliverySlipsIdUncancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.delivery_slips)[':id']['uncancel']['$put']> },
      ) => parseResponse(client.delivery_slips[':id'].uncancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesKey(args: InferRequestType<typeof client.invoices.$get>) {
  return ['invoices', '/invoices', args] as const
}

export function useGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetInvoices<TError = unknown>(
  args: InferRequestType<typeof client.invoices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.invoices.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostInvoicesKey() {
  return ['invoices', '/invoices', 'POST'] as const
}

export function usePostInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.invoices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostInvoicesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.invoices.$post> }) =>
        parseResponse(client.invoices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetInvoicesTemplatesKey(
  args: InferRequestType<typeof client.invoices.templates.$get>,
) {
  return ['invoices', '/invoices/templates', args] as const
}

export function useGetInvoicesTemplates<TError = unknown>(
  args: InferRequestType<typeof client.invoices.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvoicesTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesTemplates<TError = unknown>(
  args: InferRequestType<typeof client.invoices.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetInvoicesTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.invoices.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetInvoicesIdKey(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
) {
  return ['invoices', '/invoices/:id', args] as const
}

export function useGetInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetInvoicesId<TError = unknown>(
  args: InferRequestType<(typeof client.invoices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetInvoicesIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.invoices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutInvoicesIdKey() {
  return ['invoices', '/invoices/:id', 'PUT'] as const
}

export function usePutInvoicesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvoicesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['$put']> }) =>
        parseResponse(client.invoices[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInvoicesIdCancelKey() {
  return ['invoices', '/invoices/:id/cancel', 'PUT'] as const
}

export function usePutInvoicesIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.invoices)[':id']['cancel']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvoicesIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['cancel']['$put']> },
      ) => parseResponse(client.invoices[':id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutInvoicesIdUncancelKey() {
  return ['invoices', '/invoices/:id/uncancel', 'PUT'] as const
}

export function usePutInvoicesIdUncancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.invoices)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.invoices)[':id']['uncancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutInvoicesIdUncancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.invoices)[':id']['uncancel']['$put']> },
      ) => parseResponse(client.invoices[':id'].uncancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentNoticesKey(
  args: InferRequestType<typeof client.payment_notices.$get>,
) {
  return ['payment_notices', '/payment_notices', args] as const
}

export function useGetPaymentNotices<TError = unknown>(
  args: InferRequestType<typeof client.payment_notices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentNoticesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_notices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentNotices<TError = unknown>(
  args: InferRequestType<typeof client.payment_notices.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPaymentNoticesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_notices.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentNoticesKey() {
  return ['payment_notices', '/payment_notices', 'POST'] as const
}

export function usePostPaymentNotices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.payment_notices.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentNoticesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.payment_notices.$post> }) =>
        parseResponse(client.payment_notices.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentNoticesTemplatesKey(
  args: InferRequestType<typeof client.payment_notices.templates.$get>,
) {
  return ['payment_notices', '/payment_notices/templates', args] as const
}

export function useGetPaymentNoticesTemplates<TError = unknown>(
  args: InferRequestType<typeof client.payment_notices.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentNoticesTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_notices.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentNoticesTemplates<TError = unknown>(
  args: InferRequestType<typeof client.payment_notices.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentNoticesTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_notices.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_notices.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPaymentNoticesIdKey(
  args: InferRequestType<(typeof client.payment_notices)[':id']['$get']>,
) {
  return ['payment_notices', '/payment_notices/:id', args] as const
}

export function useGetPaymentNoticesId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_notices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentNoticesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_notices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentNoticesId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_notices)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPaymentNoticesIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_notices[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPaymentNoticesIdKey() {
  return ['payment_notices', '/payment_notices/:id', 'PUT'] as const
}

export function usePutPaymentNoticesId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.payment_notices)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payment_notices)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPaymentNoticesIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.payment_notices)[':id']['$put']> },
      ) => parseResponse(client.payment_notices[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPaymentNoticesIdCancelKey() {
  return ['payment_notices', '/payment_notices/:id/cancel', 'PUT'] as const
}

export function usePutPaymentNoticesIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_notices)[':id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payment_notices)[':id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPaymentNoticesIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payment_notices)[':id']['cancel']['$put']> },
      ) => parseResponse(client.payment_notices[':id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPaymentNoticesIdUncancelKey() {
  return ['payment_notices', '/payment_notices/:id/uncancel', 'PUT'] as const
}

export function usePutPaymentNoticesIdUncancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_notices)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.payment_notices)[':id']['uncancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPaymentNoticesIdUncancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.payment_notices)[':id']['uncancel']['$put']> },
      ) => parseResponse(client.payment_notices[':id'].uncancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPurchaseOrdersKey(
  args: InferRequestType<typeof client.purchase_orders.$get>,
) {
  return ['purchase_orders', '/purchase_orders', args] as const
}

export function useGetPurchaseOrders<TError = unknown>(
  args: InferRequestType<typeof client.purchase_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPurchaseOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrders<TError = unknown>(
  args: InferRequestType<typeof client.purchase_orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPurchaseOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPurchaseOrdersKey() {
  return ['purchase_orders', '/purchase_orders', 'POST'] as const
}

export function usePostPurchaseOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.purchase_orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPurchaseOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.purchase_orders.$post> }) =>
        parseResponse(client.purchase_orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPurchaseOrdersTemplatesKey(
  args: InferRequestType<typeof client.purchase_orders.templates.$get>,
) {
  return ['purchase_orders', '/purchase_orders/templates', args] as const
}

export function useGetPurchaseOrdersTemplates<TError = unknown>(
  args: InferRequestType<typeof client.purchase_orders.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPurchaseOrdersTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_orders.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrdersTemplates<TError = unknown>(
  args: InferRequestType<typeof client.purchase_orders.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPurchaseOrdersTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.purchase_orders.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_orders.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPurchaseOrdersIdKey(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
) {
  return ['purchase_orders', '/purchase_orders/:id', args] as const
}

export function useGetPurchaseOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPurchaseOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPurchaseOrdersId<TError = unknown>(
  args: InferRequestType<(typeof client.purchase_orders)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetPurchaseOrdersIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.purchase_orders[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPurchaseOrdersIdKey() {
  return ['purchase_orders', '/purchase_orders/:id', 'PUT'] as const
}

export function usePutPurchaseOrdersId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.purchase_orders)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.purchase_orders)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPurchaseOrdersIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.purchase_orders)[':id']['$put']> },
      ) => parseResponse(client.purchase_orders[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPurchaseOrdersIdCancelKey() {
  return ['purchase_orders', '/purchase_orders/:id/cancel', 'PUT'] as const
}

export function usePutPurchaseOrdersIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.purchase_orders)[':id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.purchase_orders)[':id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPurchaseOrdersIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.purchase_orders)[':id']['cancel']['$put']> },
      ) => parseResponse(client.purchase_orders[':id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutPurchaseOrdersIdUncancelKey() {
  return ['purchase_orders', '/purchase_orders/:id/uncancel', 'PUT'] as const
}

export function usePutPurchaseOrdersIdUncancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.purchase_orders)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.purchase_orders)[':id']['uncancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPurchaseOrdersIdUncancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.purchase_orders)[':id']['uncancel']['$put']> },
      ) => parseResponse(client.purchase_orders[':id'].uncancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotationsKey(args: InferRequestType<typeof client.quotations.$get>) {
  return ['quotations', '/quotations', args] as const
}

export function useGetQuotations<TError = unknown>(
  args: InferRequestType<typeof client.quotations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotations<TError = unknown>(
  args: InferRequestType<typeof client.quotations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostQuotationsKey() {
  return ['quotations', '/quotations', 'POST'] as const
}

export function usePostQuotations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.quotations.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.quotations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostQuotationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.quotations.$post> }) =>
        parseResponse(client.quotations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetQuotationsTemplatesKey(
  args: InferRequestType<typeof client.quotations.templates.$get>,
) {
  return ['quotations', '/quotations/templates', args] as const
}

export function useGetQuotationsTemplates<TError = unknown>(
  args: InferRequestType<typeof client.quotations.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuotationsTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotations.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotationsTemplates<TError = unknown>(
  args: InferRequestType<typeof client.quotations.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetQuotationsTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.quotations.templates.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotations.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetQuotationsIdKey(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
) {
  return ['quotations', '/quotations/:id', args] as const
}

export function useGetQuotationsId<TError = unknown>(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetQuotationsId<TError = unknown>(
  args: InferRequestType<(typeof client.quotations)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetQuotationsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.quotations[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutQuotationsIdKey() {
  return ['quotations', '/quotations/:id', 'PUT'] as const
}

export function usePutQuotationsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.quotations)[':id']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotations)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotationsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quotations)[':id']['$put']> },
      ) => parseResponse(client.quotations[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutQuotationsIdCancelKey() {
  return ['quotations', '/quotations/:id/cancel', 'PUT'] as const
}

export function usePutQuotationsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotations)[':id']['cancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotations)[':id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotationsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quotations)[':id']['cancel']['$put']> },
      ) => parseResponse(client.quotations[':id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutQuotationsIdUncancelKey() {
  return ['quotations', '/quotations/:id/uncancel', 'PUT'] as const
}

export function usePutQuotationsIdUncancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.quotations)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.quotations)[':id']['uncancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutQuotationsIdUncancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.quotations)[':id']['uncancel']['$put']> },
      ) => parseResponse(client.quotations[':id'].uncancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReceiptsKey(args: InferRequestType<typeof client.receipts.$get>) {
  return ['receipts', '/receipts', args] as const
}

export function useGetReceipts<TError = unknown>(
  args: InferRequestType<typeof client.receipts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReceiptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.receipts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetReceipts<TError = unknown>(
  args: InferRequestType<typeof client.receipts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReceiptsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.receipts.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostReceiptsKey() {
  return ['receipts', '/receipts', 'POST'] as const
}

export function usePostReceipts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.receipts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostReceiptsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.receipts.$post> }) =>
        parseResponse(client.receipts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetReceiptsTemplatesKey(
  args: InferRequestType<typeof client.receipts.templates.$get>,
) {
  return ['receipts', '/receipts/templates', args] as const
}

export function useGetReceiptsTemplates<TError = unknown>(
  args: InferRequestType<typeof client.receipts.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReceiptsTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.receipts.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReceiptsTemplates<TError = unknown>(
  args: InferRequestType<typeof client.receipts.templates.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetReceiptsTemplatesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.receipts.templates.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.receipts.templates.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetReceiptsIdKey(
  args: InferRequestType<(typeof client.receipts)[':id']['$get']>,
) {
  return ['receipts', '/receipts/:id', args] as const
}

export function useGetReceiptsId<TError = unknown>(
  args: InferRequestType<(typeof client.receipts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReceiptsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.receipts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetReceiptsId<TError = unknown>(
  args: InferRequestType<(typeof client.receipts)[':id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>
        >
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetReceiptsIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.receipts[':id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutReceiptsIdKey() {
  return ['receipts', '/receipts/:id', 'PUT'] as const
}

export function usePutReceiptsId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['$put']>>>>
    >,
    TError,
    Key,
    InferRequestType<(typeof client.receipts)[':id']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReceiptsIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<(typeof client.receipts)[':id']['$put']> }) =>
        parseResponse(client.receipts[':id'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutReceiptsIdCancelKey() {
  return ['receipts', '/receipts/:id/cancel', 'PUT'] as const
}

export function usePutReceiptsIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.receipts)[':id']['cancel']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.receipts)[':id']['cancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReceiptsIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.receipts)[':id']['cancel']['$put']> },
      ) => parseResponse(client.receipts[':id'].cancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPutReceiptsIdUncancelKey() {
  return ['receipts', '/receipts/:id/uncancel', 'PUT'] as const
}

export function usePutReceiptsIdUncancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.receipts)[':id']['uncancel']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.receipts)[':id']['uncancel']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutReceiptsIdUncancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.receipts)[':id']['uncancel']['$put']> },
      ) => parseResponse(client.receipts[':id'].uncancel.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}
