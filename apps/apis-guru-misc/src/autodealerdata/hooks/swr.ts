import useSWR from 'swr'
import useSWRImmutable from 'swr/immutable'
import type { Key, SWRConfiguration } from 'swr'
import useSWRMutation from 'swr/mutation'
import type { SWRMutationConfiguration } from 'swr/mutation'
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

export function getGetDaysSupplyKey(args: InferRequestType<typeof client.daysSupply.$get>) {
  return ['daysSupply', '/daysSupply', args] as const
}

export function useGetDaysSupply<TError = unknown>(
  args: InferRequestType<typeof client.daysSupply.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDaysSupplyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.daysSupply.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDaysSupply<TError = unknown>(
  args: InferRequestType<typeof client.daysSupply.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDaysSupplyKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysSupply.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.daysSupply.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetDaysToSellKey(args: InferRequestType<typeof client.daysToSell.$get>) {
  return ['daysToSell', '/daysToSell', args] as const
}

export function useGetDaysToSell<TError = unknown>(
  args: InferRequestType<typeof client.daysToSell.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDaysToSellKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.daysToSell.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetDaysToSell<TError = unknown>(
  args: InferRequestType<typeof client.daysToSell.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetDaysToSellKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.daysToSell.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.daysToSell.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetBrandsKey(args: InferRequestType<typeof client.getBrands.$get>) {
  return ['getBrands', '/getBrands', args] as const
}

export function useGetGetBrands<TError = unknown>(
  args: InferRequestType<typeof client.getBrands.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetBrandsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getBrands.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetBrands<TError = unknown>(
  args: InferRequestType<typeof client.getBrands.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetBrandsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getBrands.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getBrands.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetDealersKey(args: InferRequestType<typeof client.getDealers.$get>) {
  return ['getDealers', '/getDealers', args] as const
}

export function useGetGetDealers<TError = unknown>(
  args: InferRequestType<typeof client.getDealers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetDealersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getDealers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetDealers<TError = unknown>(
  args: InferRequestType<typeof client.getDealers.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetDealersKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealers.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getDealers.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetDealersByIDKey(args: InferRequestType<typeof client.getDealersByID.$get>) {
  return ['getDealersByID', '/getDealersByID', args] as const
}

export function useGetGetDealersByID<TError = unknown>(
  args: InferRequestType<typeof client.getDealersByID.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetDealersByIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getDealersByID.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetDealersByID<TError = unknown>(
  args: InferRequestType<typeof client.getDealersByID.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetDealersByIDKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByID.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getDealersByID.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetDealersByRegionKey(
  args: InferRequestType<typeof client.getDealersByRegion.$get>,
) {
  return ['getDealersByRegion', '/getDealersByRegion', args] as const
}

export function useGetGetDealersByRegion<TError = unknown>(
  args: InferRequestType<typeof client.getDealersByRegion.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
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
        ? getGetGetDealersByRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getDealersByRegion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetDealersByRegion<TError = unknown>(
  args: InferRequestType<typeof client.getDealersByRegion.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
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
        ? getGetGetDealersByRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getDealersByRegion.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getDealersByRegion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetInactiveModelsKey(
  args: InferRequestType<typeof client.getInactiveModels.$get>,
) {
  return ['getInactiveModels', '/getInactiveModels', args] as const
}

export function useGetGetInactiveModels<TError = unknown>(
  args: InferRequestType<typeof client.getInactiveModels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
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
        ? getGetGetInactiveModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getInactiveModels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetInactiveModels<TError = unknown>(
  args: InferRequestType<typeof client.getInactiveModels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
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
        ? getGetGetInactiveModelsKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getInactiveModels.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getInactiveModels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetModelsKey(args: InferRequestType<typeof client.getModels.$get>) {
  return ['getModels', '/getModels', args] as const
}

export function useGetGetModels<TError = unknown>(
  args: InferRequestType<typeof client.getModels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getModels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetModels<TError = unknown>(
  args: InferRequestType<typeof client.getModels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getModels.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getModels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetRegionBrandMarketShareKey(
  args: InferRequestType<typeof client.getRegionBrandMarketShare.$get>,
) {
  return ['getRegionBrandMarketShare', '/getRegionBrandMarketShare', args] as const
}

export function useGetGetRegionBrandMarketShare<TError = unknown>(
  args: InferRequestType<typeof client.getRegionBrandMarketShare.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
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
        ? getGetGetRegionBrandMarketShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRegionBrandMarketShare.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetRegionBrandMarketShare<TError = unknown>(
  args: InferRequestType<typeof client.getRegionBrandMarketShare.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
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
        ? getGetGetRegionBrandMarketShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRegionBrandMarketShare.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRegionBrandMarketShare.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetRegionMarketShareKey(
  args: InferRequestType<typeof client.getRegionMarketShare.$get>,
) {
  return ['getRegionMarketShare', '/getRegionMarketShare', args] as const
}

export function useGetGetRegionMarketShare<TError = unknown>(
  args: InferRequestType<typeof client.getRegionMarketShare.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>
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
        ? getGetGetRegionMarketShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRegionMarketShare.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetRegionMarketShare<TError = unknown>(
  args: InferRequestType<typeof client.getRegionMarketShare.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>
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
        ? getGetGetRegionMarketShareKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.getRegionMarketShare.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRegionMarketShare.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetRegionsKey(args: InferRequestType<typeof client.getRegions.$get>) {
  return ['getRegions', '/getRegions', args] as const
}

export function useGetGetRegions<TError = unknown>(
  args: InferRequestType<typeof client.getRegions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRegions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetRegions<TError = unknown>(
  args: InferRequestType<typeof client.getRegions.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetRegionsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getRegions.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getRegions.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetSubUserKeysKey(args: InferRequestType<typeof client.getSubUserKeys.$get>) {
  return ['getSubUserKeys', '/getSubUserKeys', args] as const
}

export function useGetGetSubUserKeys<TError = unknown>(
  args: InferRequestType<typeof client.getSubUserKeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetSubUserKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getSubUserKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetGetSubUserKeys<TError = unknown>(
  args: InferRequestType<typeof client.getSubUserKeys.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetSubUserKeysKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getSubUserKeys.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.getSubUserKeys.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetGetTokenKey(args: InferRequestType<typeof client.getToken.$get>) {
  return ['getToken', '/getToken', args] as const
}

export function useGetGetToken<TError = unknown>(
  args: InferRequestType<typeof client.getToken.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.getToken.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetGetToken<TError = unknown>(
  args: InferRequestType<typeof client.getToken.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetGetTokenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.getToken.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getPostGetTokenKey() {
  return ['getToken', '/getToken', 'POST'] as const
}

export function usePostGetToken<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.getToken.$post>>>>>,
    TError,
    Key,
    InferRequestType<typeof client.getToken.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostGetTokenKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.getToken.$post> }) =>
        parseResponse(client.getToken.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetListPriceKey(args: InferRequestType<typeof client.listPrice.$get>) {
  return ['listPrice', '/listPrice', args] as const
}

export function useGetListPrice<TError = unknown>(
  args: InferRequestType<typeof client.listPrice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListPriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listPrice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListPrice<TError = unknown>(
  args: InferRequestType<typeof client.listPrice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListPriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listPrice.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listPrice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingsKey(args: InferRequestType<typeof client.listings.$get>) {
  return ['listings', '/listings', args] as const
}

export function useGetListings<TError = unknown>(
  args: InferRequestType<typeof client.listings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.listings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function useImmutableGetListings<TError = unknown>(
  args: InferRequestType<typeof client.listings.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings.$get>>>>>,
      TError
    >(swrKey, async () => parseResponse(client.listings.$get(args, clientOptions)), restSwrOptions),
  }
}

export function getGetListings2Key(args: InferRequestType<typeof client.listings2.$get>) {
  return ['listings2', '/listings2', args] as const
}

export function useGetListings2<TError = unknown>(
  args: InferRequestType<typeof client.listings2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListings2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListings2<TError = unknown>(
  args: InferRequestType<typeof client.listings2.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListings2Key(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listings2.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listings2.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingsByDateKey(args: InferRequestType<typeof client.listingsByDate.$get>) {
  return ['listingsByDate', '/listingsByDate', args] as const
}

export function useGetListingsByDate<TError = unknown>(
  args: InferRequestType<typeof client.listingsByDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingsByDateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listingsByDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsByDate<TError = unknown>(
  args: InferRequestType<typeof client.listingsByDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetListingsByDateKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByDate.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listingsByDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingsByRegionKey(
  args: InferRequestType<typeof client.listingsByRegion.$get>,
) {
  return ['listingsByRegion', '/listingsByRegion', args] as const
}

export function useGetListingsByRegion<TError = unknown>(
  args: InferRequestType<typeof client.listingsByRegion.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
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
        ? getGetListingsByRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listingsByRegion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsByRegion<TError = unknown>(
  args: InferRequestType<typeof client.listingsByRegion.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
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
        ? getGetListingsByRegionKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegion.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listingsByRegion.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingsByRegionAndDateKey(
  args: InferRequestType<typeof client.listingsByRegionAndDate.$get>,
) {
  return ['listingsByRegionAndDate', '/listingsByRegionAndDate', args] as const
}

export function useGetListingsByRegionAndDate<TError = unknown>(
  args: InferRequestType<typeof client.listingsByRegionAndDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
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
        ? getGetListingsByRegionAndDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listingsByRegionAndDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsByRegionAndDate<TError = unknown>(
  args: InferRequestType<typeof client.listingsByRegionAndDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
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
        ? getGetListingsByRegionAndDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listingsByRegionAndDate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listingsByRegionAndDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingsByZipCodeKey(
  args: InferRequestType<typeof client.listingsByZipCode.$get>,
) {
  return ['listingsByZipCode', '/listingsByZipCode', args] as const
}

export function useGetListingsByZipCode<TError = unknown>(
  args: InferRequestType<typeof client.listingsByZipCode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
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
        ? getGetListingsByZipCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listingsByZipCode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsByZipCode<TError = unknown>(
  args: InferRequestType<typeof client.listingsByZipCode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
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
        ? getGetListingsByZipCodeKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCode.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listingsByZipCode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetListingsByZipCodeAndDateKey(
  args: InferRequestType<typeof client.listingsByZipCodeAndDate.$get>,
) {
  return ['listingsByZipCodeAndDate', '/listingsByZipCodeAndDate', args] as const
}

export function useGetListingsByZipCodeAndDate<TError = unknown>(
  args: InferRequestType<typeof client.listingsByZipCodeAndDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
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
        ? getGetListingsByZipCodeAndDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listingsByZipCodeAndDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetListingsByZipCodeAndDate<TError = unknown>(
  args: InferRequestType<typeof client.listingsByZipCodeAndDate.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
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
        ? getGetListingsByZipCodeAndDateKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<
          typeof parseResponse<Awaited<ReturnType<typeof client.listingsByZipCodeAndDate.$get>>>
        >
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.listingsByZipCodeAndDate.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPostMakeSubUserKeyKey() {
  return ['makeSubUserKey', '/makeSubUserKey', 'POST'] as const
}

export function usePostMakeSubUserKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.makeSubUserKey.$post>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.makeSubUserKey.$post>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPostMakeSubUserKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.makeSubUserKey.$post> }) =>
        parseResponse(client.makeSubUserKey.$post(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetModelYearDistKey(args: InferRequestType<typeof client.modelYearDist.$get>) {
  return ['modelYearDist', '/modelYearDist', args] as const
}

export function useGetModelYearDist<TError = unknown>(
  args: InferRequestType<typeof client.modelYearDist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelYearDistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.modelYearDist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetModelYearDist<TError = unknown>(
  args: InferRequestType<typeof client.modelYearDist.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetModelYearDistKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.modelYearDist.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.modelYearDist.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegionDailySalesKey(
  args: InferRequestType<typeof client.regionDailySales.$get>,
) {
  return ['regionDailySales', '/regionDailySales', args] as const
}

export function useGetRegionDailySales<TError = unknown>(
  args: InferRequestType<typeof client.regionDailySales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
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
        ? getGetRegionDailySalesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regionDailySales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegionDailySales<TError = unknown>(
  args: InferRequestType<typeof client.regionDailySales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
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
        ? getGetRegionDailySalesKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionDailySales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regionDailySales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetRegionSalesKey(args: InferRequestType<typeof client.regionSales.$get>) {
  return ['regionSales', '/regionSales', args] as const
}

export function useGetRegionSales<TError = unknown>(
  args: InferRequestType<typeof client.regionSales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionSalesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regionSales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetRegionSales<TError = unknown>(
  args: InferRequestType<typeof client.regionSales.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetRegionSalesKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.regionSales.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.regionSales.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getPutRevokeSubUserKeyKey() {
  return ['revokeSubUserKey', '/revokeSubUserKey', 'PUT'] as const
}

export function usePutRevokeSubUserKey<TError = unknown>(options?: {
  mutation?: SWRMutationConfiguration<
    Awaited<
      ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.revokeSubUserKey.$put>>>>
    >,
    TError,
    Key,
    InferRequestType<typeof client.revokeSubUserKey.$put>
  > & { swrKey?: Key; throwOnError?: boolean }
  options?: ClientRequestOptions
}) {
  const { mutation: mutationOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, ...restMutationOptions } = mutationOptions ?? {}
  const swrKey = customKey ?? getPutRevokeSubUserKeyKey()
  return {
    swrKey,
    ...useSWRMutation(
      swrKey,
      async (_: Key, { arg }: { arg: InferRequestType<typeof client.revokeSubUserKey.$put> }) =>
        parseResponse(client.revokeSubUserKey.$put(arg, clientOptions)),
      restMutationOptions,
    ),
  }
}

export function getGetSalePriceKey(args: InferRequestType<typeof client.salePrice.$get>) {
  return ['salePrice', '/salePrice', args] as const
}

export function useGetSalePrice<TError = unknown>(
  args: InferRequestType<typeof client.salePrice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalePriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.salePrice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalePrice<TError = unknown>(
  args: InferRequestType<typeof client.salePrice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetSalePriceKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePrice.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.salePrice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSalePriceHistogramKey(
  args: InferRequestType<typeof client.salePriceHistogram.$get>,
) {
  return ['salePriceHistogram', '/salePriceHistogram', args] as const
}

export function useGetSalePriceHistogram<TError = unknown>(
  args: InferRequestType<typeof client.salePriceHistogram.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
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
        ? getGetSalePriceHistogramKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.salePriceHistogram.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSalePriceHistogram<TError = unknown>(
  args: InferRequestType<typeof client.salePriceHistogram.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
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
        ? getGetSalePriceHistogramKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.salePriceHistogram.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.salePriceHistogram.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetSimilarSalePriceKey(
  args: InferRequestType<typeof client.similarSalePrice.$get>,
) {
  return ['similarSalePrice', '/similarSalePrice', args] as const
}

export function useGetSimilarSalePrice<TError = unknown>(
  args: InferRequestType<typeof client.similarSalePrice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
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
        ? getGetSimilarSalePriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.similarSalePrice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetSimilarSalePrice<TError = unknown>(
  args: InferRequestType<typeof client.similarSalePrice.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
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
        ? getGetSimilarSalePriceKey(args)
        : customKey
      : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.similarSalePrice.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.similarSalePrice.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetTopModelsKey(args: InferRequestType<typeof client.topModels.$get>) {
  return ['topModels', '/topModels', args] as const
}

export function useGetTopModels<TError = unknown>(
  args: InferRequestType<typeof client.topModels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topModels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetTopModels<TError = unknown>(
  args: InferRequestType<typeof client.topModels.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetTopModelsKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.topModels.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.topModels.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetValuationKey(args: InferRequestType<typeof client.valuation.$get>) {
  return ['valuation', '/valuation', args] as const
}

export function useGetValuation<TError = unknown>(
  args: InferRequestType<typeof client.valuation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetValuationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.valuation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetValuation<TError = unknown>(
  args: InferRequestType<typeof client.valuation.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetValuationKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.valuation.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.valuation.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVehicleHistoryKey(args: InferRequestType<typeof client.vehicleHistory.$get>) {
  return ['vehicleHistory', '/vehicleHistory', args] as const
}

export function useGetVehicleHistory<TError = unknown>(
  args: InferRequestType<typeof client.vehicleHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVehicleHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vehicleHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVehicleHistory<TError = unknown>(
  args: InferRequestType<typeof client.vehicleHistory.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVehicleHistoryKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleHistory.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vehicleHistory.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVehicleSeenKey(args: InferRequestType<typeof client.vehicleSeen.$get>) {
  return ['vehicleSeen', '/vehicleSeen', args] as const
}

export function useGetVehicleSeen<TError = unknown>(
  args: InferRequestType<typeof client.vehicleSeen.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVehicleSeenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vehicleSeen.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVehicleSeen<TError = unknown>(
  args: InferRequestType<typeof client.vehicleSeen.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
      >,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVehicleSeenKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<
        ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vehicleSeen.$get>>>>
      >,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vehicleSeen.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function getGetVinDecodeKey(args: InferRequestType<typeof client.vinDecode.$get>) {
  return ['vinDecode', '/vinDecode', args] as const
}

export function useGetVinDecode<TError = unknown>(
  args: InferRequestType<typeof client.vinDecode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVinDecodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWR<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vinDecode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}

export function useImmutableGetVinDecode<TError = unknown>(
  args: InferRequestType<typeof client.vinDecode.$get>,
  options?: {
    swr?: SWRConfiguration<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>>,
      TError
    > & { swrKey?: Key; enabled?: boolean }
    options?: ClientRequestOptions
  },
) {
  const { swr: swrOptions, options: clientOptions } = options ?? {}
  const { swrKey: customKey, enabled, ...restSwrOptions } = swrOptions ?? {}
  const swrKey =
    enabled !== false ? (customKey === undefined ? getGetVinDecodeKey(args) : customKey) : null
  return {
    swrKey,
    ...useSWRImmutable<
      Awaited<ReturnType<typeof parseResponse<Awaited<ReturnType<typeof client.vinDecode.$get>>>>>,
      TError
    >(
      swrKey,
      async () => parseResponse(client.vinDecode.$get(args, clientOptions)),
      restSwrOptions,
    ),
  }
}
