import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
import type { ClientRequestOptions, InferRequestType } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from '../client'

export function getPricingKey() {
  return ['pricing'] as const
}

export function getGetPricingConfigKey(args: InferRequestType<typeof client.pricing.config.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/config', keyArgs] as const
}

export function useGetPricingConfig<TError = unknown>(
  args: InferRequestType<typeof client.pricing.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPricingConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPricingConfig<TError = unknown>(
  args: InferRequestType<typeof client.pricing.config.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPricingConfigKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.config.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.config.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPricingMigrationKey(
  args: InferRequestType<typeof client.pricing.migration.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/migration', keyArgs] as const
}

export function useGetPricingMigration<TError = unknown>(
  args: InferRequestType<typeof client.pricing.migration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>>
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
        ? getGetPricingMigrationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.migration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPricingMigration<TError = unknown>(
  args: InferRequestType<typeof client.pricing.migration.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>>
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
        ? getGetPricingMigrationKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.migration.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.migration.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPricingPipelineCatalogKey(
  args: InferRequestType<typeof client.pricing.pipeline.catalog.$get>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/pipeline/catalog', keyArgs] as const
}

export function useGetPricingPipelineCatalog<TError = unknown>(
  args: InferRequestType<typeof client.pricing.pipeline.catalog.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
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
        ? getGetPricingPipelineCatalogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.pipeline.catalog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPricingPipelineCatalog<TError = unknown>(
  args: InferRequestType<typeof client.pricing.pipeline.catalog.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
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
        ? getGetPricingPipelineCatalogKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.pricing.pipeline.catalog.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.pipeline.catalog.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPricingPipelineCatalogPriceTableIdKey(
  args: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/pipeline/catalog/:priceTableId', keyArgs] as const
}

export function useGetPricingPipelineCatalogPriceTableId<TError = unknown>(
  args: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>>
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
        ? getGetPricingPipelineCatalogPriceTableIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pricing.pipeline.catalog[':priceTableId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPricingPipelineCatalogPriceTableId<TError = unknown>(
  args: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>>
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
        ? getGetPricingPipelineCatalogPriceTableIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () =>
        parseResponse(client.pricing.pipeline.catalog[':priceTableId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPricingPipelineCatalogPriceTableIdKey() {
  return ['pricing', '/pricing/pipeline/catalog/:priceTableId', 'PUT'] as const
}

export function usePutPricingPipelineCatalogPriceTableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$put']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPricingPipelineCatalogPriceTableIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        {
          arg,
        }: {
          arg: InferRequestType<(typeof client.pricing.pipeline.catalog)[':priceTableId']['$put']>
        },
      ) => parseResponse(client.pricing.pipeline.catalog[':priceTableId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPricingPricesItemIdKey(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/prices/:itemId', keyArgs] as const
}

export function useGetPricingPricesItemId<TError = unknown>(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>
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
        ? getGetPricingPricesItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.prices[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPricingPricesItemId<TError = unknown>(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>
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
        ? getGetPricingPricesItemIdKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.prices[':itemId'].$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutPricingPricesItemIdKey() {
  return ['pricing', '/pricing/prices/:itemId', 'PUT'] as const
}

export function usePutPricingPricesItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$put']>>>
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pricing.prices)[':itemId']['$put']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutPricingPricesItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pricing.prices)[':itemId']['$put']> },
      ) => parseResponse(client.pricing.prices[':itemId'].$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getDeletePricingPricesItemIdKey() {
  return ['pricing', '/pricing/prices/:itemId', 'DELETE'] as const
}

export function useDeletePricingPricesItemId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<
        typeof parseResponse<
          Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['$delete']>>
        >
      >
    >,
    TError,
    Key,
    InferRequestType<(typeof client.pricing.prices)[':itemId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePricingPricesItemIdKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (
        _: Key,
        { arg }: { arg: InferRequestType<(typeof client.pricing.prices)[':itemId']['$delete']> },
      ) => parseResponse(client.pricing.prices[':itemId'].$delete(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetPricingPricesItemIdComputedPriceTableIdKey(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/prices/:itemId/computed/:priceTableId', keyArgs] as const
}

export function useGetPricingPricesItemIdComputedPriceTableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPricingPricesItemIdComputedPriceTableIdKey(args)
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
                (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
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
          client.pricing.prices[':itemId'].computed[':priceTableId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPricingPricesItemIdComputedPriceTableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPricingPricesItemIdComputedPriceTableIdKey(args)
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
                (typeof client.pricing.prices)[':itemId']['computed'][':priceTableId']['$get']
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
          client.pricing.prices[':itemId'].computed[':priceTableId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getGetPricingPricesItemIdFixedKey(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/prices/:itemId/fixed', keyArgs] as const
}

export function useGetPricingPricesItemIdFixed<TError = unknown>(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>>
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
        ? getGetPricingPricesItemIdFixedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.prices[':itemId'].fixed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPricingPricesItemIdFixed<TError = unknown>(
  args: InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>>
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
        ? getGetPricingPricesItemIdFixedKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<
            Awaited<ReturnType<(typeof client.pricing.prices)[':itemId']['fixed']['$get']>>
          >
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.prices[':itemId'].fixed.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetPricingPricesItemIdFixedPriceTableIdKey(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
  >,
) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/prices/:itemId/fixed/:priceTableId', keyArgs] as const
}

export function useGetPricingPricesItemIdFixedPriceTableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPricingPricesItemIdFixedPriceTableIdKey(args)
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
                (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
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
          client.pricing.prices[':itemId'].fixed[':priceTableId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPricingPricesItemIdFixedPriceTableId<TError = unknown>(
  args: InferRequestType<
    (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
  >,
  options?: {
    swr?: SWRConfiguration<
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
        ? getGetPricingPricesItemIdFixedPriceTableIdKey(args)
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
                (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$get']
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
          client.pricing.prices[':itemId'].fixed[':priceTableId'].$get(args, clientOptions),
        ),
      restSwrOptions,
    ),
  }
}

export function getPostPricingPricesItemIdFixedPriceTableIdKey() {
  return ['pricing', '/pricing/prices/:itemId/fixed/:priceTableId', 'POST'] as const
}

export function usePostPricingPricesItemIdFixedPriceTableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$post']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostPricingPricesItemIdFixedPriceTableIdKey()
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
            (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$post']
          >
        },
      ) =>
        parseResponse(
          client.pricing.prices[':itemId'].fixed[':priceTableId'].$post(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getDeletePricingPricesItemIdFixedPriceTableIdKey() {
  return ['pricing', '/pricing/prices/:itemId/fixed/:priceTableId', 'DELETE'] as const
}

export function useDeletePricingPricesItemIdFixedPriceTableId<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
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
    Key,
    InferRequestType<(typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$delete']>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getDeletePricingPricesItemIdFixedPriceTableIdKey()
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
            (typeof client.pricing.prices)[':itemId']['fixed'][':priceTableId']['$delete']
          >
        },
      ) =>
        parseResponse(
          client.pricing.prices[':itemId'].fixed[':priceTableId'].$delete(arg, clientOptions),
        ),
      restMutationOptions,
    ),
  }
}

export function getGetPricingTablesKey(args: InferRequestType<typeof client.pricing.tables.$get>) {
  const { header: _, ...keyArgs } = args
  return ['pricing', '/pricing/tables', keyArgs] as const
}

export function useGetPricingTables<TError = unknown>(
  args: InferRequestType<typeof client.pricing.tables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPricingTablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.tables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetPricingTables<TError = unknown>(
  args: InferRequestType<typeof client.pricing.tables.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetPricingTablesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.pricing.tables.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.pricing.tables.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
