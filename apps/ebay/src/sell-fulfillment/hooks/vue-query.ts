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

export function getOrderKey() {
  return ['order'] as const
}

export function getPaymentDisputeKey() {
  return ['payment_dispute'] as const
}

export function getPaymentDisputeSummaryKey() {
  return ['payment_dispute_summary'] as const
}

export function getOrderQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.order.$get>>,
) {
  return ['order', '/order', toValue(args)] as const
}

export function getOrderQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.order.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.order.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useOrder<
  TData = Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.order.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
          TError,
          TData,
          Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
          ReturnType<typeof getOrderQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getOrderQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.order.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderOrderIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.order)[':orderId']['$get']>>,
) {
  return ['order', '/order/:orderId', toValue(args)] as const
}

export function getOrderOrderIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.order)[':orderId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderOrderIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.order[':orderId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useOrderOrderId<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.order)[':orderId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>
            >
          >,
          ReturnType<typeof getOrderOrderIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderOrderIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderOrderIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.order[':orderId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getOrderOrderIdShippingFulfillmentQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>
  >,
) {
  return ['order', '/order/:orderId/shipping_fulfillment', toValue(args)] as const
}

export function getOrderOrderIdShippingFulfillmentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderOrderIdShippingFulfillmentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.order[':orderId'].shipping_fulfillment.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>
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
                  ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getOrderOrderIdShippingFulfillmentQueryKey>
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
          Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getOrderOrderIdShippingFulfillmentQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderOrderIdShippingFulfillmentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.order[':orderId'].shipping_fulfillment.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
    >
  >,
) {
  return ['order', '/order/:orderId/shipping_fulfillment/:fulfillmentId', toValue(args)] as const
}

export function getOrderOrderIdShippingFulfillmentFulfillmentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getOrderOrderIdShippingFulfillmentFulfillmentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.order[':orderId'].shipping_fulfillment[':fulfillmentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getOrderOrderIdShippingFulfillmentFulfillmentIdQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getOrderOrderIdShippingFulfillmentFulfillmentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.order[':orderId'].shipping_fulfillment[':fulfillmentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>
  >,
) {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id', toValue(args)] as const
}

export function getPaymentDisputePaymentDisputeIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentDisputePaymentDisputeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPaymentDisputePaymentDisputeIdQueryKey>
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
          Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentDisputePaymentDisputeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentDisputePaymentDisputeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_dispute[':payment_dispute_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
          InferRequestType<
            (typeof client.payment_dispute)[':payment_dispute_id']['accept']['$post']
          >,
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
  >,
) {
  return [
    'payment_dispute',
    '/payment_dispute/:payment_dispute_id/activity',
    toValue(args),
  ] as const
}

export function getPaymentDisputePaymentDisputeIdActivityQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentDisputePaymentDisputeIdActivityQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].activity.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPaymentDisputePaymentDisputeIdActivityQueryKey>
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
            ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentDisputePaymentDisputeIdActivityQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentDisputePaymentDisputeIdActivityQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_dispute[':payment_dispute_id'].activity.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
    >
  >,
) {
  return [
    'payment_dispute',
    '/payment_dispute/:payment_dispute_id/fetch_evidence_content',
    toValue(args),
  ] as const
}

export function getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_dispute[':payment_dispute_id'].fetch_evidence_content.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
    >
  >,
  options?: {
    query?: Omit<
      Extract<
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
          ReturnType<typeof getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryKey>
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
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentDisputePaymentDisputeIdFetchEvidenceContentQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_dispute[':payment_dispute_id'].fetch_evidence_content.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
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
        { mutationFn?: unknown }
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
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_dispute_summary.$get>>,
) {
  return ['payment_dispute_summary', '/payment_dispute_summary', toValue(args)] as const
}

export function getPaymentDisputeSummaryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_dispute_summary.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPaymentDisputeSummaryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.payment_dispute_summary.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePaymentDisputeSummary<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.payment_dispute_summary.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
            >
          >,
          ReturnType<typeof getPaymentDisputeSummaryQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPaymentDisputeSummaryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPaymentDisputeSummaryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.payment_dispute_summary.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
