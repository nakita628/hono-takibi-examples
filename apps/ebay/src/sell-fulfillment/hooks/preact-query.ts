import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getOrderKey() {
  return ['order'] as const
}

export function getPaymentDisputeKey() {
  return ['payment_dispute'] as const
}

export function getPaymentDisputeSummaryKey() {
  return ['payment_dispute_summary'] as const
}

export function getOrderQueryKey(args: InferRequestType<typeof client.order.$get>) {
  return ['order', '/order', args] as const
}

export function getOrderQueryOptions<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
  TError = DefaultError,
>(args: InferRequestType<typeof client.order.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrderQueryKey>
  >({
    queryKey: getOrderQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.order.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrder<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.order.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrder<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.order.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getOrderQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrderQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrderOrderIdQueryKey(
  args: InferRequestType<(typeof client.order)[':orderId']['$get']>,
) {
  return ['order', '/order/:orderId', args] as const
}

export function getOrderOrderIdQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.order)[':orderId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderOrderIdQueryKey>
  >({
    queryKey: getOrderOrderIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.order[':orderId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useOrderOrderId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.order)[':orderId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrderOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getOrderOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseOrderOrderId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.order)[':orderId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrderOrderIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getOrderOrderIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getOrderOrderIdShippingFulfillmentQueryKey(
  args: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>,
) {
  return ['order', '/order/:orderId/shipping_fulfillment', args] as const
}

export function getOrderOrderIdShippingFulfillmentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderOrderIdShippingFulfillmentQueryKey>
  >({
    queryKey: getOrderOrderIdShippingFulfillmentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.order[':orderId'].shipping_fulfillment.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrderOrderIdShippingFulfillment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrderOrderIdShippingFulfillmentQueryKey>
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
      ...getOrderOrderIdShippingFulfillmentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrderOrderIdShippingFulfillment<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrderOrderIdShippingFulfillmentQueryKey>
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
      ...getOrderOrderIdShippingFulfillmentQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrderOrderIdShippingFulfillmentMutationKey() {
  return ['order', '/order/:orderId/shipping_fulfillment', 'POST'] as const
}

export function getPostOrderOrderIdShippingFulfillmentMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderOrderIdShippingFulfillmentMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$post']>,
    ) {
      return parseResponse(client.order[':orderId'].shipping_fulfillment.$post(args, options))
    },
  })
}

export function usePostOrderOrderIdShippingFulfillment<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrderOrderIdShippingFulfillmentMutationOptions<
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

export function getOrderOrderIdShippingFulfillmentFulfillmentIdQueryKey(
  args: InferRequestType<
    (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
  >,
) {
  return ['order', '/order/:orderId/shipping_fulfillment/:fulfillmentId', args] as const
}

export function getOrderOrderIdShippingFulfillmentFulfillmentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderOrderIdShippingFulfillmentFulfillmentIdQueryKey>
  >({
    queryKey: getOrderOrderIdShippingFulfillmentFulfillmentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.order[':orderId'].shipping_fulfillment[':fulfillmentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useOrderOrderIdShippingFulfillmentFulfillmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrderOrderIdShippingFulfillmentFulfillmentIdQueryKey>
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
      ...getOrderOrderIdShippingFulfillmentFulfillmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseOrderOrderIdShippingFulfillmentFulfillmentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getOrderOrderIdShippingFulfillmentFulfillmentIdQueryKey>
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
      ...getOrderOrderIdShippingFulfillmentFulfillmentIdQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostOrderOrderIdIssueRefundMutationKey() {
  return ['order', '/order/:order_id/issue_refund', 'POST'] as const
}

export function getPostOrderOrderIdIssueRefundMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.order)[':order_id']['issue_refund']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.order)[':order_id']['issue_refund']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostOrderOrderIdIssueRefundMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.order)[':order_id']['issue_refund']['$post']>,
    ) {
      return parseResponse(client.order[':order_id'].issue_refund.$post(args, options))
    },
  })
}

export function usePostOrderOrderIdIssueRefund<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.order)[':order_id']['issue_refund']['$post']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.order)[':order_id']['issue_refund']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostOrderOrderIdIssueRefundMutationOptions<TError, TOnMutateResult>(
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

export function getPaymentDisputePaymentDisputeIdQueryKey(
  args: InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>,
) {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id', args] as const
}

export function getPaymentDisputePaymentDisputeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentDisputePaymentDisputeIdQueryKey>
  >({
    queryKey: getPaymentDisputePaymentDisputeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentDisputePaymentDisputeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentDisputePaymentDisputeIdQueryKey>
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
      ...getPaymentDisputePaymentDisputeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentDisputePaymentDisputeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentDisputePaymentDisputeIdQueryKey>
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
      ...getPaymentDisputePaymentDisputeIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPaymentDisputePaymentDisputeIdAcceptMutationKey() {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id/accept', 'POST'] as const
}

export function getPostPaymentDisputePaymentDisputeIdAcceptMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['accept']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['accept']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentDisputePaymentDisputeIdAcceptMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payment_dispute)[':payment_dispute_id']['accept']['$post']
      >,
    ) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].accept.$post(args, options),
      )
    },
  })
}

export function usePostPaymentDisputePaymentDisputeIdAccept<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.payment_dispute)[':payment_dispute_id']['accept']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['accept']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentDisputePaymentDisputeIdAcceptMutationOptions<
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

export function getPaymentDisputePaymentDisputeIdActivityQueryKey(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']
  >,
) {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id/activity', args] as const
}

export function getPaymentDisputePaymentDisputeIdActivityQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentDisputePaymentDisputeIdActivityQueryKey>
  >({
    queryKey: getPaymentDisputePaymentDisputeIdActivityQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].activity.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentDisputePaymentDisputeIdActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentDisputePaymentDisputeIdActivityQueryKey>
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
      ...getPaymentDisputePaymentDisputeIdActivityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentDisputePaymentDisputeIdActivity<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentDisputePaymentDisputeIdActivityQueryKey>
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
      ...getPaymentDisputePaymentDisputeIdActivityQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPaymentDisputePaymentDisputeIdAddEvidenceMutationKey() {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id/add_evidence', 'POST'] as const
}

export function getPostPaymentDisputePaymentDisputeIdAddEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_dispute)[':payment_dispute_id']['add_evidence']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.payment_dispute)[':payment_dispute_id']['add_evidence']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentDisputePaymentDisputeIdAddEvidenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payment_dispute)[':payment_dispute_id']['add_evidence']['$post']
      >,
    ) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].add_evidence.$post(args, options),
      )
    },
  })
}

export function usePostPaymentDisputePaymentDisputeIdAddEvidence<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payment_dispute)[':payment_dispute_id']['add_evidence']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.payment_dispute)[':payment_dispute_id']['add_evidence']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentDisputePaymentDisputeIdAddEvidenceMutationOptions<
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

export function getPostPaymentDisputePaymentDisputeIdContestMutationKey() {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id/contest', 'POST'] as const
}

export function getPostPaymentDisputePaymentDisputeIdContestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['contest']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['contest']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentDisputePaymentDisputeIdContestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payment_dispute)[':payment_dispute_id']['contest']['$post']
      >,
    ) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].contest.$post(args, options),
      )
    },
  })
}

export function usePostPaymentDisputePaymentDisputeIdContest<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.payment_dispute)[':payment_dispute_id']['contest']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.payment_dispute)[':payment_dispute_id']['contest']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentDisputePaymentDisputeIdContestMutationOptions<
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

export function getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryKey(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
  >,
) {
  return [
    'payment_dispute',
    '/payment_dispute/:payment_dispute_id/fetch_evidence_content',
    args,
  ] as const
}

export function getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryKey>
  >({
    queryKey: getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].fetch_evidence_content.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentDisputePaymentDisputeIdFetchEvidenceContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
  >,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryKey>
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
      ...getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentDisputePaymentDisputeIdFetchEvidenceContent<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<
            (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
          >
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
                >
              >
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryKey>
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
      ...getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryOptions<TData, TError>(
        args,
        clientOptions,
      ),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPostPaymentDisputePaymentDisputeIdUpdateEvidenceMutationKey() {
  return [
    'payment_dispute',
    '/payment_dispute/:payment_dispute_id/update_evidence',
    'POST',
  ] as const
}

export function getPostPaymentDisputePaymentDisputeIdUpdateEvidenceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.payment_dispute)[':payment_dispute_id']['update_evidence']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.payment_dispute)[':payment_dispute_id']['update_evidence']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentDisputePaymentDisputeIdUpdateEvidenceMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payment_dispute)[':payment_dispute_id']['update_evidence']['$post']
      >,
    ) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].update_evidence.$post(args, options),
      )
    },
  })
}

export function usePostPaymentDisputePaymentDisputeIdUpdateEvidence<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<
                    (typeof client.payment_dispute)[':payment_dispute_id']['update_evidence']['$post']
                  >
                >
              >
            >
          >
        | undefined,
        TError,
        InferRequestType<
          (typeof client.payment_dispute)[':payment_dispute_id']['update_evidence']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentDisputePaymentDisputeIdUpdateEvidenceMutationOptions<
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

export function getPostPaymentDisputePaymentDisputeIdUploadEvidenceFileMutationKey() {
  return [
    'payment_dispute',
    '/payment_dispute/:payment_dispute_id/upload_evidence_file',
    'POST',
  ] as const
}

export function getPostPaymentDisputePaymentDisputeIdUploadEvidenceFileMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.payment_dispute)[':payment_dispute_id']['upload_evidence_file']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.payment_dispute)[':payment_dispute_id']['upload_evidence_file']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostPaymentDisputePaymentDisputeIdUploadEvidenceFileMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.payment_dispute)[':payment_dispute_id']['upload_evidence_file']['$post']
      >,
    ) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].upload_evidence_file.$post(args, options),
      )
    },
  })
}

export function usePostPaymentDisputePaymentDisputeIdUploadEvidenceFile<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<
                ReturnType<
                  (typeof client.payment_dispute)[':payment_dispute_id']['upload_evidence_file']['$post']
                >
              >
            >
          >
        >,
        TError,
        InferRequestType<
          (typeof client.payment_dispute)[':payment_dispute_id']['upload_evidence_file']['$post']
        >,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostPaymentDisputePaymentDisputeIdUploadEvidenceFileMutationOptions<
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

export function getPaymentDisputeSummaryQueryKey(
  args: InferRequestType<typeof client.payment_dispute_summary.$get>,
) {
  return ['payment_dispute_summary', '/payment_dispute_summary', args] as const
}

export function getPaymentDisputeSummaryQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_dispute_summary.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentDisputeSummaryQueryKey>
  >({
    queryKey: getPaymentDisputeSummaryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.payment_dispute_summary.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePaymentDisputeSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_dispute_summary.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentDisputeSummaryQueryKey>
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
      ...getPaymentDisputeSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePaymentDisputeSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.payment_dispute_summary.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPaymentDisputeSummaryQueryKey>
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
      ...getPaymentDisputeSummaryQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}
