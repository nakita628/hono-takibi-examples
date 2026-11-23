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

export function getDaysSupplyKey() {
  return ['daysSupply'] as const
}

export function getDaysToSellKey() {
  return ['daysToSell'] as const
}

export function getGetBrandsKey() {
  return ['getBrands'] as const
}

export function getGetDealersKey() {
  return ['getDealers'] as const
}

export function getGetDealersByIDKey() {
  return ['getDealersByID'] as const
}

export function getGetDealersByRegionKey() {
  return ['getDealersByRegion'] as const
}

export function getGetInactiveModelsKey() {
  return ['getInactiveModels'] as const
}

export function getGetModelsKey() {
  return ['getModels'] as const
}

export function getGetRegionBrandMarketShareKey() {
  return ['getRegionBrandMarketShare'] as const
}

export function getGetRegionMarketShareKey() {
  return ['getRegionMarketShare'] as const
}

export function getGetRegionsKey() {
  return ['getRegions'] as const
}

export function getGetSubUserKeysKey() {
  return ['getSubUserKeys'] as const
}

export function getGetTokenKey() {
  return ['getToken'] as const
}

export function getListPriceKey() {
  return ['listPrice'] as const
}

export function getListingsKey() {
  return ['listings'] as const
}

export function getListings2Key() {
  return ['listings2'] as const
}

export function getListingsByDateKey() {
  return ['listingsByDate'] as const
}

export function getListingsByRegionKey() {
  return ['listingsByRegion'] as const
}

export function getListingsByRegionAndDateKey() {
  return ['listingsByRegionAndDate'] as const
}

export function getListingsByZipCodeKey() {
  return ['listingsByZipCode'] as const
}

export function getListingsByZipCodeAndDateKey() {
  return ['listingsByZipCodeAndDate'] as const
}

export function getMakeSubUserKeyKey() {
  return ['makeSubUserKey'] as const
}

export function getModelYearDistKey() {
  return ['modelYearDist'] as const
}

export function getRegionDailySalesKey() {
  return ['regionDailySales'] as const
}

export function getRegionSalesKey() {
  return ['regionSales'] as const
}

export function getRevokeSubUserKeyKey() {
  return ['revokeSubUserKey'] as const
}

export function getSalePriceKey() {
  return ['salePrice'] as const
}

export function getSalePriceHistogramKey() {
  return ['salePriceHistogram'] as const
}

export function getSimilarSalePriceKey() {
  return ['similarSalePrice'] as const
}

export function getTopModelsKey() {
  return ['topModels'] as const
}

export function getValuationKey() {
  return ['valuation'] as const
}

export function getVehicleHistoryKey() {
  return ['vehicleHistory'] as const
}

export function getVehicleSeenKey() {
  return ['vehicleSeen'] as const
}

export function getVinDecodeKey() {
  return ['vinDecode'] as const
}

export function getDaysSupplyQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.daysSupply.$get>>,
) {
  return ['daysSupply', '/daysSupply', toValue(args)] as const
}

export function getDaysSupplyQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.daysSupply.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDaysSupplyQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.daysSupply.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDaysSupply<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.daysSupply.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>
          >,
          ReturnType<typeof getDaysSupplyQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDaysSupplyQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDaysSupplyQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.daysSupply.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getDaysToSellQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.daysToSell.$get>>,
) {
  return ['daysToSell', '/daysToSell', toValue(args)] as const
}

export function getDaysToSellQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.daysToSell.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getDaysToSellQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.daysToSell.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useDaysToSell<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.daysToSell.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>
          >,
          ReturnType<typeof getDaysToSellQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDaysToSellQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getDaysToSellQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.daysToSell.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetBrandsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getBrands.$get>>,
) {
  return ['getBrands', '/getBrands', toValue(args)] as const
}

export function getGetBrandsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getBrands.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetBrandsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getBrands.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetBrands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getBrands.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>
          >,
          ReturnType<typeof getGetBrandsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetBrandsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetBrandsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getBrands.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetDealersQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getDealers.$get>>,
) {
  return ['getDealers', '/getDealers', toValue(args)] as const
}

export function getGetDealersQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getDealers.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetDealersQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getDealers.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetDealers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getDealers.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>
          >,
          ReturnType<typeof getGetDealersQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetDealersQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetDealersQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getDealers.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetDealersByIDQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getDealersByID.$get>>,
) {
  return ['getDealersByID', '/getDealersByID', toValue(args)] as const
}

export function getGetDealersByIDQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getDealersByID.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetDealersByIDQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getDealersByID.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetDealersByID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getDealersByID.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
          >,
          ReturnType<typeof getGetDealersByIDQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetDealersByIDQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetDealersByIDQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getDealersByID.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetDealersByRegionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getDealersByRegion.$get>>,
) {
  return ['getDealersByRegion', '/getDealersByRegion', toValue(args)] as const
}

export function getGetDealersByRegionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getDealersByRegion.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetDealersByRegionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getDealersByRegion.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetDealersByRegion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getDealersByRegion.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>
            >
          >,
          ReturnType<typeof getGetDealersByRegionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetDealersByRegionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetDealersByRegionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getDealersByRegion.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetInactiveModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getInactiveModels.$get>>,
) {
  return ['getInactiveModels', '/getInactiveModels', toValue(args)] as const
}

export function getGetInactiveModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getInactiveModels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetInactiveModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getInactiveModels.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetInactiveModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getInactiveModels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>
            >
          >,
          ReturnType<typeof getGetInactiveModelsQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetInactiveModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetInactiveModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getInactiveModels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getModels.$get>>,
) {
  return ['getModels', '/getModels', toValue(args)] as const
}

export function getGetModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getModels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getModels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getModels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>
          >,
          ReturnType<typeof getGetModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getModels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetRegionBrandMarketShareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRegionBrandMarketShare.$get>>,
) {
  return ['getRegionBrandMarketShare', '/getRegionBrandMarketShare', toValue(args)] as const
}

export function getGetRegionBrandMarketShareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRegionBrandMarketShare.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetRegionBrandMarketShareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getRegionBrandMarketShare.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetRegionBrandMarketShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRegionBrandMarketShare.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>
              >
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<
                Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>
              >
            >
          >,
          ReturnType<typeof getGetRegionBrandMarketShareQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetRegionBrandMarketShareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetRegionBrandMarketShareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getRegionBrandMarketShare.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetRegionMarketShareQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRegionMarketShare.$get>>,
) {
  return ['getRegionMarketShare', '/getRegionMarketShare', toValue(args)] as const
}

export function getGetRegionMarketShareQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRegionMarketShare.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetRegionMarketShareQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getRegionMarketShare.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetRegionMarketShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRegionMarketShare.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>
            >
          >,
          ReturnType<typeof getGetRegionMarketShareQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetRegionMarketShareQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetRegionMarketShareQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getRegionMarketShare.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetRegionsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRegions.$get>>,
) {
  return ['getRegions', '/getRegions', toValue(args)] as const
}

export function getGetRegionsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRegions.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetRegionsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getRegions.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getRegions.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>
          >,
          ReturnType<typeof getGetRegionsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetRegionsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetRegionsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getRegions.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetSubUserKeysQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getSubUserKeys.$get>>,
) {
  return ['getSubUserKeys', '/getSubUserKeys', toValue(args)] as const
}

export function getGetSubUserKeysQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getSubUserKeys.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetSubUserKeysQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getSubUserKeys.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useGetSubUserKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getSubUserKeys.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
          >,
          ReturnType<typeof getGetSubUserKeysQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetSubUserKeysQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetSubUserKeysQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getSubUserKeys.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getGetTokenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getToken.$get>>,
) {
  return ['getToken', '/getToken', toValue(args)] as const
}

export function getGetTokenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getToken.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getGetTokenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.getToken.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useGetToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.getToken.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>
          >,
          ReturnType<typeof getGetTokenQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetTokenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getGetTokenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.getToken.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostGetTokenMutationKey() {
  return ['getToken', '/getToken', 'POST'] as const
}

export function getPostGetTokenMutationOptions<TError = DefaultError, TOnMutateResult = unknown>(
  options?: ClientRequestOptions,
) {
  return mutationOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$post>>>>>,
    TError,
    InferRequestType<typeof client.getToken.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostGetTokenMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.getToken.$post>) {
      return parseResponse(client.getToken.$post(args, options))
    },
  })
}

export function usePostGetToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$post>>>>
          >,
          TError,
          InferRequestType<typeof client.getToken.$post>,
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
  const mutationDefaults = getPostGetTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
  return useMutation(
    {
      ...mutationOptions,
      ...mutationDefaults,
      mutationKey: mutationOptions?.mutationKey ?? mutationDefaults.mutationKey,
    },
    queryClient,
  )
}

export function getListPriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPrice.$get>>,
) {
  return ['listPrice', '/listPrice', toValue(args)] as const
}

export function getListPriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPrice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListPriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listPrice.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listPrice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>
          >,
          ReturnType<typeof getListPriceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListPriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListPriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listPrice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings.$get>>,
) {
  return ['listings', '/listings', toValue(args)] as const
}

export function getListingsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
          >,
          ReturnType<typeof getListingsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListingsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListings2QueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings2.$get>>,
) {
  return ['listings2', '/listings2', toValue(args)] as const
}

export function getListings2QueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings2.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListings2QueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listings2.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useListings2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listings2.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>
          >,
          ReturnType<typeof getListings2QueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListings2QueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListings2QueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listings2.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingsByDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByDate.$get>>,
) {
  return ['listingsByDate', '/listingsByDate', toValue(args)] as const
}

export function getListingsByDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByDate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsByDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listingsByDate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsByDate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByDate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
          >,
          ReturnType<typeof getListingsByDateQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListingsByDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsByDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listingsByDate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingsByRegionQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByRegion.$get>>,
) {
  return ['listingsByRegion', '/listingsByRegion', toValue(args)] as const
}

export function getListingsByRegionQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByRegion.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsByRegionQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listingsByRegion.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsByRegion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByRegion.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>
            >
          >,
          ReturnType<typeof getListingsByRegionQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListingsByRegionQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsByRegionQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listingsByRegion.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingsByRegionAndDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByRegionAndDate.$get>>,
) {
  return ['listingsByRegionAndDate', '/listingsByRegionAndDate', toValue(args)] as const
}

export function getListingsByRegionAndDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByRegionAndDate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsByRegionAndDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listingsByRegionAndDate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsByRegionAndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByRegionAndDate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
            >
          >,
          ReturnType<typeof getListingsByRegionAndDateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsByRegionAndDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsByRegionAndDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listingsByRegionAndDate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingsByZipCodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByZipCode.$get>>,
) {
  return ['listingsByZipCode', '/listingsByZipCode', toValue(args)] as const
}

export function getListingsByZipCodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByZipCode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsByZipCodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listingsByZipCode.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsByZipCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByZipCode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>
            >
          >,
          ReturnType<typeof getListingsByZipCodeQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListingsByZipCodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsByZipCodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listingsByZipCode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getListingsByZipCodeAndDateQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByZipCodeAndDate.$get>>,
) {
  return ['listingsByZipCodeAndDate', '/listingsByZipCodeAndDate', toValue(args)] as const
}

export function getListingsByZipCodeAndDateQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByZipCodeAndDate.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getListingsByZipCodeAndDateQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.listingsByZipCodeAndDate.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useListingsByZipCodeAndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.listingsByZipCodeAndDate.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
            >
          >,
          ReturnType<typeof getListingsByZipCodeAndDateQueryKey>
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
        typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsByZipCodeAndDateQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getListingsByZipCodeAndDateQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.listingsByZipCodeAndDate.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPostMakeSubUserKeyMutationKey() {
  return ['makeSubUserKey', '/makeSubUserKey', 'POST'] as const
}

export function getPostMakeSubUserKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.makeSubUserKey.$post>>>>
    >,
    TError,
    InferRequestType<typeof client.makeSubUserKey.$post>,
    TOnMutateResult
  >({
    mutationKey: getPostMakeSubUserKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.makeSubUserKey.$post>) {
      return parseResponse(client.makeSubUserKey.$post(args, options))
    },
  })
}

export function usePostMakeSubUserKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.makeSubUserKey.$post>>>
            >
          >,
          TError,
          InferRequestType<typeof client.makeSubUserKey.$post>,
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
  const mutationDefaults = getPostMakeSubUserKeyMutationOptions<TError, TOnMutateResult>(
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

export function getModelYearDistQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.modelYearDist.$get>>,
) {
  return ['modelYearDist', '/modelYearDist', toValue(args)] as const
}

export function getModelYearDistQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.modelYearDist.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getModelYearDistQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.modelYearDist.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useModelYearDist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.modelYearDist.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
          >,
          ReturnType<typeof getModelYearDistQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getModelYearDistQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getModelYearDistQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.modelYearDist.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegionDailySalesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regionDailySales.$get>>,
) {
  return ['regionDailySales', '/regionDailySales', toValue(args)] as const
}

export function getRegionDailySalesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regionDailySales.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegionDailySalesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.regionDailySales.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useRegionDailySales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regionDailySales.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>
            >
          >,
          ReturnType<typeof getRegionDailySalesQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegionDailySalesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegionDailySalesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.regionDailySales.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getRegionSalesQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regionSales.$get>>,
) {
  return ['regionSales', '/regionSales', toValue(args)] as const
}

export function getRegionSalesQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regionSales.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getRegionSalesQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.regionSales.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useRegionSales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.regionSales.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
          >,
          ReturnType<typeof getRegionSalesQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionSalesQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getRegionSalesQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.regionSales.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getPutRevokeSubUserKeyMutationKey() {
  return ['revokeSubUserKey', '/revokeSubUserKey', 'PUT'] as const
}

export function getPutRevokeSubUserKeyMutationOptions<
  TError = DefaultError,
  TOnMutateResult = unknown,
>(options?: ClientRequestOptions) {
  return mutationOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revokeSubUserKey.$put>>>>
    >,
    TError,
    InferRequestType<typeof client.revokeSubUserKey.$put>,
    TOnMutateResult
  >({
    mutationKey: getPutRevokeSubUserKeyMutationKey(),
    async mutationFn(args: InferRequestType<typeof client.revokeSubUserKey.$put>) {
      return parseResponse(client.revokeSubUserKey.$put(args, options))
    },
  })
}

export function usePutRevokeSubUserKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: {
    mutation?: Omit<
      Extract<
        UseMutationOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.revokeSubUserKey.$put>>>
            >
          >,
          TError,
          InferRequestType<typeof client.revokeSubUserKey.$put>,
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
  const mutationDefaults = getPutRevokeSubUserKeyMutationOptions<TError, TOnMutateResult>(
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

export function getSalePriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.salePrice.$get>>,
) {
  return ['salePrice', '/salePrice', toValue(args)] as const
}

export function getSalePriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.salePrice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSalePriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.salePrice.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useSalePrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.salePrice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>
          >,
          ReturnType<typeof getSalePriceQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalePriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSalePriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.salePrice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSalePriceHistogramQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.salePriceHistogram.$get>>,
) {
  return ['salePriceHistogram', '/salePriceHistogram', toValue(args)] as const
}

export function getSalePriceHistogramQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.salePriceHistogram.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSalePriceHistogramQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.salePriceHistogram.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSalePriceHistogram<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.salePriceHistogram.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>
            >
          >,
          ReturnType<typeof getSalePriceHistogramQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSalePriceHistogramQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSalePriceHistogramQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.salePriceHistogram.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getSimilarSalePriceQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similarSalePrice.$get>>,
) {
  return ['similarSalePrice', '/similarSalePrice', toValue(args)] as const
}

export function getSimilarSalePriceQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similarSalePrice.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getSimilarSalePriceQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.similarSalePrice.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useSimilarSalePrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.similarSalePrice.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>
            >
          >,
          TError,
          TData,
          Awaited<
            ReturnType<
              typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>
            >
          >,
          ReturnType<typeof getSimilarSalePriceQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSimilarSalePriceQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getSimilarSalePriceQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.similarSalePrice.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getTopModelsQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.topModels.$get>>,
) {
  return ['topModels', '/topModels', toValue(args)] as const
}

export function getTopModelsQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.topModels.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getTopModelsQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.topModels.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useTopModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.topModels.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>
          >,
          ReturnType<typeof getTopModelsQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopModelsQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getTopModelsQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.topModels.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getValuationQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.valuation.$get>>,
) {
  return ['valuation', '/valuation', toValue(args)] as const
}

export function getValuationQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.valuation.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getValuationQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.valuation.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useValuation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.valuation.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>
          >,
          ReturnType<typeof getValuationQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getValuationQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getValuationQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.valuation.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVehicleHistoryQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vehicleHistory.$get>>,
) {
  return ['vehicleHistory', '/vehicleHistory', toValue(args)] as const
}

export function getVehicleHistoryQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vehicleHistory.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVehicleHistoryQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vehicleHistory.$get(toValue(args), {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  }
}

export function useVehicleHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vehicleHistory.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
          >,
          ReturnType<typeof getVehicleHistoryQueryKey>
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
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVehicleHistoryQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVehicleHistoryQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vehicleHistory.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVehicleSeenQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vehicleSeen.$get>>,
) {
  return ['vehicleSeen', '/vehicleSeen', toValue(args)] as const
}

export function getVehicleSeenQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vehicleSeen.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVehicleSeenQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vehicleSeen.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVehicleSeen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vehicleSeen.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
          >,
          ReturnType<typeof getVehicleSeenQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVehicleSeenQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVehicleSeenQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vehicleSeen.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}

export function getVinDecodeQueryKey(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vinDecode.$get>>,
) {
  return ['vinDecode', '/vinDecode', toValue(args)] as const
}

export function getVinDecodeQueryOptions(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vinDecode.$get>>,
  options?: ClientRequestOptions,
) {
  return {
    queryKey: computed(() => getVinDecodeQueryKey(args)),
    queryFn({ signal }: QueryFunctionContext) {
      return parseResponse(
        client.vinDecode.$get(toValue(args), { ...options, init: { ...options?.init, signal } }),
      )
    },
  }
}

export function useVinDecode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: MaybeRefOrGetter<InferRequestType<typeof client.vinDecode.$get>>,
  options?: {
    query?: Omit<
      Extract<
        UseQueryOptions<
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>
          >,
          TError,
          TData,
          Awaited<
            ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>
          >,
          ReturnType<typeof getVinDecodeQueryKey>
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
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVinDecodeQueryKey>
  >(
    {
      ...queryOptions,
      queryKey: computed(() => getVinDecodeQueryKey(args)),
      queryFn({ signal }) {
        return parseResponse(
          client.vinDecode.$get(toValue(args), {
            ...clientOptions,
            init: { ...clientOptions?.init, signal },
          }),
        )
      },
    },
    queryClient,
  )
}
