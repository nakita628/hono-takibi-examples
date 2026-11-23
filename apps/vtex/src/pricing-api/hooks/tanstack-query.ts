import {
  useQuery,
  useSuspenseQuery,
  useMutation,
  queryOptions,
  mutationOptions,
} from '@tanstack/react-query'
import type {
  UseQueryOptions,
  UseSuspenseQueryOptions,
  UseMutationOptions,
  DefaultError,
  QueryClient,
} from '@tanstack/react-query'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPricingKey() {
  return ['pricing'] as const
}

export function getPricingConfigQueryKey(
  args: InferRequestType<typeof client.pricing.config.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/config', keyArgs] as const
}

export function getPricingConfigQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pricing.config.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPricingConfigQueryKey>
  >({
    queryKey: getPricingConfigQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.config.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePricingConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pricing.config.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPricingConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPricingConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePricingConfig<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pricing.config.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPricingConfigQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPricingConfigQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPricingMigrationQueryKey(
  args: InferRequestType<typeof client.pricing.migration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/migration', keyArgs] as const
}

export function getPricingMigrationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pricing.migration.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPricingMigrationQueryKey>
  >({
    queryKey: getPricingMigrationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.migration.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePricingMigration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pricing.migration.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPricingMigrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPricingMigrationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePricingMigration<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pricing.migration.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPricingMigrationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPricingMigrationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getPricingPipelineCatalogQueryKey(
  args: InferRequestType<typeof client.pricing.pipeline.catalog.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/pipeline/catalog', keyArgs] as const
}

export function getPricingPipelineCatalogQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pricing.pipeline.catalog.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricingPipelineCatalogQueryKey>
  >({
    queryKey: getPricingPipelineCatalogQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.pipeline.catalog.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePricingPipelineCatalog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pricing.pipeline.catalog.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPricingPipelineCatalogQueryKey>
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
      ...getPricingPipelineCatalogQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePricingPipelineCatalog<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pricing.pipeline.catalog.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPricingPipelineCatalogQueryKey>
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
      ...getPricingPipelineCatalogQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPricingPipelineCatalogPriceTableIdQueryKey(
  args: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/pipeline/catalog/:priceTableId', keyArgs] as const
}

export function getPricingPipelineCatalogPriceTableIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPricingPipelineCatalogPriceTableIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.pipeline.catalog[':priceTableId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>,
  options?: {
    query?: Omit<
      UseQueryOptions<
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
      ...getPricingPipelineCatalogPriceTableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePricingPipelineCatalogPriceTableId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPricingPipelineCatalogPriceTableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
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
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/prices/:itemId', keyArgs] as const
}

export function getPricingPricesItemIdQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getPricingPricesItemIdQueryKey>
  >({
    queryKey: getPricingPricesItemIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.prices[':itemId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function usePricingPricesItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPricingPricesItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPricingPricesItemIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePricingPricesItemId<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<
              Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>
            >
          >
        >,
        TError,
        TData,
        ReturnType<typeof getPricingPricesItemIdQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPricingPricesItemIdQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/prices/:itemId/computed/:priceTableId', keyArgs] as const
}

export function getPricingPricesItemIdComputedPriceTableIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPricingPricesItemIdComputedPriceTableIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.prices[':itemId'].computed[':priceTableId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPricingPricesItemIdComputedPriceTableIdQueryKey>
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
      ...getPricingPricesItemIdComputedPriceTableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePricingPricesItemIdComputedPriceTableId<
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
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPricingPricesItemIdComputedPriceTableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPricingPricesItemIdFixedQueryKey(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/prices/:itemId/fixed', keyArgs] as const
}

export function getPricingPricesItemIdFixedQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPricingPricesItemIdFixedQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.prices[':itemId'].fixed.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPricingPricesItemIdFixedQueryKey>
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
      ...getPricingPricesItemIdFixedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePricingPricesItemIdFixed<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<
        Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>>
      >
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
      ...getPricingPricesItemIdFixedQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getPricingPricesItemIdFixedPriceTableIdQueryKey(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/prices/:itemId/fixed/:priceTableId', keyArgs] as const
}

export function getPricingPricesItemIdFixedPriceTableIdQueryOptions<
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
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return queryOptions<
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
  >({
    queryKey: getPricingPricesItemIdFixedPriceTableIdQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.prices[':itemId'].fixed[':priceTableId'].$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
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
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
  >,
  options?: {
    query?: Omit<
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
        ReturnType<typeof getPricingPricesItemIdFixedPriceTableIdQueryKey>
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
      ...getPricingPricesItemIdFixedPriceTableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspensePricingPricesItemIdFixedPriceTableId<
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
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
  >,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
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
        ReturnType<typeof getPricingPricesItemIdFixedPriceTableIdQueryKey>
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
      ...getPricingPricesItemIdFixedPriceTableIdQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
  args: InferRequestType<typeof client.pricing.tables.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/tables', keyArgs] as const
}

export function getPricingTablesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.pricing.tables.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getPricingTablesQueryKey>
  >({
    queryKey: getPricingTablesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.pricing.tables.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function usePricingTables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pricing.tables.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPricingTablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getPricingTablesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspensePricingTables<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.pricing.tables.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getPricingTablesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getPricingTablesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
