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

export function injectDaysSupply<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.daysSupply.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDaysSupplyQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectDaysToSell<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.daysToSell.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getDaysToSellQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetBrands<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getBrands.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetBrandsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetDealers<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getDealers.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetDealersQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetDealersByID<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getDealersByID.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetDealersByIDQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetDealersByRegion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getDealersByRegion.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetDealersByRegionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetInactiveModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getInactiveModels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetInactiveModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getModels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetRegionBrandMarketShare<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getRegionBrandMarketShare.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetRegionBrandMarketShareQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetRegionMarketShare<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getRegionMarketShare.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getGetRegionMarketShareQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectGetRegions<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getRegions.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetRegionsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetSubUserKeys<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getSubUserKeys.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetSubUserKeysQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectGetToken<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.getToken.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getGetTokenQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getGetTokenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPostGetToken<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostGetTokenMutationOptions<TError, TOnMutateResult>(clientOptions)
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectListPrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listPrice.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListPriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectListings<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listings.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
        Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
        TError,
        TData,
        ReturnType<typeof getListingsQueryKey>
      >,
      'queryKey' | 'queryFn'
    >
    options?: ClientRequestOptions
  },
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectListings2<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listings2.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListings2QueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectListingsByDate<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listingsByDate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingsByDateQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectListingsByRegion<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listingsByRegion.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingsByRegionQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectListingsByRegionAndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listingsByRegionAndDate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getListingsByRegionAndDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectListingsByZipCode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listingsByZipCode.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getListingsByZipCodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectListingsByZipCodeAndDate<
  TData = Awaited<
    ReturnType<
      typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
    >
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.listingsByZipCodeAndDate.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return {
      ...getListingsByZipCodeAndDateQueryOptions<TData, TError>(args(), clientOptions),
      ...query,
    }
  }, injectOptions)
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

export function injectPostMakeSubUserKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPostMakeSubUserKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectModelYearDist<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.modelYearDist.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getModelYearDistQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRegionDailySales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.regionDailySales.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegionDailySalesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectRegionSales<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.regionSales.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getRegionSalesQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectPutRevokeSubUserKey<TError = DefaultError, TOnMutateResult = unknown>(
  options?: () => {
    mutation?: Omit<
      CreateMutationOptions<
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
  injectOptions?: InjectMutationOptions,
) {
  return injectMutation(() => {
    const { mutation, options: clientOptions } = options?.() ?? {}
    const mutationDefaults = getPutRevokeSubUserKeyMutationOptions<TError, TOnMutateResult>(
      clientOptions,
    )
    return {
      ...mutation,
      ...mutationDefaults,
      mutationKey: mutation?.mutationKey ?? mutationDefaults.mutationKey,
    }
  }, injectOptions)
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

export function injectSalePrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.salePrice.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalePriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSalePriceHistogram<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.salePriceHistogram.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSalePriceHistogramQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectSimilarSalePrice<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.similarSalePrice.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getSimilarSalePriceQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectTopModels<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.topModels.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getTopModelsQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectValuation<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.valuation.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getValuationQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectVehicleHistory<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vehicleHistory.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVehicleHistoryQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectVehicleSeen<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vehicleSeen.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVehicleSeenQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
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

export function injectVinDecode<
  TData = Awaited<
    ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>
  >,
  TError = DefaultError,
>(
  args: () => InferRequestType<typeof client.vinDecode.$get>,
  options?: () => {
    query?: Omit<
      CreateQueryOptions<
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
  injectOptions?: InjectQueryOptions,
) {
  return injectQuery(() => {
    const { query, options: clientOptions } = options?.() ?? {}
    return { ...getVinDecodeQueryOptions<TData, TError>(args(), clientOptions), ...query }
  }, injectOptions)
}
