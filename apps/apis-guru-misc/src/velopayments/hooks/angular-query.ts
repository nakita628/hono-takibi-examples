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

export function injectPostV1Authenticate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.authenticate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.authenticate.$post>,
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
    const mutationDefaults = getPostV1AuthenticateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1DeltasFundingsQueryKey(
  args: InferRequestType<typeof client.v1.deltas.fundings.$get>,
) {
  return ['v1', '/v1/deltas/fundings', args] as const
}

export function getV1DeltasFundingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.deltas.fundings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DeltasFundingsQueryKey>
  >({
    queryKey: getV1DeltasFundingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.deltas.fundings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1DeltasFundings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.deltas.fundings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DeltasFundingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DeltasFundingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1DeltasPaymentsQueryKey(
  args: InferRequestType<typeof client.v1.deltas.payments.$get>,
) {
  return ['v1', '/v1/deltas/payments', args] as const
}

export function getV1DeltasPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.deltas.payments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1DeltasPaymentsQueryKey>
  >({
    queryKey: getV1DeltasPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.deltas.payments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1DeltasPayments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.deltas.payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1DeltasPaymentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1DeltasPaymentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV1FundingsFundingIdQueryKey(
  args: InferRequestType<(typeof client.v1.fundings)[':fundingId']['$get']>,
) {
  return ['v1', '/v1/fundings/:fundingId', args] as const
}

export function getV1FundingsFundingIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.fundings)[':fundingId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1FundingsFundingIdQueryKey>
  >({
    queryKey: getV1FundingsFundingIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.fundings[':fundingId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1FundingsFundingId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.fundings)[':fundingId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1FundingsFundingIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1FundingsFundingIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1Logout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.logout.$post>>>>
          >
        | undefined,
        TError,
        void,
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
    const mutationDefaults = getPostV1LogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1PasswordReset<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PasswordResetMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1PaymentChannelRulesQueryKey() {
  return ['v1', '/v1/paymentChannelRules'] as const
}

export function getV1PaymentChannelRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentChannelRulesQueryKey>
  >({
    queryKey: getV1PaymentChannelRulesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.paymentChannelRules.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1PaymentChannelRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentChannelRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PaymentChannelRulesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV1PaymentauditFundingsQueryKey(
  args: InferRequestType<typeof client.v1.paymentaudit.fundings.$get>,
) {
  return ['v1', '/v1/paymentaudit/fundings', args] as const
}

export function getV1PaymentauditFundingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.paymentaudit.fundings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PaymentauditFundingsQueryKey>
  >({
    queryKey: getV1PaymentauditFundingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.paymentaudit.fundings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1PaymentauditFundings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.paymentaudit.fundings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PaymentauditFundingsQueryKey>
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
      ...getV1PaymentauditFundingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV1PaymentauditPayoutStatisticsQueryKey(
  args: InferRequestType<typeof client.v1.paymentaudit.payoutStatistics.$get>,
) {
  return ['v1', '/v1/paymentaudit/payoutStatistics', args] as const
}

export function getV1PaymentauditPayoutStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.payoutStatistics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v1.paymentaudit.payoutStatistics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PaymentauditPayoutStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.paymentaudit.payoutStatistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1PaymentauditPayoutStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.payoutStatistics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.paymentaudit.payoutStatistics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PaymentauditPayoutStatisticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1PaymentsPaymentIdWithdraw<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PaymentsPaymentIdWithdrawMutationOptions<
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

export function getV1PayorLinksQueryKey(args: InferRequestType<typeof client.v1.payorLinks.$get>) {
  return ['v1', '/v1/payorLinks', args] as const
}

export function getV1PayorLinksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.payorLinks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV1PayorLinksQueryKey>
  >({
    queryKey: getV1PayorLinksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payorLinks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1PayorLinks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.payorLinks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1PayorLinksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PayorLinksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1PayorLinks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.payorLinks.$post>,
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
    const mutationDefaults = getPostV1PayorLinksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1PayorsPayorIdQueryKey(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['$get']>,
) {
  return ['v1', '/v1/payors/:payorId', args] as const
}

export function getV1PayorsPayorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1PayorsPayorIdQueryKey>
  >({
    queryKey: getV1PayorsPayorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payors[':payorId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1PayorsPayorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.payors)[':payorId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1PayorsPayorIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1PayorsPayorIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1PayorsPayorIdApplications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PayorsPayorIdApplicationsMutationOptions<
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

export function injectPostV1PayorsPayorIdApplicationsApplicationIdKeys<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PayorsPayorIdApplicationsApplicationIdKeysMutationOptions<
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

export function getV1PayorsPayorIdBrandingQueryKey(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['$get']>,
) {
  return ['v1', '/v1/payors/:payorId/branding', args] as const
}

export function getV1PayorsPayorIdBrandingQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV1PayorsPayorIdBrandingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.payors[':payorId'].branding.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1PayorsPayorIdBranding<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV1PayorsPayorIdBrandingQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV1PayorsPayorIdBrandingLogos<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1PayorsPayorIdBrandingLogosMutationOptions<
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

export function injectPostV1PayorsPayorIdReminderEmailsUpdate<
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
                ReturnType<(typeof client.v1.payors)[':payorId']['reminderEmailsUpdate']['$post']>
              >
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.v1.payors)[':payorId']['reminderEmailsUpdate']['$post']>,
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
    const mutationDefaults = getPostV1PayorsPayorIdReminderEmailsUpdateMutationOptions<
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

export function injectPostV1SourceAccountsSourceAccountIdNotifications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1SourceAccountsSourceAccountIdNotificationsMutationOptions<
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

export function getV1SupportedCountriesQueryKey() {
  return ['v1', '/v1/supportedCountries'] as const
}

export function getV1SupportedCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1SupportedCountriesQueryKey>
  >({
    queryKey: getV1SupportedCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.supportedCountries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1SupportedCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1SupportedCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1SupportedCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1Validate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.validate.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.validate.$post>,
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
    const mutationDefaults = getPostV1ValidateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1WebhooksQueryKey(args: InferRequestType<typeof client.v1.webhooks.$get>) {
  return ['v1', '/v1/webhooks', args] as const
}

export function getV1WebhooksQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v1.webhooks.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksQueryKey>
  >({
    queryKey: getV1WebhooksQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV1Webhooks<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v1.webhooks.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WebhooksQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1Webhooks<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v1.webhooks.$post>,
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
    const mutationDefaults = getPostV1WebhooksMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV1WebhooksWebhookIdQueryKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$get']>,
) {
  return ['v1', '/v1/webhooks/:webhookId', args] as const
}

export function getV1WebhooksWebhookIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV1WebhooksWebhookIdQueryKey>
  >({
    queryKey: getV1WebhooksWebhookIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v1.webhooks[':webhookId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV1WebhooksWebhookId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV1WebhooksWebhookIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV1WebhooksWebhookIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV1WebhooksWebhookId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WebhooksWebhookIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV1WebhooksWebhookIdPing<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV1WebhooksWebhookIdPingMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2CurrenciesQueryKey() {
  return ['v2', '/v2/currencies'] as const
}

export function getV2CurrenciesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2CurrenciesQueryKey>
  >({
    queryKey: getV2CurrenciesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.currencies.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Currencies<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2CurrenciesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2CurrenciesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2FundingAccountsQueryKey(
  args: InferRequestType<typeof client.v2.fundingAccounts.$get>,
) {
  return ['v2', '/v2/fundingAccounts', args] as const
}

export function getV2FundingAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.fundingAccounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2FundingAccountsQueryKey>
  >({
    queryKey: getV2FundingAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.fundingAccounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2FundingAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.fundingAccounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2FundingAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2FundingAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV2FundingAccounts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.v2.fundingAccounts.$post>,
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
    const mutationDefaults = getPostV2FundingAccountsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2FundingAccountsFundingAccountIdQueryKey(
  args: InferRequestType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>,
) {
  return ['v2', '/v2/fundingAccounts/:fundingAccountId', args] as const
}

export function getV2FundingAccountsFundingAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2FundingAccountsFundingAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.fundingAccounts[':fundingAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2FundingAccountsFundingAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2FundingAccountsFundingAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV2PayorsPayorIdQueryKey(
  args: InferRequestType<(typeof client.v2.payors)[':payorId']['$get']>,
) {
  return ['v2', '/v2/payors/:payorId', args] as const
}

export function getV2PayorsPayorIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.payors)[':payorId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2PayorsPayorIdQueryKey>
  >({
    queryKey: getV2PayorsPayorIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.payors[':payorId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2PayorsPayorId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.payors)[':payorId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2PayorsPayorIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2PayorsPayorIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2SourceAccountsQueryKey(
  args: InferRequestType<typeof client.v2.sourceAccounts.$get>,
) {
  return ['v2', '/v2/sourceAccounts', args] as const
}

export function getV2SourceAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.sourceAccounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2SourceAccountsQueryKey>
  >({
    queryKey: getV2SourceAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sourceAccounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2SourceAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.sourceAccounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SourceAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SourceAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV2SourceAccountsSourceAccountIdQueryKey(
  args: InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>,
) {
  return ['v2', '/v2/sourceAccounts/:sourceAccountId', args] as const
}

export function getV2SourceAccountsSourceAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV2SourceAccountsSourceAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.sourceAccounts[':sourceAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2SourceAccountsSourceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV2SourceAccountsSourceAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV2SourceAccountsSourceAccountIdFundingRequest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2SourceAccountsSourceAccountIdFundingRequestMutationOptions<
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

export function injectPostV2SourceAccountsSourceAccountIdTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2SourceAccountsSourceAccountIdTransfersMutationOptions<
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

export function getV2SupportedCountriesQueryKey() {
  return ['v2', '/v2/supportedCountries'] as const
}

export function getV2SupportedCountriesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2SupportedCountriesQueryKey>
  >({
    queryKey: getV2SupportedCountriesQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.supportedCountries.$get(undefined, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV2SupportedCountries<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2SupportedCountriesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2SupportedCountriesQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
}

export function getV2UsersQueryKey(args: InferRequestType<typeof client.v2.users.$get>) {
  return ['v2', '/v2/users', args] as const
}

export function getV2UsersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v2.users.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV2UsersQueryKey>
  >({
    queryKey: getV2UsersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2Users<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v2.users.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getV2UsersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UsersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV2UsersInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2UsersRegistrationSms<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersRegistrationSmsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV2UsersSelfQueryKey() {
  return ['v2', '/v2/users/self'] as const
}

export function getV2UsersSelfQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
  >,
  TError = DefaultError,
>(options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersSelfQueryKey>
  >({
    queryKey: getV2UsersSelfQueryKey(),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users.self.$get(undefined, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2UsersSelf<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
  >,
  TError = DefaultError,
>(
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV2UsersSelfQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UsersSelfQueryOptions<TData, TError>(clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV2UsersSelfMfaUnregister<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersSelfMfaUnregisterMutationOptions<
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

export function injectPostV2UsersSelfPassword<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        | Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.password.$post>>>
            >
          >
        | undefined,
        TError,
        InferRequestType<typeof client.v2.users.self.password.$post>,
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
    const mutationDefaults = getPostV2UsersSelfPasswordMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2UsersSelfPasswordValidate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersSelfPasswordValidateMutationOptions<
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

export function injectPostV2UsersSelfUserDetailsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersSelfUserDetailsUpdateMutationOptions<
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

export function getV2UsersUserIdQueryKey(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
) {
  return ['v2', '/v2/users/:userId', args] as const
}

export function getV2UsersUserIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV2UsersUserIdQueryKey>
  >({
    queryKey: getV2UsersUserIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v2.users[':userId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV2UsersUserId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV2UsersUserIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV2UsersUserIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteV2UsersUserId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV2UsersUserIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2UsersUserIdDisable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersUserIdDisableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2UsersUserIdEnable<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersUserIdEnableMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2UsersUserIdMfaUnregister<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersUserIdMfaUnregisterMutationOptions<
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

export function injectPostV2UsersUserIdRoleUpdate<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersUserIdRoleUpdateMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2UsersUserIdTokens<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersUserIdTokensMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2UsersUserIdUnlock<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersUserIdUnlockMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV2UsersUserIdUserDetailsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV2UsersUserIdUserDetailsUpdateMutationOptions<
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

export function getV3PayeesQueryKey(args: InferRequestType<typeof client.v3.payees.$get>) {
  return ['v3', '/v3/payees', args] as const
}

export function getV3PayeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.payees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV3PayeesQueryKey>
  >({
    queryKey: getV3PayeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.payees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV3Payees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.payees.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3PayeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3PayeesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV3Payees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v3.payees.$post>,
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
    const mutationDefaults = getPostV3PayeesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV3PayeesBatchBatchIdQueryKey(
  args: InferRequestType<(typeof client.v3.payees.batch)[':batchId']['$get']>,
) {
  return ['v3', '/v3/payees/batch/:batchId', args] as const
}

export function getV3PayeesBatchBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees.batch)[':batchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.payees.batch)[':batchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3PayeesBatchBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.payees.batch[':batchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3PayeesBatchBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees.batch)[':batchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.payees.batch)[':batchId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV3PayeesBatchBatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV3PayeesDeltasQueryKey(
  args: InferRequestType<typeof client.v3.payees.deltas.$get>,
) {
  return ['v3', '/v3/payees/deltas', args] as const
}

export function getV3PayeesDeltasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.payees.deltas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3PayeesDeltasQueryKey>
  >({
    queryKey: getV3PayeesDeltasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.payees.deltas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV3PayeesDeltas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.payees.deltas.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV3PayeesDeltasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3PayeesDeltasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV3PayeesPayorsPayorIdInvitationStatusQueryKey(
  args: InferRequestType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>,
) {
  return ['v3', '/v3/payees/payors/:payorId/invitationStatus', args] as const
}

export function getV3PayeesPayorsPayorIdInvitationStatusQueryOptions<
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
  args: InferRequestType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3PayeesPayorsPayorIdInvitationStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.payees.payors[':payorId'].invitationStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3PayeesPayorsPayorIdInvitationStatus<
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
  args: () => InferRequestType<
    (typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV3PayeesPayorsPayorIdInvitationStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV3PayeesPayeeIdQueryKey(
  args: InferRequestType<(typeof client.v3.payees)[':payeeId']['$get']>,
) {
  return ['v3', '/v3/payees/:payeeId', args] as const
}

export function getV3PayeesPayeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.payees)[':payeeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PayeesPayeeIdQueryKey>
  >({
    queryKey: getV3PayeesPayeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.payees[':payeeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV3PayeesPayeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.payees)[':payeeId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3PayeesPayeeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3PayeesPayeeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteV3PayeesPayeeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV3PayeesPayeeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV3PayeesPayeeIdInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3PayeesPayeeIdInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV3PayeesPayeeIdPayeeDetailsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3PayeesPayeeIdPayeeDetailsUpdateMutationOptions<
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

export function injectPostV3PayeesPayeeIdRemoteIdUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3PayeesPayeeIdRemoteIdUpdateMutationOptions<
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

export function getV3PaymentauditPaymentsQueryKey(
  args: InferRequestType<typeof client.v3.paymentaudit.payments.$get>,
) {
  return ['v3', '/v3/paymentaudit/payments', args] as const
}

export function getV3PaymentauditPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.paymentaudit.payments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PaymentauditPaymentsQueryKey>
  >({
    queryKey: getV3PaymentauditPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.paymentaudit.payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3PaymentauditPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.paymentaudit.payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3PaymentauditPaymentsQueryKey>
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
      ...getV3PaymentauditPaymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV3PaymentauditPaymentsPaymentIdQueryKey(
  args: InferRequestType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>,
) {
  return ['v3', '/v3/paymentaudit/payments/:paymentId', args] as const
}

export function getV3PaymentauditPaymentsPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3PaymentauditPaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.paymentaudit.payments[':paymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3PaymentauditPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV3PaymentauditPaymentsPaymentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV3PaymentauditPayoutsQueryKey(
  args: InferRequestType<typeof client.v3.paymentaudit.payouts.$get>,
) {
  return ['v3', '/v3/paymentaudit/payouts', args] as const
}

export function getV3PaymentauditPayoutsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.paymentaudit.payouts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PaymentauditPayoutsQueryKey>
  >({
    queryKey: getV3PaymentauditPayoutsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.paymentaudit.payouts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3PaymentauditPayouts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.paymentaudit.payouts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3PaymentauditPayoutsQueryKey>
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
      ...getV3PaymentauditPayoutsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV3PaymentauditPayoutsPayoutIdQueryKey(
  args: InferRequestType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>,
) {
  return ['v3', '/v3/paymentaudit/payouts/:payoutId', args] as const
}

export function getV3PaymentauditPayoutsPayoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3PaymentauditPayoutsPayoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.paymentaudit.payouts[':payoutId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3PaymentauditPayoutsPayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV3PaymentauditPayoutsPayoutIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV3PaymentauditTransactionsQueryKey(
  args: InferRequestType<typeof client.v3.paymentaudit.transactions.$get>,
) {
  return ['v3', '/v3/paymentaudit/transactions', args] as const
}

export function getV3PaymentauditTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v3.paymentaudit.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PaymentauditTransactionsQueryKey>
  >({
    queryKey: getV3PaymentauditTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.paymentaudit.transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3PaymentauditTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.paymentaudit.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3PaymentauditTransactionsQueryKey>
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
      ...getV3PaymentauditTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV3Payouts<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payouts.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v3.payouts.$post>,
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
    const mutationDefaults = getPostV3PayoutsMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV3PayoutsPayoutIdQueryKey(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$get']>,
) {
  return ['v3', '/v3/payouts/:payoutId', args] as const
}

export function getV3PayoutsPayoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV3PayoutsPayoutIdQueryKey>
  >({
    queryKey: getV3PayoutsPayoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.payouts[':payoutId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3PayoutsPayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.payouts)[':payoutId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3PayoutsPayoutIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3PayoutsPayoutIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV3PayoutsPayoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3PayoutsPayoutIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteV3PayoutsPayoutId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV3PayoutsPayoutIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV3PayoutsPayoutIdPaymentsQueryKey(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>,
) {
  return ['v3', '/v3/payouts/:payoutId/payments', args] as const
}

export function getV3PayoutsPayoutIdPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3PayoutsPayoutIdPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.payouts[':payoutId'].payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3PayoutsPayoutIdPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV3PayoutsPayoutIdPaymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostV3PayoutsPayoutIdQuote<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3PayoutsPayoutIdQuoteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV3PayoutsPayoutIdSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3PayoutsPayoutIdScheduleMutationOptions<
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

export function injectDeleteV3PayoutsPayoutIdSchedule<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      >,
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV3PayoutsPayoutIdScheduleMutationOptions<
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

export function getV3SourceAccountsQueryKey(
  args: InferRequestType<typeof client.v3.sourceAccounts.$get>,
) {
  return ['v3', '/v3/sourceAccounts', args] as const
}

export function getV3SourceAccountsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v3.sourceAccounts.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV3SourceAccountsQueryKey>
  >({
    queryKey: getV3SourceAccountsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.sourceAccounts.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV3SourceAccounts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v3.sourceAccounts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV3SourceAccountsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV3SourceAccountsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV3SourceAccountsSourceAccountIdQueryKey(
  args: InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>,
) {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId', args] as const
}

export function getV3SourceAccountsSourceAccountIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV3SourceAccountsSourceAccountIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v3.sourceAccounts[':sourceAccountId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV3SourceAccountsSourceAccountId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV3SourceAccountsSourceAccountIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectDeleteV3SourceAccountsSourceAccountId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV3SourceAccountsSourceAccountIdMutationOptions<
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

export function injectPostV3SourceAccountsSourceAccountIdFundingRequest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3SourceAccountsSourceAccountIdFundingRequestMutationOptions<
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

export function injectPostV3SourceAccountsSourceAccountIdNotifications<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3SourceAccountsSourceAccountIdNotificationsMutationOptions<
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

export function injectPostV3SourceAccountsSourceAccountIdTransfers<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV3SourceAccountsSourceAccountIdTransfersMutationOptions<
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

export function getV4PayeesQueryKey(args: InferRequestType<typeof client.v4.payees.$get>) {
  return ['v4', '/v4/payees', args] as const
}

export function getV4PayeesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.payees.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getV4PayeesQueryKey>
  >({
    queryKey: getV4PayeesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.payees.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4Payees<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.payees.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4PayeesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV4PayeesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostV4Payees<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.v4.payees.$post>,
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
    const mutationDefaults = getPostV4PayeesMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getV4PayeesBatchBatchIdQueryKey(
  args: InferRequestType<(typeof client.v4.payees.batch)[':batchId']['$get']>,
) {
  return ['v4', '/v4/payees/batch/:batchId', args] as const
}

export function getV4PayeesBatchBatchIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees.batch)[':batchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.payees.batch)[':batchId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV4PayeesBatchBatchIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.payees.batch[':batchId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4PayeesBatchBatchId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees.batch)[':batchId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.payees.batch)[':batchId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV4PayeesBatchBatchIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4PayeesDeltasQueryKey(
  args: InferRequestType<typeof client.v4.payees.deltas.$get>,
) {
  return ['v4', '/v4/payees/deltas', args] as const
}

export function getV4PayeesDeltasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.payees.deltas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4PayeesDeltasQueryKey>
  >({
    queryKey: getV4PayeesDeltasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.payees.deltas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4PayeesDeltas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.payees.deltas.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getV4PayeesDeltasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV4PayeesDeltasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getV4PayeesPayorsPayorIdInvitationStatusQueryKey(
  args: InferRequestType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>,
) {
  return ['v4', '/v4/payees/payors/:payorId/invitationStatus', args] as const
}

export function getV4PayeesPayorsPayorIdInvitationStatusQueryOptions<
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
  args: InferRequestType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV4PayeesPayorsPayorIdInvitationStatusQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.payees.payors[':payorId'].invitationStatus.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4PayeesPayorsPayorIdInvitationStatus<
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
  args: () => InferRequestType<
    (typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV4PayeesPayorsPayorIdInvitationStatusQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4PayeesPayeeIdQueryKey(
  args: InferRequestType<(typeof client.v4.payees)[':payeeId']['$get']>,
) {
  return ['v4', '/v4/payees/:payeeId', args] as const
}

export function getV4PayeesPayeeIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.payees)[':payeeId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PayeesPayeeIdQueryKey>
  >({
    queryKey: getV4PayeesPayeeIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.payees[':payeeId'].$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4PayeesPayeeId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.payees)[':payeeId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4PayeesPayeeIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV4PayeesPayeeIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDeleteV4PayeesPayeeId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteV4PayeesPayeeIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV4PayeesPayeeIdInvite<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4PayeesPayeeIdInviteMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostV4PayeesPayeeIdPayeeDetailsUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4PayeesPayeeIdPayeeDetailsUpdateMutationOptions<
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

export function injectPostV4PayeesPayeeIdRemoteIdUpdate<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostV4PayeesPayeeIdRemoteIdUpdateMutationOptions<
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

export function getV4PaymentauditFundingsQueryKey(
  args: InferRequestType<typeof client.v4.paymentaudit.fundings.$get>,
) {
  return ['v4', '/v4/paymentaudit/fundings', args] as const
}

export function getV4PaymentauditFundingsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.paymentaudit.fundings.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditFundingsQueryKey>
  >({
    queryKey: getV4PaymentauditFundingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.paymentaudit.fundings.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4PaymentauditFundings<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.paymentaudit.fundings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4PaymentauditFundingsQueryKey>
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
      ...getV4PaymentauditFundingsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4PaymentauditPaymentsQueryKey(
  args: InferRequestType<typeof client.v4.paymentaudit.payments.$get>,
) {
  return ['v4', '/v4/paymentaudit/payments', args] as const
}

export function getV4PaymentauditPaymentsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.paymentaudit.payments.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditPaymentsQueryKey>
  >({
    queryKey: getV4PaymentauditPaymentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.paymentaudit.payments.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4PaymentauditPayments<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.paymentaudit.payments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4PaymentauditPaymentsQueryKey>
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
      ...getV4PaymentauditPaymentsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4PaymentauditPaymentsPaymentIdQueryKey(
  args: InferRequestType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>,
) {
  return ['v4', '/v4/paymentaudit/payments/:paymentId', args] as const
}

export function getV4PaymentauditPaymentsPaymentIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV4PaymentauditPaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.paymentaudit.payments[':paymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4PaymentauditPaymentsPaymentId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV4PaymentauditPaymentsPaymentIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4PaymentauditPayoutStatisticsQueryKey(
  args: InferRequestType<typeof client.v4.paymentaudit.payoutStatistics.$get>,
) {
  return ['v4', '/v4/paymentaudit/payoutStatistics', args] as const
}

export function getV4PaymentauditPayoutStatisticsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payoutStatistics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.paymentaudit.payoutStatistics.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV4PaymentauditPayoutStatisticsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.paymentaudit.payoutStatistics.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4PaymentauditPayoutStatistics<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payoutStatistics.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.paymentaudit.payoutStatistics.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV4PaymentauditPayoutStatisticsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4PaymentauditPayoutsQueryKey(
  args: InferRequestType<typeof client.v4.paymentaudit.payouts.$get>,
) {
  return ['v4', '/v4/paymentaudit/payouts', args] as const
}

export function getV4PaymentauditPayoutsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.paymentaudit.payouts.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditPayoutsQueryKey>
  >({
    queryKey: getV4PaymentauditPayoutsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.paymentaudit.payouts.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4PaymentauditPayouts<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.paymentaudit.payouts.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4PaymentauditPayoutsQueryKey>
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
      ...getV4PaymentauditPayoutsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4PaymentauditPayoutsPayoutIdQueryKey(
  args: InferRequestType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>,
) {
  return ['v4', '/v4/paymentaudit/payouts/:payoutId', args] as const
}

export function getV4PaymentauditPayoutsPayoutIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getV4PaymentauditPayoutsPayoutIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.paymentaudit.payouts[':payoutId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4PaymentauditPayoutsPayoutId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getV4PaymentauditPayoutsPayoutIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4PaymentauditTransactionsQueryKey(
  args: InferRequestType<typeof client.v4.paymentaudit.transactions.$get>,
) {
  return ['v4', '/v4/paymentaudit/transactions', args] as const
}

export function getV4PaymentauditTransactionsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.v4.paymentaudit.transactions.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentauditTransactionsQueryKey>
  >({
    queryKey: getV4PaymentauditTransactionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.paymentaudit.transactions.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectV4PaymentauditTransactions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.paymentaudit.transactions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4PaymentauditTransactionsQueryKey>
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
      ...getV4PaymentauditTransactionsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getV4PaymentsDeltasQueryKey(
  args: InferRequestType<typeof client.v4.payments.deltas.$get>,
) {
  return ['v4', '/v4/payments/deltas', args] as const
}

export function getV4PaymentsDeltasQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.v4.payments.deltas.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getV4PaymentsDeltasQueryKey>
  >({
    queryKey: getV4PaymentsDeltasQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.v4.payments.deltas.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectV4PaymentsDeltas<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.v4.payments.deltas.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getV4PaymentsDeltasQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getV4PaymentsDeltasQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
