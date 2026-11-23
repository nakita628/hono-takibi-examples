import type { InferRequestType, ClientRequestOptions } from 'hono/client'
import { parseResponse } from 'hono/client'
import { client } from './client'

export async function postAccountCartAddJson(
  args: InferRequestType<(typeof client)['account.cart.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account.cart.add.json'].$post(args, options))
}

export async function getAccountCartListJson(
  args: InferRequestType<(typeof client)['account.cart.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account.cart.list.json'].$get(args, options))
}

export async function putAccountConfigUpdateJson(
  args: InferRequestType<(typeof client)['account.config.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account.config.update.json'].$put(args, options))
}

export async function getAccountFailedWebhooksJson(
  args: InferRequestType<(typeof client)['account.failed_webhooks.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['account.failed_webhooks.json'].$get(args, options))
}

export async function getAccountSupportedPlatformsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['account.supported_platforms.json'].$get(undefined, options))
}

export async function postAttributeAddJson(
  args: InferRequestType<(typeof client)['attribute.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.add.json'].$post(args, options))
}

export async function postAttributeAssignGroupJson(
  args: InferRequestType<(typeof client)['attribute.assign.group.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.assign.group.json'].$post(args, options))
}

export async function postAttributeAssignSetJson(
  args: InferRequestType<(typeof client)['attribute.assign.set.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.assign.set.json'].$post(args, options))
}

export async function getAttributeAttributesetListJson(
  args: InferRequestType<(typeof client)['attribute.attributeset.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.attributeset.list.json'].$get(args, options))
}

export async function getAttributeCountJson(
  args: InferRequestType<(typeof client)['attribute.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.count.json'].$get(args, options))
}

export async function deleteAttributeDeleteJson(
  args: InferRequestType<(typeof client)['attribute.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.delete.json'].$delete(args, options))
}

export async function getAttributeGroupListJson(
  args: InferRequestType<(typeof client)['attribute.group.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.group.list.json'].$get(args, options))
}

export async function getAttributeInfoJson(
  args: InferRequestType<(typeof client)['attribute.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.info.json'].$get(args, options))
}

export async function getAttributeListJson(
  args: InferRequestType<(typeof client)['attribute.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.list.json'].$get(args, options))
}

export async function getAttributeTypeListJson(options?: ClientRequestOptions) {
  return await parseResponse(client['attribute.type.list.json'].$get(undefined, options))
}

export async function postAttributeUnassignGroupJson(
  args: InferRequestType<(typeof client)['attribute.unassign.group.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.unassign.group.json'].$post(args, options))
}

export async function postAttributeUnassignSetJson(
  args: InferRequestType<(typeof client)['attribute.unassign.set.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.unassign.set.json'].$post(args, options))
}

export async function postAttributeUpdateJson(
  args: InferRequestType<(typeof client)['attribute.update.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['attribute.update.json'].$post(args, options))
}

export async function getBasketInfoJson(
  args: InferRequestType<(typeof client)['basket.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['basket.info.json'].$get(args, options))
}

export async function postBasketItemAddJson(
  args: InferRequestType<(typeof client)['basket.item.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['basket.item.add.json'].$post(args, options))
}

export async function postBasketLiveShippingServiceCreateJson(
  args: InferRequestType<(typeof client)['basket.live_shipping_service.create.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['basket.live_shipping_service.create.json'].$post(args, options),
  )
}

export async function deleteBasketLiveShippingServiceDeleteJson(
  args: InferRequestType<(typeof client)['basket.live_shipping_service.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(
    client['basket.live_shipping_service.delete.json'].$delete(args, options),
  )
}

export async function getBasketLiveShippingServiceListJson(
  args: InferRequestType<(typeof client)['basket.live_shipping_service.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['basket.live_shipping_service.list.json'].$get(args, options))
}

export async function postBridgeDeleteJson(options?: ClientRequestOptions) {
  return await parseResponse(client['bridge.delete.json'].$post(undefined, options))
}

export async function getBridgeDownloadFile(
  args: InferRequestType<(typeof client)['bridge.download.file']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['bridge.download.file'].$get(args, options))
}

export async function postBridgeUpdateJson(options?: ClientRequestOptions) {
  return await parseResponse(client['bridge.update.json'].$post(undefined, options))
}

export async function getCartBridgeJson(options?: ClientRequestOptions) {
  return await parseResponse(client['cart.bridge.json'].$get(undefined, options))
}

export async function getCartCatalogPriceRulesCountJson(options?: ClientRequestOptions) {
  return await parseResponse(client['cart.catalog_price_rules.count.json'].$get(undefined, options))
}

export async function getCartCatalogPriceRulesListJson(
  args: InferRequestType<(typeof client)['cart.catalog_price_rules.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.catalog_price_rules.list.json'].$get(args, options))
}

export async function postCartClearCacheJson(
  args: InferRequestType<(typeof client)['cart.clear_cache.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.clear_cache.json'].$post(args, options))
}

export async function getCartConfigJson(
  args: InferRequestType<(typeof client)['cart.config.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.config.json'].$get(args, options))
}

export async function putCartConfigUpdateJson(
  args: InferRequestType<(typeof client)['cart.config.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.config.update.json'].$put(args, options))
}

export async function postCartCouponAddJson(
  args: InferRequestType<(typeof client)['cart.coupon.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.coupon.add.json'].$post(args, options))
}

export async function postCartCouponConditionAddJson(
  args: InferRequestType<(typeof client)['cart.coupon.condition.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.coupon.condition.add.json'].$post(args, options))
}

export async function getCartCouponCountJson(
  args: InferRequestType<(typeof client)['cart.coupon.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.coupon.count.json'].$get(args, options))
}

export async function deleteCartCouponDeleteJson(
  args: InferRequestType<(typeof client)['cart.coupon.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.coupon.delete.json'].$delete(args, options))
}

export async function getCartCouponListJson(
  args: InferRequestType<(typeof client)['cart.coupon.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.coupon.list.json'].$get(args, options))
}

export async function postCartCreateJson(
  args: InferRequestType<(typeof client)['cart.create.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.create.json'].$post(args, options))
}

export async function deleteCartDeleteJson(
  args: InferRequestType<(typeof client)['cart.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.delete.json'].$delete(args, options))
}

export async function getCartDisconnectJson(
  args: InferRequestType<(typeof client)['cart.disconnect.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.disconnect.json'].$get(args, options))
}

export async function postCartGiftcardAddJson(
  args: InferRequestType<(typeof client)['cart.giftcard.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.giftcard.add.json'].$post(args, options))
}

export async function getCartGiftcardCountJson(
  args: InferRequestType<(typeof client)['cart.giftcard.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.giftcard.count.json'].$get(args, options))
}

export async function getCartGiftcardListJson(
  args: InferRequestType<(typeof client)['cart.giftcard.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.giftcard.list.json'].$get(args, options))
}

export async function getCartInfoJson(
  args: InferRequestType<(typeof client)['cart.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.info.json'].$get(args, options))
}

export async function getCartListJson(options?: ClientRequestOptions) {
  return await parseResponse(client['cart.list.json'].$get(undefined, options))
}

export async function getCartMetaDataListJson(
  args: InferRequestType<(typeof client)['cart.meta_data.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.meta_data.list.json'].$get(args, options))
}

export async function postCartMetaDataSetJson(
  args: InferRequestType<(typeof client)['cart.meta_data.set.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.meta_data.set.json'].$post(args, options))
}

export async function deleteCartMetaDataUnsetJson(
  args: InferRequestType<(typeof client)['cart.meta_data.unset.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.meta_data.unset.json'].$delete(args, options))
}

export async function getCartMethodsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['cart.methods.json'].$get(undefined, options))
}

export async function getCartPluginListJson(
  args: InferRequestType<(typeof client)['cart.plugin.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.plugin.list.json'].$get(args, options))
}

export async function postCartScriptAddJson(
  args: InferRequestType<(typeof client)['cart.script.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.script.add.json'].$post(args, options))
}

export async function deleteCartScriptDeleteJson(
  args: InferRequestType<(typeof client)['cart.script.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.script.delete.json'].$delete(args, options))
}

export async function getCartScriptListJson(
  args: InferRequestType<(typeof client)['cart.script.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.script.list.json'].$get(args, options))
}

export async function getCartShippingZonesListJson(
  args: InferRequestType<(typeof client)['cart.shipping_zones.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.shipping_zones.list.json'].$get(args, options))
}

export async function getCartValidateJson(
  args: InferRequestType<(typeof client)['cart.validate.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['cart.validate.json'].$get(args, options))
}

export async function postCategoryAddJson(
  args: InferRequestType<(typeof client)['category.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.add.json'].$post(args, options))
}

export async function postCategoryAssignJson(
  args: InferRequestType<(typeof client)['category.assign.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.assign.json'].$post(args, options))
}

export async function getCategoryCountJson(
  args: InferRequestType<(typeof client)['category.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.count.json'].$get(args, options))
}

export async function deleteCategoryDeleteJson(
  args: InferRequestType<(typeof client)['category.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.delete.json'].$delete(args, options))
}

export async function getCategoryFindJson(
  args: InferRequestType<(typeof client)['category.find.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.find.json'].$get(args, options))
}

export async function postCategoryImageAddJson(
  args: InferRequestType<(typeof client)['category.image.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.image.add.json'].$post(args, options))
}

export async function deleteCategoryImageDeleteJson(
  args: InferRequestType<(typeof client)['category.image.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.image.delete.json'].$delete(args, options))
}

export async function getCategoryInfoJson(
  args: InferRequestType<(typeof client)['category.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.info.json'].$get(args, options))
}

export async function getCategoryListJson(
  args: InferRequestType<(typeof client)['category.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.list.json'].$get(args, options))
}

export async function postCategoryUnassignJson(
  args: InferRequestType<(typeof client)['category.unassign.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.unassign.json'].$post(args, options))
}

export async function putCategoryUpdateJson(
  args: InferRequestType<(typeof client)['category.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['category.update.json'].$put(args, options))
}

export async function postCustomerAddJson(
  args: InferRequestType<(typeof client)['customer.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer.add.json'].$post(args, options))
}

export async function getCustomerAttributeListJson(
  args: InferRequestType<(typeof client)['customer.attribute.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer.attribute.list.json'].$get(args, options))
}

export async function getCustomerCountJson(
  args: InferRequestType<(typeof client)['customer.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer.count.json'].$get(args, options))
}

export async function getCustomerFindJson(
  args: InferRequestType<(typeof client)['customer.find.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer.find.json'].$get(args, options))
}

export async function postCustomerGroupAddJson(
  args: InferRequestType<(typeof client)['customer.group.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer.group.add.json'].$post(args, options))
}

export async function getCustomerGroupListJson(
  args: InferRequestType<(typeof client)['customer.group.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer.group.list.json'].$get(args, options))
}

export async function getCustomerInfoJson(
  args: InferRequestType<(typeof client)['customer.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer.info.json'].$get(args, options))
}

export async function getCustomerListJson(
  args: InferRequestType<(typeof client)['customer.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer.list.json'].$get(args, options))
}

export async function putCustomerUpdateJson(
  args: InferRequestType<(typeof client)['customer.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['customer.update.json'].$put(args, options))
}

export async function getOrderAbandonedListJson(
  args: InferRequestType<(typeof client)['order.abandoned.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.abandoned.list.json'].$get(args, options))
}

export async function postOrderAddJson(
  args: InferRequestType<(typeof client)['order.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.add.json'].$post(args, options))
}

export async function getOrderCountJson(
  args: InferRequestType<(typeof client)['order.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.count.json'].$get(args, options))
}

export async function getOrderFinancialStatusListJson(options?: ClientRequestOptions) {
  return await parseResponse(client['order.financial_status.list.json'].$get(undefined, options))
}

export async function getOrderFindJson(
  args: InferRequestType<(typeof client)['order.find.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.find.json'].$get(args, options))
}

export async function getOrderFulfillmentStatusListJson(options?: ClientRequestOptions) {
  return await parseResponse(client['order.fulfillment_status.list.json'].$get(undefined, options))
}

export async function getOrderInfoJson(
  args: InferRequestType<(typeof client)['order.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.info.json'].$get(args, options))
}

export async function getOrderListJson(
  args: InferRequestType<(typeof client)['order.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.list.json'].$get(args, options))
}

export async function postOrderPreestimateShippingListJson(
  args: InferRequestType<(typeof client)['order.preestimate_shipping.list.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.preestimate_shipping.list.json'].$post(args, options))
}

export async function postOrderRefundAddJson(
  args: InferRequestType<(typeof client)['order.refund.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.refund.add.json'].$post(args, options))
}

export async function postOrderShipmentAddJson(
  args: InferRequestType<(typeof client)['order.shipment.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.shipment.add.json'].$post(args, options))
}

export async function deleteOrderShipmentDeleteJson(
  args: InferRequestType<(typeof client)['order.shipment.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.shipment.delete.json'].$delete(args, options))
}

export async function getOrderShipmentInfoJson(
  args: InferRequestType<(typeof client)['order.shipment.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.shipment.info.json'].$get(args, options))
}

export async function getOrderShipmentListJson(
  args: InferRequestType<(typeof client)['order.shipment.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.shipment.list.json'].$get(args, options))
}

export async function postOrderShipmentTrackingAddJson(
  args: InferRequestType<(typeof client)['order.shipment.tracking.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.shipment.tracking.add.json'].$post(args, options))
}

export async function putOrderShipmentUpdateJson(
  args: InferRequestType<(typeof client)['order.shipment.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.shipment.update.json'].$put(args, options))
}

export async function getOrderStatusListJson(
  args: InferRequestType<(typeof client)['order.status.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.status.list.json'].$get(args, options))
}

export async function getOrderTransactionListJson(
  args: InferRequestType<(typeof client)['order.transaction.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.transaction.list.json'].$get(args, options))
}

export async function putOrderUpdateJson(
  args: InferRequestType<(typeof client)['order.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['order.update.json'].$put(args, options))
}

export async function postProductAddJson(
  args: InferRequestType<(typeof client)['product.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.add.json'].$post(args, options))
}

export async function getProductAttributeListJson(
  args: InferRequestType<(typeof client)['product.attribute.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.attribute.list.json'].$get(args, options))
}

export async function postProductAttributeValueSetJson(
  args: InferRequestType<(typeof client)['product.attribute.value.set.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.attribute.value.set.json'].$post(args, options))
}

export async function postProductAttributeValueUnsetJson(
  args: InferRequestType<(typeof client)['product.attribute.value.unset.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.attribute.value.unset.json'].$post(args, options))
}

export async function getProductBrandListJson(
  args: InferRequestType<(typeof client)['product.brand.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.brand.list.json'].$get(args, options))
}

export async function getProductChildItemFindJson(
  args: InferRequestType<(typeof client)['product.child_item.find.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.child_item.find.json'].$get(args, options))
}

export async function getProductChildItemInfoJson(
  args: InferRequestType<(typeof client)['product.child_item.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.child_item.info.json'].$get(args, options))
}

export async function getProductChildItemListJson(
  args: InferRequestType<(typeof client)['product.child_item.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.child_item.list.json'].$get(args, options))
}

export async function getProductCountJson(
  args: InferRequestType<(typeof client)['product.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.count.json'].$get(args, options))
}

export async function postProductCurrencyAddJson(
  args: InferRequestType<(typeof client)['product.currency.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.currency.add.json'].$post(args, options))
}

export async function getProductCurrencyListJson(
  args: InferRequestType<(typeof client)['product.currency.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.currency.list.json'].$get(args, options))
}

export async function deleteProductDeleteJson(
  args: InferRequestType<(typeof client)['product.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.delete.json'].$delete(args, options))
}

export async function getProductFieldsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['product.fields.json'].$get(undefined, options))
}

export async function getProductFindJson(
  args: InferRequestType<(typeof client)['product.find.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.find.json'].$get(args, options))
}

export async function postProductImageAddJson(
  args: InferRequestType<(typeof client)['product.image.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.image.add.json'].$post(args, options))
}

export async function deleteProductImageDeleteJson(
  args: InferRequestType<(typeof client)['product.image.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.image.delete.json'].$delete(args, options))
}

export async function putProductImageUpdateJson(
  args: InferRequestType<(typeof client)['product.image.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.image.update.json'].$put(args, options))
}

export async function getProductInfoJson(
  args: InferRequestType<(typeof client)['product.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.info.json'].$get(args, options))
}

export async function getProductListJson(
  args: InferRequestType<(typeof client)['product.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.list.json'].$get(args, options))
}

export async function postProductManufacturerAddJson(
  args: InferRequestType<(typeof client)['product.manufacturer.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.manufacturer.add.json'].$post(args, options))
}

export async function postProductOptionAddJson(
  args: InferRequestType<(typeof client)['product.option.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.option.add.json'].$post(args, options))
}

export async function postProductOptionAssignJson(
  args: InferRequestType<(typeof client)['product.option.assign.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.option.assign.json'].$post(args, options))
}

export async function getProductOptionListJson(
  args: InferRequestType<(typeof client)['product.option.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.option.list.json'].$get(args, options))
}

export async function postProductOptionValueAddJson(
  args: InferRequestType<(typeof client)['product.option.value.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.option.value.add.json'].$post(args, options))
}

export async function postProductOptionValueAssignJson(
  args: InferRequestType<(typeof client)['product.option.value.assign.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.option.value.assign.json'].$post(args, options))
}

export async function putProductOptionValueUpdateJson(
  args: InferRequestType<(typeof client)['product.option.value.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.option.value.update.json'].$put(args, options))
}

export async function postProductPriceAddJson(
  args: InferRequestType<(typeof client)['product.price.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.price.add.json'].$post(args, options))
}

export async function deleteProductPriceDeleteJson(
  args: InferRequestType<(typeof client)['product.price.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.price.delete.json'].$delete(args, options))
}

export async function putProductPriceUpdateJson(
  args: InferRequestType<(typeof client)['product.price.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.price.update.json'].$put(args, options))
}

export async function getProductReviewListJson(
  args: InferRequestType<(typeof client)['product.review.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.review.list.json'].$get(args, options))
}

export async function postProductStoreAssignJson(
  args: InferRequestType<(typeof client)['product.store.assign.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.store.assign.json'].$post(args, options))
}

export async function postProductTaxAddJson(
  args: InferRequestType<(typeof client)['product.tax.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.tax.add.json'].$post(args, options))
}

export async function putProductUpdateJson(
  args: InferRequestType<(typeof client)['product.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.update.json'].$put(args, options))
}

export async function postProductVariantAddJson(
  args: InferRequestType<(typeof client)['product.variant.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.add.json'].$post(args, options))
}

export async function getProductVariantCountJson(
  args: InferRequestType<(typeof client)['product.variant.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.count.json'].$get(args, options))
}

export async function deleteProductVariantDeleteJson(
  args: InferRequestType<(typeof client)['product.variant.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.delete.json'].$delete(args, options))
}

export async function postProductVariantImageAddJson(
  args: InferRequestType<(typeof client)['product.variant.image.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.image.add.json'].$post(args, options))
}

export async function deleteProductVariantImageDeleteJson(
  args: InferRequestType<(typeof client)['product.variant.image.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.image.delete.json'].$delete(args, options))
}

export async function getProductVariantInfoJson(
  args: InferRequestType<(typeof client)['product.variant.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.info.json'].$get(args, options))
}

export async function getProductVariantListJson(
  args: InferRequestType<(typeof client)['product.variant.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.list.json'].$get(args, options))
}

export async function postProductVariantPriceAddJson(
  args: InferRequestType<(typeof client)['product.variant.price.add.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.price.add.json'].$post(args, options))
}

export async function deleteProductVariantPriceDeleteJson(
  args: InferRequestType<(typeof client)['product.variant.price.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.price.delete.json'].$delete(args, options))
}

export async function putProductVariantPriceUpdateJson(
  args: InferRequestType<(typeof client)['product.variant.price.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.price.update.json'].$put(args, options))
}

export async function putProductVariantUpdateJson(
  args: InferRequestType<(typeof client)['product.variant.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['product.variant.update.json'].$put(args, options))
}

export async function getSubscriberListJson(
  args: InferRequestType<(typeof client)['subscriber.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['subscriber.list.json'].$get(args, options))
}

export async function getTaxClassInfoJson(
  args: InferRequestType<(typeof client)['tax.class.info.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['tax.class.info.json'].$get(args, options))
}

export async function getWebhookCountJson(
  args: InferRequestType<(typeof client)['webhook.count.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['webhook.count.json'].$get(args, options))
}

export async function postWebhookCreateJson(
  args: InferRequestType<(typeof client)['webhook.create.json']['$post']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['webhook.create.json'].$post(args, options))
}

export async function deleteWebhookDeleteJson(
  args: InferRequestType<(typeof client)['webhook.delete.json']['$delete']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['webhook.delete.json'].$delete(args, options))
}

export async function getWebhookEventsJson(options?: ClientRequestOptions) {
  return await parseResponse(client['webhook.events.json'].$get(undefined, options))
}

export async function getWebhookListJson(
  args: InferRequestType<(typeof client)['webhook.list.json']['$get']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['webhook.list.json'].$get(args, options))
}

export async function putWebhookUpdateJson(
  args: InferRequestType<(typeof client)['webhook.update.json']['$put']>,
  options?: ClientRequestOptions,
) {
  return await parseResponse(client['webhook.update.json'].$put(args, options))
}
