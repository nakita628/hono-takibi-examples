import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/preact-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/preact-query'
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

export function useApiAnalyzePricing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.analyze.pricing.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiAnalyzePricingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiAnalyzePricing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.analyze.pricing.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiAnalyzePricingQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.customers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiCustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.customers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiCustomersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function usePostApiLogin<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiLoginMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiLogout<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiLogoutMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function useApiOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.orders.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.orders.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiOrdersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDeleteApiOrders1137<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiOrders1137MutationOptions<TError, TOnMutateResult>(
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

export function useApiProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.products.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.products.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiProductsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useDeleteApiProducts1137<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getDeleteApiProducts1137MutationOptions<TError, TOnMutateResult>(
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

export function usePostApiRegister<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRegisterMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
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

export function usePostApiRegisterWoocommerce<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      UseMutationOptions<
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
  queryClient?: QueryClient,
) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const mutationDefaults = getPostApiRegisterWoocommerceMutationOptions<TError, TOnMutateResult>(
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

export function useApiRule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rule.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiRuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.rule.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getApiRuleQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRuleQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiRuleRuleData1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiRuleRuleData1QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiRuleRuleData1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiRuleRuleData1QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
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

export function useApiRuleRuleData1Latest<
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
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    {
      ...getApiRuleRuleData1LatestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseApiRuleRuleData1Latest<
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
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    {
      ...getApiRuleRuleData1LatestQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
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

export function useApiSeoRankingLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.seo.ranking.latest.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getApiSeoRankingLatestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseApiSeoRankingLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.api.seo.ranking.latest.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getApiSeoRankingLatestQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
