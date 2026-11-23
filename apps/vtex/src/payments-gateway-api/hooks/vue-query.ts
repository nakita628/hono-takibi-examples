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

export function getApiKey() {
  return ['api'] as const
}

export function getPostApiPubTransactionsTransactionIdPaymentsMutationKey() {
  return ['api', '/api/pub/transactions/:transactionId/payments', 'POST'] as const
}

export function getPostApiPubTransactionsTransactionIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.pub.transactions)[':transactionId']['payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPubTransactionsTransactionIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.pub.transactions)[':transactionId']['payments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.pub.transactions[':transactionId'].payments.$post(args, options),
      )
    },
  })
}

export function usePostApiPubTransactionsTransactionIdPayments<
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
                    (typeof client.api.pub.transactions)[':transactionId']['payments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.pub.transactions)[':transactionId']['payments']['$post']
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
  const mutationDefaults = getPostApiPubTransactionsTransactionIdPaymentsMutationOptions<
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

export function getApiPvtAffiliationsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.pvt.affiliations.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/pvt/affiliations', keyArgs] as const
}

export function getApiPvtAffiliationsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.pvt.affiliations.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPvtAffiliationsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pvt.affiliations.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPvtAffiliations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.pvt.affiliations.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>
            >
          >,
          ReturnType<typeof getApiPvtAffiliationsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtAffiliationsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPvtAffiliationsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pvt.affiliations.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPvtAffiliationsMutationKey() {
  return ['api', '/api/pvt/affiliations', 'POST'] as const
}

export function getPostApiPvtAffiliationsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.pvt.affiliations.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPvtAffiliationsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pvt.affiliations.$post>) {
      return parseResponse(client.api.pvt.affiliations.$post(args, options))
    },
  })
}

export function usePostApiPvtAffiliations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.pvt.affiliations.$post>,
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
  const mutationDefaults = getPostApiPvtAffiliationsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPvtAffiliationsAffiliationIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/pvt/affiliations/:affiliationId', keyArgs] as const
}

export function getApiPvtAffiliationsAffiliationIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPvtAffiliationsAffiliationIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pvt.affiliations[':affiliationId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPvtAffiliationsAffiliationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPvtAffiliationsAffiliationIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtAffiliationsAffiliationIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPvtAffiliationsAffiliationIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pvt.affiliations[':affiliationId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiPvtAffiliationsAffiliationIdMutationKey() {
  return ['api', '/api/pvt/affiliations/:affiliationId', 'PUT'] as const
}

export function getPutApiPvtAffiliationsAffiliationIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPvtAffiliationsAffiliationIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$put']>,
    ) {
      return parseResponse(client.api.pvt.affiliations[':affiliationId'].$put(args, options))
    },
  })
}

export function usePutApiPvtAffiliationsAffiliationId<
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
                Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$put']>,
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
  const mutationDefaults = getPutApiPvtAffiliationsAffiliationIdMutationOptions<
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

export function getApiPvtInstallmentsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.pvt.installments.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/pvt/installments', keyArgs] as const
}

export function getApiPvtInstallmentsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.pvt.installments.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPvtInstallmentsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pvt.installments.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPvtInstallments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.pvt.installments.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>
            >
          >,
          ReturnType<typeof getApiPvtInstallmentsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtInstallmentsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPvtInstallmentsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pvt.installments.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPvtMerchantsPaymentSystemsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/pvt/merchants/payment-systems', keyArgs] as const
}

export function getApiPvtMerchantsPaymentSystemsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPvtMerchantsPaymentSystemsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pvt.merchants['payment-systems'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPvtMerchantsPaymentSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPvtMerchantsPaymentSystemsQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtMerchantsPaymentSystemsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPvtMerchantsPaymentSystemsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pvt.merchants['payment-systems'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiPvtRulesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.pvt.rules.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/pvt/rules', keyArgs] as const
}

export function getApiPvtRulesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.pvt.rules.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPvtRulesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pvt.rules.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPvtRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.pvt.rules.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
          >,
          ReturnType<typeof getApiPvtRulesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtRulesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPvtRulesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pvt.rules.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPvtRulesMutationKey() {
  return ['api', '/api/pvt/rules', 'POST'] as const
}

export function getPostApiPvtRulesMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.pvt.rules.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPvtRulesMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pvt.rules.$post>) {
      return parseResponse(client.api.pvt.rules.$post(args, options))
    },
  })
}

export function usePostApiPvtRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.pvt.rules.$post>,
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
  const mutationDefaults = getPostApiPvtRulesMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getApiPvtRulesRuleIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/pvt/rules/:ruleId', keyArgs] as const
}

export function getApiPvtRulesRuleIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPvtRulesRuleIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pvt.rules[':ruleId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPvtRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPvtRulesRuleIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtRulesRuleIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPvtRulesRuleIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pvt.rules[':ruleId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutApiPvtRulesRuleIdMutationKey() {
  return ['api', '/api/pvt/rules/:ruleId', 'PUT'] as const
}

export function getPutApiPvtRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutApiPvtRulesRuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$put']>) {
      return parseResponse(client.api.pvt.rules[':ruleId'].$put(args, options))
    },
  })
}

export function usePutApiPvtRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$put']>,
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
  const mutationDefaults = getPutApiPvtRulesRuleIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeleteApiPvtRulesRuleIdMutationKey() {
  return ['api', '/api/pvt/rules/:ruleId', 'DELETE'] as const
}

export function getDeleteApiPvtRulesRuleIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiPvtRulesRuleIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$delete']>) {
      return parseResponse(client.api.pvt.rules[':ruleId'].$delete(args, options))
    },
  })
}

export function useDeleteApiPvtRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$delete']>,
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
  const mutationDefaults = getDeleteApiPvtRulesRuleIdMutationOptions<TError, TOnMutateResult>(
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

export function getPostApiPvtTransactionsMutationKey() {
  return ['api', '/api/pvt/transactions', 'POST'] as const
}

export function getPostApiPvtTransactionsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.transactions.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.pvt.transactions.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPvtTransactionsMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.pvt.transactions.$post>) {
      return parseResponse(client.api.pvt.transactions.$post(args, options))
    },
  })
}

export function usePostApiPvtTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.transactions.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.api.pvt.transactions.$post>,
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
  const mutationDefaults = getPostApiPvtTransactionsMutationOptions<TError, TOnMutateResult>(
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

export function getApiPvtTransactionsTransactionIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/pvt/transactions/:transactionId', keyArgs] as const
}

export function getApiPvtTransactionsTransactionIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPvtTransactionsTransactionIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPvtTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiPvtTransactionsTransactionIdQueryKey>
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
          Awaited<ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtTransactionsTransactionIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPvtTransactionsTransactionIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pvt.transactions[':transactionId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPvtTransactionsTransactionIdAdditionalDataMutationKey() {
  return ['api', '/api/pvt/transactions/:transactionId/additional-data', 'POST'] as const
}

export function getPostApiPvtTransactionsTransactionIdAdditionalDataMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['additional-data']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiPvtTransactionsTransactionIdAdditionalDataMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.pvt.transactions)[':transactionId']['additional-data']['$post']
      >,
    ) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId']['additional-data'].$post(args, options),
      )
    },
  })
}

export function usePostApiPvtTransactionsTransactionIdAdditionalData<
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
                    (typeof client.api.pvt.transactions)[':transactionId']['additional-data']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.pvt.transactions)[':transactionId']['additional-data']['$post']
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
  const mutationDefaults = getPostApiPvtTransactionsTransactionIdAdditionalDataMutationOptions<
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

export function getPostApiPvtTransactionsTransactionIdAuthorizationRequestMutationKey() {
  return ['api', '/api/pvt/transactions/:transactionId/authorization-request', 'POST'] as const
}

export function getPostApiPvtTransactionsTransactionIdAuthorizationRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['authorization-request']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiPvtTransactionsTransactionIdAuthorizationRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.pvt.transactions)[':transactionId']['authorization-request']['$post']
      >,
    ) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId']['authorization-request'].$post(args, options),
      )
    },
  })
}

export function usePostApiPvtTransactionsTransactionIdAuthorizationRequest<
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
                    (typeof client.api.pvt.transactions)[':transactionId']['authorization-request']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.pvt.transactions)[':transactionId']['authorization-request']['$post']
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
  const mutationDefaults =
    getPostApiPvtTransactionsTransactionIdAuthorizationRequestMutationOptions<
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

export function getPostApiPvtTransactionsTransactionIdCancellationRequestMutationKey() {
  return ['api', '/api/pvt/transactions/:transactionId/cancellation-request', 'POST'] as const
}

export function getPostApiPvtTransactionsTransactionIdCancellationRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['cancellation-request']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiPvtTransactionsTransactionIdCancellationRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.pvt.transactions)[':transactionId']['cancellation-request']['$post']
      >,
    ) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId']['cancellation-request'].$post(args, options),
      )
    },
  })
}

export function usePostApiPvtTransactionsTransactionIdCancellationRequest<
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
                    (typeof client.api.pvt.transactions)[':transactionId']['cancellation-request']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.pvt.transactions)[':transactionId']['cancellation-request']['$post']
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
  const mutationDefaults = getPostApiPvtTransactionsTransactionIdCancellationRequestMutationOptions<
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

export function getPostApiPvtTransactionsTransactionIdPaymentsMutationKey() {
  return ['api', '/api/pvt/transactions/:transactionId/payments', 'POST'] as const
}

export function getPostApiPvtTransactionsTransactionIdPaymentsMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['payments']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostApiPvtTransactionsTransactionIdPaymentsMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.pvt.transactions)[':transactionId']['payments']['$post']
      >,
    ) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId'].payments.$post(args, options),
      )
    },
  })
}

export function usePostApiPvtTransactionsTransactionIdPayments<
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
                    (typeof client.api.pvt.transactions)[':transactionId']['payments']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.pvt.transactions)[':transactionId']['payments']['$post']
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
  const mutationDefaults = getPostApiPvtTransactionsTransactionIdPaymentsMutationOptions<
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

export function getApiPvtTransactionsTransactionIdPaymentsPaymentIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
    >
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/pvt/transactions/:transactionId/payments/:paymentId', keyArgs] as const
}

export function getApiPvtTransactionsTransactionIdPaymentsPaymentIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
    >
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPvtTransactionsTransactionIdPaymentsPaymentIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId'].payments[':paymentId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPvtTransactionsTransactionIdPaymentsPaymentId<
  TData = Awaited<
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
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
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
                    (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
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
                    (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPvtTransactionsTransactionIdPaymentsPaymentIdQueryKey>
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
              (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtTransactionsTransactionIdPaymentsPaymentIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPvtTransactionsTransactionIdPaymentsPaymentIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pvt.transactions[':transactionId'].payments[':paymentId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostApiPvtTransactionsTransactionIdRefundingRequestMutationKey() {
  return ['api', '/api/pvt/transactions/:transactionId/refunding-request', 'POST'] as const
}

export function getPostApiPvtTransactionsTransactionIdRefundingRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['refunding-request']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiPvtTransactionsTransactionIdRefundingRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.pvt.transactions)[':transactionId']['refunding-request']['$post']
      >,
    ) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId']['refunding-request'].$post(args, options),
      )
    },
  })
}

export function usePostApiPvtTransactionsTransactionIdRefundingRequest<
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
                    (typeof client.api.pvt.transactions)[':transactionId']['refunding-request']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.pvt.transactions)[':transactionId']['refunding-request']['$post']
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
  const mutationDefaults = getPostApiPvtTransactionsTransactionIdRefundingRequestMutationOptions<
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

export function getPostApiPvtTransactionsTransactionIdSettlementRequestMutationKey() {
  return ['api', '/api/pvt/transactions/:transactionId/settlement-request', 'POST'] as const
}

export function getPostApiPvtTransactionsTransactionIdSettlementRequestMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
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
    InferRequestType<
      (typeof client.api.pvt.transactions)[':transactionId']['settlement-request']['$post']
    >,
    TOnMutateResult
  >({
    mutationKey: getPostApiPvtTransactionsTransactionIdSettlementRequestMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.api.pvt.transactions)[':transactionId']['settlement-request']['$post']
      >,
    ) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId']['settlement-request'].$post(args, options),
      )
    },
  })
}

export function usePostApiPvtTransactionsTransactionIdSettlementRequest<
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
                    (typeof client.api.pvt.transactions)[':transactionId']['settlement-request']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.api.pvt.transactions)[':transactionId']['settlement-request']['$post']
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
  const mutationDefaults = getPostApiPvtTransactionsTransactionIdSettlementRequestMutationOptions<
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

export function getApiPvtTransactionsTransactionIdSettlementsQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['api', '/api/pvt/transactions/:transactionId/settlements', keyArgs] as const
}

export function getApiPvtTransactionsTransactionIdSettlementsQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiPvtTransactionsTransactionIdSettlementsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId'].settlements.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiPvtTransactionsTransactionIdSettlements<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']>
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
                    (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
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
                    (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getApiPvtTransactionsTransactionIdSettlementsQueryKey>
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
              (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtTransactionsTransactionIdSettlementsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiPvtTransactionsTransactionIdSettlementsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.pvt.transactions[':transactionId'].settlements.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
