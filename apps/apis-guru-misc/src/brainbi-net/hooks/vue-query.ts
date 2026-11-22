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

export function getApiAnalyzePricingQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.analyze.pricing.$get>>,
) {
  return ['api', '/api/analyze/pricing', toValue(args)] as const
}

export function getApiAnalyzePricingQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.analyze.pricing.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiAnalyzePricingQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.analyze.pricing.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiAnalyzePricing<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.analyze.pricing.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>
            >
          >,
          ReturnType<typeof getApiAnalyzePricingQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiAnalyzePricingQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiAnalyzePricingQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.analyze.pricing.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiCustomersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.customers.$get>>,
) {
  return ['api', '/api/customers', toValue(args)] as const
}

export function getApiCustomersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.customers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiCustomersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.customers.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiCustomers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.customers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
          >,
          ReturnType<typeof getApiCustomersQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getApiCustomersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiCustomersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.customers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.login.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.login.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.logout.$post>,
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

export function getApiOrdersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.$get>>,
) {
  return ['api', '/api/orders', toValue(args)] as const
}

export function getApiOrdersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiOrdersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.orders.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiOrders<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.orders.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>
          >,
          ReturnType<typeof getApiOrdersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiOrdersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiOrdersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.orders.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.orders)['1137']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.api.orders)['1137']['$delete']>,
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

export function getApiProductsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.products.$get>>,
) {
  return ['api', '/api/products', toValue(args)] as const
}

export function getApiProductsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.products.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiProductsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.products.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiProducts<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.products.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
          >,
          ReturnType<typeof getApiProductsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiProductsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiProductsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.products.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
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
      Extract<
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
        { mutationFn?: unknown }
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.register.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.api.register.$post>,
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
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.api.register_woocommerce.$post>>
              >
            >
          >,
          TError,
          InferRequestType<typeof client.api.register_woocommerce.$post>,
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

export function getApiRuleQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rule.$get>>,
) {
  return ['api', '/api/rule', toValue(args)] as const
}

export function getApiRuleQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rule.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRuleQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rule.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useApiRule<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.rule.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>
          >,
          ReturnType<typeof getApiRuleQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getApiRuleQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRuleQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rule.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRuleRuleData1QueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>>,
) {
  return ['api', '/api/rule/ruleData/1', toValue(args)] as const
}

export function getApiRuleRuleData1QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRuleRuleData1QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rule.ruleData['1'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiRuleRuleData1<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiRuleRuleData1QueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRuleRuleData1QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRuleRuleData1QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rule.ruleData['1'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiRuleRuleData1LatestQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>
  >,
) {
  return ['api', '/api/rule/ruleData/1/latest', toValue(args)] as const
}

export function getApiRuleRuleData1LatestQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiRuleRuleData1LatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.rule.ruleData['1'].latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
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
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
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
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>>
              >
            >
          >,
          ReturnType<typeof getApiRuleRuleData1LatestQueryKey>
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
          Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiRuleRuleData1LatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiRuleRuleData1LatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.rule.ruleData['1'].latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getApiSeoRankingLatestQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.seo.ranking.latest.$get>>,
) {
  return ['api', '/api/seo/ranking/latest', toValue(args)] as const
}

export function getApiSeoRankingLatestQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.seo.ranking.latest.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getApiSeoRankingLatestQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.api.seo.ranking.latest.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useApiSeoRankingLatest<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.api.seo.ranking.latest.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>
            >
          >,
          ReturnType<typeof getApiSeoRankingLatestQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getApiSeoRankingLatestQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getApiSeoRankingLatestQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.api.seo.ranking.latest.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
