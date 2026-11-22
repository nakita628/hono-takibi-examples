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

export function getApiKey() {
  return ['api'] as const
}

export function getApiOrdersQueryKey(args: InferRequestType<typeof client.api.orders.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders', keyArgs] as const
}

export function getApiOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiOrdersQueryKey>
  >({
    queryKey: getApiOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiOrdersMutationKey() {
  return ['api', '/api/orders', 'POST'] as const
}

export function getPostApiOrdersMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.orders.$post>) {
      return parseResponse(client.api.orders.$post(args, options))
    },
  })
}

export function injectPostApiOrders<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.orders.$post>,
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
    const mutationDefaults = getPostApiOrdersMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiOrdersOrderIdQueryKey(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/:order_id', keyArgs] as const
}

export function getApiOrdersOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrdersOrderIdQueryKey>
  >({
    queryKey: getApiOrdersOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.orders[':order_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrdersOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.orders)[':order_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrdersOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOrdersOrderIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPatchApiOrdersOrderIdMutationKey() {
  return ['api', '/api/orders/:order_id', 'PATCH'] as const
}

export function getPatchApiOrdersOrderIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$patch']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.orders)[':order_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiOrdersOrderIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.orders)[':order_id']['$patch']>) {
      return parseResponse(client.api.orders[':order_id'].$patch(args, options))
    },
  })
}

export function injectPatchApiOrdersOrderId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.orders)[':order_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.orders)[':order_id']['$patch']>,
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
    const mutationDefaults = getPatchApiOrdersOrderIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiOrdersOrderIdIncrementAuthorisationMutationKey() {
  return ['api', '/api/orders/:order_id/increment-authorisation', 'POST'] as const
}

export function getPostApiOrdersOrderIdIncrementAuthorisationMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.orders)[':order_id']['increment-authorisation']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersOrderIdIncrementAuthorisationMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.orders)[':order_id']['increment-authorisation']['$post']
      >,
    ) {
      return parseResponse(
        client.api.orders[':order_id']['increment-authorisation'].$post(args, options),
      )
    },
  })
}

export function injectPostApiOrdersOrderIdIncrementAuthorisation<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api.orders)[':order_id']['increment-authorisation']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.orders)[':order_id']['increment-authorisation']['$post']
        >,
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
    const mutationDefaults = getPostApiOrdersOrderIdIncrementAuthorisationMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiOrdersOrderIdCaptureMutationKey() {
  return ['api', '/api/orders/:order_id/capture', 'POST'] as const
}

export function getPostApiOrdersOrderIdCaptureMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['capture']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.orders)[':order_id']['capture']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersOrderIdCaptureMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.orders)[':order_id']['capture']['$post']>,
    ) {
      return parseResponse(client.api.orders[':order_id'].capture.$post(args, options))
    },
  })
}

export function injectPostApiOrdersOrderIdCapture<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.orders)[':order_id']['capture']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.orders)[':order_id']['capture']['$post']>,
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
    const mutationDefaults = getPostApiOrdersOrderIdCaptureMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiOrdersOrderIdCancelMutationKey() {
  return ['api', '/api/orders/:order_id/cancel', 'POST'] as const
}

export function getPostApiOrdersOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.orders)[':order_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersOrderIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.orders)[':order_id']['cancel']['$post']>,
    ) {
      return parseResponse(client.api.orders[':order_id'].cancel.$post(args, options))
    },
  })
}

export function injectPostApiOrdersOrderIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.orders)[':order_id']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.orders)[':order_id']['cancel']['$post']>,
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
    const mutationDefaults = getPostApiOrdersOrderIdCancelMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiOrdersOrderIdRefundMutationKey() {
  return ['api', '/api/orders/:order_id/refund', 'POST'] as const
}

export function getPostApiOrdersOrderIdRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['refund']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.orders)[':order_id']['refund']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersOrderIdRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.orders)[':order_id']['refund']['$post']>,
    ) {
      return parseResponse(client.api.orders[':order_id'].refund.$post(args, options))
    },
  })
}

export function injectPostApiOrdersOrderIdRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.orders)[':order_id']['refund']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.orders)[':order_id']['refund']['$post']>,
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
    const mutationDefaults = getPostApiOrdersOrderIdRefundMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiOrdersOrderIdPaymentsQueryKey(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/:order_id/payments', keyArgs] as const
}

export function getApiOrdersOrderIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrdersOrderIdPaymentsQueryKey>
  >({
    queryKey: getApiOrdersOrderIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.orders[':order_id'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrdersOrderIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrdersOrderIdPaymentsQueryKey>
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
      ...getApiOrdersOrderIdPaymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiOrdersOrderIdPaymentsMutationKey() {
  return ['api', '/api/orders/:order_id/payments', 'POST'] as const
}

export function getPostApiOrdersOrderIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersOrderIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$post']>,
    ) {
      return parseResponse(client.api.orders[':order_id'].payments.$post(args, options))
    },
  })
}

export function injectPostApiOrdersOrderIdPayments<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payments']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.orders)[':order_id']['payments']['$post']>,
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
    const mutationDefaults = getPostApiOrdersOrderIdPaymentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiCustomersQueryKey(args: InferRequestType<typeof client.api.customers.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/customers', keyArgs] as const
}

export function getApiCustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomersQueryKey>
  >({
    queryKey: getApiCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.customers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiCustomersMutationKey() {
  return ['api', '/api/customers', 'POST'] as const
}

export function getPostApiCustomersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.customers.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiCustomersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.customers.$post>) {
      return parseResponse(client.api.customers.$post(args, options))
    },
  })
}

export function injectPostApiCustomers<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.customers.$post>,
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
    const mutationDefaults = getPostApiCustomersMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiCustomersCustomerIdQueryKey(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/customers/:customer_id', keyArgs] as const
}

export function getApiCustomersCustomerIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomersCustomerIdQueryKey>
  >({
    queryKey: getApiCustomersCustomerIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.customers[':customer_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCustomersCustomerId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.customers)[':customer_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomersCustomerIdQueryKey>
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
      ...getApiCustomersCustomerIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiCustomersCustomerIdMutationKey() {
  return ['api', '/api/customers/:customer_id', 'DELETE'] as const
}

export function getDeleteApiCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.customers)[':customer_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.customers)[':customer_id']['$delete']>,
    ) {
      return parseResponse(client.api.customers[':customer_id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiCustomersCustomerId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.customers)[':customer_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiCustomersCustomerIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiCustomersCustomerIdMutationKey() {
  return ['api', '/api/customers/:customer_id', 'PATCH'] as const
}

export function getPatchApiCustomersCustomerIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.customers)[':customer_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCustomersCustomerIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.customers)[':customer_id']['$patch']>,
    ) {
      return parseResponse(client.api.customers[':customer_id'].$patch(args, options))
    },
  })
}

export function injectPatchApiCustomersCustomerId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.customers)[':customer_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.customers)[':customer_id']['$patch']>,
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
    const mutationDefaults = getPatchApiCustomersCustomerIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiCustomersCustomerIdPaymentMethodsQueryKey(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/customers/:customer_id/payment-methods', keyArgs] as const
}

export function getApiCustomersCustomerIdPaymentMethodsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomersCustomerIdPaymentMethodsQueryKey>
  >({
    queryKey: getApiCustomersCustomerIdPaymentMethodsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.customers[':customer_id']['payment-methods'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCustomersCustomerIdPaymentMethods<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.customers)[':customer_id']['payment-methods']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.customers)[':customer_id']['payment-methods']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomersCustomerIdPaymentMethodsQueryKey>
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
      ...getApiCustomersCustomerIdPaymentMethodsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey(
  args: InferRequestType<
    (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/customers/:customer_id/payment-methods/:payment_method_id', keyArgs] as const
}

export function getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey>
  >({
    queryKey: getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.customers[':customer_id']['payment-methods'][':payment_method_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiCustomersCustomerIdPaymentMethodsPaymentMethodId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryKey>
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
      ...getApiCustomersCustomerIdPaymentMethodsPaymentMethodIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationKey() {
  return [
    'api',
    '/api/customers/:customer_id/payment-methods/:payment_method_id',
    'DELETE',
  ] as const
}

export function getDeleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api.customers[':customer_id']['payment-methods'][':payment_method_id'].$delete(
          args,
          options,
        ),
      )
    },
  })
}

export function injectDeleteApiCustomersCustomerIdPaymentMethodsPaymentMethodId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$delete']
        >,
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
    const mutationDefaults =
      getDeleteApiCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationKey() {
  return ['api', '/api/customers/:customer_id/payment-methods/:payment_method_id', 'PATCH'] as const
}

export function getPatchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$patch']
    >,
    TOnMutateResult
  >({
    mutationKey: getPatchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$patch']
      >,
    ) {
      return parseResponse(
        client.api.customers[':customer_id']['payment-methods'][':payment_method_id'].$patch(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPatchApiCustomersCustomerIdPaymentMethodsPaymentMethodId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.customers)[':customer_id']['payment-methods'][':payment_method_id']['$patch']
        >,
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
    const mutationDefaults =
      getPatchApiCustomersCustomerIdPaymentMethodsPaymentMethodIdMutationOptions<
        TError,
        TOnMutateResult
      >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiDisputesQueryKey(args: InferRequestType<typeof client.api.disputes.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/disputes', keyArgs] as const
}

export function getApiDisputesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.disputes.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.disputes.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.disputes.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiDisputesQueryKey>
  >({
    queryKey: getApiDisputesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.disputes.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiDisputes<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.disputes.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.disputes.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.disputes.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiDisputesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiDisputesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiDisputesDisputeIdQueryKey(
  args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/disputes/:dispute_id', keyArgs] as const
}

export function getApiDisputesDisputeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiDisputesDisputeIdQueryKey>
  >({
    queryKey: getApiDisputesDisputeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.disputes[':dispute_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiDisputesDisputeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.disputes)[':dispute_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiDisputesDisputeIdQueryKey>
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
      ...getApiDisputesDisputeIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiDisputesDisputeIdAcceptMutationKey() {
  return ['api', '/api/disputes/:dispute_id/accept', 'POST'] as const
}

export function getPostApiDisputesDisputeIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['accept']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.disputes)[':dispute_id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDisputesDisputeIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['accept']['$post']>,
    ) {
      return parseResponse(client.api.disputes[':dispute_id'].accept.$post(args, options))
    },
  })
}

export function injectPostApiDisputesDisputeIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['accept']['$post']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.disputes)[':dispute_id']['accept']['$post']>,
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
    const mutationDefaults = getPostApiDisputesDisputeIdAcceptMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiDisputesDisputeIdEvidencesMutationKey() {
  return ['api', '/api/disputes/:dispute_id/evidences', 'POST'] as const
}

export function getPostApiDisputesDisputeIdEvidencesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['evidences']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.disputes)[':dispute_id']['evidences']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDisputesDisputeIdEvidencesMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['evidences']['$post']>,
    ) {
      return parseResponse(client.api.disputes[':dispute_id'].evidences.$post(args, options))
    },
  })
}

export function injectPostApiDisputesDisputeIdEvidences<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['evidences']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.disputes)[':dispute_id']['evidences']['$post']>,
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
    const mutationDefaults = getPostApiDisputesDisputeIdEvidencesMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiDisputesDisputeIdChallengeMutationKey() {
  return ['api', '/api/disputes/:dispute_id/challenge', 'POST'] as const
}

export function getPostApiDisputesDisputeIdChallengeMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.disputes)[':dispute_id']['challenge']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.disputes)[':dispute_id']['challenge']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiDisputesDisputeIdChallengeMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.disputes)[':dispute_id']['challenge']['$post']>,
    ) {
      return parseResponse(client.api.disputes[':dispute_id'].challenge.$post(args, options))
    },
  })
}

export function injectPostApiDisputesDisputeIdChallenge<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api.disputes)[':dispute_id']['challenge']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.disputes)[':dispute_id']['challenge']['$post']>,
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
    const mutationDefaults = getPostApiDisputesDisputeIdChallengeMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPaymentsPaymentIdQueryKey(
  args: InferRequestType<(typeof client.api.payments)[':payment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payments/:payment_id', keyArgs] as const
}

export function getApiPaymentsPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payments)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.payments)[':payment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.payments)[':payment_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentsPaymentIdQueryKey>
  >({
    queryKey: getApiPaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payments[':payment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payments)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.payments)[':payment_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.payments)[':payment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentsPaymentIdQueryKey>
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
      ...getApiPaymentsPaymentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiSubscriptionPlansQueryKey(
  args: InferRequestType<(typeof client.api)['subscription-plans']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscription-plans', keyArgs] as const
}

export function getApiSubscriptionPlansQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['subscription-plans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['subscription-plans']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['subscription-plans']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubscriptionPlansQueryKey>
  >({
    queryKey: getApiSubscriptionPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['subscription-plans'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubscriptionPlans<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['subscription-plans']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['subscription-plans']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['subscription-plans']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubscriptionPlansQueryKey>
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
      ...getApiSubscriptionPlansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiSubscriptionPlansMutationKey() {
  return ['api', '/api/subscription-plans', 'POST'] as const
}

export function getPostApiSubscriptionPlansMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['subscription-plans']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['subscription-plans']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSubscriptionPlansMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['subscription-plans']['$post']>) {
      return parseResponse(client.api['subscription-plans'].$post(args, options))
    },
  })
}

export function injectPostApiSubscriptionPlans<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['subscription-plans']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['subscription-plans']['$post']>,
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
    const mutationDefaults = getPostApiSubscriptionPlansMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiSubscriptionPlansSubscriptionPlanIdQueryKey(
  args: InferRequestType<
    (typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscription-plans/:subscription_plan_id', keyArgs] as const
}

export function getApiSubscriptionPlansSubscriptionPlanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubscriptionPlansSubscriptionPlanIdQueryKey>
  >({
    queryKey: getApiSubscriptionPlansSubscriptionPlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['subscription-plans'][':subscription_plan_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubscriptionPlansSubscriptionPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.api)['subscription-plans'][':subscription_plan_id']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubscriptionPlansSubscriptionPlanIdQueryKey>
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
      ...getApiSubscriptionPlansSubscriptionPlanIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiSubscriptionsQueryKey(
  args: InferRequestType<typeof client.api.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscriptions', keyArgs] as const
}

export function getApiSubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubscriptionsQueryKey>
  >({
    queryKey: getApiSubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiSubscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSubscriptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiSubscriptionsMutationKey() {
  return ['api', '/api/subscriptions', 'POST'] as const
}

export function getPostApiSubscriptionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.subscriptions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSubscriptionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.subscriptions.$post>) {
      return parseResponse(client.api.subscriptions.$post(args, options))
    },
  })
}

export function injectPostApiSubscriptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.subscriptions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.subscriptions.$post>,
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
    const mutationDefaults = getPostApiSubscriptionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiSubscriptionsSubscriptionIdQueryKey(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscriptions/:subscription_id', keyArgs] as const
}

export function getApiSubscriptionsSubscriptionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubscriptionsSubscriptionIdQueryKey>
  >({
    queryKey: getApiSubscriptionsSubscriptionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subscriptions[':subscription_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubscriptionsSubscriptionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubscriptionsSubscriptionIdQueryKey>
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
      ...getApiSubscriptionsSubscriptionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPatchApiSubscriptionsSubscriptionIdMutationKey() {
  return ['api', '/api/subscriptions/:subscription_id', 'PATCH'] as const
}

export function getPatchApiSubscriptionsSubscriptionIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSubscriptionsSubscriptionIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$patch']>,
    ) {
      return parseResponse(client.api.subscriptions[':subscription_id'].$patch(args, options))
    },
  })
}

export function injectPatchApiSubscriptionsSubscriptionId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['$patch']>,
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
    const mutationDefaults = getPatchApiSubscriptionsSubscriptionIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiSubscriptionsSubscriptionIdCancelMutationKey() {
  return ['api', '/api/subscriptions/:subscription_id/cancel', 'POST'] as const
}

export function getPostApiSubscriptionsSubscriptionIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSubscriptionsSubscriptionIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.subscriptions)[':subscription_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.api.subscriptions[':subscription_id'].cancel.$post(args, options))
    },
  })
}

export function injectPostApiSubscriptionsSubscriptionIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.api.subscriptions)[':subscription_id']['cancel']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['cancel']['$post']>,
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
    const mutationDefaults = getPostApiSubscriptionsSubscriptionIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiSubscriptionsSubscriptionIdChangePlanMutationKey() {
  return ['api', '/api/subscriptions/:subscription_id/change-plan', 'POST'] as const
}

export function getPostApiSubscriptionsSubscriptionIdChangePlanMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['change-plan']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSubscriptionsSubscriptionIdChangePlanMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.subscriptions)[':subscription_id']['change-plan']['$post']
      >,
    ) {
      return parseResponse(
        client.api.subscriptions[':subscription_id']['change-plan'].$post(args, options),
      )
    },
  })
}

export function injectPostApiSubscriptionsSubscriptionIdChangePlan<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.subscriptions)[':subscription_id']['change-plan']['$post']
        >,
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
    const mutationDefaults = getPostApiSubscriptionsSubscriptionIdChangePlanMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiSubscriptionsSubscriptionIdChangeRenewalDateMutationKey() {
  return ['api', '/api/subscriptions/:subscription_id/change-renewal-date', 'POST'] as const
}

export function getPostApiSubscriptionsSubscriptionIdChangeRenewalDateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.subscriptions)[':subscription_id']['change-renewal-date']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiSubscriptionsSubscriptionIdChangeRenewalDateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.subscriptions)[':subscription_id']['change-renewal-date']['$post']
      >,
    ) {
      return parseResponse(
        client.api.subscriptions[':subscription_id']['change-renewal-date'].$post(args, options),
      )
    },
  })
}

export function injectPostApiSubscriptionsSubscriptionIdChangeRenewalDate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.subscriptions)[':subscription_id']['change-renewal-date']['$post']
        >,
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
    const mutationDefaults = getPostApiSubscriptionsSubscriptionIdChangeRenewalDateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiSubscriptionsSubscriptionIdCyclesQueryKey(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscriptions/:subscription_id/cycles', keyArgs] as const
}

export function getApiSubscriptionsSubscriptionIdCyclesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubscriptionsSubscriptionIdCyclesQueryKey>
  >({
    queryKey: getApiSubscriptionsSubscriptionIdCyclesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subscriptions[':subscription_id'].cycles.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubscriptionsSubscriptionIdCycles<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.subscriptions)[':subscription_id']['cycles']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubscriptionsSubscriptionIdCyclesQueryKey>
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
      ...getApiSubscriptionsSubscriptionIdCyclesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiSubscriptionsSubscriptionIdCyclesCycleIdQueryKey(
  args: InferRequestType<
    (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscriptions/:subscription_id/cycles/:cycle_id', keyArgs] as const
}

export function getApiSubscriptionsSubscriptionIdCyclesCycleIdQueryOptions<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
    TError,
    TData,
    ReturnType<typeof getApiSubscriptionsSubscriptionIdCyclesCycleIdQueryKey>
  >({
    queryKey: getApiSubscriptionsSubscriptionIdCyclesCycleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.subscriptions[':subscription_id'].cycles[':cycle_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubscriptionsSubscriptionIdCyclesCycleId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api.subscriptions)[':subscription_id']['cycles'][':cycle_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
        TError,
        TData,
        ReturnType<typeof getApiSubscriptionsSubscriptionIdCyclesCycleIdQueryKey>
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
      ...getApiSubscriptionsSubscriptionIdCyclesCycleIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}

export function getApiSubscriptionUsagesQueryKey(
  args: InferRequestType<(typeof client.api)['subscription-usages']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscription-usages', keyArgs] as const
}

export function getApiSubscriptionUsagesQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['subscription-usages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['subscription-usages']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['subscription-usages']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubscriptionUsagesQueryKey>
  >({
    queryKey: getApiSubscriptionUsagesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['subscription-usages'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubscriptionUsages<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['subscription-usages']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['subscription-usages']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['subscription-usages']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubscriptionUsagesQueryKey>
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
      ...getApiSubscriptionUsagesQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiSubscriptionUsagesMutationKey() {
  return ['api', '/api/subscription-usages', 'POST'] as const
}

export function getPostApiSubscriptionUsagesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['subscription-usages']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['subscription-usages']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSubscriptionUsagesMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['subscription-usages']['$post']>) {
      return parseResponse(client.api['subscription-usages'].$post(args, options))
    },
  })
}

export function injectPostApiSubscriptionUsages<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['subscription-usages']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['subscription-usages']['$post']>,
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
    const mutationDefaults = getPostApiSubscriptionUsagesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiSubscriptionUsagesUsageIdQueryKey(
  args: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/subscription-usages/:usage_id', keyArgs] as const
}

export function getApiSubscriptionUsagesUsageIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSubscriptionUsagesUsageIdQueryKey>
  >({
    queryKey: getApiSubscriptionUsagesUsageIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['subscription-usages'][':usage_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSubscriptionUsagesUsageId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSubscriptionUsagesUsageIdQueryKey>
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
      ...getApiSubscriptionUsagesUsageIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiSubscriptionUsagesUsageIdMutationKey() {
  return ['api', '/api/subscription-usages/:usage_id', 'DELETE'] as const
}

export function getDeleteApiSubscriptionUsagesUsageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSubscriptionUsagesUsageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$delete']>,
    ) {
      return parseResponse(client.api['subscription-usages'][':usage_id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiSubscriptionUsagesUsageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$delete']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiSubscriptionUsagesUsageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiSubscriptionUsagesUsageIdMutationKey() {
  return ['api', '/api/subscription-usages/:usage_id', 'PATCH'] as const
}

export function getPatchApiSubscriptionUsagesUsageIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiSubscriptionUsagesUsageIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$patch']>,
    ) {
      return parseResponse(client.api['subscription-usages'][':usage_id'].$patch(args, options))
    },
  })
}

export function injectPatchApiSubscriptionUsagesUsageId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['subscription-usages'][':usage_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['subscription-usages'][':usage_id']['$patch']>,
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
    const mutationDefaults = getPatchApiSubscriptionUsagesUsageIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPayoutsQueryKey(args: InferRequestType<typeof client.api.payouts.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payouts', keyArgs] as const
}

export function getApiPayoutsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payouts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.payouts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payouts.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiPayoutsQueryKey>
  >({
    queryKey: getApiPayoutsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payouts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPayouts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payouts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.payouts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.payouts.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPayoutsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPayoutsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiPayoutsPayoutIdQueryKey(
  args: InferRequestType<(typeof client.api.payouts)[':payout_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payouts/:payout_id', keyArgs] as const
}

export function getApiPayoutsPayoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payouts)[':payout_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.payouts)[':payout_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.payouts)[':payout_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPayoutsPayoutIdQueryKey>
  >({
    queryKey: getApiPayoutsPayoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.payouts[':payout_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPayoutsPayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.payouts)[':payout_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.payouts)[':payout_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.payouts)[':payout_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPayoutsPayoutIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPayoutsPayoutIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiReportRunsMutationKey() {
  return ['api', '/api/report-runs', 'POST'] as const
}

export function getPostApiReportRunsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api)['report-runs']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['report-runs']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiReportRunsMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['report-runs']['$post']>) {
      return parseResponse(client.api['report-runs'].$post(args, options))
    },
  })
}

export function injectPostApiReportRuns<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api)['report-runs']['$post']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['report-runs']['$post']>,
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
    const mutationDefaults = getPostApiReportRunsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiReportRunsReportRunIdQueryKey(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/report-runs/:report_run_id', keyArgs] as const
}

export function getApiReportRunsReportRunIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReportRunsReportRunIdQueryKey>
  >({
    queryKey: getApiReportRunsReportRunIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['report-runs'][':report_run_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiReportRunsReportRunId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportRunsReportRunIdQueryKey>
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
      ...getApiReportRunsReportRunIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiReportRunsReportRunIdFileQueryKey(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/report-runs/:report_run_id/file', keyArgs] as const
}

export function getApiReportRunsReportRunIdFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiReportRunsReportRunIdFileQueryKey>
  >({
    queryKey: getApiReportRunsReportRunIdFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['report-runs'][':report_run_id'].file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiReportRunsReportRunIdFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['report-runs'][':report_run_id']['file']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['report-runs'][':report_run_id']['file']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiReportRunsReportRunIdFileQueryKey>
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
      ...getApiReportRunsReportRunIdFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiWebhooksQueryKey(args: InferRequestType<typeof client.api.webhooks.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/webhooks', keyArgs] as const
}

export function getApiWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksQueryKey>
  >({
    queryKey: getApiWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiWebhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiWebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiWebhooksMutationKey() {
  return ['api', '/api/webhooks', 'POST'] as const
}

export function getPostApiWebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.webhooks.$post>) {
      return parseResponse(client.api.webhooks.$post(args, options))
    },
  })
}

export function injectPostApiWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.webhooks.$post>,
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
    const mutationDefaults = getPostApiWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiWebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/webhooks/:webhook_id', keyArgs] as const
}

export function getApiWebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiWebhooksWebhookIdQueryKey>
  >({
    queryKey: getApiWebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.webhooks[':webhook_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiWebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiWebhooksWebhookIdQueryKey>
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
      ...getApiWebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiWebhooksWebhookIdMutationKey() {
  return ['api', '/api/webhooks/:webhook_id', 'DELETE'] as const
}

export function getDeleteApiWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$delete']>,
    ) {
      return parseResponse(client.api.webhooks[':webhook_id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiWebhooksWebhookIdMutationKey() {
  return ['api', '/api/webhooks/:webhook_id', 'PATCH'] as const
}

export function getPatchApiWebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiWebhooksWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$patch']>,
    ) {
      return parseResponse(client.api.webhooks[':webhook_id'].$patch(args, options))
    },
  })
}

export function injectPatchApiWebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.webhooks)[':webhook_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.webhooks)[':webhook_id']['$patch']>,
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
    const mutationDefaults = getPatchApiWebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiWebhooksWebhookIdRotateSigningSecretMutationKey() {
  return ['api', '/api/webhooks/:webhook_id/rotate-signing-secret', 'POST'] as const
}

export function getPostApiWebhooksWebhookIdRotateSigningSecretMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.webhooks)[':webhook_id']['rotate-signing-secret']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiWebhooksWebhookIdRotateSigningSecretMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.webhooks)[':webhook_id']['rotate-signing-secret']['$post']
      >,
    ) {
      return parseResponse(
        client.api.webhooks[':webhook_id']['rotate-signing-secret'].$post(args, options),
      )
    },
  })
}

export function injectPostApiWebhooksWebhookIdRotateSigningSecret<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api.webhooks)[':webhook_id']['rotate-signing-secret']['$post']
        >,
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
    const mutationDefaults = getPostApiWebhooksWebhookIdRotateSigningSecretMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiApplePayDomainsRegisterMutationKey() {
  return ['api', '/api/apple-pay/domains/register', 'POST'] as const
}

export function getPostApiApplePayDomainsRegisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['apple-pay']['domains']['register']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['apple-pay']['domains']['register']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplePayDomainsRegisterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['apple-pay']['domains']['register']['$post']>,
    ) {
      return parseResponse(client.api['apple-pay'].domains.register.$post(args, options))
    },
  })
}

export function injectPostApiApplePayDomainsRegister<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['apple-pay']['domains']['register']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['apple-pay']['domains']['register']['$post']>,
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
    const mutationDefaults = getPostApiApplePayDomainsRegisterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPostApiApplePayDomainsUnregisterMutationKey() {
  return ['api', '/api/apple-pay/domains/unregister', 'POST'] as const
}

export function getPostApiApplePayDomainsUnregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api)['apple-pay']['domains']['unregister']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api)['apple-pay']['domains']['unregister']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiApplePayDomainsUnregisterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api)['apple-pay']['domains']['unregister']['$post']>,
    ) {
      return parseResponse(client.api['apple-pay'].domains.unregister.$post(args, options))
    },
  })
}

export function injectPostApiApplePayDomainsUnregister<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.api)['apple-pay']['domains']['unregister']['$post']>
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api)['apple-pay']['domains']['unregister']['$post']>,
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
    const mutationDefaults = getPostApiApplePayDomainsUnregisterMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiSynchronousWebhooksQueryKey(
  args: InferRequestType<(typeof client.api)['synchronous-webhooks']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/synchronous-webhooks', keyArgs] as const
}

export function getApiSynchronousWebhooksQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['synchronous-webhooks']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSynchronousWebhooksQueryKey>
  >({
    queryKey: getApiSynchronousWebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['synchronous-webhooks'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiSynchronousWebhooks<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api)['synchronous-webhooks']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSynchronousWebhooksQueryKey>
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
      ...getApiSynchronousWebhooksQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiSynchronousWebhooksMutationKey() {
  return ['api', '/api/synchronous-webhooks', 'POST'] as const
}

export function getPostApiSynchronousWebhooksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api)['synchronous-webhooks']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiSynchronousWebhooksMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api)['synchronous-webhooks']['$post']>) {
      return parseResponse(client.api['synchronous-webhooks'].$post(args, options))
    },
  })
}

export function injectPostApiSynchronousWebhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api)['synchronous-webhooks']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api)['synchronous-webhooks']['$post']>,
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
    const mutationDefaults = getPostApiSynchronousWebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getDeleteApiSynchronousWebhooksSynchronousWebhookIdMutationKey() {
  return ['api', '/api/synchronous-webhooks/:synchronous_webhook_id', 'DELETE'] as const
}

export function getDeleteApiSynchronousWebhooksSynchronousWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)['synchronous-webhooks'][':synchronous_webhook_id']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiSynchronousWebhooksSynchronousWebhookIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['synchronous-webhooks'][':synchronous_webhook_id']['$delete']
      >,
    ) {
      return parseResponse(
        client.api['synchronous-webhooks'][':synchronous_webhook_id'].$delete(args, options),
      )
    },
  })
}

export function injectDeleteApiSynchronousWebhooksSynchronousWebhookId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api)['synchronous-webhooks'][':synchronous_webhook_id']['$delete']
        >,
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
    const mutationDefaults = getDeleteApiSynchronousWebhooksSynchronousWebhookIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLocationsQueryKey(args: InferRequestType<typeof client.api.locations.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/locations', keyArgs] as const
}

export function getApiLocationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.locations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationsQueryKey>
  >({
    queryKey: getApiLocationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.locations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiLocations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.locations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiLocationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiLocationsMutationKey() {
  return ['api', '/api/locations', 'POST'] as const
}

export function getPostApiLocationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.locations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLocationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.locations.$post>) {
      return parseResponse(client.api.locations.$post(args, options))
    },
  })
}

export function injectPostApiLocations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.locations.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.locations.$post>,
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
    const mutationDefaults = getPostApiLocationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiLocationsLocationIdQueryKey(
  args: InferRequestType<(typeof client.api.locations)[':location_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/locations/:location_id', keyArgs] as const
}

export function getApiLocationsLocationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.locations)[':location_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiLocationsLocationIdQueryKey>
  >({
    queryKey: getApiLocationsLocationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.locations[':location_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiLocationsLocationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.locations)[':location_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiLocationsLocationIdQueryKey>
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
      ...getApiLocationsLocationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getDeleteApiLocationsLocationIdMutationKey() {
  return ['api', '/api/locations/:location_id', 'DELETE'] as const
}

export function getDeleteApiLocationsLocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.api.locations)[':location_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiLocationsLocationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.locations)[':location_id']['$delete']>,
    ) {
      return parseResponse(client.api.locations[':location_id'].$delete(args, options))
    },
  })
}

export function injectDeleteApiLocationsLocationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$delete']>>
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.api.locations)[':location_id']['$delete']>,
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
    const mutationDefaults = getDeleteApiLocationsLocationIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getPatchApiLocationsLocationIdMutationKey() {
  return ['api', '/api/locations/:location_id', 'PATCH'] as const
}

export function getPatchApiLocationsLocationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.locations)[':location_id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchApiLocationsLocationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.locations)[':location_id']['$patch']>,
    ) {
      return parseResponse(client.api.locations[':location_id'].$patch(args, options))
    },
  })
}

export function injectPatchApiLocationsLocationId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.locations)[':location_id']['$patch']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.locations)[':location_id']['$patch']>,
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
    const mutationDefaults = getPatchApiLocationsLocationIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiTerminalsQueryKey(args: InferRequestType<typeof client.api.terminals.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/terminals', keyArgs] as const
}

export function getApiTerminalsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.terminals.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.terminals.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.terminals.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiTerminalsQueryKey>
  >({
    queryKey: getApiTerminalsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.terminals.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiTerminals<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.terminals.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.terminals.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.terminals.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiTerminalsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiTerminalsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostApiOrdersOrderIdPaymentIntentsMutationKey() {
  return ['api', '/api/orders/:order_id/payment-intents', 'POST'] as const
}

export function getPostApiOrdersOrderIdPaymentIntentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders)[':order_id']['payment-intents']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.orders)[':order_id']['payment-intents']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersOrderIdPaymentIntentsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.orders)[':order_id']['payment-intents']['$post']>,
    ) {
      return parseResponse(client.api.orders[':order_id']['payment-intents'].$post(args, options))
    },
  })
}

export function injectPostApiOrdersOrderIdPaymentIntents<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api.orders)[':order_id']['payment-intents']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.orders)[':order_id']['payment-intents']['$post']>,
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
    const mutationDefaults = getPostApiOrdersOrderIdPaymentIntentsMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPaymentIntentsPaymentIntentIdQueryKey(
  args: InferRequestType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/payment-intents/:payment_intent_id', keyArgs] as const
}

export function getApiPaymentIntentsPaymentIntentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPaymentIntentsPaymentIntentIdQueryKey>
  >({
    queryKey: getApiPaymentIntentsPaymentIntentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api['payment-intents'][':payment_intent_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPaymentIntentsPaymentIntentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.api)['payment-intents'][':payment_intent_id']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.api)['payment-intents'][':payment_intent_id']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPaymentIntentsPaymentIntentIdQueryKey>
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
      ...getApiPaymentIntentsPaymentIntentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiPaymentIntentsPaymentIntentIdCancelMutationKey() {
  return ['api', '/api/payment-intents/:payment_intent_id/cancel', 'POST'] as const
}

export function getPostApiPaymentIntentsPaymentIntentIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api)['payment-intents'][':payment_intent_id']['cancel']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiPaymentIntentsPaymentIntentIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api)['payment-intents'][':payment_intent_id']['cancel']['$post']
      >,
    ) {
      return parseResponse(
        client.api['payment-intents'][':payment_intent_id'].cancel.$post(args, options),
      )
    },
  })
}

export function injectPostApiPaymentIntentsPaymentIntentIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
        InferRequestType<
          (typeof client.api)['payment-intents'][':payment_intent_id']['cancel']['$post']
        >,
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
    const mutationDefaults = getPostApiPaymentIntentsPaymentIntentIdCancelMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}
