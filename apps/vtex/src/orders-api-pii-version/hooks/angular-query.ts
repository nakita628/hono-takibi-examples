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

export function getPostApiOrdersExtendsearchOrdersMutationKey() {
  return ['api', '/api/orders/extendsearch/orders', 'POST'] as const
}

export function getPostApiOrdersExtendsearchOrdersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.orders.extendsearch.orders.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.api.orders.extendsearch.orders.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersExtendsearchOrdersMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.orders.extendsearch.orders.$post>) {
      return parseResponse(client.api.orders.extendsearch.orders.$post(args, options))
    },
  })
}

export function injectPostApiOrdersExtendsearchOrders<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.api.orders.extendsearch.orders.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.api.orders.extendsearch.orders.$post>,
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
    const mutationDefaults = getPostApiOrdersExtendsearchOrdersMutationOptions<
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

export function getApiOrdersPvtDocumentOrderIdQueryKey(
  args: InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/pvt/document/:orderId', keyArgs] as const
}

export function getApiOrdersPvtDocumentOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiOrdersPvtDocumentOrderIdQueryKey>
  >({
    queryKey: getApiOrdersPvtDocumentOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.orders.pvt.document[':orderId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiOrdersPvtDocumentOrderId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrdersPvtDocumentOrderIdQueryKey>
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
      ...getApiOrdersPvtDocumentOrderIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostApiOrdersPvtDocumentOrderIdActionsStartHandlingMutationKey() {
  return ['api', '/api/orders/pvt/document/:orderId/actions/start-handling', 'POST'] as const
}

export function getPostApiOrdersPvtDocumentOrderIdActionsStartHandlingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.orders.pvt.document)[':orderId']['actions']['start-handling']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.api.orders.pvt.document)[':orderId']['actions']['start-handling']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersPvtDocumentOrderIdActionsStartHandlingMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.orders.pvt.document)[':orderId']['actions']['start-handling']['$post']
      >,
    ) {
      return parseResponse(
        client.api.orders.pvt.document[':orderId'].actions['start-handling'].$post(args, options),
      )
    },
  })
}

export function injectPostApiOrdersPvtDocumentOrderIdActionsStartHandling<
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
                    (typeof client.api.orders.pvt.document)[':orderId']['actions']['start-handling']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.api.orders.pvt.document)[':orderId']['actions']['start-handling']['$post']
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
    const mutationDefaults = getPostApiOrdersPvtDocumentOrderIdActionsStartHandlingMutationOptions<
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

export function getPostApiOrdersPvtDocumentOrderIdCancelMutationKey() {
  return ['api', '/api/orders/pvt/document/:orderId/cancel', 'POST'] as const
}

export function getPostApiOrdersPvtDocumentOrderIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['cancel']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersPvtDocumentOrderIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.orders.pvt.document)[':orderId']['cancel']['$post']
      >,
    ) {
      return parseResponse(client.api.orders.pvt.document[':orderId'].cancel.$post(args, options))
    },
  })
}

export function injectPostApiOrdersPvtDocumentOrderIdCancel<
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
                ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['cancel']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['cancel']['$post']>,
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
    const mutationDefaults = getPostApiOrdersPvtDocumentOrderIdCancelMutationOptions<
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

export function getPostApiOrdersPvtDocumentOrderIdInvoicesMutationKey() {
  return ['api', '/api/orders/pvt/document/:orderId/invoices', 'POST'] as const
}

export function getPostApiOrdersPvtDocumentOrderIdInvoicesMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['invoices']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['invoices']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersPvtDocumentOrderIdInvoicesMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.orders.pvt.document)[':orderId']['invoices']['$post']
      >,
    ) {
      return parseResponse(client.api.orders.pvt.document[':orderId'].invoices.$post(args, options))
    },
  })
}

export function injectPostApiOrdersPvtDocumentOrderIdInvoices<
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
                ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['invoices']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['invoices']['$post']>,
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
    const mutationDefaults = getPostApiOrdersPvtDocumentOrderIdInvoicesMutationOptions<
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

export function getPostApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentMutationKey() {
  return [
    'api',
    '/api/orders/pvt/document/:orderId/payment/:paymentId/notify-payment',
    'POST',
  ] as const
}

export function getPostApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.orders.pvt.document)[':orderId']['payment'][':paymentId']['notify-payment']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.api.orders.pvt.document)[':orderId']['payment'][':paymentId']['notify-payment']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.orders.pvt.document)[':orderId']['payment'][':paymentId']['notify-payment']['$post']
      >,
    ) {
      return parseResponse(
        client.api.orders.pvt.document[':orderId'].payment[':paymentId']['notify-payment'].$post(
          args,
          options,
        ),
      )
    },
  })
}

export function injectPostApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPayment<
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
                  (typeof client.api.orders.pvt.document)[':orderId']['payment'][':paymentId']['notify-payment']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.api.orders.pvt.document)[':orderId']['payment'][':paymentId']['notify-payment']['$post']
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
      getPostApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentMutationOptions<
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
