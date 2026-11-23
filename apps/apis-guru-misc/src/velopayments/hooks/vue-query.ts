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

export function getV2Key() {
  return ['v2'] as const
}

export function getV3Key() {
  return ['v3'] as const
}

export function getV4Key() {
  return ['v4'] as const
}

export function getPostV1AuthenticateMutationKey() {
  return ['v1', '/v1/authenticate', 'POST'] as const
}

export function getPostV1AuthenticateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.authenticate.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.authenticate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1AuthenticateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.authenticate.$post>) {
      return parseResponse(client.v1.authenticate.$post(args, options))
    },
  })
}

export function usePostV1Authenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.authenticate.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v1.authenticate.$post>,
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
  const mutationDefaults = getPostV1AuthenticateMutationOptions<TError, TOnMutateResult>(
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

export function getV1DeltasFundingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.deltas.fundings.$get>>,
) {
  return ['v1', '/v1/deltas/fundings', toValue(args)] as const
}

export function getV1DeltasFundingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.deltas.fundings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DeltasFundingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.deltas.fundings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DeltasFundings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.deltas.fundings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>
            >
          >,
          ReturnType<typeof getV1DeltasFundingsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DeltasFundingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DeltasFundingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.deltas.fundings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1DeltasPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.deltas.payments.$get>>,
) {
  return ['v1', '/v1/deltas/payments', toValue(args)] as const
}

export function getV1DeltasPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.deltas.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1DeltasPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.deltas.payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1DeltasPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.deltas.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>
            >
          >,
          ReturnType<typeof getV1DeltasPaymentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DeltasPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1DeltasPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.deltas.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1FundingsFundingIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.fundings)[':fundingId']['$get']>>,
) {
  return ['v1', '/v1/fundings/:fundingId', toValue(args)] as const
}

export function getV1FundingsFundingIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.fundings)[':fundingId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1FundingsFundingIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.fundings[':fundingId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1FundingsFundingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.fundings)[':fundingId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1FundingsFundingIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FundingsFundingIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1FundingsFundingIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.fundings[':fundingId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1LogoutMutationKey() {
  return ['v1', '/v1/logout', 'POST'] as const
}

export function getPostV1LogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.logout.$post>>>>>
    | undefined,
    TError,
    void,
    TOnMutateResult
  >({
    mutationKey: getPostV1LogoutMutationKey(),
    async mutationFn() {
      return parseResponse(client.v1.logout.$post(undefined, options))
    },
  })
}

export function usePostV1Logout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.logout.$post>>>>
            >
          | undefined,
          TError,
          void,
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
  const mutationDefaults = getPostV1LogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getPostV1PasswordResetMutationKey() {
  return ['v1', '/v1/password/reset', 'POST'] as const
}

export function getPostV1PasswordResetMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.password.reset.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v1.password.reset.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PasswordResetMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.password.reset.$post>) {
      return parseResponse(client.v1.password.reset.$post(args, options))
    },
  })
}

export function usePostV1PasswordReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v1.password.reset.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v1.password.reset.$post>,
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
  const mutationDefaults = getPostV1PasswordResetMutationOptions<TError, TOnMutateResult>(
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

export function getV1PaymentChannelRulesQueryKey() {
  return ['v1', '/v1/paymentChannelRules'] as const
}

export function getV1PaymentChannelRulesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1PaymentChannelRulesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.paymentChannelRules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentChannelRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>
            >
          >,
          ReturnType<typeof getV1PaymentChannelRulesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentChannelRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1PaymentChannelRulesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.paymentChannelRules.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentauditFundingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.paymentaudit.fundings.$get>>,
) {
  return ['v1', '/v1/paymentaudit/fundings', toValue(args)] as const
}

export function getV1PaymentauditFundingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.paymentaudit.fundings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentauditFundingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.paymentaudit.fundings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentauditFundings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.paymentaudit.fundings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
            >
          >,
          ReturnType<typeof getV1PaymentauditFundingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentauditFundingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentauditFundingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.paymentaudit.fundings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV1PaymentauditPayoutStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.paymentaudit.payoutStatistics.$get>>,
) {
  return ['v1', '/v1/paymentaudit/payoutStatistics', toValue(args)] as const
}

export function getV1PaymentauditPayoutStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.paymentaudit.payoutStatistics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PaymentauditPayoutStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.paymentaudit.payoutStatistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PaymentauditPayoutStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.payoutStatistics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.paymentaudit.payoutStatistics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.paymentaudit.payoutStatistics.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v1.paymentaudit.payoutStatistics.$get>>
              >
            >
          >,
          ReturnType<typeof getV1PaymentauditPayoutStatisticsQueryKey>
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
          Awaited<ReturnType<typeof client.v1.paymentaudit.payoutStatistics.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentauditPayoutStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PaymentauditPayoutStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.paymentaudit.payoutStatistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PaymentsPaymentIdWithdrawMutationKey() {
  return ['v1', '/v1/payments/:paymentId/withdraw', 'POST'] as const
}

export function getPostV1PaymentsPaymentIdWithdrawMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['withdraw']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['withdraw']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PaymentsPaymentIdWithdrawMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payments)[':paymentId']['withdraw']['$post']>,
    ) {
      return parseResponse(client.v1.payments[':paymentId'].withdraw.$post(args, options))
    },
  })
}

export function usePostV1PaymentsPaymentIdWithdraw<
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
                    ReturnType<(typeof client.v1.payments)[':paymentId']['withdraw']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.payments)[':paymentId']['withdraw']['$post']>,
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
  const mutationDefaults = getPostV1PaymentsPaymentIdWithdrawMutationOptions<
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

export function getV1PayorLinksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payorLinks.$get>>,
) {
  return ['v1', '/v1/payorLinks', toValue(args)] as const
}

export function getV1PayorLinksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payorLinks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PayorLinksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payorLinks.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PayorLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.payorLinks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
          >,
          ReturnType<typeof getV1PayorLinksQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PayorLinksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PayorLinksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payorLinks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PayorLinksMutationKey() {
  return ['v1', '/v1/payorLinks', 'POST'] as const
}

export function getPostV1PayorLinksMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v1.payorLinks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PayorLinksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.payorLinks.$post>) {
      return parseResponse(client.v1.payorLinks.$post(args, options))
    },
  })
}

export function usePostV1PayorLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.payorLinks.$post>,
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
  const mutationDefaults = getPostV1PayorLinksMutationOptions<TError, TOnMutateResult>(
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

export function getV1PayorsPayorIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payors)[':payorId']['$get']>>,
) {
  return ['v1', '/v1/payors/:payorId', toValue(args)] as const
}

export function getV1PayorsPayorIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payors)[':payorId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PayorsPayorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payors[':payorId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PayorsPayorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.payors)[':payorId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PayorsPayorIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PayorsPayorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PayorsPayorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payors[':payorId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PayorsPayorIdApplicationsMutationKey() {
  return ['v1', '/v1/payors/:payorId/applications', 'POST'] as const
}

export function getPostV1PayorsPayorIdApplicationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['applications']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payors)[':payorId']['applications']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PayorsPayorIdApplicationsMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payors)[':payorId']['applications']['$post']>,
    ) {
      return parseResponse(client.v1.payors[':payorId'].applications.$post(args, options))
    },
  })
}

export function usePostV1PayorsPayorIdApplications<
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
                Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['applications']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payors)[':payorId']['applications']['$post']>,
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
  const mutationDefaults = getPostV1PayorsPayorIdApplicationsMutationOptions<
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

export function getPostV1PayorsPayorIdApplicationsApplicationIdKeysMutationKey() {
  return ['v1', '/v1/payors/:payorId/applications/:applicationId/keys', 'POST'] as const
}

export function getPostV1PayorsPayorIdApplicationsApplicationIdKeysMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v1.payors)[':payorId']['applications'][':applicationId']['keys']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v1.payors)[':payorId']['applications'][':applicationId']['keys']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1PayorsPayorIdApplicationsApplicationIdKeysMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.payors)[':payorId']['applications'][':applicationId']['keys']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.payors[':payorId'].applications[':applicationId'].keys.$post(args, options),
      )
    },
  })
}

export function usePostV1PayorsPayorIdApplicationsApplicationIdKeys<
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
                    (typeof client.v1.payors)[':payorId']['applications'][':applicationId']['keys']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v1.payors)[':payorId']['applications'][':applicationId']['keys']['$post']
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
  const mutationDefaults = getPostV1PayorsPayorIdApplicationsApplicationIdKeysMutationOptions<
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

export function getV1PayorsPayorIdBrandingQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['$get']>
  >,
) {
  return ['v1', '/v1/payors/:payorId/branding', toValue(args)] as const
}

export function getV1PayorsPayorIdBrandingQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1PayorsPayorIdBrandingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.payors[':payorId'].branding.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1PayorsPayorIdBranding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1PayorsPayorIdBrandingQueryKey>
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
          Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PayorsPayorIdBrandingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1PayorsPayorIdBrandingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.payors[':payorId'].branding.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1PayorsPayorIdBrandingLogosMutationKey() {
  return ['v1', '/v1/payors/:payorId/branding/logos', 'POST'] as const
}

export function getPostV1PayorsPayorIdBrandingLogosMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['logos']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['logos']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PayorsPayorIdBrandingLogosMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['logos']['$post']>,
    ) {
      return parseResponse(client.v1.payors[':payorId'].branding.logos.$post(args, options))
    },
  })
}

export function usePostV1PayorsPayorIdBrandingLogos<
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
                    ReturnType<(typeof client.v1.payors)[':payorId']['branding']['logos']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['logos']['$post']>,
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
  const mutationDefaults = getPostV1PayorsPayorIdBrandingLogosMutationOptions<
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

export function getPostV1PayorsPayorIdReminderEmailsUpdateMutationKey() {
  return ['v1', '/v1/payors/:payorId/reminderEmailsUpdate', 'POST'] as const
}

export function getPostV1PayorsPayorIdReminderEmailsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.v1.payors)[':payorId']['reminderEmailsUpdate']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.payors)[':payorId']['reminderEmailsUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1PayorsPayorIdReminderEmailsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.payors)[':payorId']['reminderEmailsUpdate']['$post']
      >,
    ) {
      return parseResponse(client.v1.payors[':payorId'].reminderEmailsUpdate.$post(args, options))
    },
  })
}

export function usePostV1PayorsPayorIdReminderEmailsUpdate<
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
                  ReturnType<(typeof client.v1.payors)[':payorId']['reminderEmailsUpdate']['$post']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.payors)[':payorId']['reminderEmailsUpdate']['$post']>,
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
  const mutationDefaults = getPostV1PayorsPayorIdReminderEmailsUpdateMutationOptions<
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

export function getPostV1SourceAccountsSourceAccountIdNotificationsMutationKey() {
  return ['v1', '/v1/sourceAccounts/:sourceAccountId/notifications', 'POST'] as const
}

export function getPostV1SourceAccountsSourceAccountIdNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v1.sourceAccounts)[':sourceAccountId']['notifications']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v1.sourceAccounts)[':sourceAccountId']['notifications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV1SourceAccountsSourceAccountIdNotificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v1.sourceAccounts)[':sourceAccountId']['notifications']['$post']
      >,
    ) {
      return parseResponse(
        client.v1.sourceAccounts[':sourceAccountId'].notifications.$post(args, options),
      )
    },
  })
}

export function usePostV1SourceAccountsSourceAccountIdNotifications<
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
                      (typeof client.v1.sourceAccounts)[':sourceAccountId']['notifications']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v1.sourceAccounts)[':sourceAccountId']['notifications']['$post']
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
  const mutationDefaults = getPostV1SourceAccountsSourceAccountIdNotificationsMutationOptions<
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

export function getV1SupportedCountriesQueryKey() {
  return ['v1', '/v1/supportedCountries'] as const
}

export function getV1SupportedCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV1SupportedCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.supportedCountries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1SupportedCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>
            >
          >,
          ReturnType<typeof getV1SupportedCountriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SupportedCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV1SupportedCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.supportedCountries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1ValidateMutationKey() {
  return ['v1', '/v1/validate', 'POST'] as const
}

export function getPostV1ValidateMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.validate.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1ValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.validate.$post>) {
      return parseResponse(client.v1.validate.$post(args, options))
    },
  })
}

export function usePostV1Validate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.validate.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.validate.$post>,
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
  const mutationDefaults = getPostV1ValidateMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WebhooksQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webhooks.$get>>,
) {
  return ['v1', '/v1/webhooks', toValue(args)] as const
}

export function getV1WebhooksQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webhooks.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WebhooksQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v1.webhooks.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
          >,
          ReturnType<typeof getV1WebhooksQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WebhooksQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WebhooksMutationKey() {
  return ['v1', '/v1/webhooks', 'POST'] as const
}

export function getPostV1WebhooksMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>>,
    TError,
    InferRequestType<typeof client.v1.webhooks.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebhooksMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v1.webhooks.$post>) {
      return parseResponse(client.v1.webhooks.$post(args, options))
    },
  })
}

export function usePostV1Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v1.webhooks.$post>,
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
  const mutationDefaults = getPostV1WebhooksMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV1WebhooksWebhookIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$get']>>,
) {
  return ['v1', '/v1/webhooks/:webhookId', toValue(args)] as const
}

export function getV1WebhooksWebhookIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV1WebhooksWebhookIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v1.webhooks[':webhookId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV1WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV1WebhooksWebhookIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksWebhookIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV1WebhooksWebhookIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v1.webhooks[':webhookId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV1WebhooksWebhookIdMutationKey() {
  return ['v1', '/v1/webhooks/:webhookId', 'POST'] as const
}

export function getPostV1WebhooksWebhookIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebhooksWebhookIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$post']>) {
      return parseResponse(client.v1.webhooks[':webhookId'].$post(args, options))
    },
  })
}

export function usePostV1WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$post']>,
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
  const mutationDefaults = getPostV1WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV1WebhooksWebhookIdPingMutationKey() {
  return ['v1', '/v1/webhooks/:webhookId/ping', 'POST'] as const
}

export function getPostV1WebhooksWebhookIdPingMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['ping']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v1.webhooks)[':webhookId']['ping']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV1WebhooksWebhookIdPingMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['ping']['$post']>,
    ) {
      return parseResponse(client.v1.webhooks[':webhookId'].ping.$post(args, options))
    },
  })
}

export function usePostV1WebhooksWebhookIdPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['ping']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v1.webhooks)[':webhookId']['ping']['$post']>,
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
  const mutationDefaults = getPostV1WebhooksWebhookIdPingMutationOptions<TError, TOnMutateResult>(
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

export function getV2CurrenciesQueryKey() {
  return ['v2', '/v2/currencies'] as const
}

export function getV2CurrenciesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2CurrenciesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.currencies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Currencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
          >,
          ReturnType<typeof getV2CurrenciesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CurrenciesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2CurrenciesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.currencies.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2FundingAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.fundingAccounts.$get>>,
) {
  return ['v2', '/v2/fundingAccounts', toValue(args)] as const
}

export function getV2FundingAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.fundingAccounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FundingAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.fundingAccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FundingAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.fundingAccounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>
            >
          >,
          ReturnType<typeof getV2FundingAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2FundingAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FundingAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.fundingAccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2FundingAccountsMutationKey() {
  return ['v2', '/v2/fundingAccounts', 'POST'] as const
}

export function getPostV2FundingAccountsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.v2.fundingAccounts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2FundingAccountsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.fundingAccounts.$post>) {
      return parseResponse(client.v2.fundingAccounts.$post(args, options))
    },
  })
}

export function usePostV2FundingAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.v2.fundingAccounts.$post>,
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
  const mutationDefaults = getPostV2FundingAccountsMutationOptions<TError, TOnMutateResult>(
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

export function getV2FundingAccountsFundingAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>
  >,
) {
  return ['v2', '/v2/fundingAccounts/:fundingAccountId', toValue(args)] as const
}

export function getV2FundingAccountsFundingAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2FundingAccountsFundingAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.fundingAccounts[':fundingAccountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2FundingAccountsFundingAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2FundingAccountsFundingAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2FundingAccountsFundingAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2FundingAccountsFundingAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.fundingAccounts[':fundingAccountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2PayorsPayorIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.payors)[':payorId']['$get']>>,
) {
  return ['v2', '/v2/payors/:payorId', toValue(args)] as const
}

export function getV2PayorsPayorIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.payors)[':payorId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2PayorsPayorIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.payors[':payorId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2PayorsPayorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.payors)[':payorId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2PayorsPayorIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PayorsPayorIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2PayorsPayorIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.payors[':payorId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SourceAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sourceAccounts.$get>>,
) {
  return ['v2', '/v2/sourceAccounts', toValue(args)] as const
}

export function getV2SourceAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sourceAccounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SourceAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sourceAccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SourceAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.sourceAccounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>
            >
          >,
          ReturnType<typeof getV2SourceAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SourceAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SourceAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sourceAccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2SourceAccountsSourceAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>
  >,
) {
  return ['v2', '/v2/sourceAccounts/:sourceAccountId', toValue(args)] as const
}

export function getV2SourceAccountsSourceAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2SourceAccountsSourceAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.sourceAccounts[':sourceAccountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SourceAccountsSourceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV2SourceAccountsSourceAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SourceAccountsSourceAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2SourceAccountsSourceAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.sourceAccounts[':sourceAccountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2SourceAccountsSourceAccountIdFundingRequestMutationKey() {
  return ['v2', '/v2/sourceAccounts/:sourceAccountId/fundingRequest', 'POST'] as const
}

export function getPostV2SourceAccountsSourceAccountIdFundingRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v2.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v2.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV2SourceAccountsSourceAccountIdFundingRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.sourceAccounts[':sourceAccountId'].fundingRequest.$post(args, options),
      )
    },
  })
}

export function usePostV2SourceAccountsSourceAccountIdFundingRequest<
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
                    (typeof client.v2.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v2.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
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
  const mutationDefaults = getPostV2SourceAccountsSourceAccountIdFundingRequestMutationOptions<
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

export function getPostV2SourceAccountsSourceAccountIdTransfersMutationKey() {
  return ['v2', '/v2/sourceAccounts/:sourceAccountId/transfers', 'POST'] as const
}

export function getPostV2SourceAccountsSourceAccountIdTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v2.sourceAccounts)[':sourceAccountId']['transfers']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2SourceAccountsSourceAccountIdTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v2.sourceAccounts)[':sourceAccountId']['transfers']['$post']
      >,
    ) {
      return parseResponse(
        client.v2.sourceAccounts[':sourceAccountId'].transfers.$post(args, options),
      )
    },
  })
}

export function usePostV2SourceAccountsSourceAccountIdTransfers<
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
                      (typeof client.v2.sourceAccounts)[':sourceAccountId']['transfers']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v2.sourceAccounts)[':sourceAccountId']['transfers']['$post']
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
  const mutationDefaults = getPostV2SourceAccountsSourceAccountIdTransfersMutationOptions<
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

export function getV2SupportedCountriesQueryKey() {
  return ['v2', '/v2/supportedCountries'] as const
}

export function getV2SupportedCountriesQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2SupportedCountriesQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.supportedCountries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2SupportedCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>
            >
          >,
          ReturnType<typeof getV2SupportedCountriesQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SupportedCountriesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2SupportedCountriesQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.supportedCountries.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV2UsersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.users.$get>>,
) {
  return ['v2', '/v2/users', toValue(args)] as const
}

export function getV2UsersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.users.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UsersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v2.users.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>
          >,
          ReturnType<typeof getV2UsersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UsersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UsersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2UsersInviteMutationKey() {
  return ['v2', '/v2/users/invite', 'POST'] as const
}

export function getPostV2UsersInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.invite.$post>>>>
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.users.invite.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersInviteMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.users.invite.$post>) {
      return parseResponse(client.v2.users.invite.$post(args, options))
    },
  })
}

export function usePostV2UsersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.invite.$post>>>
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.users.invite.$post>,
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
  const mutationDefaults = getPostV2UsersInviteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UsersRegistrationSmsMutationKey() {
  return ['v2', '/v2/users/registration/sms', 'POST'] as const
}

export function getPostV2UsersRegistrationSmsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.registration.sms.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.users.registration.sms.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersRegistrationSmsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.users.registration.sms.$post>) {
      return parseResponse(client.v2.users.registration.sms.$post(args, options))
    },
  })
}

export function usePostV2UsersRegistrationSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v2.users.registration.sms.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.users.registration.sms.$post>,
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
  const mutationDefaults = getPostV2UsersRegistrationSmsMutationOptions<TError, TOnMutateResult>(
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

export function getV2UsersSelfQueryKey() {
  return ['v2', '/v2/users/self'] as const
}

export function getV2UsersSelfQueryOptions(options?: ClientRequestOptions) {
  return {
    queryKey: getV2UsersSelfQueryKey(),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users.self.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV2UsersSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
          >,
          ReturnType<typeof getV2UsersSelfQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersSelfQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: getV2UsersSelfQueryKey(),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users.self.$get(undefined, {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV2UsersSelfMfaUnregisterMutationKey() {
  return ['v2', '/v2/users/self/mfa/unregister', 'POST'] as const
}

export function getPostV2UsersSelfMfaUnregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.users.self.mfa.unregister.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.users.self.mfa.unregister.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersSelfMfaUnregisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.users.self.mfa.unregister.$post>) {
      return parseResponse(client.v2.users.self.mfa.unregister.$post(args, options))
    },
  })
}

export function usePostV2UsersSelfMfaUnregister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v2.users.self.mfa.unregister.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.users.self.mfa.unregister.$post>,
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
  const mutationDefaults = getPostV2UsersSelfMfaUnregisterMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UsersSelfPasswordMutationKey() {
  return ['v2', '/v2/users/self/password', 'POST'] as const
}

export function getPostV2UsersSelfPasswordMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.password.$post>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.users.self.password.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersSelfPasswordMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.users.self.password.$post>) {
      return parseResponse(client.v2.users.self.password.$post(args, options))
    },
  })
}

export function usePostV2UsersSelfPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<typeof client.v2.users.self.password.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.users.self.password.$post>,
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
  const mutationDefaults = getPostV2UsersSelfPasswordMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UsersSelfPasswordValidateMutationKey() {
  return ['v2', '/v2/users/self/password/validate', 'POST'] as const
}

export function getPostV2UsersSelfPasswordValidateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.users.self.password.validate.$post>>
        >
      >
    >,
    TError,
    InferRequestType<typeof client.v2.users.self.password.validate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersSelfPasswordValidateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.users.self.password.validate.$post>) {
      return parseResponse(client.v2.users.self.password.validate.$post(args, options))
    },
  })
}

export function usePostV2UsersSelfPasswordValidate<
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
                Awaited<ReturnType<typeof client.v2.users.self.password.validate.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.v2.users.self.password.validate.$post>,
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
  const mutationDefaults = getPostV2UsersSelfPasswordValidateMutationOptions<
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

export function getPostV2UsersSelfUserDetailsUpdateMutationKey() {
  return ['v2', '/v2/users/self/userDetailsUpdate', 'POST'] as const
}

export function getPostV2UsersSelfUserDetailsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.users.self.userDetailsUpdate.$post>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<typeof client.v2.users.self.userDetailsUpdate.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersSelfUserDetailsUpdateMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v2.users.self.userDetailsUpdate.$post>) {
      return parseResponse(client.v2.users.self.userDetailsUpdate.$post(args, options))
    },
  })
}

export function usePostV2UsersSelfUserDetailsUpdate<
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
                  Awaited<ReturnType<typeof client.v2.users.self.userDetailsUpdate.$post>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<typeof client.v2.users.self.userDetailsUpdate.$post>,
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
  const mutationDefaults = getPostV2UsersSelfUserDetailsUpdateMutationOptions<
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

export function getV2UsersUserIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['$get']>>,
) {
  return ['v2', '/v2/users/:userId', toValue(args)] as const
}

export function getV2UsersUserIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV2UsersUserIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v2.users[':userId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV2UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v2.users)[':userId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
            >
          >,
          ReturnType<typeof getV2UsersUserIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersUserIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV2UsersUserIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v2.users[':userId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV2UsersUserIdMutationKey() {
  return ['v2', '/v2/users/:userId', 'DELETE'] as const
}

export function getDeleteV2UsersUserIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV2UsersUserIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v2.users)[':userId']['$delete']>) {
      return parseResponse(client.v2.users[':userId'].$delete(args, options))
    },
  })
}

export function useDeleteV2UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.users)[':userId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['$delete']>,
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
  const mutationDefaults = getDeleteV2UsersUserIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UsersUserIdDisableMutationKey() {
  return ['v2', '/v2/users/:userId/disable', 'POST'] as const
}

export function getPostV2UsersUserIdDisableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['disable']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['disable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersUserIdDisableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.users)[':userId']['disable']['$post']>,
    ) {
      return parseResponse(client.v2.users[':userId'].disable.$post(args, options))
    },
  })
}

export function usePostV2UsersUserIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.users)[':userId']['disable']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['disable']['$post']>,
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
  const mutationDefaults = getPostV2UsersUserIdDisableMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UsersUserIdEnableMutationKey() {
  return ['v2', '/v2/users/:userId/enable', 'POST'] as const
}

export function getPostV2UsersUserIdEnableMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['enable']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['enable']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersUserIdEnableMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.users)[':userId']['enable']['$post']>,
    ) {
      return parseResponse(client.v2.users[':userId'].enable.$post(args, options))
    },
  })
}

export function usePostV2UsersUserIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.users)[':userId']['enable']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['enable']['$post']>,
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
  const mutationDefaults = getPostV2UsersUserIdEnableMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UsersUserIdMfaUnregisterMutationKey() {
  return ['v2', '/v2/users/:userId/mfa/unregister', 'POST'] as const
}

export function getPostV2UsersUserIdMfaUnregisterMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['mfa']['unregister']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['mfa']['unregister']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersUserIdMfaUnregisterMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.users)[':userId']['mfa']['unregister']['$post']>,
    ) {
      return parseResponse(client.v2.users[':userId'].mfa.unregister.$post(args, options))
    },
  })
}

export function usePostV2UsersUserIdMfaUnregister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<
                    ReturnType<(typeof client.v2.users)[':userId']['mfa']['unregister']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['mfa']['unregister']['$post']>,
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
  const mutationDefaults = getPostV2UsersUserIdMfaUnregisterMutationOptions<
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

export function getPostV2UsersUserIdRoleUpdateMutationKey() {
  return ['v2', '/v2/users/:userId/roleUpdate', 'POST'] as const
}

export function getPostV2UsersUserIdRoleUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['roleUpdate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['roleUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersUserIdRoleUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.users)[':userId']['roleUpdate']['$post']>,
    ) {
      return parseResponse(client.v2.users[':userId'].roleUpdate.$post(args, options))
    },
  })
}

export function usePostV2UsersUserIdRoleUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.users)[':userId']['roleUpdate']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['roleUpdate']['$post']>,
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
  const mutationDefaults = getPostV2UsersUserIdRoleUpdateMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UsersUserIdTokensMutationKey() {
  return ['v2', '/v2/users/:userId/tokens', 'POST'] as const
}

export function getPostV2UsersUserIdTokensMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['tokens']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['tokens']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersUserIdTokensMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.users)[':userId']['tokens']['$post']>,
    ) {
      return parseResponse(client.v2.users[':userId'].tokens.$post(args, options))
    },
  })
}

export function usePostV2UsersUserIdTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.users)[':userId']['tokens']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['tokens']['$post']>,
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
  const mutationDefaults = getPostV2UsersUserIdTokensMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UsersUserIdUnlockMutationKey() {
  return ['v2', '/v2/users/:userId/unlock', 'POST'] as const
}

export function getPostV2UsersUserIdUnlockMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['unlock']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['unlock']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersUserIdUnlockMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.users)[':userId']['unlock']['$post']>,
    ) {
      return parseResponse(client.v2.users[':userId'].unlock.$post(args, options))
    },
  })
}

export function usePostV2UsersUserIdUnlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v2.users)[':userId']['unlock']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['unlock']['$post']>,
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
  const mutationDefaults = getPostV2UsersUserIdUnlockMutationOptions<TError, TOnMutateResult>(
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

export function getPostV2UsersUserIdUserDetailsUpdateMutationKey() {
  return ['v2', '/v2/users/:userId/userDetailsUpdate', 'POST'] as const
}

export function getPostV2UsersUserIdUserDetailsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['userDetailsUpdate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v2.users)[':userId']['userDetailsUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV2UsersUserIdUserDetailsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v2.users)[':userId']['userDetailsUpdate']['$post']>,
    ) {
      return parseResponse(client.v2.users[':userId'].userDetailsUpdate.$post(args, options))
    },
  })
}

export function usePostV2UsersUserIdUserDetailsUpdate<
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
                    ReturnType<(typeof client.v2.users)[':userId']['userDetailsUpdate']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v2.users)[':userId']['userDetailsUpdate']['$post']>,
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
  const mutationDefaults = getPostV2UsersUserIdUserDetailsUpdateMutationOptions<
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

export function getV3PayeesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.payees.$get>>,
) {
  return ['v3', '/v3/payees', toValue(args)] as const
}

export function getV3PayeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.payees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PayeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.payees.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV3Payees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.payees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>
          >,
          ReturnType<typeof getV3PayeesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3PayeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PayeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.payees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3PayeesMutationKey() {
  return ['v3', '/v3/payees', 'POST'] as const
}

export function getPostV3PayeesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$post>>>>>,
    TError,
    InferRequestType<typeof client.v3.payees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3PayeesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.payees.$post>) {
      return parseResponse(client.v3.payees.$post(args, options))
    },
  })
}

export function usePostV3Payees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.payees.$post>,
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
  const mutationDefaults = getPostV3PayeesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3PayeesBatchBatchIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.payees.batch)[':batchId']['$get']>>,
) {
  return ['v3', '/v3/payees/batch/:batchId', toValue(args)] as const
}

export function getV3PayeesBatchBatchIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.payees.batch)[':batchId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PayeesBatchBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.payees.batch[':batchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PayeesBatchBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees.batch)[':batchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.payees.batch)[':batchId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payees.batch)[':batchId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payees.batch)[':batchId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3PayeesBatchBatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.payees.batch)[':batchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PayeesBatchBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PayeesBatchBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.payees.batch[':batchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3PayeesDeltasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.payees.deltas.$get>>,
) {
  return ['v3', '/v3/payees/deltas', toValue(args)] as const
}

export function getV3PayeesDeltasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.payees.deltas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PayeesDeltasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.payees.deltas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PayeesDeltas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.payees.deltas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>
            >
          >,
          ReturnType<typeof getV3PayeesDeltasQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3PayeesDeltasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PayeesDeltasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.payees.deltas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3PayeesPayorsPayorIdInvitationStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>
  >,
) {
  return ['v3', '/v3/payees/payors/:payorId/invitationStatus', toValue(args)] as const
}

export function getV3PayeesPayorsPayorIdInvitationStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PayeesPayorsPayorIdInvitationStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.payees.payors[':payorId'].invitationStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PayeesPayorsPayorIdInvitationStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>
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
                    (typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']
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
                    (typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV3PayeesPayorsPayorIdInvitationStatusQueryKey>
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
            ReturnType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PayeesPayorsPayorIdInvitationStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PayeesPayorsPayorIdInvitationStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.payees.payors[':payorId'].invitationStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3PayeesPayeeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.payees)[':payeeId']['$get']>>,
) {
  return ['v3', '/v3/payees/:payeeId', toValue(args)] as const
}

export function getV3PayeesPayeeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.payees)[':payeeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PayeesPayeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.payees[':payeeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PayeesPayeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.payees)[':payeeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3PayeesPayeeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PayeesPayeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PayeesPayeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.payees[':payeeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV3PayeesPayeeIdMutationKey() {
  return ['v3', '/v3/payees/:payeeId', 'DELETE'] as const
}

export function getDeleteV3PayeesPayeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.payees)[':payeeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3PayeesPayeeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.payees)[':payeeId']['$delete']>) {
      return parseResponse(client.v3.payees[':payeeId'].$delete(args, options))
    },
  })
}

export function useDeleteV3PayeesPayeeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v3.payees)[':payeeId']['$delete']>,
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
  const mutationDefaults = getDeleteV3PayeesPayeeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3PayeesPayeeIdInviteMutationKey() {
  return ['v3', '/v3/payees/:payeeId/invite', 'POST'] as const
}

export function getPostV3PayeesPayeeIdInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['invite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.payees)[':payeeId']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3PayeesPayeeIdInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.payees)[':payeeId']['invite']['$post']>,
    ) {
      return parseResponse(client.v3.payees[':payeeId'].invite.$post(args, options))
    },
  })
}

export function usePostV3PayeesPayeeIdInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['invite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3.payees)[':payeeId']['invite']['$post']>,
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
  const mutationDefaults = getPostV3PayeesPayeeIdInviteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3PayeesPayeeIdPayeeDetailsUpdateMutationKey() {
  return ['v3', '/v3/payees/:payeeId/payeeDetailsUpdate', 'POST'] as const
}

export function getPostV3PayeesPayeeIdPayeeDetailsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.payees)[':payeeId']['payeeDetailsUpdate']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.payees)[':payeeId']['payeeDetailsUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3PayeesPayeeIdPayeeDetailsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.payees)[':payeeId']['payeeDetailsUpdate']['$post']>,
    ) {
      return parseResponse(client.v3.payees[':payeeId'].payeeDetailsUpdate.$post(args, options))
    },
  })
}

export function usePostV3PayeesPayeeIdPayeeDetailsUpdate<
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
                    ReturnType<(typeof client.v3.payees)[':payeeId']['payeeDetailsUpdate']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v3.payees)[':payeeId']['payeeDetailsUpdate']['$post']>,
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
  const mutationDefaults = getPostV3PayeesPayeeIdPayeeDetailsUpdateMutationOptions<
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

export function getPostV3PayeesPayeeIdRemoteIdUpdateMutationKey() {
  return ['v3', '/v3/payees/:payeeId/remoteIdUpdate', 'POST'] as const
}

export function getPostV3PayeesPayeeIdRemoteIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['remoteIdUpdate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.payees)[':payeeId']['remoteIdUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3PayeesPayeeIdRemoteIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.payees)[':payeeId']['remoteIdUpdate']['$post']>,
    ) {
      return parseResponse(client.v3.payees[':payeeId'].remoteIdUpdate.$post(args, options))
    },
  })
}

export function usePostV3PayeesPayeeIdRemoteIdUpdate<
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
                    ReturnType<(typeof client.v3.payees)[':payeeId']['remoteIdUpdate']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v3.payees)[':payeeId']['remoteIdUpdate']['$post']>,
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
  const mutationDefaults = getPostV3PayeesPayeeIdRemoteIdUpdateMutationOptions<
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

export function getV3PaymentauditPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.paymentaudit.payments.$get>>,
) {
  return ['v3', '/v3/paymentaudit/payments', toValue(args)] as const
}

export function getV3PaymentauditPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.paymentaudit.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PaymentauditPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.paymentaudit.payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PaymentauditPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.paymentaudit.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
            >
          >,
          ReturnType<typeof getV3PaymentauditPaymentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PaymentauditPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PaymentauditPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.paymentaudit.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3PaymentauditPaymentsPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>
  >,
) {
  return ['v3', '/v3/paymentaudit/payments/:paymentId', toValue(args)] as const
}

export function getV3PaymentauditPaymentsPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PaymentauditPaymentsPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.paymentaudit.payments[':paymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PaymentauditPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3PaymentauditPaymentsPaymentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PaymentauditPaymentsPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PaymentauditPaymentsPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.paymentaudit.payments[':paymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3PaymentauditPayoutsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.paymentaudit.payouts.$get>>,
) {
  return ['v3', '/v3/paymentaudit/payouts', toValue(args)] as const
}

export function getV3PaymentauditPayoutsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.paymentaudit.payouts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PaymentauditPayoutsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.paymentaudit.payouts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PaymentauditPayouts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.paymentaudit.payouts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
            >
          >,
          ReturnType<typeof getV3PaymentauditPayoutsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PaymentauditPayoutsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PaymentauditPayoutsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.paymentaudit.payouts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3PaymentauditPayoutsPayoutIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>
  >,
) {
  return ['v3', '/v3/paymentaudit/payouts/:payoutId', toValue(args)] as const
}

export function getV3PaymentauditPayoutsPayoutIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PaymentauditPayoutsPayoutIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.paymentaudit.payouts[':payoutId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PaymentauditPayoutsPayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3PaymentauditPayoutsPayoutIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PaymentauditPayoutsPayoutIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PaymentauditPayoutsPayoutIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.paymentaudit.payouts[':payoutId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3PaymentauditTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.paymentaudit.transactions.$get>>,
) {
  return ['v3', '/v3/paymentaudit/transactions', toValue(args)] as const
}

export function getV3PaymentauditTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.paymentaudit.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PaymentauditTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.paymentaudit.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PaymentauditTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.paymentaudit.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>
              >
            >
          >,
          ReturnType<typeof getV3PaymentauditTransactionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PaymentauditTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PaymentauditTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.paymentaudit.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3PayoutsMutationKey() {
  return ['v3', '/v3/payouts', 'POST'] as const
}

export function getPostV3PayoutsMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payouts.$post>>>>>,
    TError,
    InferRequestType<typeof client.v3.payouts.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV3PayoutsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v3.payouts.$post>) {
      return parseResponse(client.v3.payouts.$post(args, options))
    },
  })
}

export function usePostV3Payouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payouts.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v3.payouts.$post>,
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
  const mutationDefaults = getPostV3PayoutsMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV3PayoutsPayoutIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.payouts)[':payoutId']['$get']>>,
) {
  return ['v3', '/v3/payouts/:payoutId', toValue(args)] as const
}

export function getV3PayoutsPayoutIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.payouts)[':payoutId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PayoutsPayoutIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.payouts[':payoutId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PayoutsPayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v3.payouts)[':payoutId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3PayoutsPayoutIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PayoutsPayoutIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PayoutsPayoutIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.payouts[':payoutId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3PayoutsPayoutIdMutationKey() {
  return ['v3', '/v3/payouts/:payoutId', 'POST'] as const
}

export function getPostV3PayoutsPayoutIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$post']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3PayoutsPayoutIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$post']>) {
      return parseResponse(client.v3.payouts[':payoutId'].$post(args, options))
    },
  })
}

export function usePostV3PayoutsPayoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3.payouts)[':payoutId']['$post']>,
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
  const mutationDefaults = getPostV3PayoutsPayoutIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV3PayoutsPayoutIdMutationKey() {
  return ['v3', '/v3/payouts/:payoutId', 'DELETE'] as const
}

export function getDeleteV3PayoutsPayoutIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3PayoutsPayoutIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$delete']>) {
      return parseResponse(client.v3.payouts[':payoutId'].$delete(args, options))
    },
  })
}

export function useDeleteV3PayoutsPayoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3.payouts)[':payoutId']['$delete']>,
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
  const mutationDefaults = getDeleteV3PayoutsPayoutIdMutationOptions<TError, TOnMutateResult>(
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

export function getV3PayoutsPayoutIdPaymentsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>
  >,
) {
  return ['v3', '/v3/payouts/:payoutId/payments', toValue(args)] as const
}

export function getV3PayoutsPayoutIdPaymentsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3PayoutsPayoutIdPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.payouts[':payoutId'].payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3PayoutsPayoutIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3PayoutsPayoutIdPaymentsQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PayoutsPayoutIdPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3PayoutsPayoutIdPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.payouts[':payoutId'].payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV3PayoutsPayoutIdQuoteMutationKey() {
  return ['v3', '/v3/payouts/:payoutId/quote', 'POST'] as const
}

export function getPostV3PayoutsPayoutIdQuoteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['quote']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['quote']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3PayoutsPayoutIdQuoteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['quote']['$post']>,
    ) {
      return parseResponse(client.v3.payouts[':payoutId'].quote.$post(args, options))
    },
  })
}

export function usePostV3PayoutsPayoutIdQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['quote']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v3.payouts)[':payoutId']['quote']['$post']>,
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
  const mutationDefaults = getPostV3PayoutsPayoutIdQuoteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV3PayoutsPayoutIdScheduleMutationKey() {
  return ['v3', '/v3/payouts/:payoutId/schedule', 'POST'] as const
}

export function getPostV3PayoutsPayoutIdScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['schedule']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3PayoutsPayoutIdScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$post']>,
    ) {
      return parseResponse(client.v3.payouts[':payoutId'].schedule.$post(args, options))
    },
  })
}

export function usePostV3PayoutsPayoutIdSchedule<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['schedule']['$post']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$post']>,
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
  const mutationDefaults = getPostV3PayoutsPayoutIdScheduleMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteV3PayoutsPayoutIdScheduleMutationKey() {
  return ['v3', '/v3/payouts/:payoutId/schedule', 'DELETE'] as const
}

export function getDeleteV3PayoutsPayoutIdScheduleMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['schedule']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3PayoutsPayoutIdScheduleMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$delete']>,
    ) {
      return parseResponse(client.v3.payouts[':payoutId'].schedule.$delete(args, options))
    },
  })
}

export function useDeleteV3PayoutsPayoutIdSchedule<
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
                    ReturnType<(typeof client.v3.payouts)[':payoutId']['schedule']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$delete']>,
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
  const mutationDefaults = getDeleteV3PayoutsPayoutIdScheduleMutationOptions<
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

export function getV3SourceAccountsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.sourceAccounts.$get>>,
) {
  return ['v3', '/v3/sourceAccounts', toValue(args)] as const
}

export function getV3SourceAccountsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.sourceAccounts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3SourceAccountsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.sourceAccounts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3SourceAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v3.sourceAccounts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>
            >
          >,
          ReturnType<typeof getV3SourceAccountsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3SourceAccountsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3SourceAccountsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.sourceAccounts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV3SourceAccountsSourceAccountIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>
  >,
) {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId', toValue(args)] as const
}

export function getV3SourceAccountsSourceAccountIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV3SourceAccountsSourceAccountIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v3.sourceAccounts[':sourceAccountId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV3SourceAccountsSourceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV3SourceAccountsSourceAccountIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3SourceAccountsSourceAccountIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV3SourceAccountsSourceAccountIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v3.sourceAccounts[':sourceAccountId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV3SourceAccountsSourceAccountIdMutationKey() {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId', 'DELETE'] as const
}

export function getDeleteV3SourceAccountsSourceAccountIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV3SourceAccountsSourceAccountIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$delete']>,
    ) {
      return parseResponse(client.v3.sourceAccounts[':sourceAccountId'].$delete(args, options))
    },
  })
}

export function useDeleteV3SourceAccountsSourceAccountId<
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
                    ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$delete']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$delete']>,
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
  const mutationDefaults = getDeleteV3SourceAccountsSourceAccountIdMutationOptions<
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

export function getPostV3SourceAccountsSourceAccountIdFundingRequestMutationKey() {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId/fundingRequest', 'POST'] as const
}

export function getPostV3SourceAccountsSourceAccountIdFundingRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.v3.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.v3.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV3SourceAccountsSourceAccountIdFundingRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
      >,
    ) {
      return parseResponse(
        client.v3.sourceAccounts[':sourceAccountId'].fundingRequest.$post(args, options),
      )
    },
  })
}

export function usePostV3SourceAccountsSourceAccountIdFundingRequest<
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
                    (typeof client.v3.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.v3.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
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
  const mutationDefaults = getPostV3SourceAccountsSourceAccountIdFundingRequestMutationOptions<
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

export function getPostV3SourceAccountsSourceAccountIdNotificationsMutationKey() {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId/notifications', 'POST'] as const
}

export function getPostV3SourceAccountsSourceAccountIdNotificationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.sourceAccounts)[':sourceAccountId']['notifications']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<
      (typeof client.v3.sourceAccounts)[':sourceAccountId']['notifications']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostV3SourceAccountsSourceAccountIdNotificationsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.sourceAccounts)[':sourceAccountId']['notifications']['$post']
      >,
    ) {
      return parseResponse(
        client.v3.sourceAccounts[':sourceAccountId'].notifications.$post(args, options),
      )
    },
  })
}

export function usePostV3SourceAccountsSourceAccountIdNotifications<
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
                      (typeof client.v3.sourceAccounts)[':sourceAccountId']['notifications']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v3.sourceAccounts)[':sourceAccountId']['notifications']['$post']
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
  const mutationDefaults = getPostV3SourceAccountsSourceAccountIdNotificationsMutationOptions<
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

export function getPostV3SourceAccountsSourceAccountIdTransfersMutationKey() {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId/transfers', 'POST'] as const
}

export function getPostV3SourceAccountsSourceAccountIdTransfersMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.v3.sourceAccounts)[':sourceAccountId']['transfers']['$post']
              >
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['transfers']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV3SourceAccountsSourceAccountIdTransfersMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.v3.sourceAccounts)[':sourceAccountId']['transfers']['$post']
      >,
    ) {
      return parseResponse(
        client.v3.sourceAccounts[':sourceAccountId'].transfers.$post(args, options),
      )
    },
  })
}

export function usePostV3SourceAccountsSourceAccountIdTransfers<
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
                      (typeof client.v3.sourceAccounts)[':sourceAccountId']['transfers']['$post']
                    >
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<
            (typeof client.v3.sourceAccounts)[':sourceAccountId']['transfers']['$post']
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
  const mutationDefaults = getPostV3SourceAccountsSourceAccountIdTransfersMutationOptions<
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

export function getV4PayeesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.payees.$get>>,
) {
  return ['v4', '/v4/payees', toValue(args)] as const
}

export function getV4PayeesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.payees.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PayeesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.payees.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useV4Payees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.payees.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>
          >,
          ReturnType<typeof getV4PayeesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4PayeesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PayeesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.payees.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostV4PayeesMutationKey() {
  return ['v4', '/v4/payees', 'POST'] as const
}

export function getPostV4PayeesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$post>>>>>,
    TError,
    InferRequestType<typeof client.v4.payees.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostV4PayeesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.v4.payees.$post>) {
      return parseResponse(client.v4.payees.$post(args, options))
    },
  })
}

export function usePostV4Payees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.v4.payees.$post>,
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
  const mutationDefaults = getPostV4PayeesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getV4PayeesBatchBatchIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.payees.batch)[':batchId']['$get']>>,
) {
  return ['v4', '/v4/payees/batch/:batchId', toValue(args)] as const
}

export function getV4PayeesBatchBatchIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.payees.batch)[':batchId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PayeesBatchBatchIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.payees.batch[':batchId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PayeesBatchBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees.batch)[':batchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.payees.batch)[':batchId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.payees.batch)[':batchId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.payees.batch)[':batchId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4PayeesBatchBatchIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v4.payees.batch)[':batchId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PayeesBatchBatchIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PayeesBatchBatchIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.payees.batch[':batchId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4PayeesDeltasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.payees.deltas.$get>>,
) {
  return ['v4', '/v4/payees/deltas', toValue(args)] as const
}

export function getV4PayeesDeltasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.payees.deltas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PayeesDeltasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.payees.deltas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PayeesDeltas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.payees.deltas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>
            >
          >,
          ReturnType<typeof getV4PayeesDeltasQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4PayeesDeltasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PayeesDeltasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.payees.deltas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4PayeesPayorsPayorIdInvitationStatusQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>
  >,
) {
  return ['v4', '/v4/payees/payors/:payorId/invitationStatus', toValue(args)] as const
}

export function getV4PayeesPayorsPayorIdInvitationStatusQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PayeesPayorsPayorIdInvitationStatusQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.payees.payors[':payorId'].invitationStatus.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PayeesPayorsPayorIdInvitationStatus<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>
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
                    (typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']
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
                    (typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getV4PayeesPayorsPayorIdInvitationStatusQueryKey>
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
            ReturnType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PayeesPayorsPayorIdInvitationStatusQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PayeesPayorsPayorIdInvitationStatusQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.payees.payors[':payorId'].invitationStatus.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4PayeesPayeeIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.payees)[':payeeId']['$get']>>,
) {
  return ['v4', '/v4/payees/:payeeId', toValue(args)] as const
}

export function getV4PayeesPayeeIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.payees)[':payeeId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PayeesPayeeIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.payees[':payeeId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PayeesPayeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.v4.payees)[':payeeId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4PayeesPayeeIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PayeesPayeeIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PayeesPayeeIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.payees[':payeeId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDeleteV4PayeesPayeeIdMutationKey() {
  return ['v4', '/v4/payees/:payeeId', 'DELETE'] as const
}

export function getDeleteV4PayeesPayeeIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.payees)[':payeeId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteV4PayeesPayeeIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.v4.payees)[':payeeId']['$delete']>) {
      return parseResponse(client.v4.payees[':payeeId'].$delete(args, options))
    },
  })
}

export function useDeleteV4PayeesPayeeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          | Awaited<
              ReturnType<
                typeof parseResponse<
                  Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$delete']>>
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.payees)[':payeeId']['$delete']>,
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
  const mutationDefaults = getDeleteV4PayeesPayeeIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4PayeesPayeeIdInviteMutationKey() {
  return ['v4', '/v4/payees/:payeeId/invite', 'POST'] as const
}

export function getPostV4PayeesPayeeIdInviteMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['invite']['$post']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.v4.payees)[':payeeId']['invite']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4PayeesPayeeIdInviteMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.payees)[':payeeId']['invite']['$post']>,
    ) {
      return parseResponse(client.v4.payees[':payeeId'].invite.$post(args, options))
    },
  })
}

export function usePostV4PayeesPayeeIdInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['invite']['$post']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.v4.payees)[':payeeId']['invite']['$post']>,
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
  const mutationDefaults = getPostV4PayeesPayeeIdInviteMutationOptions<TError, TOnMutateResult>(
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

export function getPostV4PayeesPayeeIdPayeeDetailsUpdateMutationKey() {
  return ['v4', '/v4/payees/:payeeId/payeeDetailsUpdate', 'POST'] as const
}

export function getPostV4PayeesPayeeIdPayeeDetailsUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.payees)[':payeeId']['payeeDetailsUpdate']['$post']>
            >
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.payees)[':payeeId']['payeeDetailsUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4PayeesPayeeIdPayeeDetailsUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.payees)[':payeeId']['payeeDetailsUpdate']['$post']>,
    ) {
      return parseResponse(client.v4.payees[':payeeId'].payeeDetailsUpdate.$post(args, options))
    },
  })
}

export function usePostV4PayeesPayeeIdPayeeDetailsUpdate<
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
                    ReturnType<(typeof client.v4.payees)[':payeeId']['payeeDetailsUpdate']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.payees)[':payeeId']['payeeDetailsUpdate']['$post']>,
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
  const mutationDefaults = getPostV4PayeesPayeeIdPayeeDetailsUpdateMutationOptions<
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

export function getPostV4PayeesPayeeIdRemoteIdUpdateMutationKey() {
  return ['v4', '/v4/payees/:payeeId/remoteIdUpdate', 'POST'] as const
}

export function getPostV4PayeesPayeeIdRemoteIdUpdateMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['remoteIdUpdate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    InferRequestType<(typeof client.v4.payees)[':payeeId']['remoteIdUpdate']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostV4PayeesPayeeIdRemoteIdUpdateMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.v4.payees)[':payeeId']['remoteIdUpdate']['$post']>,
    ) {
      return parseResponse(client.v4.payees[':payeeId'].remoteIdUpdate.$post(args, options))
    },
  })
}

export function usePostV4PayeesPayeeIdRemoteIdUpdate<
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
                    ReturnType<(typeof client.v4.payees)[':payeeId']['remoteIdUpdate']['$post']>
                  >
                >
              >
            >
          | undefined,
          TError,
          InferRequestType<(typeof client.v4.payees)[':payeeId']['remoteIdUpdate']['$post']>,
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
  const mutationDefaults = getPostV4PayeesPayeeIdRemoteIdUpdateMutationOptions<
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

export function getV4PaymentauditFundingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.fundings.$get>>,
) {
  return ['v4', '/v4/paymentaudit/fundings', toValue(args)] as const
}

export function getV4PaymentauditFundingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.fundings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PaymentauditFundingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.paymentaudit.fundings.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PaymentauditFundings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.fundings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
            >
          >,
          ReturnType<typeof getV4PaymentauditFundingsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditFundingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PaymentauditFundingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.paymentaudit.fundings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4PaymentauditPaymentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.payments.$get>>,
) {
  return ['v4', '/v4/paymentaudit/payments', toValue(args)] as const
}

export function getV4PaymentauditPaymentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.payments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PaymentauditPaymentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.paymentaudit.payments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PaymentauditPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.payments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
            >
          >,
          ReturnType<typeof getV4PaymentauditPaymentsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditPaymentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PaymentauditPaymentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.paymentaudit.payments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4PaymentauditPaymentsPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>
  >,
) {
  return ['v4', '/v4/paymentaudit/payments/:paymentId', toValue(args)] as const
}

export function getV4PaymentauditPaymentsPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PaymentauditPaymentsPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.paymentaudit.payments[':paymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PaymentauditPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4PaymentauditPaymentsPaymentIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditPaymentsPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PaymentauditPaymentsPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.paymentaudit.payments[':paymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4PaymentauditPayoutStatisticsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.payoutStatistics.$get>>,
) {
  return ['v4', '/v4/paymentaudit/payoutStatistics', toValue(args)] as const
}

export function getV4PaymentauditPayoutStatisticsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.payoutStatistics.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PaymentauditPayoutStatisticsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.paymentaudit.payoutStatistics.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PaymentauditPayoutStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payoutStatistics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.payoutStatistics.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.paymentaudit.payoutStatistics.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.paymentaudit.payoutStatistics.$get>>
              >
            >
          >,
          ReturnType<typeof getV4PaymentauditPayoutStatisticsQueryKey>
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
          Awaited<ReturnType<typeof client.v4.paymentaudit.payoutStatistics.$get>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditPayoutStatisticsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PaymentauditPayoutStatisticsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.paymentaudit.payoutStatistics.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4PaymentauditPayoutsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.payouts.$get>>,
) {
  return ['v4', '/v4/paymentaudit/payouts', toValue(args)] as const
}

export function getV4PaymentauditPayoutsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.payouts.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PaymentauditPayoutsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.paymentaudit.payouts.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PaymentauditPayouts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.payouts.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
            >
          >,
          ReturnType<typeof getV4PaymentauditPayoutsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditPayoutsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PaymentauditPayoutsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.paymentaudit.payouts.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4PaymentauditPayoutsPayoutIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>
  >,
) {
  return ['v4', '/v4/paymentaudit/payouts/:payoutId', toValue(args)] as const
}

export function getV4PaymentauditPayoutsPayoutIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PaymentauditPayoutsPayoutIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.paymentaudit.payouts[':payoutId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PaymentauditPayoutsPayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getV4PaymentauditPayoutsPayoutIdQueryKey>
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
          Awaited<ReturnType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditPayoutsPayoutIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PaymentauditPayoutsPayoutIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.paymentaudit.payouts[':payoutId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4PaymentauditTransactionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.transactions.$get>>,
) {
  return ['v4', '/v4/paymentaudit/transactions', toValue(args)] as const
}

export function getV4PaymentauditTransactionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.transactions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PaymentauditTransactionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.paymentaudit.transactions.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PaymentauditTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.paymentaudit.transactions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>
              >
            >
          >,
          ReturnType<typeof getV4PaymentauditTransactionsQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditTransactionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PaymentauditTransactionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.paymentaudit.transactions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getV4PaymentsDeltasQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.payments.deltas.$get>>,
) {
  return ['v4', '/v4/payments/deltas', toValue(args)] as const
}

export function getV4PaymentsDeltasQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.payments.deltas.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getV4PaymentsDeltasQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.v4.payments.deltas.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useV4PaymentsDeltas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.v4.payments.deltas.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>
            >
          >,
          ReturnType<typeof getV4PaymentsDeltasQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentsDeltasQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getV4PaymentsDeltasQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.v4.payments.deltas.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
