import { useQuery, useMutation, mutationOptions } from '@tanstack/vue-query'
import type {
  UseQueryOptions,
  QueryFunctionContext,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/vue-query'
import { computed, toValue } from 'vue'
import type { MaybeRefOrGetter } from 'vue'
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>>,
) {
  return ['shipment', '/shipment/:shipmentId', toValue(args)] as const
}

export function getShipmentShipmentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentShipmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipment[':shipmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useShipmentShipmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.shipment)[':shipmentId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShipmentShipmentIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.shipment)[':shipmentId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getShipmentShipmentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentShipmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shipment[':shipmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>
  >,
) {
  return ['shipment', '/shipment/:shipmentId/download_label_file', toValue(args)] as const
}

export function getShipmentShipmentIdDownloadLabelFileQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShipmentShipmentIdDownloadLabelFileQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipment[':shipmentId'].download_label_file.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.shipment)[':shipmentId']['download_label_file']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getShipmentShipmentIdDownloadLabelFileQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShipmentShipmentIdDownloadLabelFileQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shipment[':shipmentId'].download_label_file.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.shipping_quote.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.shipping_quote.$post>,
          TOnMutateResult
        >,
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>
  >,
) {
  return ['shipping_quote', '/shipping_quote/:shippingQuoteId', toValue(args)] as const
}

export function getShippingQuoteShippingQuoteIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getShippingQuoteShippingQuoteIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.shipping_quote[':shippingQuoteId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.shipping_quote)[':shippingQuoteId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getShippingQuoteShippingQuoteIdQueryKey>
        >,
        { queryKey: unknown }
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery<
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getShippingQuoteShippingQuoteIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.shipping_quote[':shippingQuoteId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
