import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getGetApiOrdersKey(args: InferRequestType<typeof client.api.orders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders', keyArgs] as const
}

export function useGetApiOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrdersKey() {
  return ['api', '/api/orders', 'POST'] as const
}

export function usePostApiOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.orders.$post> }) =>
        parseResponse(client.api.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrdersOrderIdKey(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/:order_id', keyArgs] as const
}

export function useGetApiOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$get']>>>
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
        ? getGetApiOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders[':order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrdersOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$get']>>>
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
        ? getGetApiOrdersOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders[':order_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiOrdersOrderIdKey() {
  return ['api', '/api/orders/:order_id', 'PATCH'] as const
}

export function usePatchApiOrdersOrderId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$patch']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.orders)[':order_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiOrdersOrderIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.orders)[':order_id']['$patch']> },
      ) => parseResponse(client.api.orders[':order_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrdersOrderIdIncrementAuthorisationKey() {
  return ['api', '/api/orders/:order_id/increment-authorisation', 'POST'] as const
}

export function usePostApiOrdersOrderIdIncrementAuthorisation<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.orders)[':order_id']['increment-authorisation']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.orders)[':order_id']['increment-authorisation']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersOrderIdIncrementAuthorisationKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.orders)[':order_id']['increment-authorisation']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.orders[':order_id']['increment-authorisation'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrdersOrderIdCaptureKey() {
  return ['api', '/api/orders/:order_id/capture', 'POST'] as const
}

export function usePostApiOrdersOrderIdCapture<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['capture']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.orders)[':order_id']['capture']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersOrderIdCaptureKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.orders)[':order_id']['capture']['$post']> },
      ) => parseResponse(client.api.orders[':order_id'].capture.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrdersOrderIdCancelKey() {
  return ['api', '/api/orders/:order_id/cancel', 'POST'] as const
}

export function usePostApiOrdersOrderIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.orders)[':order_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersOrderIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.orders)[':order_id']['cancel']['$post']> },
      ) => parseResponse(client.api.orders[':order_id'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrdersOrderIdRefundKey() {
  return ['api', '/api/orders/:order_id/refund', 'POST'] as const
}

export function usePostApiOrdersOrderIdRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.orders)[':order_id']['refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersOrderIdRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.orders)[':order_id']['refund']['$post']> },
      ) => parseResponse(client.api.orders[':order_id'].refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrdersOrderIdPaymentsKey(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/:order_id/payments', keyArgs] as const
}

export function useGetApiOrdersOrderIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$get']>>
          >
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
        ? getGetApiOrdersOrderIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders[':order_id'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrdersOrderIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$get']>>
          >
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
        ? getGetApiOrdersOrderIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders[':order_id'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrdersOrderIdPaymentsKey() {
  return ['api', '/api/orders/:order_id/payments', 'POST'] as const
}

export function usePostApiOrdersOrderIdPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersOrderIdPaymentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$post']> },
      ) => parseResponse(client.api.orders[':order_id'].payments.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCustomersKey(args: InferRequestType<typeof client.api.customers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/customers', keyArgs] as const
}

export function useGetApiCustomers<TError = unknown>(
  args: InferRequestType<typeof client.api.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCustomers<TError = unknown>(
  args: InferRequestType<typeof client.api.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiCustomersKey() {
  return ['api', '/api/customers', 'POST'] as const
}

export function usePostApiCustomers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.customers.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiCustomersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.customers.$post> }) =>
        parseResponse(client.api.customers.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCustomersCustomerIdKey(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/customers/:customer_id', keyArgs] as const
}

export function useGetApiCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$get']>>
          >
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
        ? getGetApiCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.customers[':customer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCustomersCustomerId<TError = unknown>(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$get']>>
          >
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
        ? getGetApiCustomersCustomerIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.customers[':customer_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiCustomersCustomerIdKey() {
  return ['api', '/api/customers/:customer_id', 'DELETE'] as const
}

export function useDeleteApiCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.customers)[':customer_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.customers)[':customer_id']['$delete']> },
      ) => parseResponse(client.api.customers[':customer_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiCustomersCustomerIdKey() {
  return ['api', '/api/customers/:customer_id', 'PATCH'] as const
}

export function usePatchApiCustomersCustomerId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.customers)[':customer_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiCustomersCustomerIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.customers)[':customer_id']['$patch']> },
      ) => parseResponse(client.api.customers[':customer_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiCustomersCustomerIdPaymentMethodsKey(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/customers/:customer_id/payment-methods', keyArgs] as const
}

export function useGetApiCustomersCustomerIdPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>
            >
          >
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
        ? getGetApiCustomersCustomerIdPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.customers[':customer_id']['payment-methods'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCustomersCustomerIdPaymentMethods<TError = unknown>(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>
            >
          >
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
        ? getGetApiCustomersCustomerIdPaymentMethodsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.customers[':customer_id']['payment-methods'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiCustomersCustomerIdPaymentMethodsPaymentMethodIdKey(
  args: InferRequestType<
    (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/customers/:customer_id/payment-methods/:payment_method_id', keyArgs] as const
}

export function useGetApiCustomersCustomerIdPaymentMethodsPaymentMethodId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
              >
            >
          >
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
        ? getGetApiCustomersCustomerIdPaymentMethodsPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.customers[':customer_id']['payment-methods'][':payment_method_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCustomersCustomerIdPaymentMethodsPaymentMethodId<
  TError = unknown,
>(
  args: InferRequestType<
    (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
              >
            >
          >
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
        ? getGetApiCustomersCustomerIdPaymentMethodsPaymentMethodIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.customers[':customer_id']['payment-methods'][':payment_method_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdKey() {
  return [
    'api',
    '/api/customers/:customer_id/payment-methods/:payment_method_id',
    'DELETE',
  ] as const
}

export function useDeleteApiCustomersCustomerIdPaymentMethodsPaymentMethodId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api.customers[':customer_id']['payment-methods'][':payment_method_id'].$delete(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPatchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdKey() {
  return ['api', '/api/customers/:customer_id/payment-methods/:payment_method_id', 'PATCH'] as const
}

export function usePatchApiCustomersCustomerIdPaymentMethodsPaymentMethodId<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$patch']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$patch']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$patch']
          >
        },
      ) =>
        parseResponse(
          client.api.customers[':customer_id']['payment-methods'][':payment_method_id'].$patch(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiDisputesKey(args: InferRequestType<typeof client.api.disputes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/disputes', keyArgs] as const
}

export function useGetApiDisputes<TError = unknown>(
  args: InferRequestType<typeof client.api.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDisputes<TError = unknown>(
  args: InferRequestType<typeof client.api.disputes.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.disputes.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiDisputesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.disputes.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.disputes.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiDisputesDisputeIdKey(
  args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/disputes/:dispute_id', keyArgs] as const
}

export function useGetApiDisputesDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['$get']>>
          >
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
        ? getGetApiDisputesDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.disputes[':dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiDisputesDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['$get']>>
          >
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
        ? getGetApiDisputesDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.disputes[':dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiDisputesDisputeIdAcceptKey() {
  return ['api', '/api/disputes/:dispute_id/accept', 'POST'] as const
}

export function usePostApiDisputesDisputeIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['accept']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.disputes)[':dispute_id']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDisputesDisputeIdAcceptKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.disputes)[':dispute_id']['accept']['$post']>
        },
      ) => parseResponse(client.api.disputes[':dispute_id'].accept.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiDisputesDisputeIdEvidencesKey() {
  return ['api', '/api/disputes/:dispute_id/evidences', 'POST'] as const
}

export function usePostApiDisputesDisputeIdEvidences<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['evidences']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.disputes)[':dispute_id']['evidences']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDisputesDisputeIdEvidencesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.disputes)[':dispute_id']['evidences']['$post']>
        },
      ) => parseResponse(client.api.disputes[':dispute_id'].evidences.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiDisputesDisputeIdChallengeKey() {
  return ['api', '/api/disputes/:dispute_id/challenge', 'POST'] as const
}

export function usePostApiDisputesDisputeIdChallenge<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['challenge']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.disputes)[':dispute_id']['challenge']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiDisputesDisputeIdChallengeKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.disputes)[':dispute_id']['challenge']['$post']>
        },
      ) => parseResponse(client.api.disputes[':dispute_id'].challenge.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentsPaymentIdKey(
  args: InferRequestType<(typeof client.api.payments)[':payment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payments/:payment_id', keyArgs] as const
}

export function useGetApiPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payments)[':payment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payments)[':payment_id']['$get']>>
          >
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
        ? getGetApiPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payments)[':payment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payments[':payment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payments)[':payment_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payments)[':payment_id']['$get']>>
          >
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
        ? getGetApiPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payments)[':payment_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payments[':payment_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSubscriptionPlansKey(
  args: InferRequestType<(typeof client.api)['subscription-plans']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscription-plans', keyArgs] as const
}

export function useGetApiSubscriptionPlans<TError = unknown>(
  args: InferRequestType<(typeof client.api)['subscription-plans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-plans']['$get']>>
          >
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
        ? getGetApiSubscriptionPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-plans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['subscription-plans'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSubscriptionPlans<TError = unknown>(
  args: InferRequestType<(typeof client.api)['subscription-plans']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-plans']['$get']>>
          >
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
        ? getGetApiSubscriptionPlansKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-plans']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['subscription-plans'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSubscriptionPlansKey() {
  return ['api', '/api/subscription-plans', 'POST'] as const
}

export function usePostApiSubscriptionPlans<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['subscription-plans']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['subscription-plans']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSubscriptionPlansKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['subscription-plans']['$post']> },
      ) => parseResponse(client.api['subscription-plans'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSubscriptionPlansSubscriptionPlanIdKey(
  args: InferRequestType<
    (typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscription-plans/:subscription_plan_id', keyArgs] as const
}

export function useGetApiSubscriptionPlansSubscriptionPlanId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']>
            >
          >
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
        ? getGetApiSubscriptionPlansSubscriptionPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['subscription-plans'][':subscription_plan_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSubscriptionPlansSubscriptionPlanId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']>
            >
          >
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
        ? getGetApiSubscriptionPlansSubscriptionPlanIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['subscription-plans'][':subscription_plan_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSubscriptionsKey(
  args: InferRequestType<typeof client.api.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscriptions', keyArgs] as const
}

export function useGetApiSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.api.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$get>>>>
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
        ? getGetApiSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSubscriptions<TError = unknown>(
  args: InferRequestType<typeof client.api.subscriptions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$get>>>>
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
        ? getGetApiSubscriptionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.subscriptions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSubscriptionsKey() {
  return ['api', '/api/subscriptions', 'POST'] as const
}

export function usePostApiSubscriptions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.subscriptions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSubscriptionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.subscriptions.$post> }) =>
        parseResponse(client.api.subscriptions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSubscriptionsSubscriptionIdKey(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscriptions/:subscription_id', keyArgs] as const
}

export function useGetApiSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$get']>>
          >
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
        ? getGetApiSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.subscriptions[':subscription_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSubscriptionsSubscriptionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$get']>>
          >
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
        ? getGetApiSubscriptionsSubscriptionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.subscriptions[':subscription_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPatchApiSubscriptionsSubscriptionIdKey() {
  return ['api', '/api/subscriptions/:subscription_id', 'PATCH'] as const
}

export function usePatchApiSubscriptionsSubscriptionId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiSubscriptionsSubscriptionIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$patch']>
        },
      ) => parseResponse(client.api.subscriptions[':subscription_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiSubscriptionsSubscriptionIdCancelKey() {
  return ['api', '/api/subscriptions/:subscription_id/cancel', 'POST'] as const
}

export function usePostApiSubscriptionsSubscriptionIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.subscriptions)[':subscription_id']['cancel']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSubscriptionsSubscriptionIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.subscriptions)[':subscription_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.subscriptions[':subscription_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiSubscriptionsSubscriptionIdChangePlanKey() {
  return ['api', '/api/subscriptions/:subscription_id/change-plan', 'POST'] as const
}

export function usePostApiSubscriptionsSubscriptionIdChangePlan<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.subscriptions)[':subscription_id']['change-plan']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['change-plan']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSubscriptionsSubscriptionIdChangePlanKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.subscriptions)[':subscription_id']['change-plan']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.subscriptions[':subscription_id']['change-plan'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiSubscriptionsSubscriptionIdChangeRenewalDateKey() {
  return ['api', '/api/subscriptions/:subscription_id/change-renewal-date', 'POST'] as const
}

export function usePostApiSubscriptionsSubscriptionIdChangeRenewalDate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.subscriptions)[':subscription_id']['change-renewal-date']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.subscriptions)[':subscription_id']['change-renewal-date']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSubscriptionsSubscriptionIdChangeRenewalDateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.subscriptions)[':subscription_id']['change-renewal-date']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.subscriptions[':subscription_id']['change-renewal-date'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiSubscriptionsSubscriptionIdCyclesKey(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscriptions/:subscription_id/cycles', keyArgs] as const
}

export function useGetApiSubscriptionsSubscriptionIdCycles<TError = unknown>(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>
            >
          >
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
        ? getGetApiSubscriptionsSubscriptionIdCyclesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.subscriptions[':subscription_id'].cycles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSubscriptionsSubscriptionIdCycles<TError = unknown>(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>
            >
          >
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
        ? getGetApiSubscriptionsSubscriptionIdCyclesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.subscriptions[':subscription_id'].cycles.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSubscriptionsSubscriptionIdCyclesCycleIdKey(
  args: InferRequestType<
    (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscriptions/:subscription_id/cycles/:cycle_id', keyArgs] as const
}

export function useGetApiSubscriptionsSubscriptionIdCyclesCycleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
              >
            >
          >
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
        ? getGetApiSubscriptionsSubscriptionIdCyclesCycleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.subscriptions[':subscription_id'].cycles[':cycle_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSubscriptionsSubscriptionIdCyclesCycleId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
              >
            >
          >
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
        ? getGetApiSubscriptionsSubscriptionIdCyclesCycleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
              >
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api.subscriptions[':subscription_id'].cycles[':cycle_id'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetApiSubscriptionUsagesKey(
  args: InferRequestType<(typeof client.api)['subscription-usages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscription-usages', keyArgs] as const
}

export function useGetApiSubscriptionUsages<TError = unknown>(
  args: InferRequestType<(typeof client.api)['subscription-usages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-usages']['$get']>>
          >
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
        ? getGetApiSubscriptionUsagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-usages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['subscription-usages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSubscriptionUsages<TError = unknown>(
  args: InferRequestType<(typeof client.api)['subscription-usages']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-usages']['$get']>>
          >
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
        ? getGetApiSubscriptionUsagesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-usages']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['subscription-usages'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSubscriptionUsagesKey() {
  return ['api', '/api/subscription-usages', 'POST'] as const
}

export function usePostApiSubscriptionUsages<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['subscription-usages']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['subscription-usages']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSubscriptionUsagesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['subscription-usages']['$post']> },
      ) => parseResponse(client.api['subscription-usages'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSubscriptionUsagesUsageIdKey(
  args: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscription-usages/:usage_id', keyArgs] as const
}

export function useGetApiSubscriptionUsagesUsageId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>>
          >
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
        ? getGetApiSubscriptionUsagesUsageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['subscription-usages'][':usage_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSubscriptionUsagesUsageId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>>
          >
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
        ? getGetApiSubscriptionUsagesUsageIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['subscription-usages'][':usage_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiSubscriptionUsagesUsageIdKey() {
  return ['api', '/api/subscription-usages/:usage_id', 'DELETE'] as const
}

export function useDeleteApiSubscriptionUsagesUsageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiSubscriptionUsagesUsageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$delete']>
        },
      ) =>
        parseResponse(client.api['subscription-usages'][':usage_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiSubscriptionUsagesUsageIdKey() {
  return ['api', '/api/subscription-usages/:usage_id', 'PATCH'] as const
}

export function usePatchApiSubscriptionUsagesUsageId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiSubscriptionUsagesUsageIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$patch']>
        },
      ) => parseResponse(client.api['subscription-usages'][':usage_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPayoutsKey(args: InferRequestType<typeof client.api.payouts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payouts', keyArgs] as const
}

export function useGetApiPayouts<TError = unknown>(
  args: InferRequestType<typeof client.api.payouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payouts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPayoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payouts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPayouts<TError = unknown>(
  args: InferRequestType<typeof client.api.payouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payouts.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPayoutsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payouts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPayoutsPayoutIdKey(
  args: InferRequestType<(typeof client.api.payouts)[':payout_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payouts/:payout_id', keyArgs] as const
}

export function useGetApiPayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payouts)[':payout_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payouts)[':payout_id']['$get']>>
          >
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
        ? getGetApiPayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payouts)[':payout_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payouts[':payout_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.api.payouts)[':payout_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payouts)[':payout_id']['$get']>>
          >
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
        ? getGetApiPayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.payouts)[':payout_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.payouts[':payout_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiReportRunsKey() {
  return ['api', '/api/report-runs', 'POST'] as const
}

export function usePostApiReportRuns<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['report-runs']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['report-runs']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiReportRunsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['report-runs']['$post']> },
      ) => parseResponse(client.api['report-runs'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiReportRunsReportRunIdKey(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/report-runs/:report_run_id', keyArgs] as const
}

export function useGetApiReportRunsReportRunId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['$get']>>
          >
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
        ? getGetApiReportRunsReportRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['report-runs'][':report_run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReportRunsReportRunId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['$get']>>
          >
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
        ? getGetApiReportRunsReportRunIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['report-runs'][':report_run_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiReportRunsReportRunIdFileKey(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/report-runs/:report_run_id/file', keyArgs] as const
}

export function useGetApiReportRunsReportRunIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>
            >
          >
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
        ? getGetApiReportRunsReportRunIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['report-runs'][':report_run_id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiReportRunsReportRunIdFile<TError = unknown>(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>
            >
          >
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
        ? getGetApiReportRunsReportRunIdFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api['report-runs'][':report_run_id'].file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiWebhooksKey(args: InferRequestType<typeof client.api.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/webhooks', keyArgs] as const
}

export function useGetApiWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.api.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWebhooks<TError = unknown>(
  args: InferRequestType<typeof client.api.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiWebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiWebhooksKey() {
  return ['api', '/api/webhooks', 'POST'] as const
}

export function usePostApiWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.webhooks.$post> }) =>
        parseResponse(client.api.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiWebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/webhooks/:webhook_id', keyArgs] as const
}

export function useGetApiWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$get']>>
          >
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
        ? getGetApiWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiWebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$get']>>
          >
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
        ? getGetApiWebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.webhooks[':webhook_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiWebhooksWebhookIdKey() {
  return ['api', '/api/webhooks/:webhook_id', 'DELETE'] as const
}

export function useDeleteApiWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$delete']> },
      ) => parseResponse(client.api.webhooks[':webhook_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiWebhooksWebhookIdKey() {
  return ['api', '/api/webhooks/:webhook_id', 'PATCH'] as const
}

export function usePatchApiWebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiWebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$patch']> },
      ) => parseResponse(client.api.webhooks[':webhook_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiWebhooksWebhookIdRotateSigningSecretKey() {
  return ['api', '/api/webhooks/:webhook_id/rotate-signing-secret', 'POST'] as const
}

export function usePostApiWebhooksWebhookIdRotateSigningSecret<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.webhooks)[':webhook_id']['rotate-signing-secret']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.webhooks)[':webhook_id']['rotate-signing-secret']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiWebhooksWebhookIdRotateSigningSecretKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api.webhooks)[':webhook_id']['rotate-signing-secret']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.webhooks[':webhook_id']['rotate-signing-secret'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiApplePayDomainsRegisterKey() {
  return ['api', '/api/apple-pay/domains/register', 'POST'] as const
}

export function usePostApiApplePayDomainsRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['apple-pay']['domains']['register']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api)['apple-pay']['domains']['register']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApplePayDomainsRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['apple-pay']['domains']['register']['$post']>
        },
      ) => parseResponse(client.api['apple-pay'].domains.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiApplePayDomainsUnregisterKey() {
  return ['api', '/api/apple-pay/domains/unregister', 'POST'] as const
}

export function usePostApiApplePayDomainsUnregister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['apple-pay']['domains']['unregister']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api)['apple-pay']['domains']['unregister']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiApplePayDomainsUnregisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api)['apple-pay']['domains']['unregister']['$post']>
        },
      ) => parseResponse(client.api['apple-pay'].domains.unregister.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiSynchronousWebhooksKey(
  args: InferRequestType<(typeof client.api)['synchronous-webhooks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/synchronous-webhooks', keyArgs] as const
}

export function useGetApiSynchronousWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.api)['synchronous-webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$get']>>
          >
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
        ? getGetApiSynchronousWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['synchronous-webhooks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSynchronousWebhooks<TError = unknown>(
  args: InferRequestType<(typeof client.api)['synchronous-webhooks']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$get']>>
          >
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
        ? getGetApiSynchronousWebhooksKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api['synchronous-webhooks'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiSynchronousWebhooksKey() {
  return ['api', '/api/synchronous-webhooks', 'POST'] as const
}

export function usePostApiSynchronousWebhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api)['synchronous-webhooks']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiSynchronousWebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api)['synchronous-webhooks']['$post']> },
      ) => parseResponse(client.api['synchronous-webhooks'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiSynchronousWebhooksSynchronousWebhookIdKey() {
  return ['api', '/api/synchronous-webhooks/:synchronous_webhook_id', 'DELETE'] as const
}

export function useDeleteApiSynchronousWebhooksSynchronousWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api)['synchronous-webhooks'][':synchronous_webhook_id']['$delete']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)['synchronous-webhooks'][':synchronous_webhook_id']['$delete']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiSynchronousWebhooksSynchronousWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api)['synchronous-webhooks'][':synchronous_webhook_id']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.api['synchronous-webhooks'][':synchronous_webhook_id'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiLocationsKey(args: InferRequestType<typeof client.api.locations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/locations', keyArgs] as const
}

export function useGetApiLocations<TError = unknown>(
  args: InferRequestType<typeof client.api.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLocationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocations<TError = unknown>(
  args: InferRequestType<typeof client.api.locations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiLocationsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.locations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLocationsKey() {
  return ['api', '/api/locations', 'POST'] as const
}

export function usePostApiLocations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.locations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLocationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.locations.$post> }) =>
        parseResponse(client.api.locations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiLocationsLocationIdKey(
  args: InferRequestType<(typeof client.api.locations)[':location_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/locations/:location_id', keyArgs] as const
}

export function useGetApiLocationsLocationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.locations)[':location_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$get']>>
          >
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
        ? getGetApiLocationsLocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.locations[':location_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiLocationsLocationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.locations)[':location_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$get']>>
          >
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
        ? getGetApiLocationsLocationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.locations[':location_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiLocationsLocationIdKey() {
  return ['api', '/api/locations/:location_id', 'DELETE'] as const
}

export function useDeleteApiLocationsLocationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.api.locations)[':location_id']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiLocationsLocationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.api.locations)[':location_id']['$delete']> },
      ) => parseResponse(client.api.locations[':location_id'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPatchApiLocationsLocationIdKey() {
  return ['api', '/api/locations/:location_id', 'PATCH'] as const
}

export function usePatchApiLocationsLocationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$patch']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.locations)[':location_id']['$patch']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPatchApiLocationsLocationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.locations)[':location_id']['$patch']> },
      ) => parseResponse(client.api.locations[':location_id'].$patch(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiTerminalsKey(args: InferRequestType<typeof client.api.terminals.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/terminals', keyArgs] as const
}

export function useGetApiTerminals<TError = unknown>(
  args: InferRequestType<typeof client.api.terminals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.terminals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTerminalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.terminals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.terminals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiTerminals<TError = unknown>(
  args: InferRequestType<typeof client.api.terminals.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.terminals.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiTerminalsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.terminals.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.terminals.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrdersOrderIdPaymentIntentsKey() {
  return ['api', '/api/orders/:order_id/payment-intents', 'POST'] as const
}

export function usePostApiOrdersOrderIdPaymentIntents<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payment-intents']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.orders)[':order_id']['payment-intents']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersOrderIdPaymentIntentsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.orders)[':order_id']['payment-intents']['$post']>
        },
      ) =>
        parseResponse(client.api.orders[':order_id']['payment-intents'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPaymentIntentsPaymentIntentIdKey(
  args: InferRequestType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payment-intents/:payment_intent_id', keyArgs] as const
}

export function useGetApiPaymentIntentsPaymentIntentId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>
            >
          >
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
        ? getGetApiPaymentIntentsPaymentIntentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['payment-intents'][':payment_intent_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPaymentIntentsPaymentIntentId<TError = unknown>(
  args: InferRequestType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>
            >
          >
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
        ? getGetApiPaymentIntentsPaymentIntentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.api['payment-intents'][':payment_intent_id'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiPaymentIntentsPaymentIntentIdCancelKey() {
  return ['api', '/api/payment-intents/:payment_intent_id/cancel', 'POST'] as const
}

export function usePostApiPaymentIntentsPaymentIntentIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api)['payment-intents'][':payment_intent_id']['cancel']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api)['payment-intents'][':payment_intent_id']['cancel']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPaymentIntentsPaymentIntentIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<
            (typeof client.api)['payment-intents'][':payment_intent_id']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api['payment-intents'][':payment_intent_id'].cancel.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}
