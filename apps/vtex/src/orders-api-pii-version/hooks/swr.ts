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

export function getPostApiOrdersExtendsearchOrdersKey() {
  return ['api', '/api/orders/extendsearch/orders', 'POST'] as const
}

export function usePostApiOrdersExtendsearchOrders<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.api.orders.extendsearch.orders.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.orders.extendsearch.orders.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersExtendsearchOrdersKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.orders.extendsearch.orders.$post> },
      ) => parseResponse(client.api.orders.extendsearch.orders.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrdersPvtDocumentOrderIdKey(
  args: InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/orders/pvt/document/:orderId', keyArgs] as const
}

export function useGetApiOrdersPvtDocumentOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>>
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
        ? getGetApiOrdersPvtDocumentOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.orders.pvt.document[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrdersPvtDocumentOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>>
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
        ? getGetApiOrdersPvtDocumentOrderIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.orders.pvt.document)[':orderId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.orders.pvt.document[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiOrdersPvtDocumentOrderIdActionsStartHandlingKey() {
  return ['api', '/api/orders/pvt/document/:orderId/actions/start-handling', 'POST'] as const
}

export function usePostApiOrdersPvtDocumentOrderIdActionsStartHandling<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.orders.pvt.document)[':orderId']['actions']['start-handling']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersPvtDocumentOrderIdActionsStartHandlingKey()
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
            (typeof client.api.orders.pvt.document)[':orderId']['actions']['start-handling']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.orders.pvt.document[':orderId'].actions['start-handling'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrdersPvtDocumentOrderIdCancelKey() {
  return ['api', '/api/orders/pvt/document/:orderId/cancel', 'POST'] as const
}

export function usePostApiOrdersPvtDocumentOrderIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersPvtDocumentOrderIdCancelKey()
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
            (typeof client.api.orders.pvt.document)[':orderId']['cancel']['$post']
          >
        },
      ) =>
        parseResponse(client.api.orders.pvt.document[':orderId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrdersPvtDocumentOrderIdInvoicesKey() {
  return ['api', '/api/orders/pvt/document/:orderId/invoices', 'POST'] as const
}

export function usePostApiOrdersPvtDocumentOrderIdInvoices<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.api.orders.pvt.document)[':orderId']['invoices']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersPvtDocumentOrderIdInvoicesKey()
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
            (typeof client.api.orders.pvt.document)[':orderId']['invoices']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.orders.pvt.document[':orderId'].invoices.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentKey() {
  return [
    'api',
    '/api/orders/pvt/document/:orderId/payment/:paymentId/notify-payment',
    'POST',
  ] as const
}

export function usePostApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPayment<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.api.orders.pvt.document)[':orderId']['payment'][':paymentId']['notify-payment']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiOrdersPvtDocumentOrderIdPaymentPaymentIdNotifyPaymentKey()
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
            (typeof client.api.orders.pvt.document)[':orderId']['payment'][':paymentId']['notify-payment']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.orders.pvt.document[':orderId'].payment[':paymentId']['notify-payment'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}
