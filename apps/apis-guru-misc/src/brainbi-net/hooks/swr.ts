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

export function getGetApiAnalyzePricingKey(
  args: InferRequestType<typeof client.api.analyze.pricing.$get>,
) {
  return ['api', '/api/analyze/pricing', args] as const
}

export function useGetApiAnalyzePricing<TError = unknown>(
  args: InferRequestType<typeof client.api.analyze.pricing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>
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
        ? getGetApiAnalyzePricingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.analyze.pricing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiAnalyzePricing<TError = unknown>(
  args: InferRequestType<typeof client.api.analyze.pricing.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>
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
        ? getGetApiAnalyzePricingKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.analyze.pricing.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.analyze.pricing.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiCustomersKey(args: InferRequestType<typeof client.api.customers.$get>) {
  return ['api', '/api/customers', args] as const
}

export function useGetApiCustomers<TError = unknown>(
  args: InferRequestType<typeof client.api.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiCustomers<TError = unknown>(
  args: InferRequestType<typeof client.api.customers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiCustomersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.customers.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.customers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostApiLoginKey() {
  return ['api', '/api/login', 'POST'] as const
}

export function usePostApiLogin<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.login.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.login.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLoginKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.login.$post> }) =>
        parseResponse(client.api.login.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiLogoutKey() {
  return ['api', '/api/logout', 'POST'] as const
}

export function usePostApiLogout<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.logout.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.api.logout.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiLogoutKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.logout.$post> }) =>
        parseResponse(client.api.logout.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiOrdersKey(args: InferRequestType<typeof client.api.orders.$get>) {
  return ['api', '/api/orders', args] as const
}

export function useGetApiOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiOrders<TError = unknown>(
  args: InferRequestType<typeof client.api.orders.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiOrdersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.orders.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.orders.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiOrders1137Key() {
  return ['api', '/api/orders/1137', 'DELETE'] as const
}

export function useDeleteApiOrders1137<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.orders)['1137']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.orders)['1137']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiOrders1137Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.orders)['1137']['$delete']> },
      ) => parseResponse(client.api.orders['1137'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiProductsKey(args: InferRequestType<typeof client.api.products.$get>) {
  return ['api', '/api/products', args] as const
}

export function useGetApiProducts<TError = unknown>(
  args: InferRequestType<typeof client.api.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiProducts<TError = unknown>(
  args: InferRequestType<typeof client.api.products.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiProductsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.products.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.products.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getDeleteApiProducts1137Key() {
  return ['api', '/api/products/1137', 'DELETE'] as const
}

export function useDeleteApiProducts1137<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.api.products)['1137']['$delete']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.api.products)['1137']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeleteApiProducts1137Key()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.api.products)['1137']['$delete']> },
      ) => parseResponse(client.api.products['1137'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiRegisterKey() {
  return ['api', '/api/register', 'POST'] as const
}

export function usePostApiRegister<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.register.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.register.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRegisterKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.api.register.$post> }) =>
        parseResponse(client.api.register.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getPostApiRegisterWoocommerceKey() {
  return ['api', '/api/register_woocommerce', 'POST'] as const
}

export function usePostApiRegisterWoocommerce<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.api.register_woocommerce.$post>>>
      >
    >,
    TError,
    Key,
    InferRequestType<typeof client.api.register_woocommerce.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostApiRegisterWoocommerceKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<typeof client.api.register_woocommerce.$post> },
      ) => parseResponse(client.api.register_woocommerce.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetApiRuleKey(args: InferRequestType<typeof client.api.rule.$get>) {
  return ['api', '/api/rule', args] as const
}

export function useGetApiRule<TError = unknown>(
  args: InferRequestType<typeof client.api.rule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiRuleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.rule.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetApiRule<TError = unknown>(
  args: InferRequestType<typeof client.api.rule.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetApiRuleKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.api.rule.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.api.rule.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetApiRuleRuleData1Key(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>,
) {
  return ['api', '/api/rule/ruleData/1', args] as const
}

export function useGetApiRuleRuleData1<TError = unknown>(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
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
        ? getGetApiRuleRuleData1Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rule.ruleData['1'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRuleRuleData1<TError = unknown>(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
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
        ? getGetApiRuleRuleData1Key(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['$get']>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rule.ruleData['1'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiRuleRuleData1LatestKey(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>,
) {
  return ['api', '/api/rule/ruleData/1/latest', args] as const
}

export function useGetApiRuleRuleData1Latest<TError = unknown>(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>>
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
        ? getGetApiRuleRuleData1LatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rule.ruleData['1'].latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiRuleRuleData1Latest<TError = unknown>(
  args: InferRequestType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>>
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
        ? getGetApiRuleRuleData1LatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.api.rule.ruleData)['1']['latest']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.rule.ruleData['1'].latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetApiSeoRankingLatestKey(
  args: InferRequestType<typeof client.api.seo.ranking.latest.$get>,
) {
  return ['api', '/api/seo/ranking/latest', args] as const
}

export function useGetApiSeoRankingLatest<TError = unknown>(
  args: InferRequestType<typeof client.api.seo.ranking.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>
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
        ? getGetApiSeoRankingLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.seo.ranking.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetApiSeoRankingLatest<TError = unknown>(
  args: InferRequestType<typeof client.api.seo.ranking.latest.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>
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
        ? getGetApiSeoRankingLatestKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.api.seo.ranking.latest.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.api.seo.ranking.latest.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
