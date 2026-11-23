import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getPostV1AuthenticateKey() {
  return ['v1', '/v1/authenticate', 'POST'] as const
}

export function usePostV1Authenticate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.authenticate.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.authenticate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1AuthenticateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.authenticate.$post> }) =>
        parseResponse(client.v1.authenticate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1DeltasFundingsKey(
  args: InferRequestType<typeof client.v1.deltas.fundings.$get>,
) {
  return ['v1', '/v1/deltas/fundings', args] as const
}

export function useGetV1DeltasFundings<TError = unknown>(
  args: InferRequestType<typeof client.v1.deltas.fundings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>>
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
        ? getGetV1DeltasFundingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.deltas.fundings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DeltasFundings<TError = unknown>(
  args: InferRequestType<typeof client.v1.deltas.fundings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>>
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
        ? getGetV1DeltasFundingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.fundings.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.deltas.fundings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1DeltasPaymentsKey(
  args: InferRequestType<typeof client.v1.deltas.payments.$get>,
) {
  return ['v1', '/v1/deltas/payments', args] as const
}

export function useGetV1DeltasPayments<TError = unknown>(
  args: InferRequestType<typeof client.v1.deltas.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>>
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
        ? getGetV1DeltasPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.deltas.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1DeltasPayments<TError = unknown>(
  args: InferRequestType<typeof client.v1.deltas.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>>
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
        ? getGetV1DeltasPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.deltas.payments.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.deltas.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1FundingsFundingIdKey(
  args: InferRequestType<(typeof client.v1.fundings)[':fundingId']['$get']>,
) {
  return ['v1', '/v1/fundings/:fundingId', args] as const
}

export function useGetV1FundingsFundingId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.fundings)[':fundingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>
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
        ? getGetV1FundingsFundingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.fundings[':fundingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1FundingsFundingId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.fundings)[':fundingId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>
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
        ? getGetV1FundingsFundingIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.fundings)[':fundingId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.fundings[':fundingId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1LogoutKey() {
  return ['v1', '/v1/logout', 'POST'] as const
}

export function usePostV1Logout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.logout.$post>>>>>
    | undefined,
    TError,
    Key,
    undefined
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1LogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async () => parseResponse(client.v1.logout.$post(undefined, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PasswordResetKey() {
  return ['v1', '/v1/password/reset', 'POST'] as const
}

export function usePostV1PasswordReset<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.password.reset.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v1.password.reset.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PasswordResetKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.password.reset.$post> }) =>
        parseResponse(client.v1.password.reset.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PaymentChannelRulesKey() {
  return ['v1', '/v1/paymentChannelRules'] as const
}

export function useGetV1PaymentChannelRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentChannelRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.paymentChannelRules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentChannelRules<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1PaymentChannelRulesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentChannelRules.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.paymentChannelRules.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentauditFundingsKey(
  args: InferRequestType<typeof client.v1.paymentaudit.fundings.$get>,
) {
  return ['v1', '/v1/paymentaudit/fundings', args] as const
}

export function useGetV1PaymentauditFundings<TError = unknown>(
  args: InferRequestType<typeof client.v1.paymentaudit.fundings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
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
        ? getGetV1PaymentauditFundingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.paymentaudit.fundings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentauditFundings<TError = unknown>(
  args: InferRequestType<typeof client.v1.paymentaudit.fundings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
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
        ? getGetV1PaymentauditFundingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.paymentaudit.fundings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.paymentaudit.fundings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV1PaymentauditPayoutStatisticsKey(
  args: InferRequestType<typeof client.v1.paymentaudit.payoutStatistics.$get>,
) {
  return ['v1', '/v1/paymentaudit/payoutStatistics', args] as const
}

export function useGetV1PaymentauditPayoutStatistics<TError = unknown>(
  args: InferRequestType<typeof client.v1.paymentaudit.payoutStatistics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.paymentaudit.payoutStatistics.$get>>
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
        ? getGetV1PaymentauditPayoutStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.paymentaudit.payoutStatistics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.paymentaudit.payoutStatistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PaymentauditPayoutStatistics<TError = unknown>(
  args: InferRequestType<typeof client.v1.paymentaudit.payoutStatistics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.paymentaudit.payoutStatistics.$get>>
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
        ? getGetV1PaymentauditPayoutStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v1.paymentaudit.payoutStatistics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.paymentaudit.payoutStatistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PaymentsPaymentIdWithdrawKey() {
  return ['v1', '/v1/payments/:paymentId/withdraw', 'POST'] as const
}

export function usePostV1PaymentsPaymentIdWithdraw<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payments)[':paymentId']['withdraw']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payments)[':paymentId']['withdraw']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PaymentsPaymentIdWithdrawKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.payments)[':paymentId']['withdraw']['$post']>
        },
      ) => parseResponse(client.v1.payments[':paymentId'].withdraw.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PayorLinksKey(args: InferRequestType<typeof client.v1.payorLinks.$get>) {
  return ['v1', '/v1/payorLinks', args] as const
}

export function useGetV1PayorLinks<TError = unknown>(
  args: InferRequestType<typeof client.v1.payorLinks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PayorLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payorLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PayorLinks<TError = unknown>(
  args: InferRequestType<typeof client.v1.payorLinks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1PayorLinksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payorLinks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PayorLinksKey() {
  return ['v1', '/v1/payorLinks', 'POST'] as const
}

export function usePostV1PayorLinks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.payorLinks.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v1.payorLinks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PayorLinksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.payorLinks.$post> }) =>
        parseResponse(client.v1.payorLinks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1PayorsPayorIdKey(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['$get']>,
) {
  return ['v1', '/v1/payors/:payorId', args] as const
}

export function useGetV1PayorsPayorId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>>
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
        ? getGetV1PayorsPayorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payors[':payorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PayorsPayorId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>>
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
        ? getGetV1PayorsPayorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payors[':payorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PayorsPayorIdApplicationsKey() {
  return ['v1', '/v1/payors/:payorId/applications', 'POST'] as const
}

export function usePostV1PayorsPayorIdApplications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['applications']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payors)[':payorId']['applications']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PayorsPayorIdApplicationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.payors)[':payorId']['applications']['$post']>
        },
      ) => parseResponse(client.v1.payors[':payorId'].applications.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PayorsPayorIdApplicationsApplicationIdKeysKey() {
  return ['v1', '/v1/payors/:payorId/applications/:applicationId/keys', 'POST'] as const
}

export function usePostV1PayorsPayorIdApplicationsApplicationIdKeys<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.payors)[':payorId']['applications'][':applicationId']['keys']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PayorsPayorIdApplicationsApplicationIdKeysKey()
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
            (typeof client.v1.payors)[':payorId']['applications'][':applicationId']['keys']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.payors[':payorId'].applications[':applicationId'].keys.$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1PayorsPayorIdBrandingKey(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['$get']>,
) {
  return ['v1', '/v1/payors/:payorId/branding', args] as const
}

export function useGetV1PayorsPayorIdBranding<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['$get']>>
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
        ? getGetV1PayorsPayorIdBrandingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payors[':payorId'].branding.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1PayorsPayorIdBranding<TError = unknown>(
  args: InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['$get']>>
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
        ? getGetV1PayorsPayorIdBrandingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.payors[':payorId'].branding.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1PayorsPayorIdBrandingLogosKey() {
  return ['v1', '/v1/payors/:payorId/branding/logos', 'POST'] as const
}

export function usePostV1PayorsPayorIdBrandingLogos<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.payors)[':payorId']['branding']['logos']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['logos']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PayorsPayorIdBrandingLogosKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v1.payors)[':payorId']['branding']['logos']['$post']>
        },
      ) => parseResponse(client.v1.payors[':payorId'].branding.logos.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1PayorsPayorIdReminderEmailsUpdateKey() {
  return ['v1', '/v1/payors/:payorId/reminderEmailsUpdate', 'POST'] as const
}

export function usePostV1PayorsPayorIdReminderEmailsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v1.payors)[':payorId']['reminderEmailsUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1PayorsPayorIdReminderEmailsUpdateKey()
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
            (typeof client.v1.payors)[':payorId']['reminderEmailsUpdate']['$post']
          >
        },
      ) =>
        parseResponse(client.v1.payors[':payorId'].reminderEmailsUpdate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1SourceAccountsSourceAccountIdNotificationsKey() {
  return ['v1', '/v1/sourceAccounts/:sourceAccountId/notifications', 'POST'] as const
}

export function usePostV1SourceAccountsSourceAccountIdNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v1.sourceAccounts)[':sourceAccountId']['notifications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1SourceAccountsSourceAccountIdNotificationsKey()
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
            (typeof client.v1.sourceAccounts)[':sourceAccountId']['notifications']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v1.sourceAccounts[':sourceAccountId'].notifications.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV1SupportedCountriesKey() {
  return ['v1', '/v1/supportedCountries'] as const
}

export function useGetV1SupportedCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SupportedCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.supportedCountries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1SupportedCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV1SupportedCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v1.supportedCountries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.supportedCountries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1ValidateKey() {
  return ['v1', '/v1/validate', 'POST'] as const
}

export function usePostV1Validate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.validate.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1ValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.validate.$post> }) =>
        parseResponse(client.v1.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhooksKey(args: InferRequestType<typeof client.v1.webhooks.$get>) {
  return ['v1', '/v1/webhooks', args] as const
}

export function useGetV1Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1Webhooks<TError = unknown>(
  args: InferRequestType<typeof client.v1.webhooks.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV1WebhooksKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WebhooksKey() {
  return ['v1', '/v1/webhooks', 'POST'] as const
}

export function usePostV1Webhooks<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v1.webhooks.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v1.webhooks.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebhooksKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v1.webhooks.$post> }) =>
        parseResponse(client.v1.webhooks.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV1WebhooksWebhookIdKey(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$get']>,
) {
  return ['v1', '/v1/webhooks/:webhookId', args] as const
}

export function useGetV1WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>
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
        ? getGetV1WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV1WebhooksWebhookId<TError = unknown>(
  args: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>
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
        ? getGetV1WebhooksWebhookIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v1.webhooks[':webhookId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV1WebhooksWebhookIdKey() {
  return ['v1', '/v1/webhooks/:webhookId', 'POST'] as const
}

export function usePostV1WebhooksWebhookId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebhooksWebhookIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['$post']> },
      ) => parseResponse(client.v1.webhooks[':webhookId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV1WebhooksWebhookIdPingKey() {
  return ['v1', '/v1/webhooks/:webhookId/ping', 'POST'] as const
}

export function usePostV1WebhooksWebhookIdPing<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v1.webhooks)[':webhookId']['ping']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v1.webhooks)[':webhookId']['ping']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV1WebhooksWebhookIdPingKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v1.webhooks)[':webhookId']['ping']['$post']> },
      ) => parseResponse(client.v1.webhooks[':webhookId'].ping.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2CurrenciesKey() {
  return ['v2', '/v2/currencies'] as const
}

export function useGetV2Currencies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CurrenciesKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.currencies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2Currencies<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2CurrenciesKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.currencies.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.currencies.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2FundingAccountsKey(
  args: InferRequestType<typeof client.v2.fundingAccounts.$get>,
) {
  return ['v2', '/v2/fundingAccounts', args] as const
}

export function useGetV2FundingAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v2.fundingAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>>
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
        ? getGetV2FundingAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.fundingAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FundingAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v2.fundingAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>>
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
        ? getGetV2FundingAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.fundingAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2FundingAccountsKey() {
  return ['v2', '/v2/fundingAccounts', 'POST'] as const
}

export function usePostV2FundingAccounts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.fundingAccounts.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.fundingAccounts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2FundingAccountsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.fundingAccounts.$post> }) =>
        parseResponse(client.v2.fundingAccounts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2FundingAccountsFundingAccountIdKey(
  args: InferRequestType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>,
) {
  return ['v2', '/v2/fundingAccounts/:fundingAccountId', args] as const
}

export function useGetV2FundingAccountsFundingAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>>
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
        ? getGetV2FundingAccountsFundingAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.fundingAccounts[':fundingAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2FundingAccountsFundingAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>>
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
        ? getGetV2FundingAccountsFundingAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.fundingAccounts)[':fundingAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.fundingAccounts[':fundingAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2PayorsPayorIdKey(
  args: InferRequestType<(typeof client.v2.payors)[':payorId']['$get']>,
) {
  return ['v2', '/v2/payors/:payorId', args] as const
}

export function useGetV2PayorsPayorId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payors)[':payorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>>
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
        ? getGetV2PayorsPayorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payors[':payorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2PayorsPayorId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.payors)[':payorId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>>
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
        ? getGetV2PayorsPayorIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.payors)[':payorId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.payors[':payorId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SourceAccountsKey(
  args: InferRequestType<typeof client.v2.sourceAccounts.$get>,
) {
  return ['v2', '/v2/sourceAccounts', args] as const
}

export function useGetV2SourceAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v2.sourceAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>>
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
        ? getGetV2SourceAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sourceAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SourceAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v2.sourceAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>>
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
        ? getGetV2SourceAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.sourceAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.sourceAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2SourceAccountsSourceAccountIdKey(
  args: InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>,
) {
  return ['v2', '/v2/sourceAccounts/:sourceAccountId', args] as const
}

export function useGetV2SourceAccountsSourceAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>>
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
        ? getGetV2SourceAccountsSourceAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.sourceAccounts[':sourceAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SourceAccountsSourceAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>>
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
        ? getGetV2SourceAccountsSourceAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v2.sourceAccounts[':sourceAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2SourceAccountsSourceAccountIdFundingRequestKey() {
  return ['v2', '/v2/sourceAccounts/:sourceAccountId/fundingRequest', 'POST'] as const
}

export function usePostV2SourceAccountsSourceAccountIdFundingRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v2.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SourceAccountsSourceAccountIdFundingRequestKey()
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
            (typeof client.v2.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.sourceAccounts[':sourceAccountId'].fundingRequest.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV2SourceAccountsSourceAccountIdTransfersKey() {
  return ['v2', '/v2/sourceAccounts/:sourceAccountId/transfers', 'POST'] as const
}

export function usePostV2SourceAccountsSourceAccountIdTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v2.sourceAccounts)[':sourceAccountId']['transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2SourceAccountsSourceAccountIdTransfersKey()
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
            (typeof client.v2.sourceAccounts)[':sourceAccountId']['transfers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v2.sourceAccounts[':sourceAccountId'].transfers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV2SupportedCountriesKey() {
  return ['v2', '/v2/supportedCountries'] as const
}

export function useGetV2SupportedCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SupportedCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.supportedCountries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2SupportedCountries<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>
      >
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false
      ? customKey === undefined
        ? getGetV2SupportedCountriesKey()
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.supportedCountries.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.supportedCountries.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV2UsersKey(args: InferRequestType<typeof client.v2.users.$get>) {
  return ['v2', '/v2/users', args] as const
}

export function useGetV2Users<TError = unknown>(
  args: InferRequestType<typeof client.v2.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetV2Users<TError = unknown>(
  args: InferRequestType<typeof client.v2.users.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.v2.users.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostV2UsersInviteKey() {
  return ['v2', '/v2/users/invite', 'POST'] as const
}

export function usePostV2UsersInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.invite.$post>>>>
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.users.invite.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v2.users.invite.$post> }) =>
        parseResponse(client.v2.users.invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersRegistrationSmsKey() {
  return ['v2', '/v2/users/registration/sms', 'POST'] as const
}

export function usePostV2UsersRegistrationSms<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.registration.sms.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.users.registration.sms.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersRegistrationSmsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.users.registration.sms.$post> },
      ) => parseResponse(client.v2.users.registration.sms.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UsersSelfKey() {
  return ['v2', '/v2/users/self'] as const
}

export function useGetV2UsersSelf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsersSelfKey() : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users.self.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UsersSelf<TError = unknown>(options?: {
  swr?: SWRConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
    >,
    TError
  > & { swrKey?: Key; enabled?: boolean }
  options?: ClientRequestOptions
}) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV2UsersSelfKey() : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users.self.$get(undefined, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV2UsersSelfMfaUnregisterKey() {
  return ['v2', '/v2/users/self/mfa/unregister', 'POST'] as const
}

export function usePostV2UsersSelfMfaUnregister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.users.self.mfa.unregister.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.users.self.mfa.unregister.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersSelfMfaUnregisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.users.self.mfa.unregister.$post> },
      ) => parseResponse(client.v2.users.self.mfa.unregister.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersSelfPasswordKey() {
  return ['v2', '/v2/users/self/password', 'POST'] as const
}

export function usePostV2UsersSelfPassword<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v2.users.self.password.$post>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.users.self.password.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersSelfPasswordKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.users.self.password.$post> },
      ) => parseResponse(client.v2.users.self.password.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersSelfPasswordValidateKey() {
  return ['v2', '/v2/users/self/password/validate', 'POST'] as const
}

export function usePostV2UsersSelfPasswordValidate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<typeof client.v2.users.self.password.validate.$post>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.v2.users.self.password.validate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersSelfPasswordValidateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.users.self.password.validate.$post> },
      ) => parseResponse(client.v2.users.self.password.validate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersSelfUserDetailsUpdateKey() {
  return ['v2', '/v2/users/self/userDetailsUpdate', 'POST'] as const
}

export function usePostV2UsersSelfUserDetailsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v2.users.self.userDetailsUpdate.$post>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<typeof client.v2.users.self.userDetailsUpdate.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersSelfUserDetailsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.v2.users.self.userDetailsUpdate.$post> },
      ) => parseResponse(client.v2.users.self.userDetailsUpdate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV2UsersUserIdKey(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
) {
  return ['v2', '/v2/users/:userId', args] as const
}

export function useGetV2UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV2UsersUserId<TError = unknown>(
  args: InferRequestType<(typeof client.v2.users)[':userId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
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
    enabled !== false ? (customKey === undefined ? getGetV2UsersUserIdKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v2.users[':userId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV2UsersUserIdKey() {
  return ['v2', '/v2/users/:userId', 'DELETE'] as const
}

export function useDeleteV2UsersUserId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v2.users)[':userId']['$delete']>>>
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV2UsersUserIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.users)[':userId']['$delete']> },
      ) => parseResponse(client.v2.users[':userId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersUserIdDisableKey() {
  return ['v2', '/v2/users/:userId/disable', 'POST'] as const
}

export function usePostV2UsersUserIdDisable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['disable']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['disable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersUserIdDisableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.users)[':userId']['disable']['$post']> },
      ) => parseResponse(client.v2.users[':userId'].disable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersUserIdEnableKey() {
  return ['v2', '/v2/users/:userId/enable', 'POST'] as const
}

export function usePostV2UsersUserIdEnable<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['enable']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['enable']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersUserIdEnableKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.users)[':userId']['enable']['$post']> },
      ) => parseResponse(client.v2.users[':userId'].enable.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersUserIdMfaUnregisterKey() {
  return ['v2', '/v2/users/:userId/mfa/unregister', 'POST'] as const
}

export function usePostV2UsersUserIdMfaUnregister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['mfa']['unregister']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['mfa']['unregister']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersUserIdMfaUnregisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.users)[':userId']['mfa']['unregister']['$post']>
        },
      ) => parseResponse(client.v2.users[':userId'].mfa.unregister.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersUserIdRoleUpdateKey() {
  return ['v2', '/v2/users/:userId/roleUpdate', 'POST'] as const
}

export function usePostV2UsersUserIdRoleUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['roleUpdate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['roleUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersUserIdRoleUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v2.users)[':userId']['roleUpdate']['$post']> },
      ) => parseResponse(client.v2.users[':userId'].roleUpdate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersUserIdTokensKey() {
  return ['v2', '/v2/users/:userId/tokens', 'POST'] as const
}

export function usePostV2UsersUserIdTokens<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['tokens']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['tokens']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersUserIdTokensKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.users)[':userId']['tokens']['$post']> },
      ) => parseResponse(client.v2.users[':userId'].tokens.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersUserIdUnlockKey() {
  return ['v2', '/v2/users/:userId/unlock', 'POST'] as const
}

export function usePostV2UsersUserIdUnlock<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['unlock']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['unlock']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersUserIdUnlockKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v2.users)[':userId']['unlock']['$post']> },
      ) => parseResponse(client.v2.users[':userId'].unlock.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV2UsersUserIdUserDetailsUpdateKey() {
  return ['v2', '/v2/users/:userId/userDetailsUpdate', 'POST'] as const
}

export function usePostV2UsersUserIdUserDetailsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v2.users)[':userId']['userDetailsUpdate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v2.users)[':userId']['userDetailsUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV2UsersUserIdUserDetailsUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v2.users)[':userId']['userDetailsUpdate']['$post']>
        },
      ) => parseResponse(client.v2.users[':userId'].userDetailsUpdate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3PayeesKey(args: InferRequestType<typeof client.v3.payees.$get>) {
  return ['v3', '/v3/payees', args] as const
}

export function useGetV3Payees<TError = unknown>(
  args: InferRequestType<typeof client.v3.payees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3PayeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3Payees<TError = unknown>(
  args: InferRequestType<typeof client.v3.payees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3PayeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3PayeesKey() {
  return ['v3', '/v3/payees', 'POST'] as const
}

export function usePostV3Payees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v3.payees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3PayeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.payees.$post> }) =>
        parseResponse(client.v3.payees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3PayeesBatchBatchIdKey(
  args: InferRequestType<(typeof client.v3.payees.batch)[':batchId']['$get']>,
) {
  return ['v3', '/v3/payees/batch/:batchId', args] as const
}

export function useGetV3PayeesBatchBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.payees.batch)[':batchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payees.batch)[':batchId']['$get']>>
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
        ? getGetV3PayeesBatchBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payees.batch)[':batchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payees.batch[':batchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PayeesBatchBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.payees.batch)[':batchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payees.batch)[':batchId']['$get']>>
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
        ? getGetV3PayeesBatchBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payees.batch)[':batchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payees.batch[':batchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3PayeesDeltasKey(
  args: InferRequestType<typeof client.v3.payees.deltas.$get>,
) {
  return ['v3', '/v3/payees/deltas', args] as const
}

export function useGetV3PayeesDeltas<TError = unknown>(
  args: InferRequestType<typeof client.v3.payees.deltas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3PayeesDeltasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payees.deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PayeesDeltas<TError = unknown>(
  args: InferRequestType<typeof client.v3.payees.deltas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV3PayeesDeltasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payees.deltas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payees.deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3PayeesPayorsPayorIdInvitationStatusKey(
  args: InferRequestType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>,
) {
  return ['v3', '/v3/payees/payors/:payorId/invitationStatus', args] as const
}

export function useGetV3PayeesPayorsPayorIdInvitationStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>
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
        ? getGetV3PayeesPayorsPayorIdInvitationStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.payees.payors[':payorId'].invitationStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PayeesPayorsPayorIdInvitationStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>
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
        ? getGetV3PayeesPayorsPayorIdInvitationStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v3.payees.payors)[':payorId']['invitationStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v3.payees.payors[':payorId'].invitationStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV3PayeesPayeeIdKey(
  args: InferRequestType<(typeof client.v3.payees)[':payeeId']['$get']>,
) {
  return ['v3', '/v3/payees/:payeeId', args] as const
}

export function useGetV3PayeesPayeeId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.payees)[':payeeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>>
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
        ? getGetV3PayeesPayeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payees[':payeeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PayeesPayeeId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.payees)[':payeeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>>
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
        ? getGetV3PayeesPayeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payees[':payeeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3PayeesPayeeIdKey() {
  return ['v3', '/v3/payees/:payeeId', 'DELETE'] as const
}

export function useDeleteV3PayeesPayeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.payees)[':payeeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3PayeesPayeeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.payees)[':payeeId']['$delete']> },
      ) => parseResponse(client.v3.payees[':payeeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3PayeesPayeeIdInviteKey() {
  return ['v3', '/v3/payees/:payeeId/invite', 'POST'] as const
}

export function usePostV3PayeesPayeeIdInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['invite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.payees)[':payeeId']['invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3PayeesPayeeIdInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.payees)[':payeeId']['invite']['$post']> },
      ) => parseResponse(client.v3.payees[':payeeId'].invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3PayeesPayeeIdPayeeDetailsUpdateKey() {
  return ['v3', '/v3/payees/:payeeId/payeeDetailsUpdate', 'POST'] as const
}

export function usePostV3PayeesPayeeIdPayeeDetailsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v3.payees)[':payeeId']['payeeDetailsUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3PayeesPayeeIdPayeeDetailsUpdateKey()
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
            (typeof client.v3.payees)[':payeeId']['payeeDetailsUpdate']['$post']
          >
        },
      ) => parseResponse(client.v3.payees[':payeeId'].payeeDetailsUpdate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3PayeesPayeeIdRemoteIdUpdateKey() {
  return ['v3', '/v3/payees/:payeeId/remoteIdUpdate', 'POST'] as const
}

export function usePostV3PayeesPayeeIdRemoteIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payees)[':payeeId']['remoteIdUpdate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.payees)[':payeeId']['remoteIdUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3PayeesPayeeIdRemoteIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.payees)[':payeeId']['remoteIdUpdate']['$post']>
        },
      ) => parseResponse(client.v3.payees[':payeeId'].remoteIdUpdate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3PaymentauditPaymentsKey(
  args: InferRequestType<typeof client.v3.paymentaudit.payments.$get>,
) {
  return ['v3', '/v3/paymentaudit/payments', args] as const
}

export function useGetV3PaymentauditPayments<TError = unknown>(
  args: InferRequestType<typeof client.v3.paymentaudit.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
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
        ? getGetV3PaymentauditPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.paymentaudit.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PaymentauditPayments<TError = unknown>(
  args: InferRequestType<typeof client.v3.paymentaudit.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
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
        ? getGetV3PaymentauditPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.paymentaudit.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3PaymentauditPaymentsPaymentIdKey(
  args: InferRequestType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>,
) {
  return ['v3', '/v3/paymentaudit/payments/:paymentId', args] as const
}

export function useGetV3PaymentauditPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>>
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
        ? getGetV3PaymentauditPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.paymentaudit.payments[':paymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PaymentauditPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>>
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
        ? getGetV3PaymentauditPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.paymentaudit.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.paymentaudit.payments[':paymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3PaymentauditPayoutsKey(
  args: InferRequestType<typeof client.v3.paymentaudit.payouts.$get>,
) {
  return ['v3', '/v3/paymentaudit/payouts', args] as const
}

export function useGetV3PaymentauditPayouts<TError = unknown>(
  args: InferRequestType<typeof client.v3.paymentaudit.payouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
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
        ? getGetV3PaymentauditPayoutsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.paymentaudit.payouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PaymentauditPayouts<TError = unknown>(
  args: InferRequestType<typeof client.v3.paymentaudit.payouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
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
        ? getGetV3PaymentauditPayoutsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.payouts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.paymentaudit.payouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3PaymentauditPayoutsPayoutIdKey(
  args: InferRequestType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>,
) {
  return ['v3', '/v3/paymentaudit/payouts/:payoutId', args] as const
}

export function useGetV3PaymentauditPayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>>
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
        ? getGetV3PaymentauditPayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.paymentaudit.payouts[':payoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PaymentauditPayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>>
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
        ? getGetV3PaymentauditPayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.paymentaudit.payouts)[':payoutId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.paymentaudit.payouts[':payoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3PaymentauditTransactionsKey(
  args: InferRequestType<typeof client.v3.paymentaudit.transactions.$get>,
) {
  return ['v3', '/v3/paymentaudit/transactions', args] as const
}

export function useGetV3PaymentauditTransactions<TError = unknown>(
  args: InferRequestType<typeof client.v3.paymentaudit.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>>
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
        ? getGetV3PaymentauditTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.paymentaudit.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PaymentauditTransactions<TError = unknown>(
  args: InferRequestType<typeof client.v3.paymentaudit.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>>
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
        ? getGetV3PaymentauditTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v3.paymentaudit.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.paymentaudit.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3PayoutsKey() {
  return ['v3', '/v3/payouts', 'POST'] as const
}

export function usePostV3Payouts<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.payouts.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v3.payouts.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3PayoutsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v3.payouts.$post> }) =>
        parseResponse(client.v3.payouts.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3PayoutsPayoutIdKey(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$get']>,
) {
  return ['v3', '/v3/payouts/:payoutId', args] as const
}

export function useGetV3PayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>>
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
        ? getGetV3PayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payouts[':payoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>>
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
        ? getGetV3PayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payouts[':payoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3PayoutsPayoutIdKey() {
  return ['v3', '/v3/payouts/:payoutId', 'POST'] as const
}

export function usePostV3PayoutsPayoutId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$post']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3PayoutsPayoutIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$post']> },
      ) => parseResponse(client.v3.payouts[':payoutId'].$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3PayoutsPayoutIdKey() {
  return ['v3', '/v3/payouts/:payoutId', 'DELETE'] as const
}

export function useDeleteV3PayoutsPayoutId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3PayoutsPayoutIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v3.payouts)[':payoutId']['$delete']> },
      ) => parseResponse(client.v3.payouts[':payoutId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3PayoutsPayoutIdPaymentsKey(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>,
) {
  return ['v3', '/v3/payouts/:payoutId/payments', args] as const
}

export function useGetV3PayoutsPayoutIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>>
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
        ? getGetV3PayoutsPayoutIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payouts[':payoutId'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3PayoutsPayoutIdPayments<TError = unknown>(
  args: InferRequestType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>>
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
        ? getGetV3PayoutsPayoutIdPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['payments']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.payouts[':payoutId'].payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV3PayoutsPayoutIdQuoteKey() {
  return ['v3', '/v3/payouts/:payoutId/quote', 'POST'] as const
}

export function usePostV3PayoutsPayoutIdQuote<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['quote']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['quote']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3PayoutsPayoutIdQuoteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.payouts)[':payoutId']['quote']['$post']> },
      ) => parseResponse(client.v3.payouts[':payoutId'].quote.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3PayoutsPayoutIdScheduleKey() {
  return ['v3', '/v3/payouts/:payoutId/schedule', 'POST'] as const
}

export function usePostV3PayoutsPayoutIdSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['schedule']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3PayoutsPayoutIdScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$post']> },
      ) => parseResponse(client.v3.payouts[':payoutId'].schedule.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteV3PayoutsPayoutIdScheduleKey() {
  return ['v3', '/v3/payouts/:payoutId/schedule', 'DELETE'] as const
}

export function useDeleteV3PayoutsPayoutIdSchedule<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.payouts)[':payoutId']['schedule']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3PayoutsPayoutIdScheduleKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.payouts)[':payoutId']['schedule']['$delete']>
        },
      ) => parseResponse(client.v3.payouts[':payoutId'].schedule.$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV3SourceAccountsKey(
  args: InferRequestType<typeof client.v3.sourceAccounts.$get>,
) {
  return ['v3', '/v3/sourceAccounts', args] as const
}

export function useGetV3SourceAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v3.sourceAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>>
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
        ? getGetV3SourceAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.sourceAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SourceAccounts<TError = unknown>(
  args: InferRequestType<typeof client.v3.sourceAccounts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>>
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
        ? getGetV3SourceAccountsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v3.sourceAccounts.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v3.sourceAccounts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV3SourceAccountsSourceAccountIdKey(
  args: InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>,
) {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId', args] as const
}

export function useGetV3SourceAccountsSourceAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>>
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
        ? getGetV3SourceAccountsSourceAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.sourceAccounts[':sourceAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV3SourceAccountsSourceAccountId<TError = unknown>(
  args: InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>>
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
        ? getGetV3SourceAccountsSourceAccountIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v3.sourceAccounts[':sourceAccountId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV3SourceAccountsSourceAccountIdKey() {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId', 'DELETE'] as const
}

export function useDeleteV3SourceAccountsSourceAccountId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV3SourceAccountsSourceAccountIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['$delete']>
        },
      ) => parseResponse(client.v3.sourceAccounts[':sourceAccountId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV3SourceAccountsSourceAccountIdFundingRequestKey() {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId/fundingRequest', 'POST'] as const
}

export function usePostV3SourceAccountsSourceAccountIdFundingRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v3.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SourceAccountsSourceAccountIdFundingRequestKey()
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
            (typeof client.v3.sourceAccounts)[':sourceAccountId']['fundingRequest']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.sourceAccounts[':sourceAccountId'].fundingRequest.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV3SourceAccountsSourceAccountIdNotificationsKey() {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId/notifications', 'POST'] as const
}

export function usePostV3SourceAccountsSourceAccountIdNotifications<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<
      (typeof client.v3.sourceAccounts)[':sourceAccountId']['notifications']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SourceAccountsSourceAccountIdNotificationsKey()
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
            (typeof client.v3.sourceAccounts)[':sourceAccountId']['notifications']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.sourceAccounts[':sourceAccountId'].notifications.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostV3SourceAccountsSourceAccountIdTransfersKey() {
  return ['v3', '/v3/sourceAccounts/:sourceAccountId/transfers', 'POST'] as const
}

export function usePostV3SourceAccountsSourceAccountIdTransfers<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v3.sourceAccounts)[':sourceAccountId']['transfers']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV3SourceAccountsSourceAccountIdTransfersKey()
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
            (typeof client.v3.sourceAccounts)[':sourceAccountId']['transfers']['$post']
          >
        },
      ) =>
        parseResponse(
          client.v3.sourceAccounts[':sourceAccountId'].transfers.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetV4PayeesKey(args: InferRequestType<typeof client.v4.payees.$get>) {
  return ['v4', '/v4/payees', args] as const
}

export function useGetV4Payees<TError = unknown>(
  args: InferRequestType<typeof client.v4.payees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4PayeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.payees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4Payees<TError = unknown>(
  args: InferRequestType<typeof client.v4.payees.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4PayeesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.payees.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostV4PayeesKey() {
  return ['v4', '/v4/payees', 'POST'] as const
}

export function usePostV4Payees<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.v4.payees.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4PayeesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.v4.payees.$post> }) =>
        parseResponse(client.v4.payees.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4PayeesBatchBatchIdKey(
  args: InferRequestType<(typeof client.v4.payees.batch)[':batchId']['$get']>,
) {
  return ['v4', '/v4/payees/batch/:batchId', args] as const
}

export function useGetV4PayeesBatchBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.payees.batch)[':batchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.payees.batch)[':batchId']['$get']>>
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
        ? getGetV4PayeesBatchBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.payees.batch)[':batchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.payees.batch[':batchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PayeesBatchBatchId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.payees.batch)[':batchId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.payees.batch)[':batchId']['$get']>>
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
        ? getGetV4PayeesBatchBatchIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.payees.batch)[':batchId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.payees.batch[':batchId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PayeesDeltasKey(
  args: InferRequestType<typeof client.v4.payees.deltas.$get>,
) {
  return ['v4', '/v4/payees/deltas', args] as const
}

export function useGetV4PayeesDeltas<TError = unknown>(
  args: InferRequestType<typeof client.v4.payees.deltas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4PayeesDeltasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.payees.deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PayeesDeltas<TError = unknown>(
  args: InferRequestType<typeof client.v4.payees.deltas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetV4PayeesDeltasKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payees.deltas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.payees.deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PayeesPayorsPayorIdInvitationStatusKey(
  args: InferRequestType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>,
) {
  return ['v4', '/v4/payees/payors/:payorId/invitationStatus', args] as const
}

export function useGetV4PayeesPayorsPayorIdInvitationStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>
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
        ? getGetV4PayeesPayorsPayorIdInvitationStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.payees.payors[':payorId'].invitationStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PayeesPayorsPayorIdInvitationStatus<TError = unknown>(
  args: InferRequestType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>
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
        ? getGetV4PayeesPayorsPayorIdInvitationStatusKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<(typeof client.v4.payees.payors)[':payorId']['invitationStatus']['$get']>
            >
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(
          client.v4.payees.payors[':payorId'].invitationStatus.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetV4PayeesPayeeIdKey(
  args: InferRequestType<(typeof client.v4.payees)[':payeeId']['$get']>,
) {
  return ['v4', '/v4/payees/:payeeId', args] as const
}

export function useGetV4PayeesPayeeId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.payees)[':payeeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>>
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
        ? getGetV4PayeesPayeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.payees[':payeeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PayeesPayeeId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.payees)[':payeeId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>>
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
        ? getGetV4PayeesPayeeIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.payees[':payeeId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteV4PayeesPayeeIdKey() {
  return ['v4', '/v4/payees/:payeeId', 'DELETE'] as const
}

export function useDeleteV4PayeesPayeeId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['$delete']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.payees)[':payeeId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteV4PayeesPayeeIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.v4.payees)[':payeeId']['$delete']> },
      ) => parseResponse(client.v4.payees[':payeeId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4PayeesPayeeIdInviteKey() {
  return ['v4', '/v4/payees/:payeeId/invite', 'POST'] as const
}

export function usePostV4PayeesPayeeIdInvite<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['invite']['$post']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.v4.payees)[':payeeId']['invite']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4PayeesPayeeIdInviteKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: { arg: InferRequestType<(typeof client.v4.payees)[':payeeId']['invite']['$post']> },
      ) => parseResponse(client.v4.payees[':payeeId'].invite.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4PayeesPayeeIdPayeeDetailsUpdateKey() {
  return ['v4', '/v4/payees/:payeeId/payeeDetailsUpdate', 'POST'] as const
}

export function usePostV4PayeesPayeeIdPayeeDetailsUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.v4.payees)[':payeeId']['payeeDetailsUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4PayeesPayeeIdPayeeDetailsUpdateKey()
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
            (typeof client.v4.payees)[':payeeId']['payeeDetailsUpdate']['$post']
          >
        },
      ) => parseResponse(client.v4.payees[':payeeId'].payeeDetailsUpdate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostV4PayeesPayeeIdRemoteIdUpdateKey() {
  return ['v4', '/v4/payees/:payeeId/remoteIdUpdate', 'POST'] as const
}

export function usePostV4PayeesPayeeIdRemoteIdUpdate<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    | Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.payees)[':payeeId']['remoteIdUpdate']['$post']>>
          >
        >
      >
    | undefined,
    TError,
    Key,
    InferRequestType<(typeof client.v4.payees)[':payeeId']['remoteIdUpdate']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostV4PayeesPayeeIdRemoteIdUpdateKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.v4.payees)[':payeeId']['remoteIdUpdate']['$post']>
        },
      ) => parseResponse(client.v4.payees[':payeeId'].remoteIdUpdate.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetV4PaymentauditFundingsKey(
  args: InferRequestType<typeof client.v4.paymentaudit.fundings.$get>,
) {
  return ['v4', '/v4/paymentaudit/fundings', args] as const
}

export function useGetV4PaymentauditFundings<TError = unknown>(
  args: InferRequestType<typeof client.v4.paymentaudit.fundings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
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
        ? getGetV4PaymentauditFundingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.paymentaudit.fundings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PaymentauditFundings<TError = unknown>(
  args: InferRequestType<typeof client.v4.paymentaudit.fundings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
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
        ? getGetV4PaymentauditFundingsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.fundings.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.paymentaudit.fundings.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PaymentauditPaymentsKey(
  args: InferRequestType<typeof client.v4.paymentaudit.payments.$get>,
) {
  return ['v4', '/v4/paymentaudit/payments', args] as const
}

export function useGetV4PaymentauditPayments<TError = unknown>(
  args: InferRequestType<typeof client.v4.paymentaudit.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
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
        ? getGetV4PaymentauditPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.paymentaudit.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PaymentauditPayments<TError = unknown>(
  args: InferRequestType<typeof client.v4.paymentaudit.payments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
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
        ? getGetV4PaymentauditPaymentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.paymentaudit.payments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PaymentauditPaymentsPaymentIdKey(
  args: InferRequestType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>,
) {
  return ['v4', '/v4/paymentaudit/payments/:paymentId', args] as const
}

export function useGetV4PaymentauditPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>>
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
        ? getGetV4PaymentauditPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.paymentaudit.payments[':paymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PaymentauditPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>>
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
        ? getGetV4PaymentauditPaymentsPaymentIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.paymentaudit.payments)[':paymentId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.paymentaudit.payments[':paymentId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PaymentauditPayoutStatisticsKey(
  args: InferRequestType<typeof client.v4.paymentaudit.payoutStatistics.$get>,
) {
  return ['v4', '/v4/paymentaudit/payoutStatistics', args] as const
}

export function useGetV4PaymentauditPayoutStatistics<TError = unknown>(
  args: InferRequestType<typeof client.v4.paymentaudit.payoutStatistics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.paymentaudit.payoutStatistics.$get>>
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
        ? getGetV4PaymentauditPayoutStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.paymentaudit.payoutStatistics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.paymentaudit.payoutStatistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PaymentauditPayoutStatistics<TError = unknown>(
  args: InferRequestType<typeof client.v4.paymentaudit.payoutStatistics.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.paymentaudit.payoutStatistics.$get>>
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
        ? getGetV4PaymentauditPayoutStatisticsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<typeof client.v4.paymentaudit.payoutStatistics.$get>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.paymentaudit.payoutStatistics.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PaymentauditPayoutsKey(
  args: InferRequestType<typeof client.v4.paymentaudit.payouts.$get>,
) {
  return ['v4', '/v4/paymentaudit/payouts', args] as const
}

export function useGetV4PaymentauditPayouts<TError = unknown>(
  args: InferRequestType<typeof client.v4.paymentaudit.payouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
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
        ? getGetV4PaymentauditPayoutsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.paymentaudit.payouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PaymentauditPayouts<TError = unknown>(
  args: InferRequestType<typeof client.v4.paymentaudit.payouts.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
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
        ? getGetV4PaymentauditPayoutsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.payouts.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.paymentaudit.payouts.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PaymentauditPayoutsPayoutIdKey(
  args: InferRequestType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>,
) {
  return ['v4', '/v4/paymentaudit/payouts/:payoutId', args] as const
}

export function useGetV4PaymentauditPayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>>
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
        ? getGetV4PaymentauditPayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.paymentaudit.payouts[':payoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PaymentauditPayoutsPayoutId<TError = unknown>(
  args: InferRequestType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>>
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
        ? getGetV4PaymentauditPayoutsPayoutIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.v4.paymentaudit.payouts)[':payoutId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.v4.paymentaudit.payouts[':payoutId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PaymentauditTransactionsKey(
  args: InferRequestType<typeof client.v4.paymentaudit.transactions.$get>,
) {
  return ['v4', '/v4/paymentaudit/transactions', args] as const
}

export function useGetV4PaymentauditTransactions<TError = unknown>(
  args: InferRequestType<typeof client.v4.paymentaudit.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>>
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
        ? getGetV4PaymentauditTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.paymentaudit.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PaymentauditTransactions<TError = unknown>(
  args: InferRequestType<typeof client.v4.paymentaudit.transactions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>>
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
        ? getGetV4PaymentauditTransactionsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.v4.paymentaudit.transactions.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.paymentaudit.transactions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetV4PaymentsDeltasKey(
  args: InferRequestType<typeof client.v4.payments.deltas.$get>,
) {
  return ['v4', '/v4/payments/deltas', args] as const
}

export function useGetV4PaymentsDeltas<TError = unknown>(
  args: InferRequestType<typeof client.v4.payments.deltas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>>
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
        ? getGetV4PaymentsDeltasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.payments.deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetV4PaymentsDeltas<TError = unknown>(
  args: InferRequestType<typeof client.v4.payments.deltas.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>>
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
        ? getGetV4PaymentsDeltasKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.v4.payments.deltas.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.v4.payments.deltas.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
