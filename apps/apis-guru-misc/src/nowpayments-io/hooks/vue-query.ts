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

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EstimateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.estimate.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/estimate', keyArgs] as const
}

export function getV1EstimateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.estimate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1EstimateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.estimate.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Estimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.estimate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.estimate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.estimate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.estimate.$get>>>>
          >,
          ReturnType<typeof getV1EstimateQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.estimate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EstimateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1EstimateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.estimate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1MinAmountQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['min-amount']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/min-amount', keyArgs] as const
}

export function getV1MinAmountQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['min-amount']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1MinAmountQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['min-amount'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1MinAmount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['min-amount']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['min-amount']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['min-amount']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['min-amount']['$get']>>>
            >
          >,
          ReturnType<typeof getV1MinAmountQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['min-amount']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MinAmountQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1MinAmountQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['min-amount'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentIndexQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payment.index.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payment/', keyArgs] as const
}

export function getV1PaymentIndexQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payment.index.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentIndexQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payment.index.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payment.index.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment.index.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment.index.$get>>>
            >
          >,
          ReturnType<typeof getV1PaymentIndexQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentIndexQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentIndexQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payment.index.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentIdUpdateMerchantEstimateMutationKey() {
  return ['v1', '/v1/payment/:id/update-merchant-estimate', 'POST'] as const
}

export function getPostV1PaymentIdUpdateMerchantEstimateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.payment)[':id']['update-merchant-estimate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payment)[':id']['update-merchant-estimate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentIdUpdateMerchantEstimateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.payment)[':id']['update-merchant-estimate']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.payment[':id']['update-merchant-estimate'].$post(args, options),
      )
    },
  })
}

export function usePostV1PaymentIdUpdateMerchantEstimate<
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
                  ReturnType<(typeof client.v1.payment)[':id']['update-merchant-estimate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payment)[':id']['update-merchant-estimate']['$post']>,
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
  const mutationDefaults = getPostV1PaymentIdUpdateMerchantEstimateMutationOptions<
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

export function getV1PaymentPaymentIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payment)[':payment_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/payment/:payment_id', keyArgs] as const
}

export function getV1PaymentPaymentIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payment)[':payment_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payment[':payment_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payment)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payment)[':payment_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payment)[':payment_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payment)[':payment_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PaymentPaymentIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payment)[':payment_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payment[':payment_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PayoutWithdrawalsIdVerifyMutationKey() {
  return ['v1', '/v1/payout/:withdrawals-id/verify', 'POST'] as const
}

export function getPostV1PayoutWithdrawalsIdVerifyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payout)[':withdrawals-id']['verify']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payout)[':withdrawals-id']['verify']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PayoutWithdrawalsIdVerifyMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payout)[':withdrawals-id']['verify']['$post']>,
    ) {
      return parseResponse(client.v1.payout[':withdrawals-id'].verify.$post(args, options))
    },
  })
}

export function usePostV1PayoutWithdrawalsIdVerify<
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
                Awaited<ReturnType<(typeof client.v1.payout)[':withdrawals-id']['verify']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payout)[':withdrawals-id']['verify']['$post']>,
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
  const mutationDefaults = getPostV1PayoutWithdrawalsIdVerifyMutationOptions<
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

export function getV1SubPartnerQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sub-partner']['$get']>>,
) {
  return ['v1', '/v1/sub-partner', toValue(args)] as const
}

export function getV1SubPartnerQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sub-partner']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubPartnerQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['sub-partner'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubPartner<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sub-partner']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sub-partner']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sub-partner']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sub-partner']['$get']>>>
            >
          >,
          ReturnType<typeof getV1SubPartnerQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sub-partner']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubPartnerQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubPartnerQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['sub-partner'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SubPartnerBalanceIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/sub-partner/balance/:id', keyArgs] as const
}

export function getV1SubPartnerBalanceIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubPartnerBalanceIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['sub-partner'].balance[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubPartnerBalanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SubPartnerBalanceIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubPartnerBalanceIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubPartnerBalanceIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['sub-partner'].balance[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SubPartnerTransferIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>
  >,
) {
  return ['v1', '/v1/sub-partner/transfer/:id', toValue(args)] as const
}

export function getV1SubPartnerTransferIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubPartnerTransferIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['sub-partner'].transfer[':id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubPartnerTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SubPartnerTransferIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubPartnerTransferIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubPartnerTransferIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['sub-partner'].transfer[':id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SubPartnerTransfersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sub-partner']['transfers']['$get']>>,
) {
  return ['v1', '/v1/sub-partner/transfers', toValue(args)] as const
}

export function getV1SubPartnerTransfersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sub-partner']['transfers']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubPartnerTransfersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1['sub-partner'].transfers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubPartnerTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1)['sub-partner']['transfers']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfers']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfers']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SubPartnerTransfersQueryKey>
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
          Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfers']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubPartnerTransfersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubPartnerTransfersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1['sub-partner'].transfers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SubscriptionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.subscriptions.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/subscriptions', keyArgs] as const
}

export function getV1SubscriptionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.subscriptions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubscriptionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.subscriptions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1Subscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.subscriptions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>
            >
          >,
          ReturnType<typeof getV1SubscriptionsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubscriptionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.subscriptions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SubscriptionsPlansQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.subscriptions.plans.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/subscriptions/plans', keyArgs] as const
}

export function getV1SubscriptionsPlansQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.subscriptions.plans.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubscriptionsPlansQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.subscriptions.plans.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubscriptionsPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.subscriptions.plans.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.plans.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.plans.$get>>>
            >
          >,
          ReturnType<typeof getV1SubscriptionsPlansQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.plans.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsPlansQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubscriptionsPlansQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.subscriptions.plans.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1SubscriptionsPlansPlanIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/subscriptions/plans/:plan-id', keyArgs] as const
}

export function getV1SubscriptionsPlansPlanIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubscriptionsPlansPlanIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.subscriptions.plans[':plan-id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubscriptionsPlansPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SubscriptionsPlansPlanIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsPlansPlanIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubscriptionsPlansPlanIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.subscriptions.plans[':plan-id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPatchV1SubscriptionsPlansPlanIdMutationKey() {
  return ['v1', '/v1/subscriptions/plans/:plan-id', 'PATCH'] as const
}

export function getPatchV1SubscriptionsPlansPlanIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.subscriptions.plans)[':plan-id']['$patch']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$patch']>,
    TOnMutateResult
  >({
    mutationKey: getPatchV1SubscriptionsPlansPlanIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$patch']>,
    ) {
      return parseResponse(client.v1.subscriptions.plans[':plan-id'].$patch(args, options))
    },
  })
}

export function usePatchV1SubscriptionsPlansPlanId<
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
                Awaited<ReturnType<(typeof client.v1.subscriptions.plans)[':plan-id']['$patch']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$patch']>,
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
  const mutationDefaults = getPatchV1SubscriptionsPlansPlanIdMutationOptions<
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

export function getV1SubscriptionsSubIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['v1', '/v1/subscriptions/:sub_id', keyArgs] as const
}

export function getV1SubscriptionsSubIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1SubscriptionsSubIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.subscriptions[':sub_id'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SubscriptionsSubId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.subscriptions)[':sub_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.subscriptions)[':sub_id']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.subscriptions)[':sub_id']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1SubscriptionsSubIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.subscriptions)[':sub_id']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsSubIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1SubscriptionsSubIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.subscriptions[':sub_id'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV1SubscriptionsSubIdMutationKey() {
  return ['v1', '/v1/subscriptions/:sub_id', 'DELETE'] as const
}

export function getDeleteV1SubscriptionsSubIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.subscriptions)[':sub_id']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV1SubscriptionsSubIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$delete']>,
    ) {
      return parseResponse(client.v1.subscriptions[':sub_id'].$delete(args, options))
    },
  })
}

export function useDeleteV1SubscriptionsSubId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.subscriptions)[':sub_id']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$delete']>,
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
  const mutationDefaults = getDeleteV1SubscriptionsSubIdMutationOptions<TError, TOnMutateResult>(
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
