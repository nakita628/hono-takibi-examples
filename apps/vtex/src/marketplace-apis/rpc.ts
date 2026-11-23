import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postNotificatorSellerIdChangenotificationSkuIdInventory(
  args: InferRequestType<
    (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['inventory']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notificator[':sellerId'].changenotification[':skuId'].inventory.$post(args, options),
  )
}

export async function postNotificatorSellerIdChangenotificationSkuIdPrice(
  args: InferRequestType<
    (typeof client.notificator)[':sellerId']['changenotification'][':skuId']['price']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.notificator[':sellerId'].changenotification[':skuId'].price.$post(args, options),
  )
}

export async function getOfferManagerPvtOffers(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['offers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['offer-manager'].pvt.offers.$get(args, options))
}

export async function getOfferManagerPvtProductProductId(
  args: InferRequestType<(typeof client)['offer-manager']['pvt']['product'][':productId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['offer-manager'].pvt.product[':productId'].$get(args, options))
}

export async function getOfferManagerPvtProductProductIdSkuSkuId(
  args: InferRequestType<
    (typeof client)['offer-manager']['pvt']['product'][':productId']['sku'][':skuId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['offer-manager'].pvt.product[':productId'].sku[':skuId'].$get(args, options),
  )
}

export async function getSellerRegisterPvtSellerLeads(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['seller-register'].pvt['seller-leads'].$get(args, options))
}

export async function postSellerRegisterPvtSellerLeads(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['seller-leads']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['seller-register'].pvt['seller-leads'].$post(args, options))
}

export async function getSellerRegisterPvtSellerLeadsSellerLeadId(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$get(args, options),
  )
}

export async function putSellerRegisterPvtSellerLeadsSellerLeadId(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$put(args, options),
  )
}

export async function deleteSellerRegisterPvtSellerLeadsSellerLeadId(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt['seller-leads'][':sellerLeadId'].$delete(args, options),
  )
}

export async function putSellerRegisterPvtSellerLeadsSellerLeadIdSeller(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['seller']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt['seller-leads'][':sellerLeadId'].seller.$put(args, options),
  )
}

export async function putSellerRegisterPvtSellerLeadsSellerLeadIdStatus(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['seller-leads'][':sellerLeadId']['status']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt['seller-leads'][':sellerLeadId'].status.$put(args, options),
  )
}

export async function getSellerRegisterPvtSellers(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['seller-register'].pvt.sellers.$get(args, options))
}

export async function postSellerRegisterPvtSellers(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['seller-register'].pvt.sellers.$post(args, options))
}

export async function getSellerRegisterPvtSellersSellerId(
  args: InferRequestType<(typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['seller-register'].pvt.sellers[':sellerId'].$get(args, options))
}

export async function patchSellerRegisterPvtSellersSellerId(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['$patch']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt.sellers[':sellerId'].$patch(args, options),
  )
}

export async function getSellerRegisterPvtSellersSellerIdCommissions(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt.sellers[':sellerId'].commissions.$get(args, options),
  )
}

export async function putSellerRegisterPvtSellersSellerIdCommissionsCategories(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions']['categories']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt.sellers[':sellerId'].commissions.categories.$put(args, options),
  )
}

export async function getSellerRegisterPvtSellersSellerIdCommissionsCategoryId(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$get(
      args,
      options,
    ),
  )
}

export async function putSellerRegisterPvtSellersSellerIdCommissionsCategoryId(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$put(
      args,
      options,
    ),
  )
}

export async function deleteSellerRegisterPvtSellersSellerIdCommissionsCategoryId(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['commissions'][':categoryId']['$delete']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt.sellers[':sellerId'].commissions[':categoryId'].$delete(
      args,
      options,
    ),
  )
}

export async function getSellerRegisterPvtSellersSellerIdSalesChannelMapping(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt.sellers[':sellerId']['sales-channel'].mapping.$get(args, options),
  )
}

export async function putSellerRegisterPvtSellersSellerIdSalesChannelMapping(
  args: InferRequestType<
    (typeof client)['seller-register']['pvt']['sellers'][':sellerId']['sales-channel']['mapping']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['seller-register'].pvt.sellers[':sellerId']['sales-channel'].mapping.$put(args, options),
  )
}
