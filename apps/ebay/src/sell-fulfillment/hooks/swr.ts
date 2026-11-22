import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetOrderKey(args: InferRequestType<typeof client.order.$get>) {
  return ['order', '/order', args] as const
}

export function useGetOrder<TError = unknown>(
  args: InferRequestType<typeof client.order.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.order.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetOrder<TError = unknown>(
  args: InferRequestType<typeof client.order.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetOrderKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.order.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.order.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetOrderOrderIdKey(
  args: InferRequestType<(typeof client.order)[':orderId']['$get']>,
) {
  return ['order', '/order/:orderId', args] as const
}

export function useGetOrderOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.order)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOrderOrderIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.order[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderOrderId<TError = unknown>(
  args: InferRequestType<(typeof client.order)[':orderId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetOrderOrderIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.order)[':orderId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.order[':orderId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetOrderOrderIdShippingFulfillmentKey(
  args: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>,
) {
  return ['order', '/order/:orderId/shipping_fulfillment', args] as const
}

export function useGetOrderOrderIdShippingFulfillment<TError = unknown>(
  args: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
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
        ? getGetOrderOrderIdShippingFulfillmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.order[':orderId'].shipping_fulfillment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderOrderIdShippingFulfillment<TError = unknown>(
  args: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
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
        ? getGetOrderOrderIdShippingFulfillmentKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.order[':orderId'].shipping_fulfillment.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostOrderOrderIdShippingFulfillmentKey() {
  return ['order', '/order/:orderId/shipping_fulfillment', 'POST'] as const
}

export function usePostOrderOrderIdShippingFulfillment<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.order)[':orderId']['shipping_fulfillment']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderOrderIdShippingFulfillmentKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.order)[':orderId']['shipping_fulfillment']['$post']>
        },
      ) => parseResponse(client.order[':orderId'].shipping_fulfillment.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetOrderOrderIdShippingFulfillmentFulfillmentIdKey(
  args: InferRequestType<
    (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
  >,
) {
  return ['order', '/order/:orderId/shipping_fulfillment/:fulfillmentId', args] as const
}

export function useGetOrderOrderIdShippingFulfillmentFulfillmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrderOrderIdShippingFulfillmentFulfillmentIdKey(args)
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
                (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
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
          client.order[':orderId'].shipping_fulfillment[':fulfillmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetOrderOrderIdShippingFulfillmentFulfillmentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetOrderOrderIdShippingFulfillmentFulfillmentIdKey(args)
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
                (typeof client.order)[':orderId']['shipping_fulfillment'][':fulfillmentId']['$get']
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
          client.order[':orderId'].shipping_fulfillment[':fulfillmentId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostOrderOrderIdIssueRefundKey() {
  return ['order', '/order/:order_id/issue_refund', 'POST'] as const
}

export function usePostOrderOrderIdIssueRefund<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.order)[':order_id']['issue_refund']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.order)[':order_id']['issue_refund']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostOrderOrderIdIssueRefundKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.order)[':order_id']['issue_refund']['$post']> },
      ) => parseResponse(client.order[':order_id'].issue_refund.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentDisputePaymentDisputeIdKey(
  args: InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>,
) {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id', args] as const
}

export function useGetPaymentDisputePaymentDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
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
        ? getGetPaymentDisputePaymentDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payment_dispute[':payment_dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentDisputePaymentDisputeId<TError = unknown>(
  args: InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
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
        ? getGetPaymentDisputePaymentDisputeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.payment_dispute[':payment_dispute_id'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentDisputePaymentDisputeIdAcceptKey() {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id/accept', 'POST'] as const
}

export function usePostPaymentDisputePaymentDisputeIdAccept<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['accept']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentDisputePaymentDisputeIdAcceptKey()
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
            (typeof client.payment_dispute)[':payment_dispute_id']['accept']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_dispute[':payment_dispute_id'].accept.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentDisputePaymentDisputeIdActivityKey(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']
  >,
) {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id/activity', args] as const
}

export function useGetPaymentDisputePaymentDisputeIdActivity<TError = unknown>(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
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
        ? getGetPaymentDisputePaymentDisputeIdActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.payment_dispute[':payment_dispute_id'].activity.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentDisputePaymentDisputeIdActivity<TError = unknown>(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
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
        ? getGetPaymentDisputePaymentDisputeIdActivityKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.payment_dispute)[':payment_dispute_id']['activity']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.payment_dispute[':payment_dispute_id'].activity.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentDisputePaymentDisputeIdAddEvidenceKey() {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id/add_evidence', 'POST'] as const
}

export function usePostPaymentDisputePaymentDisputeIdAddEvidence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.payment_dispute)[':payment_dispute_id']['add_evidence']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentDisputePaymentDisputeIdAddEvidenceKey()
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
            (typeof client.payment_dispute)[':payment_dispute_id']['add_evidence']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_dispute[':payment_dispute_id'].add_evidence.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentDisputePaymentDisputeIdContestKey() {
  return ['payment_dispute', '/payment_dispute/:payment_dispute_id/contest', 'POST'] as const
}

export function usePostPaymentDisputePaymentDisputeIdContest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.payment_dispute)[':payment_dispute_id']['contest']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentDisputePaymentDisputeIdContestKey()
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
            (typeof client.payment_dispute)[':payment_dispute_id']['contest']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_dispute[':payment_dispute_id'].contest.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentDisputePaymentDisputeIdFetchEvidenceContentKey(
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

export function useGetPaymentDisputePaymentDisputeIdFetchEvidenceContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPaymentDisputePaymentDisputeIdFetchEvidenceContentKey(args)
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
                (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
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
          client.payment_dispute[':payment_dispute_id'].fetch_evidence_content.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentDisputePaymentDisputeIdFetchEvidenceContent<TError = unknown>(
  args: InferRequestType<
    (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPaymentDisputePaymentDisputeIdFetchEvidenceContentKey(args)
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
                (typeof client.payment_dispute)[':payment_dispute_id']['fetch_evidence_content']['$get']
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
          client.payment_dispute[':payment_dispute_id'].fetch_evidence_content.$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPaymentDisputePaymentDisputeIdUpdateEvidenceKey() {
  return [
    'payment_dispute',
    '/payment_dispute/:payment_dispute_id/update_evidence',
    'POST',
  ] as const
}

export function usePostPaymentDisputePaymentDisputeIdUpdateEvidence<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.payment_dispute)[':payment_dispute_id']['update_evidence']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentDisputePaymentDisputeIdUpdateEvidenceKey()
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
            (typeof client.payment_dispute)[':payment_dispute_id']['update_evidence']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_dispute[':payment_dispute_id'].update_evidence.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostPaymentDisputePaymentDisputeIdUploadEvidenceFileKey() {
  return [
    'payment_dispute',
    '/payment_dispute/:payment_dispute_id/upload_evidence_file',
    'POST',
  ] as const
}

export function usePostPaymentDisputePaymentDisputeIdUploadEvidenceFile<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.payment_dispute)[':payment_dispute_id']['upload_evidence_file']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPaymentDisputePaymentDisputeIdUploadEvidenceFileKey()
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
            (typeof client.payment_dispute)[':payment_dispute_id']['upload_evidence_file']['$post']
          >
        },
      ) =>
        parseResponse(
          client.payment_dispute[':payment_dispute_id'].upload_evidence_file.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPaymentDisputeSummaryKey(
  args: InferRequestType<typeof client.payment_dispute_summary.$get>,
) {
  return ['payment_dispute_summary', '/payment_dispute_summary', args] as const
}

export function useGetPaymentDisputeSummary<TError = unknown>(
  args: InferRequestType<typeof client.payment_dispute_summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
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
        ? getGetPaymentDisputeSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_dispute_summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPaymentDisputeSummary<TError = unknown>(
  args: InferRequestType<typeof client.payment_dispute_summary.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
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
        ? getGetPaymentDisputeSummaryKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.payment_dispute_summary.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.payment_dispute_summary.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
