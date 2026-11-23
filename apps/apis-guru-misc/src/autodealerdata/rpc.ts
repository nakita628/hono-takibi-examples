import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getDaysSupply(
  args: InferRequestType<typeof client.daysSupply.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.daysSupply.$get(args, options))
}

export async function getDaysToSell(
  args: InferRequestType<typeof client.daysToSell.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.daysToSell.$get(args, options))
}

export async function getGetBrands(
  args: InferRequestType<typeof client.getBrands.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getBrands.$get(args, options))
}

export async function getGetDealers(
  args: InferRequestType<typeof client.getDealers.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getDealers.$get(args, options))
}

export async function getGetDealersByID(
  args: InferRequestType<typeof client.getDealersByID.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getDealersByID.$get(args, options))
}

export async function getGetDealersByRegion(
  args: InferRequestType<typeof client.getDealersByRegion.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getDealersByRegion.$get(args, options))
}

export async function getGetInactiveModels(
  args: InferRequestType<typeof client.getInactiveModels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getInactiveModels.$get(args, options))
}

export async function getGetModels(
  args: InferRequestType<typeof client.getModels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getModels.$get(args, options))
}

export async function getGetRegionBrandMarketShare(
  args: InferRequestType<typeof client.getRegionBrandMarketShare.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getRegionBrandMarketShare.$get(args, options))
}

export async function getGetRegionMarketShare(
  args: InferRequestType<typeof client.getRegionMarketShare.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getRegionMarketShare.$get(args, options))
}

export async function getGetRegions(
  args: InferRequestType<typeof client.getRegions.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getRegions.$get(args, options))
}

export async function getGetSubUserKeys(
  args: InferRequestType<typeof client.getSubUserKeys.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getSubUserKeys.$get(args, options))
}

export async function getGetToken(
  args: InferRequestType<typeof client.getToken.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getToken.$get(args, options))
}

export async function postGetToken(
  args: InferRequestType<typeof client.getToken.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.getToken.$post(args, options))
}

export async function getListPrice(
  args: InferRequestType<typeof client.listPrice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listPrice.$get(args, options))
}

export async function getListings(
  args: InferRequestType<typeof client.listings.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings.$get(args, options))
}

export async function getListings2(
  args: InferRequestType<typeof client.listings2.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listings2.$get(args, options))
}

export async function getListingsByDate(
  args: InferRequestType<typeof client.listingsByDate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listingsByDate.$get(args, options))
}

export async function getListingsByRegion(
  args: InferRequestType<typeof client.listingsByRegion.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listingsByRegion.$get(args, options))
}

export async function getListingsByRegionAndDate(
  args: InferRequestType<typeof client.listingsByRegionAndDate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listingsByRegionAndDate.$get(args, options))
}

export async function getListingsByZipCode(
  args: InferRequestType<typeof client.listingsByZipCode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listingsByZipCode.$get(args, options))
}

export async function getListingsByZipCodeAndDate(
  args: InferRequestType<typeof client.listingsByZipCodeAndDate.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listingsByZipCodeAndDate.$get(args, options))
}

export async function postMakeSubUserKey(
  args: InferRequestType<typeof client.makeSubUserKey.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.makeSubUserKey.$post(args, options))
}

export async function getModelYearDist(
  args: InferRequestType<typeof client.modelYearDist.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.modelYearDist.$get(args, options))
}

export async function getRegionDailySales(
  args: InferRequestType<typeof client.regionDailySales.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regionDailySales.$get(args, options))
}

export async function getRegionSales(
  args: InferRequestType<typeof client.regionSales.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.regionSales.$get(args, options))
}

export async function putRevokeSubUserKey(
  args: InferRequestType<typeof client.revokeSubUserKey.$put>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.revokeSubUserKey.$put(args, options))
}

export async function getSalePrice(
  args: InferRequestType<typeof client.salePrice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.salePrice.$get(args, options))
}

export async function getSalePriceHistogram(
  args: InferRequestType<typeof client.salePriceHistogram.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.salePriceHistogram.$get(args, options))
}

export async function getSimilarSalePrice(
  args: InferRequestType<typeof client.similarSalePrice.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.similarSalePrice.$get(args, options))
}

export async function getTopModels(
  args: InferRequestType<typeof client.topModels.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.topModels.$get(args, options))
}

export async function getValuation(
  args: InferRequestType<typeof client.valuation.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.valuation.$get(args, options))
}

export async function getVehicleHistory(
  args: InferRequestType<typeof client.vehicleHistory.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vehicleHistory.$get(args, options))
}

export async function getVehicleSeen(
  args: InferRequestType<typeof client.vehicleSeen.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vehicleSeen.$get(args, options))
}

export async function getVinDecode(
  args: InferRequestType<typeof client.vinDecode.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.vinDecode.$get(args, options))
}
