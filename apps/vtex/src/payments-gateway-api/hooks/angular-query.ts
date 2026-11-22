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

export function injectPostApiPubTransactionsTransactionIdPayments<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPubTransactionsTransactionIdPaymentsMutationOptions<
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

export function getApiPvtAffiliationsQueryKey(
  args: InferRequestType<typeof client.api.pvt.affiliations.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/affiliations', keyArgs] as const
}

export function getApiPvtAffiliationsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.pvt.affiliations.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtAffiliationsQueryKey>
  >({
    queryKey: getApiPvtAffiliationsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pvt.affiliations.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPvtAffiliations<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.pvt.affiliations.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPvtAffiliationsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPvtAffiliationsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiPvtAffiliations<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.affiliations.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.pvt.affiliations.$post>,
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
    const mutationDefaults = getPostApiPvtAffiliationsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPvtAffiliationsAffiliationIdQueryKey(
  args: InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/affiliations/:affiliationId', keyArgs] as const
}

export function getApiPvtAffiliationsAffiliationIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPvtAffiliationsAffiliationIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pvt.affiliations[':affiliationId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPvtAffiliationsAffiliationId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pvt.affiliations)[':affiliationId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiPvtAffiliationsAffiliationIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPutApiPvtAffiliationsAffiliationId<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiPvtAffiliationsAffiliationIdMutationOptions<
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

export function getApiPvtInstallmentsQueryKey(
  args: InferRequestType<typeof client.api.pvt.installments.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/installments', keyArgs] as const
}

export function getApiPvtInstallmentsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.pvt.installments.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtInstallmentsQueryKey>
  >({
    queryKey: getApiPvtInstallmentsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pvt.installments.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPvtInstallments<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.pvt.installments.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.installments.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPvtInstallmentsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPvtInstallmentsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}

export function getApiPvtMerchantsPaymentSystemsQueryKey(
  args: InferRequestType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/merchants/payment-systems', keyArgs] as const
}

export function getApiPvtMerchantsPaymentSystemsQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPvtMerchantsPaymentSystemsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pvt.merchants['payment-systems'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPvtMerchantsPaymentSystems<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pvt.merchants)['payment-systems']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiPvtMerchantsPaymentSystemsQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
}

export function getApiPvtRulesQueryKey(args: InferRequestType<typeof client.api.pvt.rules.$get>) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/rules', keyArgs] as const
}

export function getApiPvtRulesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.pvt.rules.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtRulesQueryKey>
  >({
    queryKey: getApiPvtRulesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pvt.rules.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function injectApiPvtRules<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.pvt.rules.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiPvtRulesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPvtRulesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostApiPvtRules<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.rules.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.pvt.rules.$post>,
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
    const mutationDefaults = getPostApiPvtRulesMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPvtRulesRuleIdQueryKey(
  args: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/rules/:ruleId', keyArgs] as const
}

export function getApiPvtRulesRuleIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiPvtRulesRuleIdQueryKey>
  >({
    queryKey: getApiPvtRulesRuleIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pvt.rules[':ruleId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPvtRulesRuleId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pvt.rules)[':ruleId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.pvt.rules)[':ruleId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiPvtRulesRuleIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiPvtRulesRuleIdQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutApiPvtRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutApiPvtRulesRuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectDeleteApiPvtRulesRuleId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getDeleteApiPvtRulesRuleIdMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectPostApiPvtTransactions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.pvt.transactions.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.pvt.transactions.$post>,
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
    const mutationDefaults = getPostApiPvtTransactionsMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
}

export function getApiPvtTransactionsTransactionIdQueryKey(
  args: InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/transactions/:transactionId', keyArgs] as const
}

export function getApiPvtTransactionsTransactionIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPvtTransactionsTransactionIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPvtTransactionsTransactionId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.pvt.transactions)[':transactionId']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiPvtTransactionsTransactionIdQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiPvtTransactionsTransactionIdAdditionalData<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPvtTransactionsTransactionIdAdditionalDataMutationOptions<
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

export function injectPostApiPvtTransactionsTransactionIdAuthorizationRequest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiPvtTransactionsTransactionIdAuthorizationRequestMutationOptions<
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

export function injectPostApiPvtTransactionsTransactionIdCancellationRequest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults =
      getPostApiPvtTransactionsTransactionIdCancellationRequestMutationOptions<
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

export function injectPostApiPvtTransactionsTransactionIdPayments<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPvtTransactionsTransactionIdPaymentsMutationOptions<
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

export function getApiPvtTransactionsTransactionIdPaymentsPaymentIdQueryKey(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/transactions/:transactionId/payments/:paymentId', keyArgs] as const
}

export function getApiPvtTransactionsTransactionIdPaymentsPaymentIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPvtTransactionsTransactionIdPaymentsPaymentIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId'].payments[':paymentId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPvtTransactionsTransactionIdPaymentsPaymentId<
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
  args: () => InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['payments'][':paymentId']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiPvtTransactionsTransactionIdPaymentsPaymentIdQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
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

export function injectPostApiPvtTransactionsTransactionIdRefundingRequest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPvtTransactionsTransactionIdRefundingRequestMutationOptions<
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

export function injectPostApiPvtTransactionsTransactionIdSettlementRequest<
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
      'mutationFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostApiPvtTransactionsTransactionIdSettlementRequestMutationOptions<
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

export function getApiPvtTransactionsTransactionIdSettlementsQueryKey(
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['api', '/api/pvt/transactions/:transactionId/settlements', keyArgs] as const
}

export function getApiPvtTransactionsTransactionIdSettlementsQueryOptions<
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
  args: InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getApiPvtTransactionsTransactionIdSettlementsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.pvt.transactions[':transactionId'].settlements.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function injectApiPvtTransactionsTransactionIdSettlements<
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
  args: () => InferRequestType<
    (typeof client.api.pvt.transactions)[':transactionId']['settlements']['$get']
  >,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
      ...getApiPvtTransactionsTransactionIdSettlementsQueryOptions<TData, TError>(
        args(),
        clientOptions,
      ),
      ...query,
    }
  }, injectOptions)
}
