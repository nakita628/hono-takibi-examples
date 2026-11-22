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

export function usePostShipmentCreateFromShippingQuote<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShipmentCreateFromShippingQuoteMutationOptions<
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

export function useShipmentShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getShipmentShipmentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseShipmentShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getShipmentShipmentIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostShipmentShipmentIdCancel<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShipmentShipmentIdCancelMutationOptions<TError, TOnMutateResult>(
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

export function useShipmentShipmentIdDownloadLabelFile<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getShipmentShipmentIdDownloadLabelFileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShipmentShipmentIdDownloadLabelFile<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getShipmentShipmentIdDownloadLabelFileQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function usePostShippingQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostShippingQuoteMutationOptions<TError, TOnMutateResult>(
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

export function useShippingQuoteShippingQuoteId<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getShippingQuoteShippingQuoteIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseShippingQuoteShippingQuoteId<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getShippingQuoteShippingQuoteIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
