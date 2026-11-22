import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function getCarDealerInventoryActive(
  args: InferRequestType<typeof client.car.dealer.inventory.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.car.dealer.inventory.active.$get(args, options))
}

export async function getCarRecallVin(
  args: InferRequestType<(typeof client.car.recall)[':vin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.car.recall[':vin'].$get(args, options))
}

export async function getClientConfigureGet(
  args: InferRequestType<typeof client.client.configure.get.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client.configure.get.$get(args, options))
}

export async function postClientConfigureSet(
  args: InferRequestType<typeof client.client.configure.set.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.client.configure.set.$post(args, options))
}

export async function getCrmCheckCarVin(
  args: InferRequestType<(typeof client.crm_check.car)[':vin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.crm_check.car[':vin'].$get(args, options))
}

export async function getDealerCarUkId(
  args: InferRequestType<(typeof client.dealer.car.uk)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dealer.car.uk[':id'].$get(args, options))
}

export async function getDealerCarId(
  args: InferRequestType<(typeof client.dealer.car)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dealer.car[':id'].$get(args, options))
}

export async function getDealerHeavyEquipmentId(
  args: InferRequestType<(typeof client.dealer)['heavy-equipment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dealer['heavy-equipment'][':id'].$get(args, options))
}

export async function getDealerMotorcycleId(
  args: InferRequestType<(typeof client.dealer.motorcycle)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dealer.motorcycle[':id'].$get(args, options))
}

export async function getDealerRvId(
  args: InferRequestType<(typeof client.dealer.rv)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dealer.rv[':id'].$get(args, options))
}

export async function getDealersCar(
  args: InferRequestType<typeof client.dealers.car.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dealers.car.$get(args, options))
}

export async function getDealersCarUk(
  args: InferRequestType<typeof client.dealers.car.uk.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dealers.car.uk.$get(args, options))
}

export async function getDealersHeavyEquipment(
  args: InferRequestType<(typeof client.dealers)['heavy-equipment']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dealers['heavy-equipment'].$get(args, options))
}

export async function getDealersMotorcycle(
  args: InferRequestType<typeof client.dealers.motorcycle.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dealers.motorcycle.$get(args, options))
}

export async function getDealersRv(
  args: InferRequestType<typeof client.dealers.rv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.dealers.rv.$get(args, options))
}

export async function getDecodeCarEpiVinSpecs(
  args: InferRequestType<(typeof client.decode.car.epi)[':vin']['specs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.decode.car.epi[':vin'].specs.$get(args, options))
}

export async function getDecodeCarNeovinVinSpecs(
  args: InferRequestType<(typeof client.decode.car.neovin)[':vin']['specs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.decode.car.neovin[':vin'].specs.$get(args, options))
}

export async function getDecodeCarVinSpecs(
  args: InferRequestType<(typeof client.decode.car)[':vin']['specs']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.decode.car[':vin'].specs.$get(args, options))
}

export async function getHistoryCarUkVrm(
  args: InferRequestType<(typeof client.history.car.uk)[':vrm']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.car.uk[':vrm'].$get(args, options))
}

export async function getHistoryCarVin(
  args: InferRequestType<(typeof client.history.car)[':vin']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.history.car[':vin'].$get(args, options))
}

export async function getImageCacheCarListingIDImageID(
  args: InferRequestType<(typeof client.image.cache.car)[':listingID'][':imageID']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.image.cache.car[':listingID'][':imageID'].$get(args, options))
}

export async function getListingCarAuctionId(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car.auction[':id'].$get(args, options))
}

export async function getListingCarAuctionIdExtra(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car.auction[':id'].extra.$get(args, options))
}

export async function getListingCarAuctionIdMedia(
  args: InferRequestType<(typeof client.listing.car.auction)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car.auction[':id'].media.$get(args, options))
}

export async function getListingCarFsboId(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car.fsbo[':id'].$get(args, options))
}

export async function getListingCarFsboIdExtra(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car.fsbo[':id'].extra.$get(args, options))
}

export async function getListingCarFsboIdMedia(
  args: InferRequestType<(typeof client.listing.car.fsbo)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car.fsbo[':id'].media.$get(args, options))
}

export async function getListingCarUkId(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car.uk[':id'].$get(args, options))
}

export async function getListingCarUkIdExtra(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car.uk[':id'].extra.$get(args, options))
}

export async function getListingCarUkIdMedia(
  args: InferRequestType<(typeof client.listing.car.uk)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car.uk[':id'].media.$get(args, options))
}

export async function getListingCarId(
  args: InferRequestType<(typeof client.listing.car)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car[':id'].$get(args, options))
}

export async function getListingCarIdExtra(
  args: InferRequestType<(typeof client.listing.car)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car[':id'].extra.$get(args, options))
}

export async function getListingCarIdMedia(
  args: InferRequestType<(typeof client.listing.car)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.car[':id'].media.$get(args, options))
}

export async function getListingHeavyEquipmentId(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing['heavy-equipment'][':id'].$get(args, options))
}

export async function getListingHeavyEquipmentIdExtra(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing['heavy-equipment'][':id'].extra.$get(args, options))
}

export async function getListingHeavyEquipmentIdMedia(
  args: InferRequestType<(typeof client.listing)['heavy-equipment'][':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing['heavy-equipment'][':id'].media.$get(args, options))
}

export async function getListingMotorcycleId(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.motorcycle[':id'].$get(args, options))
}

export async function getListingMotorcycleIdExtra(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.motorcycle[':id'].extra.$get(args, options))
}

export async function getListingMotorcycleIdMedia(
  args: InferRequestType<(typeof client.listing.motorcycle)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.motorcycle[':id'].media.$get(args, options))
}

export async function getListingRvUkId(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.rv.uk[':id'].$get(args, options))
}

export async function getListingRvUkIdExtra(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.rv.uk[':id'].extra.$get(args, options))
}

export async function getListingRvUkIdMedia(
  args: InferRequestType<(typeof client.listing.rv.uk)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.rv.uk[':id'].media.$get(args, options))
}

export async function getListingRvId(
  args: InferRequestType<(typeof client.listing.rv)[':id']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.rv[':id'].$get(args, options))
}

export async function getListingRvIdExtra(
  args: InferRequestType<(typeof client.listing.rv)[':id']['extra']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.rv[':id'].extra.$get(args, options))
}

export async function getListingRvIdMedia(
  args: InferRequestType<(typeof client.listing.rv)[':id']['media']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.listing.rv[':id'].media.$get(args, options))
}

export async function getMdsCar(
  args: InferRequestType<typeof client.mds.car.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.mds.car.$get(args, options))
}

export async function getPopularCars(
  args: InferRequestType<typeof client.popular.cars.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.popular.cars.$get(args, options))
}

export async function getPredictCarPrice(
  args: InferRequestType<typeof client.predict.car.price.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predict.car.price.$get(args, options))
}

export async function getPredictCarUkFmv(
  args: InferRequestType<typeof client.predict.car.uk.fmv.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predict.car.uk.fmv.$get(args, options))
}

export async function getPredictCarUkPrice(
  args: InferRequestType<typeof client.predict.car.uk.price.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.predict.car.uk.price.$get(args, options))
}

export async function getSalesCar(
  args: InferRequestType<typeof client.sales.car.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.sales.car.$get(args, options))
}

export async function getSearchCarActive(
  args: InferRequestType<typeof client.search.car.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.car.active.$get(args, options))
}

export async function postSearchCarActiveRank(
  args: InferRequestType<typeof client.search.car.active.rank.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.car.active.rank.$post(args, options))
}

export async function postSearchCarActiveRankListings(
  args: InferRequestType<typeof client.search.car.active.rank.listings.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.car.active.rank.listings.$post(args, options))
}

export async function getSearchCarAuctionActive(
  args: InferRequestType<typeof client.search.car.auction.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.car.auction.active.$get(args, options))
}

export async function getSearchCarAutoComplete(
  args: InferRequestType<(typeof client.search.car)['auto-complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.car['auto-complete'].$get(args, options))
}

export async function getSearchCarFsboActive(
  args: InferRequestType<typeof client.search.car.fsbo.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.car.fsbo.active.$get(args, options))
}

export async function getSearchCarIncentiveOem(
  args: InferRequestType<typeof client.search.car.incentive.oem.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.car.incentive.oem.$get(args, options))
}

export async function getSearchCarRecents(
  args: InferRequestType<typeof client.search.car.recents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.car.recents.$get(args, options))
}

export async function getSearchCarUkActive(
  args: InferRequestType<typeof client.search.car.uk.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.car.uk.active.$get(args, options))
}

export async function getSearchCarUkRecents(
  args: InferRequestType<typeof client.search.car.uk.recents.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.car.uk.recents.$get(args, options))
}

export async function getSearchHeavyEquipmentActive(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['active']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search['heavy-equipment'].active.$get(args, options))
}

export async function getSearchHeavyEquipmentAutoComplete(
  args: InferRequestType<(typeof client.search)['heavy-equipment']['auto-complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search['heavy-equipment']['auto-complete'].$get(args, options))
}

export async function getSearchMotorcycleActive(
  args: InferRequestType<typeof client.search.motorcycle.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.motorcycle.active.$get(args, options))
}

export async function getSearchMotorcycleAutoComplete(
  args: InferRequestType<(typeof client.search.motorcycle)['auto-complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.motorcycle['auto-complete'].$get(args, options))
}

export async function getSearchRvActive(
  args: InferRequestType<typeof client.search.rv.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.rv.active.$get(args, options))
}

export async function getSearchRvAutoComplete(
  args: InferRequestType<(typeof client.search.rv)['auto-complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.rv['auto-complete'].$get(args, options))
}

export async function getSearchRvUkActive(
  args: InferRequestType<typeof client.search.rv.uk.active.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.search.rv.uk.active.$get(args, options))
}

export async function getSpecsCarAutoComplete(
  args: InferRequestType<(typeof client.specs.car)['auto-complete']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.specs.car['auto-complete'].$get(args, options))
}

export async function getSpecsCarTerms(
  args: InferRequestType<typeof client.specs.car.terms.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.specs.car.terms.$get(args, options))
}

export async function getStatsCar(
  args: InferRequestType<typeof client.stats.car.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.stats.car.$get(args, options))
}
