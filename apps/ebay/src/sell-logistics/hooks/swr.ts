import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getShipmentKey() {
  return ['shipment'] as const
}

export function getShippingQuoteKey() {
  return ['shipping_quote'] as const
}

export function getPostShipmentCreateFromShippingQuoteKey() {
  return ['shipment', '/shipment/create_from_shipping_quote', 'POST'] as const
}

export function usePostShipmentCreateFromShippingQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.shipment.create_from_shipping_quote.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.shipment.create_from_shipping_quote.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShipmentCreateFromShippingQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.shipment.create_from_shipping_quote.$post> },
      ) => parseResponse(client.shipment.create_from_shipping_quote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShipmentShipmentIdKey(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>,
) {
  return ['shipment', '/shipment/:shipmentId', args] as const
}

export function useGetShipmentShipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
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
        ? getGetShipmentShipmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipment[':shipmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentShipmentId<TError = unknown>(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
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
        ? getGetShipmentShipmentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.shipment[':shipmentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShipmentShipmentIdCancelKey() {
  return ['shipment', '/shipment/:shipmentId/cancel', 'POST'] as const
}

export function usePostShipmentShipmentIdCancel<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['cancel']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.shipment)[':shipmentId']['cancel']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShipmentShipmentIdCancelKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.shipment)[':shipmentId']['cancel']['$post']> },
      ) => parseResponse(client.shipment[':shipmentId'].cancel.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShipmentShipmentIdDownloadLabelFileKey(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>,
) {
  return ['shipment', '/shipment/:shipmentId/download_label_file', args] as const
}

export function useGetShipmentShipmentIdDownloadLabelFile<TError = unknown>(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>
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
        ? getGetShipmentShipmentIdDownloadLabelFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shipment[':shipmentId'].download_label_file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShipmentShipmentIdDownloadLabelFile<TError = unknown>(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>
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
        ? getGetShipmentShipmentIdDownloadLabelFileKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shipment[':shipmentId'].download_label_file.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostShippingQuoteKey() {
  return ['shipping_quote', '/shipping_quote', 'POST'] as const
}

export function usePostShippingQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.shipping_quote.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.shipping_quote.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostShippingQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.shipping_quote.$post> }) =>
        parseResponse(client.shipping_quote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetShippingQuoteShippingQuoteIdKey(
  args: InferRequestType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>,
) {
  return ['shipping_quote', '/shipping_quote/:shippingQuoteId', args] as const
}

export function useGetShippingQuoteShippingQuoteId<TError = unknown>(
  args: InferRequestType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>>
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
        ? getGetShippingQuoteShippingQuoteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shipping_quote[':shippingQuoteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetShippingQuoteShippingQuoteId<TError = unknown>(
  args: InferRequestType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>>
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
        ? getGetShippingQuoteShippingQuoteIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.shipping_quote[':shippingQuoteId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
