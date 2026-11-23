import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiPubTransactionsTransactionIdPaymentsKey() {
  return ['api', '/api/pub/transactions/:transactionId/payments', 'POST'] as const
}

export function usePostApiPubTransactionsTransactionIdPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.pub.transactions)[':transactionId']['payments']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pub.transactions)[':transactionId']['payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPubTransactionsTransactionIdPaymentsKey()
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
            (typeof client.api.pub.transactions)[':transactionId']['payments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.pub.transactions[':transactionId'].payments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPvtAffiliationsKey(
  args: InferRequestType<typeof client.api.pvt.affiliations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/affiliations', keyArgs] as const
}

export function useGetApiPvtAffiliations<TError = unknown>(
  args: InferRequestType<typeof client.api.pvt.affiliations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>
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
        ? getGetApiPvtAffiliationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pvt.affiliations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPvtAffiliations<TError = unknown>(
  args: InferRequestType<typeof client.api.pvt.affiliations.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>
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
        ? getGetApiPvtAffiliationsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pvt.affiliations.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPvtAffiliationsKey() {
  return ['api', '/api/pvt/affiliations', 'POST'] as const
}

export function usePostApiPvtAffiliations<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.pvt.affiliations.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPvtAffiliationsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.pvt.affiliations.$post> },
      ) => parseResponse(client.api.pvt.affiliations.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPvtAffiliationsAffiliationIdKey(
  args: InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/affiliations/:affiliationId', keyArgs] as const
}

export function useGetApiPvtAffiliationsAffiliationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>>
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
        ? getGetApiPvtAffiliationsAffiliationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.pvt.affiliations[':affiliationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPvtAffiliationsAffiliationId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>>
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
        ? getGetApiPvtAffiliationsAffiliationIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.pvt.affiliations[':affiliationId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiPvtAffiliationsAffiliationIdKey() {
  return ['api', '/api/pvt/affiliations/:affiliationId', 'PUT'] as const
}

export function usePutApiPvtAffiliationsAffiliationId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPvtAffiliationsAffiliationIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$put']>
        },
      ) => parseResponse(client.api.pvt.affiliations[':affiliationId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPvtInstallmentsKey(
  args: InferRequestType<typeof client.api.pvt.installments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/installments', keyArgs] as const
}

export function useGetApiPvtInstallments<TError = unknown>(
  args: InferRequestType<typeof client.api.pvt.installments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>
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
        ? getGetApiPvtInstallmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pvt.installments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPvtInstallments<TError = unknown>(
  args: InferRequestType<typeof client.api.pvt.installments.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>
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
        ? getGetApiPvtInstallmentsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pvt.installments.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPvtMerchantsPaymentSystemsKey(
  args: InferRequestType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/merchants/payment-systems', keyArgs] as const
}

export function useGetApiPvtMerchantsPaymentSystems<TError = unknown>(
  args: InferRequestType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>>
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
        ? getGetApiPvtMerchantsPaymentSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.pvt.merchants['payment-systems'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPvtMerchantsPaymentSystems<TError = unknown>(
  args: InferRequestType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>>
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
        ? getGetApiPvtMerchantsPaymentSystemsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.pvt.merchants['payment-systems'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiPvtRulesKey(args: InferRequestType<typeof client.api.pvt.rules.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/rules', keyArgs] as const
}

export function useGetApiPvtRules<TError = unknown>(
  args: InferRequestType<typeof client.api.pvt.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPvtRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pvt.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPvtRules<TError = unknown>(
  args: InferRequestType<typeof client.api.pvt.rules.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiPvtRulesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pvt.rules.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPvtRulesKey() {
  return ['api', '/api/pvt/rules', 'POST'] as const
}

export function usePostApiPvtRules<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.pvt.rules.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPvtRulesKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.pvt.rules.$post> }) =>
        parseResponse(client.api.pvt.rules.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPvtRulesRuleIdKey(
  args: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/rules/:ruleId', keyArgs] as const
}

export function useGetApiPvtRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>
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
        ? getGetApiPvtRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pvt.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPvtRulesRuleId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>
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
        ? getGetApiPvtRulesRuleIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.pvt.rules[':ruleId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutApiPvtRulesRuleIdKey() {
  return ['api', '/api/pvt/rules/:ruleId', 'PUT'] as const
}

export function usePutApiPvtRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutApiPvtRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$put']> },
      ) => parseResponse(client.api.pvt.rules[':ruleId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeleteApiPvtRulesRuleIdKey() {
  return ['api', '/api/pvt/rules/:ruleId', 'DELETE'] as const
}

export function useDeleteApiPvtRulesRuleId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiPvtRulesRuleIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$delete']> },
      ) => parseResponse(client.api.pvt.rules[':ruleId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiPvtTransactionsKey() {
  return ['api', '/api/pvt/transactions', 'POST'] as const
}

export function usePostApiPvtTransactions<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.transactions.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.pvt.transactions.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPvtTransactionsKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.pvt.transactions.$post> },
      ) => parseResponse(client.api.pvt.transactions.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiPvtTransactionsTransactionIdKey(
  args: InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/transactions/:transactionId', keyArgs] as const
}

export function useGetApiPvtTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>>
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
        ? getGetApiPvtTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.pvt.transactions[':transactionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPvtTransactionsTransactionId<TError = unknown>(
  args: InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>>
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
        ? getGetApiPvtTransactionsTransactionIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.api.pvt.transactions[':transactionId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiPvtTransactionsTransactionIdAdditionalDataKey() {
  return ['api', '/api/pvt/transactions/:transactionId/additional-data', 'POST'] as const
}

export function usePostApiPvtTransactionsTransactionIdAdditionalData<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.pvt.transactions)[':transactionId']['additional-data']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['additional-data']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPvtTransactionsTransactionIdAdditionalDataKey()
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
            (typeof client.api.pvt.transactions)[':transactionId']['additional-data']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.pvt.transactions[':transactionId']['additional-data'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiPvtTransactionsTransactionIdAuthorizationRequestKey() {
  return ['api', '/api/pvt/transactions/:transactionId/authorization-request', 'POST'] as const
}

export function usePostApiPvtTransactionsTransactionIdAuthorizationRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.pvt.transactions)[':transactionId']['authorization-request']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['authorization-request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPvtTransactionsTransactionIdAuthorizationRequestKey()
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
            (typeof client.api.pvt.transactions)[':transactionId']['authorization-request']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.pvt.transactions[':transactionId']['authorization-request'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiPvtTransactionsTransactionIdCancellationRequestKey() {
  return ['api', '/api/pvt/transactions/:transactionId/cancellation-request', 'POST'] as const
}

export function usePostApiPvtTransactionsTransactionIdCancellationRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.pvt.transactions)[':transactionId']['cancellation-request']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['cancellation-request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPvtTransactionsTransactionIdCancellationRequestKey()
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
            (typeof client.api.pvt.transactions)[':transactionId']['cancellation-request']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.pvt.transactions[':transactionId']['cancellation-request'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiPvtTransactionsTransactionIdPaymentsKey() {
  return ['api', '/api/pvt/transactions/:transactionId/payments', 'POST'] as const
}

export function usePostApiPvtTransactionsTransactionIdPayments<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['payments']['$post']>
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['payments']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPvtTransactionsTransactionIdPaymentsKey()
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
            (typeof client.api.pvt.transactions)[':transactionId']['payments']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.pvt.transactions[':transactionId'].payments.$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPvtTransactionsTransactionIdPaymentsPaymentIdKey(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/transactions/:transactionId/payments/:paymentId', keyArgs] as const
}

export function useGetApiPvtTransactionsTransactionIdPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
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
        ? getGetApiPvtTransactionsTransactionIdPaymentsPaymentIdKey(args)
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
                (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
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
          client.api.pvt.transactions[':transactionId'].payments[':paymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPvtTransactionsTransactionIdPaymentsPaymentId<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
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
        ? getGetApiPvtTransactionsTransactionIdPaymentsPaymentIdKey(args)
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
                (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
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
          client.api.pvt.transactions[':transactionId'].payments[':paymentId'].$get(
            args,
            clientOptions,
          ),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostApiPvtTransactionsTransactionIdRefundingRequestKey() {
  return ['api', '/api/pvt/transactions/:transactionId/refunding-request', 'POST'] as const
}

export function usePostApiPvtTransactionsTransactionIdRefundingRequest<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.pvt.transactions)[':transactionId']['refunding-request']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['refunding-request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPvtTransactionsTransactionIdRefundingRequestKey()
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
            (typeof client.api.pvt.transactions)[':transactionId']['refunding-request']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.pvt.transactions[':transactionId']['refunding-request'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getPostApiPvtTransactionsTransactionIdSettlementRequestKey() {
  return ['api', '/api/pvt/transactions/:transactionId/settlement-request', 'POST'] as const
}

export function usePostApiPvtTransactionsTransactionIdSettlementRequest<
  TError = unknown,
>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.api.pvt.transactions)[':transactionId']['settlement-request']['$post']
            >
          >
        >
      >
    >,
    TError,
    Key,
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['settlement-request']['$post']
    >
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiPvtTransactionsTransactionIdSettlementRequestKey()
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
            (typeof client.api.pvt.transactions)[':transactionId']['settlement-request']['$post']
          >
        },
      ) =>
        parseResponse(
          client.api.pvt.transactions[':transactionId']['settlement-request'].$post(
            arg,
            clientOptions,
          ),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetApiPvtTransactionsTransactionIdSettlementsKey(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/transactions/:transactionId/settlements', keyArgs] as const
}

export function useGetApiPvtTransactionsTransactionIdSettlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
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
        ? getGetApiPvtTransactionsTransactionIdSettlementsKey(args)
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
                (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
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
          client.api.pvt.transactions[':transactionId'].settlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiPvtTransactionsTransactionIdSettlements<TError = unknown>(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<
              ReturnType<
                (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
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
        ? getGetApiPvtTransactionsTransactionIdSettlementsKey(args)
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
                (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
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
          client.api.pvt.transactions[':transactionId'].settlements.$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}
