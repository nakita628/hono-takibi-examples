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

export function getShipmentKey() {
  return ['shipment'] as const
}

export function getShippingQuoteKey() {
  return ['shipping_quote'] as const
}

export function getPostShipmentCreateFromShippingQuoteMutationKey() {
  return ['shipment', '/shipment/create_from_shipping_quote', 'POST'] as const
}

export function getPostShipmentCreateFromShippingQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shipment.create_from_shipping_quote.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.shipment.create_from_shipping_quote.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShipmentCreateFromShippingQuoteMutationKey(),
    async mutationFn(
      args: InferRequestType<typeof client.shipment.create_from_shipping_quote.$post>,
    ) {
      return parseResponse(client.shipment.create_from_shipping_quote.$post(args, options))
    },
  })
}

export function injectPostShipmentCreateFromShippingQuote<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.shipment.create_from_shipping_quote.$post>>
            >
          >
        >,
        TError,
        InferRequestType<typeof client.shipment.create_from_shipping_quote.$post>,
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
    const mutationDefaults = getPostShipmentCreateFromShippingQuoteMutationOptions<
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

export function getShipmentShipmentIdQueryKey(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>,
) {
  return ['shipment', '/shipment/:shipmentId', args] as const
}

export function getShipmentShipmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentShipmentIdQueryKey>
  >({
    queryKey: getShipmentShipmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shipment[':shipmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectShipmentShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShipmentShipmentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getShipmentShipmentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getPostShipmentShipmentIdCancelMutationKey() {
  return ['shipment', '/shipment/:shipmentId/cancel', 'POST'] as const
}

export function getPostShipmentShipmentIdCancelMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.shipment)[':shipmentId']['cancel']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostShipmentShipmentIdCancelMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.shipment)[':shipmentId']['cancel']['$post']>,
    ) {
      return parseResponse(client.shipment[':shipmentId'].cancel.$post(args, options))
    },
  })
}

export function injectPostShipmentShipmentIdCancel<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['cancel']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.shipment)[':shipmentId']['cancel']['$post']>,
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
    const mutationDefaults = getPostShipmentShipmentIdCancelMutationOptions<
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

export function getShipmentShipmentIdDownloadLabelFileQueryKey(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>,
) {
  return ['shipment', '/shipment/:shipmentId/download_label_file', args] as const
}

export function getShipmentShipmentIdDownloadLabelFileQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentShipmentIdDownloadLabelFileQueryKey>
  >({
    queryKey: getShipmentShipmentIdDownloadLabelFileQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shipment[':shipmentId'].download_label_file.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectShipmentShipmentIdDownloadLabelFile<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<
    (typeof client.shipment)[':shipmentId']['download_label_file']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShipmentShipmentIdDownloadLabelFileQueryKey>
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
      ...getShipmentShipmentIdDownloadLabelFileQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getPostShippingQuoteMutationKey() {
  return ['shipping_quote', '/shipping_quote', 'POST'] as const
}

export function getPostShippingQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping_quote.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.shipping_quote.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostShippingQuoteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.shipping_quote.$post>) {
      return parseResponse(client.shipping_quote.$post(args, options))
    },
  })
}

export function injectPostShippingQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping_quote.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.shipping_quote.$post>,
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
    const mutationDefaults = getPostShippingQuoteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getShippingQuoteShippingQuoteIdQueryKey(
  args: InferRequestType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>,
) {
  return ['shipping_quote', '/shipping_quote/:shippingQuoteId', args] as const
}

export function getShippingQuoteShippingQuoteIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShippingQuoteShippingQuoteIdQueryKey>
  >({
    queryKey: getShippingQuoteShippingQuoteIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.shipping_quote[':shippingQuoteId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectShippingQuoteShippingQuoteId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getShippingQuoteShippingQuoteIdQueryKey>
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
      ...getShippingQuoteShippingQuoteIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}
