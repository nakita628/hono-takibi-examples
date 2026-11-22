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

export function getApiKey() {
  return ['api'] as const
}

export function getApiAnalyzePricingQueryKey(
  args: InferRequestType<typeof client.api.analyze.pricing.$get>,
) {
  return ['api', '/api/analyze/pricing', args] as const
}

export function getApiAnalyzePricingQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.analyze.pricing.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAnalyzePricingQueryKey>
  >({
    queryKey: getApiAnalyzePricingQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.analyze.pricing.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiAnalyzePricing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.analyze.pricing.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiAnalyzePricingQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiAnalyzePricingQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiCustomersQueryKey(args: InferRequestType<typeof client.api.customers.$get>) {
  return ['api', '/api/customers', args] as const
}

export function getApiCustomersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.customers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomersQueryKey>
  >({
    queryKey: getApiCustomersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.customers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.customers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiCustomersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiCustomersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getPostApiLoginMutationKey() {
  return ['api', '/api/login', 'POST'] as const
}

export function getPostApiLoginMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.login.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.login.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLoginMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.login.$post>) {
      return parseResponse(client.api.login.$post(args, options))
    },
  })
}

export function createPostApiLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.login.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.login.$post>,
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
    const mutationDefaults = getPostApiLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiLogoutMutationKey() {
  return ['api', '/api/logout', 'POST'] as const
}

export function getPostApiLogoutMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>>,
    TError,
    InferRequestType<typeof client.api.logout.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiLogoutMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.logout.$post>) {
      return parseResponse(client.api.logout.$post(args, options))
    },
  })
}

export function createPostApiLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.logout.$post>,
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
    const mutationDefaults = getPostApiLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiOrdersQueryKey(args: InferRequestType<typeof client.api.orders.$get>) {
  return ['api', '/api/orders', args] as const
}

export function getApiOrdersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.orders.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiOrdersQueryKey>
  >({
    queryKey: getApiOrdersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.orders.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.orders.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiOrdersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiOrdersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiOrders1137MutationKey() {
  return ['api', '/api/orders/1137', 'DELETE'] as const
}

export function getDeleteApiOrders1137MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)['1137']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.orders)['1137']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiOrders1137MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.orders)['1137']['$delete']>) {
      return parseResponse(client.api.orders['1137'].$delete(args, options))
    },
  })
}

export function createDeleteApiOrders1137<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)['1137']['$delete']>>>
          >
        >,
        TError,
        InferRequestType<(typeof client.api.orders)['1137']['$delete']>,
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
    const mutationDefaults = getDeleteApiOrders1137MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiProductsQueryKey(args: InferRequestType<typeof client.api.products.$get>) {
  return ['api', '/api/products', args] as const
}

export function getApiProductsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.products.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiProductsQueryKey>
  >({
    queryKey: getApiProductsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.products.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.products.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getApiProductsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiProductsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getDeleteApiProducts1137MutationKey() {
  return ['api', '/api/products/1137', 'DELETE'] as const
}

export function getDeleteApiProducts1137MutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.products)['1137']['$delete']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.api.products)['1137']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeleteApiProducts1137MutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.api.products)['1137']['$delete']>) {
      return parseResponse(client.api.products['1137'].$delete(args, options))
    },
  })
}

export function createDeleteApiProducts1137<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.products)['1137']['$delete']>>
            >
          >
        >,
        TError,
        InferRequestType<(typeof client.api.products)['1137']['$delete']>,
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
    const mutationDefaults = getDeleteApiProducts1137MutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiRegisterMutationKey() {
  return ['api', '/api/register', 'POST'] as const
}

export function getPostApiRegisterMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.register.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.api.register.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRegisterMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.register.$post>) {
      return parseResponse(client.api.register.$post(args, options))
    },
  })
}

export function createPostApiRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.register.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.api.register.$post>,
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
    const mutationDefaults = getPostApiRegisterMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getPostApiRegisterWoocommerceMutationKey() {
  return ['api', '/api/register_woocommerce', 'POST'] as const
}

export function getPostApiRegisterWoocommerceMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.register_woocommerce.$post>>>
      >
    >,
    TError,
    InferRequestType<typeof client.api.register_woocommerce.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostApiRegisterWoocommerceMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.api.register_woocommerce.$post>) {
      return parseResponse(client.api.register_woocommerce.$post(args, options))
    },
  })
}

export function createPostApiRegisterWoocommerce<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.register_woocommerce.$post>>>
          >
        >,
        TError,
        InferRequestType<typeof client.api.register_woocommerce.$post>,
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
    const mutationDefaults = getPostApiRegisterWoocommerceMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, queryClient)
}

export function getApiRuleQueryKey(args: InferRequestType<typeof client.api.rule.$get>) {
  return ['api', '/api/rule', args] as const
}

export function getApiRuleQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.api.rule.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiRuleQueryKey>
  >({
    queryKey: getApiRuleQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rule.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function createApiRule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.rule.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiRuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRuleQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiRuleRuleData1QueryKey(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>,
) {
  return ['api', '/api/rule/ruleData/1', args] as const
}

export function getApiRuleRuleData1QueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRuleRuleData1QueryKey>
  >({
    queryKey: getApiRuleRuleData1QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rule.ruleData['1'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiRuleRuleData1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRuleRuleData1QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiRuleRuleData1QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}

export function getApiRuleRuleData1LatestQueryKey(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>,
) {
  return ['api', '/api/rule/ruleData/1/latest', args] as const
}

export function getApiRuleRuleData1LatestQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRuleRuleData1LatestQueryKey>
  >({
    queryKey: getApiRuleRuleData1LatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.rule.ruleData['1'].latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiRuleRuleData1Latest<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiRuleRuleData1LatestQueryKey>
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
      ...getApiRuleRuleData1LatestQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, queryClient)
}

export function getApiSeoRankingLatestQueryKey(
  args: InferRequestType<typeof client.api.seo.ranking.latest.$get>,
) {
  return ['api', '/api/seo/ranking/latest', args] as const
}

export function getApiSeoRankingLatestQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.seo.ranking.latest.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSeoRankingLatestQueryKey>
  >({
    queryKey: getApiSeoRankingLatestQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.api.seo.ranking.latest.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function createApiSeoRankingLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.api.seo.ranking.latest.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getApiSeoRankingLatestQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: () => QueryClient,
) {
  return createQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getApiSeoRankingLatestQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, queryClient)
}
