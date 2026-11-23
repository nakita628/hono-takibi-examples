import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postApiRnbPubNotifications(
  args: InferRequestType<typeof client.api.rnb.pub.notifications.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pub.notifications.$post(args, options))
}

export async function getApiRnbPvtArchiveBenefitsCalculatorConfiguration(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rnb.pvt.archive.benefits.calculatorConfiguration.$get(args, options),
  )
}

export async function postApiRnbPvtArchiveCalculatorConfigurationIdCalculatorConfiguration(
  args: InferRequestType<
    (typeof client.api.rnb.pvt.archive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rnb.pvt.archive.calculatorConfiguration[':idCalculatorConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function getApiRnbPvtArchiveCouponCouponCode(
  args: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.archive.coupon[':couponCode'].$get(args, options))
}

export async function postApiRnbPvtArchiveCouponCouponCode(
  args: InferRequestType<(typeof client.api.rnb.pvt.archive.coupon)[':couponCode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.archive.coupon[':couponCode'].$post(args, options))
}

export async function getApiRnbPvtArchiveTaxesCalculatorConfiguration(
  args: InferRequestType<typeof client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rnb.pvt.archive.taxes.calculatorConfiguration.$get(args, options),
  )
}

export async function getApiRnbPvtBenefitsCalculatorconfiguration(
  args: InferRequestType<typeof client.api.rnb.pvt.benefits.calculatorconfiguration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rnb.pvt.benefits.calculatorconfiguration.$get(args, options),
  )
}

export async function postApiRnbPvtCalculatorconfiguration(
  args: InferRequestType<typeof client.api.rnb.pvt.calculatorconfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.calculatorconfiguration.$post(args, options))
}

export async function getApiRnbPvtCalculatorconfigurationIdCalculatorConfiguration(
  args: InferRequestType<
    (typeof client.api.rnb.pvt.calculatorconfiguration)[':idCalculatorConfiguration']['$get']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rnb.pvt.calculatorconfiguration[':idCalculatorConfiguration'].$get(args, options),
  )
}

export async function getApiRnbPvtCampaignConfiguration(
  args: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.campaignConfiguration.$get(args, options))
}

export async function postApiRnbPvtCampaignConfiguration(
  args: InferRequestType<typeof client.api.rnb.pvt.campaignConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.campaignConfiguration.$post(args, options))
}

export async function getApiRnbPvtCampaignConfigurationCampaignId(
  args: InferRequestType<(typeof client.api.rnb.pvt.campaignConfiguration)[':campaignId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rnb.pvt.campaignConfiguration[':campaignId'].$get(args, options),
  )
}

export async function getApiRnbPvtCoupon(
  args: InferRequestType<typeof client.api.rnb.pvt.coupon.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.coupon.$get(args, options))
}

export async function postApiRnbPvtCoupon(
  args: InferRequestType<typeof client.api.rnb.pvt.coupon.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.coupon.$post(args, options))
}

export async function postApiRnbPvtCouponIndex(
  args: InferRequestType<typeof client.api.rnb.pvt.coupon.index.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.coupon.index.$post(args, options))
}

export async function getApiRnbPvtCouponUsageCouponCode(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon.usage)[':couponCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.coupon.usage[':couponCode'].$get(args, options))
}

export async function getApiRnbPvtCouponCouponCode(
  args: InferRequestType<(typeof client.api.rnb.pvt.coupon)[':couponCode']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.coupon[':couponCode'].$get(args, options))
}

export async function postApiRnbPvtCoupons(
  args: InferRequestType<typeof client.api.rnb.pvt.coupons.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.coupons.$post(args, options))
}

export async function postApiRnbPvtImportCalculatorConfiguration(
  args: InferRequestType<typeof client.api.rnb.pvt.import.calculatorConfiguration.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.import.calculatorConfiguration.$post(args, options))
}

export async function putApiRnbPvtImportCalculatorConfigurationPromotionId(
  args: InferRequestType<
    (typeof client.api.rnb.pvt.import.calculatorConfiguration)[':promotionId']['$put']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rnb.pvt.import.calculatorConfiguration[':promotionId'].$put(args, options),
  )
}

export async function postApiRnbPvtMultipleCoupons(
  args: InferRequestType<(typeof client.api.rnb.pvt)['multiple-coupons']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt['multiple-coupons'].$post(args, options))
}

export async function getApiRnbPvtTaxesCalculatorconfiguration(
  args: InferRequestType<typeof client.api.rnb.pvt.taxes.calculatorconfiguration.$get>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.api.rnb.pvt.taxes.calculatorconfiguration.$get(args, options))
}

export async function postApiRnbPvtUnarchiveCalculatorConfigurationIdCalculatorConfiguration(
  args: InferRequestType<
    (typeof client.api.rnb.pvt.unarchive.calculatorConfiguration)[':idCalculatorConfiguration']['$post']
  >,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rnb.pvt.unarchive.calculatorConfiguration[':idCalculatorConfiguration'].$post(
      args,
      options,
    ),
  )
}

export async function postApiRnbPvtUnarchiveCouponCouponCode(
  args: InferRequestType<(typeof client.api.rnb.pvt.unarchive.coupon)[':couponCode']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client.api.rnb.pvt.unarchive.coupon[':couponCode'].$post(args, options),
  )
}

export async function postPriceSheet(
  args: InferRequestType<(typeof client)['price-sheet']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['price-sheet'].$post(args, options))
}

export async function getPriceSheetAllPagePageSize(
  args: InferRequestType<(typeof client)['price-sheet']['all'][':page'][':pageSize']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['price-sheet'].all[':page'][':pageSize'].$get(args, options))
}

export async function postPriceSheetContext(
  args: InferRequestType<(typeof client)['price-sheet']['context']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['price-sheet'].context.$post(args, options))
}

export async function getPriceSheetSkuId(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['price-sheet'][':skuId'].$get(args, options))
}

export async function deletePriceSheetSkuId(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['price-sheet'][':skuId'].$delete(args, options))
}

export async function getPriceSheetSkuIdTradePolicy(
  args: InferRequestType<(typeof client)['price-sheet'][':skuId'][':tradePolicy']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['price-sheet'][':skuId'][':tradePolicy'].$get(args, options))
}

export async function postPubBundles(
  args: InferRequestType<typeof client.pub.bundles.$post>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client.pub.bundles.$post(args, options))
}
