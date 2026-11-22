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

export function getPricingKey() {
  return ['pricing'] as const
}

export function getPricingConfigQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.config.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pricing', '/pricing/config', keyArgs] as const
}

export function getPricingConfigQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.config.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricingConfigQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pricing.config.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePricingConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.config.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
          >,
          ReturnType<typeof getPricingConfigQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPricingConfigQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricingConfigQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pricing.config.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPricingMigrationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.migration.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pricing', '/pricing/migration', keyArgs] as const
}

export function getPricingMigrationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.migration.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricingMigrationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pricing.migration.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePricingMigration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.migration.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>
            >
          >,
          ReturnType<typeof getPricingMigrationQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPricingMigrationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricingMigrationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pricing.migration.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPricingPipelineCatalogQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.pipeline.catalog.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pricing', '/pricing/pipeline/catalog', keyArgs] as const
}

export function getPricingPipelineCatalogQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.pipeline.catalog.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricingPipelineCatalogQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pricing.pipeline.catalog.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePricingPipelineCatalog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.pipeline.catalog.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
            >
          >,
          ReturnType<typeof getPricingPipelineCatalogQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricingPipelineCatalogQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricingPipelineCatalogQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pricing.pipeline.catalog.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPricingPipelineCatalogPriceTableIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pricing', '/pricing/pipeline/catalog/:priceTableId', keyArgs] as const
}

export function getPricingPipelineCatalogPriceTableIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricingPipelineCatalogPriceTableIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pricing.pipeline.catalog[':priceTableId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePricingPipelineCatalogPriceTableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<
                  ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>
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
                  ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>
                >
              >
            >
          >,
          ReturnType<typeof getPricingPipelineCatalogPriceTableIdQueryKey>
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
          Awaited<ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricingPipelineCatalogPriceTableIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricingPipelineCatalogPriceTableIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pricing.pipeline.catalog[':priceTableId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPricingPipelineCatalogPriceTableIdMutationKey() {
  return ['pricing', '/pricing/pipeline/catalog/:priceTableId', 'PUT'] as const
}

export function getPutPricingPipelineCatalogPriceTableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$put']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPricingPipelineCatalogPriceTableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$put']>,
    ) {
      return parseResponse(client.pricing.pipeline.catalog[':priceTableId'].$put(args, options))
    },
  })
}

export function usePutPricingPipelineCatalogPriceTableId<
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
                  ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$put']>
                >
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$put']>,
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
  const mutationDefaults = getPutPricingPipelineCatalogPriceTableIdMutationOptions<
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

export function getPricingPricesItemIdQueryKey(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pricing', '/pricing/prices/:itemId', keyArgs] as const
}

export function getPricingPricesItemIdQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricingPricesItemIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pricing.prices[':itemId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePricingPricesItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPricingPricesItemIdQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricingPricesItemIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricingPricesItemIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pricing.prices[':itemId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutPricingPricesItemIdMutationKey() {
  return ['pricing', '/pricing/prices/:itemId', 'PUT'] as const
}

export function getPutPricingPricesItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$put']>>>
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing.prices)[':itemId']['$put']>,
    TOnMutateResult
  >({
    mutationKey: getPutPricingPricesItemIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$put']>) {
      return parseResponse(client.pricing.prices[':itemId'].$put(args, options))
    },
  })
}

export function usePutPricingPricesItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$put']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pricing.prices)[':itemId']['$put']>,
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
  const mutationDefaults = getPutPricingPricesItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getDeletePricingPricesItemIdMutationKey() {
  return ['pricing', '/pricing/prices/:itemId', 'DELETE'] as const
}

export function getDeletePricingPricesItemIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$delete']>>
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing.prices)[':itemId']['$delete']>,
    TOnMutateResult
  >({
    mutationKey: getDeletePricingPricesItemIdMutationKey(),
    async mutationFn(args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$delete']>) {
      return parseResponse(client.pricing.prices[':itemId'].$delete(args, options))
    },
  })
}

export function useDeletePricingPricesItemId<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$delete']>>
              >
            >
          >,
          TError,
          InferRequestType<(typeof client.pricing.prices)[':itemId']['$delete']>,
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
  const mutationDefaults = getDeletePricingPricesItemIdMutationOptions<TError, TOnMutateResult>(
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

export function getPricingPricesItemIdComputedPriceTableIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pricing', '/pricing/prices/:itemId/computed/:priceTableId', keyArgs] as const
}

export function getPricingPricesItemIdComputedPriceTableIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricingPricesItemIdComputedPriceTableIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pricing.prices[':itemId'].computed[':priceTableId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePricingPricesItemIdComputedPriceTableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']>
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
                    (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
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
                    (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPricingPricesItemIdComputedPriceTableIdQueryKey>
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
              (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
            >
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricingPricesItemIdComputedPriceTableIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricingPricesItemIdComputedPriceTableIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pricing.prices[':itemId'].computed[':priceTableId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPricingPricesItemIdFixedQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pricing', '/pricing/prices/:itemId/fixed', keyArgs] as const
}

export function getPricingPricesItemIdFixedQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricingPricesItemIdFixedQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pricing.prices[':itemId'].fixed.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePricingPricesItemIdFixed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>
  >,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>>
              >
            >
          >,
          ReturnType<typeof getPricingPricesItemIdFixedQueryKey>
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
          Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>>
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricingPricesItemIdFixedQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricingPricesItemIdFixedQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pricing.prices[':itemId'].fixed.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPricingPricesItemIdFixedPriceTableIdQueryKey(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']>
  >,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pricing', '/pricing/prices/:itemId/fixed/:priceTableId', keyArgs] as const
}

export function getPricingPricesItemIdFixedPriceTableIdQueryOptions(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']>
  >,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricingPricesItemIdFixedPriceTableIdQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pricing.prices[':itemId'].fixed[':priceTableId'].$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePricingPricesItemIdFixedPriceTableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<
          ReturnType<(typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']>
        >
      >
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<
    InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']>
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
                    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
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
                    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
                  >
                >
              >
            >
          >,
          ReturnType<typeof getPricingPricesItemIdFixedPriceTableIdQueryKey>
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
            ReturnType<(typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']>
          >
        >
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricingPricesItemIdFixedPriceTableIdQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricingPricesItemIdFixedPriceTableIdQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pricing.prices[':itemId'].fixed[':priceTableId'].$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostPricingPricesItemIdFixedPriceTableIdMutationKey() {
  return ['pricing', '/pricing/prices/:itemId/fixed/:priceTableId', 'POST'] as const
}

export function getPostPricingPricesItemIdFixedPriceTableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<(typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$post']>
          >
        >
      >
    >,
    TError,
    InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$post']>,
    TOnMutateResult
  >({
    mutationKey: getPostPricingPricesItemIdFixedPriceTableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$post']
      >,
    ) {
      return parseResponse(
        client.pricing.prices[':itemId'].fixed[':priceTableId'].$post(args, options),
      )
    },
  })
}

export function usePostPricingPricesItemIdFixedPriceTableId<
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
                    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$post']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$post']
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
  const mutationDefaults = getPostPricingPricesItemIdFixedPriceTableIdMutationOptions<
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

export function getDeletePricingPricesItemIdFixedPriceTableIdMutationKey() {
  return ['pricing', '/pricing/prices/:itemId/fixed/:priceTableId', 'DELETE'] as const
}

export function getDeletePricingPricesItemIdFixedPriceTableIdMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<
            ReturnType<
              (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$delete']
            >
          >
        >
      >
    >,
    TError,
    InferRequestType<
      (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$delete']
    >,
    TOnMutateResult
  >({
    mutationKey: getDeletePricingPricesItemIdFixedPriceTableIdMutationKey(),
    async mutationFn(
      args: InferRequestType<
        (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$delete']
      >,
    ) {
      return parseResponse(
        client.pricing.prices[':itemId'].fixed[':priceTableId'].$delete(args, options),
      )
    },
  })
}

export function useDeletePricingPricesItemIdFixedPriceTableId<
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
                    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$delete']
                  >
                >
              >
            >
          >,
          TError,
          InferRequestType<
            (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$delete']
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
  const mutationDefaults = getDeletePricingPricesItemIdFixedPriceTableIdMutationOptions<
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

export function getPricingTablesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.tables.$get>>,
) {
  const { header: _, ...keyArgs } = toValue(args)
  return ['pricing', '/pricing/tables', keyArgs] as const
}

export function getPricingTablesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.tables.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getPricingTablesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.pricing.tables.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function usePricingTables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.pricing.tables.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
          >,
          ReturnType<typeof getPricingTablesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPricingTablesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getPricingTablesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.pricing.tables.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
