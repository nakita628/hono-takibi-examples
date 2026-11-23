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

export function getDaysSupplyQueryKey(args: InferRequestType<typeof client.daysSupply.$get>) {
  return ['daysSupply', '/daysSupply', args] as const
}

export function getDaysSupplyQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.daysSupply.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDaysSupplyQueryKey>
  >({
    queryKey: getDaysSupplyQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.daysSupply.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDaysSupply<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.daysSupply.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDaysSupplyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDaysSupplyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDaysSupply<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.daysSupply.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDaysSupplyQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDaysSupplyQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getDaysToSellQueryKey(args: InferRequestType<typeof client.daysToSell.$get>) {
  return ['daysToSell', '/daysToSell', args] as const
}

export function getDaysToSellQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.daysToSell.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getDaysToSellQueryKey>
  >({
    queryKey: getDaysToSellQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.daysToSell.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useDaysToSell<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.daysToSell.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDaysToSellQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getDaysToSellQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseDaysToSell<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.daysToSell.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getDaysToSellQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getDaysToSellQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetBrandsQueryKey(args: InferRequestType<typeof client.getBrands.$get>) {
  return ['getBrands', '/getBrands', args] as const
}

export function getGetBrandsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getBrands.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetBrandsQueryKey>
  >({
    queryKey: getGetBrandsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getBrands.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetBrands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getBrands.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetBrandsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetBrandsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetBrands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getBrands.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetBrandsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetBrandsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetDealersQueryKey(args: InferRequestType<typeof client.getDealers.$get>) {
  return ['getDealers', '/getDealers', args] as const
}

export function getGetDealersQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getDealers.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetDealersQueryKey>
  >({
    queryKey: getGetDealersQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getDealers.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetDealers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getDealers.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetDealersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetDealersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetDealers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getDealers.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetDealersQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetDealersQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetDealersByIDQueryKey(
  args: InferRequestType<typeof client.getDealersByID.$get>,
) {
  return ['getDealersByID', '/getDealersByID', args] as const
}

export function getGetDealersByIDQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getDealersByID.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetDealersByIDQueryKey>
  >({
    queryKey: getGetDealersByIDQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getDealersByID.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetDealersByID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getDealersByID.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetDealersByIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetDealersByIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetDealersByID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getDealersByID.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetDealersByIDQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetDealersByIDQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetDealersByRegionQueryKey(
  args: InferRequestType<typeof client.getDealersByRegion.$get>,
) {
  return ['getDealersByRegion', '/getDealersByRegion', args] as const
}

export function getGetDealersByRegionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getDealersByRegion.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetDealersByRegionQueryKey>
  >({
    queryKey: getGetDealersByRegionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getDealersByRegion.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetDealersByRegion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getDealersByRegion.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetDealersByRegionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetDealersByRegionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetDealersByRegion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getDealersByRegion.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetDealersByRegionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetDealersByRegionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetInactiveModelsQueryKey(
  args: InferRequestType<typeof client.getInactiveModels.$get>,
) {
  return ['getInactiveModels', '/getInactiveModels', args] as const
}

export function getGetInactiveModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getInactiveModels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetInactiveModelsQueryKey>
  >({
    queryKey: getGetInactiveModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getInactiveModels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetInactiveModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getInactiveModels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetInactiveModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetInactiveModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetInactiveModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getInactiveModels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetInactiveModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetInactiveModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetModelsQueryKey(args: InferRequestType<typeof client.getModels.$get>) {
  return ['getModels', '/getModels', args] as const
}

export function getGetModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getModels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetModelsQueryKey>
  >({
    queryKey: getGetModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getModels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getModels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getModels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetRegionBrandMarketShareQueryKey(
  args: InferRequestType<typeof client.getRegionBrandMarketShare.$get>,
) {
  return ['getRegionBrandMarketShare', '/getRegionBrandMarketShare', args] as const
}

export function getGetRegionBrandMarketShareQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getRegionBrandMarketShare.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getGetRegionBrandMarketShareQueryKey>
  >({
    queryKey: getGetRegionBrandMarketShareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getRegionBrandMarketShare.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useGetRegionBrandMarketShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getRegionBrandMarketShare.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetRegionBrandMarketShareQueryKey>
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
      ...getGetRegionBrandMarketShareQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseGetRegionBrandMarketShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getRegionBrandMarketShare.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetRegionBrandMarketShareQueryKey>
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
      ...getGetRegionBrandMarketShareQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getGetRegionMarketShareQueryKey(
  args: InferRequestType<typeof client.getRegionMarketShare.$get>,
) {
  return ['getRegionMarketShare', '/getRegionMarketShare', args] as const
}

export function getGetRegionMarketShareQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getRegionMarketShare.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetRegionMarketShareQueryKey>
  >({
    queryKey: getGetRegionMarketShareQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getRegionMarketShare.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetRegionMarketShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getRegionMarketShare.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetRegionMarketShareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetRegionMarketShareQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetRegionMarketShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getRegionMarketShare.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getGetRegionMarketShareQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetRegionMarketShareQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetRegionsQueryKey(args: InferRequestType<typeof client.getRegions.$get>) {
  return ['getRegions', '/getRegions', args] as const
}

export function getGetRegionsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getRegions.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetRegionsQueryKey>
  >({
    queryKey: getGetRegionsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getRegions.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getRegions.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getRegions.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetRegionsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetRegionsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetSubUserKeysQueryKey(
  args: InferRequestType<typeof client.getSubUserKeys.$get>,
) {
  return ['getSubUserKeys', '/getSubUserKeys', args] as const
}

export function getGetSubUserKeysQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getSubUserKeys.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getGetSubUserKeysQueryKey>
  >({
    queryKey: getGetSubUserKeysQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getSubUserKeys.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetSubUserKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getSubUserKeys.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetSubUserKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetSubUserKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetSubUserKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getSubUserKeys.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getGetSubUserKeysQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetSubUserKeysQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getGetTokenQueryKey(args: InferRequestType<typeof client.getToken.$get>) {
  return ['getToken', '/getToken', args] as const
}

export function getGetTokenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.getToken.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getGetTokenQueryKey>
  >({
    queryKey: getGetTokenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.getToken.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useGetToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getToken.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGetTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getGetTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseGetToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.getToken.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGetTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getGetTokenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.getToken.$post>,
        TOnMutateResult
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

export function getListPriceQueryKey(args: InferRequestType<typeof client.listPrice.$get>) {
  return ['listPrice', '/listPrice', args] as const
}

export function getListPriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listPrice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListPriceQueryKey>
  >({
    queryKey: getListPriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listPrice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listPrice.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListPriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listPrice.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListPriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListPriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListingsQueryKey(args: InferRequestType<typeof client.listings.$get>) {
  return ['listings', '/listings', args] as const
}

export function getListingsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listings.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListingsQueryKey>
  >({
    queryKey: getListingsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listings.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getListingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listings.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getListingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListingsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListings2QueryKey(args: InferRequestType<typeof client.listings2.$get>) {
  return ['listings2', '/listings2', args] as const
}

export function getListings2QueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listings2.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getListings2QueryKey>
  >({
    queryKey: getListings2QueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listings2.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListings2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listings2.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListings2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListings2QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListings2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listings2.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListings2QueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListings2QueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListingsByDateQueryKey(
  args: InferRequestType<typeof client.listingsByDate.$get>,
) {
  return ['listingsByDate', '/listingsByDate', args] as const
}

export function getListingsByDateQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listingsByDate.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListingsByDateQueryKey>
  >({
    queryKey: getListingsByDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listingsByDate.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListingsByDate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByDate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListingsByDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListingsByDateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListingsByDate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByDate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListingsByDateQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListingsByDateQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListingsByRegionQueryKey(
  args: InferRequestType<typeof client.listingsByRegion.$get>,
) {
  return ['listingsByRegion', '/listingsByRegion', args] as const
}

export function getListingsByRegionQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listingsByRegion.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListingsByRegionQueryKey>
  >({
    queryKey: getListingsByRegionQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listingsByRegion.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListingsByRegion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByRegion.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListingsByRegionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListingsByRegionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListingsByRegion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByRegion.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getListingsByRegionQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListingsByRegionQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListingsByRegionAndDateQueryKey(
  args: InferRequestType<typeof client.listingsByRegionAndDate.$get>,
) {
  return ['listingsByRegionAndDate', '/listingsByRegionAndDate', args] as const
}

export function getListingsByRegionAndDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByRegionAndDate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsByRegionAndDateQueryKey>
  >({
    queryKey: getListingsByRegionAndDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listingsByRegionAndDate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useListingsByRegionAndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByRegionAndDate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListingsByRegionAndDateQueryKey>
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
      ...getListingsByRegionAndDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseListingsByRegionAndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByRegionAndDate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListingsByRegionAndDateQueryKey>
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
      ...getListingsByRegionAndDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function getListingsByZipCodeQueryKey(
  args: InferRequestType<typeof client.listingsByZipCode.$get>,
) {
  return ['listingsByZipCode', '/listingsByZipCode', args] as const
}

export function getListingsByZipCodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.listingsByZipCode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getListingsByZipCodeQueryKey>
  >({
    queryKey: getListingsByZipCodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listingsByZipCode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useListingsByZipCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByZipCode.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListingsByZipCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getListingsByZipCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseListingsByZipCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByZipCode.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListingsByZipCodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getListingsByZipCodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getListingsByZipCodeAndDateQueryKey(
  args: InferRequestType<typeof client.listingsByZipCodeAndDate.$get>,
) {
  return ['listingsByZipCodeAndDate', '/listingsByZipCodeAndDate', args] as const
}

export function getListingsByZipCodeAndDateQueryOptions<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByZipCodeAndDate.$get>,
  options?: ClientRequestOptions,
) {
  return queryOptions<
    Awaited<
      ReturnType<
        typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
      >
    >,
    TError,
    TData,
    ReturnType<typeof getListingsByZipCodeAndDateQueryKey>
  >({
    queryKey: getListingsByZipCodeAndDateQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.listingsByZipCodeAndDate.$get(args, {
          ...options,
          init: { ...options?.init, signal },
        }),
      )
    },
  })
}

export function useListingsByZipCodeAndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByZipCodeAndDate.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListingsByZipCodeAndDateQueryKey>
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
      ...getListingsByZipCodeAndDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
    },
    queryClient,
  )
}

export function useSuspenseListingsByZipCodeAndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.listingsByZipCodeAndDate.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getListingsByZipCodeAndDateQueryKey>
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
      ...getListingsByZipCodeAndDateQueryOptions<TData, TError>(args, clientOptions),
      ...queryOptions,
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.makeSubUserKey.$post>>>>
        >,
        TError,
        InferRequestType<typeof client.makeSubUserKey.$post>,
        TOnMutateResult
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

export function getModelYearDistQueryKey(args: InferRequestType<typeof client.modelYearDist.$get>) {
  return ['modelYearDist', '/modelYearDist', args] as const
}

export function getModelYearDistQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.modelYearDist.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getModelYearDistQueryKey>
  >({
    queryKey: getModelYearDistQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.modelYearDist.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useModelYearDist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.modelYearDist.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getModelYearDistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getModelYearDistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseModelYearDist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.modelYearDist.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getModelYearDistQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getModelYearDistQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRegionDailySalesQueryKey(
  args: InferRequestType<typeof client.regionDailySales.$get>,
) {
  return ['regionDailySales', '/regionDailySales', args] as const
}

export function getRegionDailySalesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.regionDailySales.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getRegionDailySalesQueryKey>
  >({
    queryKey: getRegionDailySalesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.regionDailySales.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRegionDailySales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.regionDailySales.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRegionDailySalesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegionDailySalesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegionDailySales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.regionDailySales.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRegionDailySalesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegionDailySalesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getRegionSalesQueryKey(args: InferRequestType<typeof client.regionSales.$get>) {
  return ['regionSales', '/regionSales', args] as const
}

export function getRegionSalesQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.regionSales.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getRegionSalesQueryKey>
  >({
    queryKey: getRegionSalesQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.regionSales.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useRegionSales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.regionSales.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRegionSalesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getRegionSalesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseRegionSales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.regionSales.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getRegionSalesQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getRegionSalesQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
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
      UseMutationOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revokeSubUserKey.$put>>>>
        >,
        TError,
        InferRequestType<typeof client.revokeSubUserKey.$put>,
        TOnMutateResult
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

export function getSalePriceQueryKey(args: InferRequestType<typeof client.salePrice.$get>) {
  return ['salePrice', '/salePrice', args] as const
}

export function getSalePriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.salePrice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getSalePriceQueryKey>
  >({
    queryKey: getSalePriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.salePrice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSalePrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.salePrice.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSalePriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSalePriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSalePrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.salePrice.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSalePriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSalePriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSalePriceHistogramQueryKey(
  args: InferRequestType<typeof client.salePriceHistogram.$get>,
) {
  return ['salePriceHistogram', '/salePriceHistogram', args] as const
}

export function getSalePriceHistogramQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.salePriceHistogram.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSalePriceHistogramQueryKey>
  >({
    queryKey: getSalePriceHistogramQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.salePriceHistogram.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSalePriceHistogram<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.salePriceHistogram.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSalePriceHistogramQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSalePriceHistogramQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSalePriceHistogram<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.salePriceHistogram.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<
            typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>
          >
        >,
        TError,
        TData,
        ReturnType<typeof getSalePriceHistogramQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSalePriceHistogramQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getSimilarSalePriceQueryKey(
  args: InferRequestType<typeof client.similarSalePrice.$get>,
) {
  return ['similarSalePrice', '/similarSalePrice', args] as const
}

export function getSimilarSalePriceQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.similarSalePrice.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getSimilarSalePriceQueryKey>
  >({
    queryKey: getSimilarSalePriceQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.similarSalePrice.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useSimilarSalePrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.similarSalePrice.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimilarSalePriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getSimilarSalePriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseSimilarSalePrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.similarSalePrice.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getSimilarSalePriceQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getSimilarSalePriceQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getTopModelsQueryKey(args: InferRequestType<typeof client.topModels.$get>) {
  return ['topModels', '/topModels', args] as const
}

export function getTopModelsQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.topModels.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getTopModelsQueryKey>
  >({
    queryKey: getTopModelsQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.topModels.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useTopModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.topModels.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getTopModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseTopModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.topModels.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getTopModelsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getTopModelsQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getValuationQueryKey(args: InferRequestType<typeof client.valuation.$get>) {
  return ['valuation', '/valuation', args] as const
}

export function getValuationQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.valuation.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getValuationQueryKey>
  >({
    queryKey: getValuationQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.valuation.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useValuation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.valuation.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getValuationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getValuationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseValuation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.valuation.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getValuationQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getValuationQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVehicleHistoryQueryKey(
  args: InferRequestType<typeof client.vehicleHistory.$get>,
) {
  return ['vehicleHistory', '/vehicleHistory', args] as const
}

export function getVehicleHistoryQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vehicleHistory.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
    >,
    TError,
    TData,
    ReturnType<typeof getVehicleHistoryQueryKey>
  >({
    queryKey: getVehicleHistoryQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vehicleHistory.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVehicleHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vehicleHistory.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVehicleHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVehicleHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVehicleHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vehicleHistory.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVehicleHistoryQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVehicleHistoryQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVehicleSeenQueryKey(args: InferRequestType<typeof client.vehicleSeen.$get>) {
  return ['vehicleSeen', '/vehicleSeen', args] as const
}

export function getVehicleSeenQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vehicleSeen.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVehicleSeenQueryKey>
  >({
    queryKey: getVehicleSeenQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vehicleSeen.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVehicleSeen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vehicleSeen.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVehicleSeenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVehicleSeenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVehicleSeen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vehicleSeen.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVehicleSeenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVehicleSeenQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function getVinDecodeQueryKey(args: InferRequestType<typeof client.vinDecode.$get>) {
  return ['vinDecode', '/vinDecode', args] as const
}

export function getVinDecodeQueryOptions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>
  >,
  TError = DefaultError,
>(args: InferRequestType<typeof client.vinDecode.$get>, options?: ClientRequestOptions) {
  return queryOptions<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>>,
    TError,
    TData,
    ReturnType<typeof getVinDecodeQueryKey>
  >({
    queryKey: getVinDecodeQueryKey(args),
    queryFn({ signal }) {
      return parseResponse(
        client.vinDecode.$get(args, { ...options, init: { ...options?.init, signal } }),
      )
    },
  })
}

export function useVinDecode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vinDecode.$get>,
  options?: {
    query?: Omit<
      UseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVinDecodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useQuery(
    { ...getVinDecodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}

export function useSuspenseVinDecode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: InferRequestType<typeof client.vinDecode.$get>,
  options?: {
    query?: Omit<
      UseSuspenseQueryOptions<
        Awaited<
          ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>
        >,
        TError,
        TData,
        ReturnType<typeof getVinDecodeQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  queryClient?: QueryClient,
) {
  const { query: queryOptions, options: clientOptions } = options ?? {}
  return useSuspenseQuery(
    { ...getVinDecodeQueryOptions<TData, TError>(args, clientOptions), ...queryOptions },
    queryClient,
  )
}
