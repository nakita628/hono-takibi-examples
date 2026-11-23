import { createQuery, createMutation, queryOptions, mutationOptions } from '@tanstack/svelte-query'
import type {
  CreateQueryOptions,
  CreateMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/svelte-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getV1Key() {
  return ['v1'] as const
}

export function getV1EstimateQueryKey(args: InferRequestType<typeof client.v1.estimate.$get>) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/estimate', keyArgs] as const
}

export function getV1EstimateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.estimate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.estimate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.estimate.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1EstimateQueryKey>
  >({
    queryKey: getV1EstimateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.estimate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Estimate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.estimate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.estimate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.estimate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1EstimateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1EstimateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1MinAmountQueryKey(
  args: InferRequestType<(typeof client.v1)['min-amount']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/min-amount', keyArgs] as const
}

export function getV1MinAmountQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['min-amount']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['min-amount']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['min-amount']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1MinAmountQueryKey>
  >({
    queryKey: getV1MinAmountQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['min-amount'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1MinAmount<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['min-amount']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['min-amount']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['min-amount']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1MinAmountQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1MinAmountQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1PaymentIndexQueryKey(
  args: InferRequestType<typeof client.v1.payment.index.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment/', keyArgs] as const
}

export function getV1PaymentIndexQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment.index.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.payment.index.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment.index.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentIndexQueryKey>
  >({
    queryKey: getV1PaymentIndexQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payment.index.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1PaymentIndex<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment.index.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.payment.index.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payment.index.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentIndexQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentIndexQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1PaymentIdUpdateMerchantEstimate<
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
                ReturnType<(typeof client.v1.payment)[':id']['update-merchant-estimate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.payment)[':id']['update-merchant-estimate']['$post']>,
        TOnMutateResult
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentIdUpdateMerchantEstimateMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1PaymentPaymentIdQueryKey(
  args: InferRequestType<(typeof client.v1.payment)[':payment_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/payment/:payment_id', keyArgs] as const
}

export function getV1PaymentPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payment)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payment)[':payment_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payment)[':payment_id']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentPaymentIdQueryKey>
  >({
    queryKey: getV1PaymentPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payment[':payment_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1PaymentPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payment)[':payment_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.payment)[':payment_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.payment)[':payment_id']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentPaymentIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentPaymentIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
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

export function createPostV1PayoutWithdrawalsIdVerify<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PayoutWithdrawalsIdVerifyMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SubPartnerQueryKey(
  args: InferRequestType<(typeof client.v1)['sub-partner']['$get']>,
) {
  return ['v1', '/v1/sub-partner', args] as const
}

export function getV1SubPartnerQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sub-partner']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['sub-partner']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sub-partner']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubPartnerQueryKey>
  >({
    queryKey: getV1SubPartnerQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sub-partner'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1SubPartner<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sub-partner']['$get']>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['sub-partner']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1)['sub-partner']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SubPartnerQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SubPartnerQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1SubPartnerBalanceIdQueryKey(
  args: InferRequestType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/sub-partner/balance/:id', keyArgs] as const
}

export function getV1SubPartnerBalanceIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SubPartnerBalanceIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sub-partner'].balance[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubPartnerBalanceId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['sub-partner']['balance'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SubPartnerBalanceIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1SubPartnerTransferIdQueryKey(
  args: InferRequestType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>,
) {
  return ['v1', '/v1/sub-partner/transfer/:id', args] as const
}

export function getV1SubPartnerTransferIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SubPartnerTransferIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sub-partner'].transfer[':id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubPartnerTransferId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['sub-partner']['transfer'][':id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SubPartnerTransferIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1SubPartnerTransfersQueryKey(
  args: InferRequestType<(typeof client.v1)['sub-partner']['transfers']['$get']>,
) {
  return ['v1', '/v1/sub-partner/transfers', args] as const
}

export function getV1SubPartnerTransfersQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1)['sub-partner']['transfers']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SubPartnerTransfersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1['sub-partner'].transfers.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubPartnerTransfers<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1)['sub-partner']['transfers']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1)['sub-partner']['transfers']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SubPartnerTransfersQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1SubscriptionsQueryKey(
  args: InferRequestType<typeof client.v1.subscriptions.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions', keyArgs] as const
}

export function getV1SubscriptionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.subscriptions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsQueryKey>
  >({
    queryKey: getV1SubscriptionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscriptions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createV1Subscriptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.subscriptions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1SubscriptionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SubscriptionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getV1SubscriptionsPlansQueryKey(
  args: InferRequestType<typeof client.v1.subscriptions.plans.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/plans', keyArgs] as const
}

export function getV1SubscriptionsPlansQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.subscriptions.plans.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.plans.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SubscriptionsPlansQueryKey>
  >({
    queryKey: getV1SubscriptionsPlansQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscriptions.plans.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubscriptionsPlans<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.plans.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.subscriptions.plans.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.subscriptions.plans.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SubscriptionsPlansQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SubscriptionsPlansQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getV1SubscriptionsPlansPlanIdQueryKey(
  args: InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/plans/:plan-id', keyArgs] as const
}

export function getV1SubscriptionsPlansPlanIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SubscriptionsPlansPlanIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscriptions.plans[':plan-id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubscriptionsPlansPlanId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.subscriptions.plans)[':plan-id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SubscriptionsPlansPlanIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createPatchV1SubscriptionsPlansPlanId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPatchV1SubscriptionsPlansPlanIdMutationOptions<
      TError,
      TOnMutateResult
    >(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getV1SubscriptionsSubIdQueryKey(
  args: InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['v1', '/v1/subscriptions/:sub_id', keyArgs] as const
}

export function getV1SubscriptionsSubIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.subscriptions)[':sub_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1SubscriptionsSubIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.subscriptions[':sub_id'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createV1SubscriptionsSubId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.subscriptions)[':sub_id']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.subscriptions)[':sub_id']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getV1SubscriptionsSubIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
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

export function createDeleteV1SubscriptionsSubId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV1SubscriptionsSubIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}
