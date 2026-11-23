import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteAttributeDeleteJsonRoute,
  deleteBasketLiveShippingServiceDeleteJsonRoute,
  deleteCartCouponDeleteJsonRoute,
  deleteCartDeleteJsonRoute,
  deleteCartMetaDataUnsetJsonRoute,
  deleteCartScriptDeleteJsonRoute,
  deleteCategoryDeleteJsonRoute,
  deleteCategoryImageDeleteJsonRoute,
  deleteOrderShipmentDeleteJsonRoute,
  deleteProductDeleteJsonRoute,
  deleteProductImageDeleteJsonRoute,
  deleteProductPriceDeleteJsonRoute,
  deleteProductVariantDeleteJsonRoute,
  deleteProductVariantImageDeleteJsonRoute,
  deleteProductVariantPriceDeleteJsonRoute,
  deleteWebhookDeleteJsonRoute,
  getAccountCartListJsonRoute,
  getAccountFailedWebhooksJsonRoute,
  getAccountSupportedPlatformsJsonRoute,
  getAttributeAttributesetListJsonRoute,
  getAttributeCountJsonRoute,
  getAttributeGroupListJsonRoute,
  getAttributeInfoJsonRoute,
  getAttributeListJsonRoute,
  getAttributeTypeListJsonRoute,
  getBasketInfoJsonRoute,
  getBasketLiveShippingServiceListJsonRoute,
  getBridgeDownloadFileRoute,
  getCartBridgeJsonRoute,
  getCartCatalogPriceRulesCountJsonRoute,
  getCartCatalogPriceRulesListJsonRoute,
  getCartConfigJsonRoute,
  getCartCouponCountJsonRoute,
  getCartCouponListJsonRoute,
  getCartDisconnectJsonRoute,
  getCartGiftcardCountJsonRoute,
  getCartGiftcardListJsonRoute,
  getCartInfoJsonRoute,
  getCartListJsonRoute,
  getCartMetaDataListJsonRoute,
  getCartMethodsJsonRoute,
  getCartPluginListJsonRoute,
  getCartScriptListJsonRoute,
  getCartShippingZonesListJsonRoute,
  getCartValidateJsonRoute,
  getCategoryCountJsonRoute,
  getCategoryFindJsonRoute,
  getCategoryInfoJsonRoute,
  getCategoryListJsonRoute,
  getCustomerAttributeListJsonRoute,
  getCustomerCountJsonRoute,
  getCustomerFindJsonRoute,
  getCustomerGroupListJsonRoute,
  getCustomerInfoJsonRoute,
  getCustomerListJsonRoute,
  getOrderAbandonedListJsonRoute,
  getOrderCountJsonRoute,
  getOrderFinancialStatusListJsonRoute,
  getOrderFindJsonRoute,
  getOrderFulfillmentStatusListJsonRoute,
  getOrderInfoJsonRoute,
  getOrderListJsonRoute,
  getOrderShipmentInfoJsonRoute,
  getOrderShipmentListJsonRoute,
  getOrderStatusListJsonRoute,
  getOrderTransactionListJsonRoute,
  getProductAttributeListJsonRoute,
  getProductBrandListJsonRoute,
  getProductChildItemFindJsonRoute,
  getProductChildItemInfoJsonRoute,
  getProductChildItemListJsonRoute,
  getProductCountJsonRoute,
  getProductCurrencyListJsonRoute,
  getProductFieldsJsonRoute,
  getProductFindJsonRoute,
  getProductInfoJsonRoute,
  getProductListJsonRoute,
  getProductOptionListJsonRoute,
  getProductReviewListJsonRoute,
  getProductVariantCountJsonRoute,
  getProductVariantInfoJsonRoute,
  getProductVariantListJsonRoute,
  getSubscriberListJsonRoute,
  getTaxClassInfoJsonRoute,
  getWebhookCountJsonRoute,
  getWebhookEventsJsonRoute,
  getWebhookListJsonRoute,
  postAccountCartAddJsonRoute,
  postAttributeAddJsonRoute,
  postAttributeAssignGroupJsonRoute,
  postAttributeAssignSetJsonRoute,
  postAttributeUnassignGroupJsonRoute,
  postAttributeUnassignSetJsonRoute,
  postAttributeUpdateJsonRoute,
  postBasketItemAddJsonRoute,
  postBasketLiveShippingServiceCreateJsonRoute,
  postBridgeDeleteJsonRoute,
  postBridgeUpdateJsonRoute,
  postCartClearCacheJsonRoute,
  postCartCouponAddJsonRoute,
  postCartCouponConditionAddJsonRoute,
  postCartCreateJsonRoute,
  postCartGiftcardAddJsonRoute,
  postCartMetaDataSetJsonRoute,
  postCartScriptAddJsonRoute,
  postCategoryAddJsonRoute,
  postCategoryAssignJsonRoute,
  postCategoryImageAddJsonRoute,
  postCategoryUnassignJsonRoute,
  postCustomerAddJsonRoute,
  postCustomerGroupAddJsonRoute,
  postOrderAddJsonRoute,
  postOrderPreestimateShippingListJsonRoute,
  postOrderRefundAddJsonRoute,
  postOrderShipmentAddJsonRoute,
  postOrderShipmentTrackingAddJsonRoute,
  postProductAddJsonRoute,
  postProductAttributeValueSetJsonRoute,
  postProductAttributeValueUnsetJsonRoute,
  postProductCurrencyAddJsonRoute,
  postProductImageAddJsonRoute,
  postProductManufacturerAddJsonRoute,
  postProductOptionAddJsonRoute,
  postProductOptionAssignJsonRoute,
  postProductOptionValueAddJsonRoute,
  postProductOptionValueAssignJsonRoute,
  postProductPriceAddJsonRoute,
  postProductStoreAssignJsonRoute,
  postProductTaxAddJsonRoute,
  postProductVariantAddJsonRoute,
  postProductVariantImageAddJsonRoute,
  postProductVariantPriceAddJsonRoute,
  postWebhookCreateJsonRoute,
  putAccountConfigUpdateJsonRoute,
  putCartConfigUpdateJsonRoute,
  putCategoryUpdateJsonRoute,
  putCustomerUpdateJsonRoute,
  putOrderShipmentUpdateJsonRoute,
  putOrderUpdateJsonRoute,
  putProductImageUpdateJsonRoute,
  putProductOptionValueUpdateJsonRoute,
  putProductPriceUpdateJsonRoute,
  putProductUpdateJsonRoute,
  putProductVariantPriceUpdateJsonRoute,
  putProductVariantUpdateJsonRoute,
  putWebhookUpdateJsonRoute,
} from './routes'
import {
  deleteAttributeDeleteJsonRouteHandler,
  deleteBasketLiveShippingServiceDeleteJsonRouteHandler,
  deleteCartCouponDeleteJsonRouteHandler,
  deleteCartDeleteJsonRouteHandler,
  deleteCartMetaDataUnsetJsonRouteHandler,
  deleteCartScriptDeleteJsonRouteHandler,
  deleteCategoryDeleteJsonRouteHandler,
  deleteCategoryImageDeleteJsonRouteHandler,
  deleteOrderShipmentDeleteJsonRouteHandler,
  deleteProductDeleteJsonRouteHandler,
  deleteProductImageDeleteJsonRouteHandler,
  deleteProductPriceDeleteJsonRouteHandler,
  deleteProductVariantDeleteJsonRouteHandler,
  deleteProductVariantImageDeleteJsonRouteHandler,
  deleteProductVariantPriceDeleteJsonRouteHandler,
  deleteWebhookDeleteJsonRouteHandler,
  getAccountCartListJsonRouteHandler,
  getAccountFailedWebhooksJsonRouteHandler,
  getAccountSupportedPlatformsJsonRouteHandler,
  getAttributeAttributesetListJsonRouteHandler,
  getAttributeCountJsonRouteHandler,
  getAttributeGroupListJsonRouteHandler,
  getAttributeInfoJsonRouteHandler,
  getAttributeListJsonRouteHandler,
  getAttributeTypeListJsonRouteHandler,
  getBasketInfoJsonRouteHandler,
  getBasketLiveShippingServiceListJsonRouteHandler,
  getBridgeDownloadFileRouteHandler,
  getCartBridgeJsonRouteHandler,
  getCartCatalogPriceRulesCountJsonRouteHandler,
  getCartCatalogPriceRulesListJsonRouteHandler,
  getCartConfigJsonRouteHandler,
  getCartCouponCountJsonRouteHandler,
  getCartCouponListJsonRouteHandler,
  getCartDisconnectJsonRouteHandler,
  getCartGiftcardCountJsonRouteHandler,
  getCartGiftcardListJsonRouteHandler,
  getCartInfoJsonRouteHandler,
  getCartListJsonRouteHandler,
  getCartMetaDataListJsonRouteHandler,
  getCartMethodsJsonRouteHandler,
  getCartPluginListJsonRouteHandler,
  getCartScriptListJsonRouteHandler,
  getCartShippingZonesListJsonRouteHandler,
  getCartValidateJsonRouteHandler,
  getCategoryCountJsonRouteHandler,
  getCategoryFindJsonRouteHandler,
  getCategoryInfoJsonRouteHandler,
  getCategoryListJsonRouteHandler,
  getCustomerAttributeListJsonRouteHandler,
  getCustomerCountJsonRouteHandler,
  getCustomerFindJsonRouteHandler,
  getCustomerGroupListJsonRouteHandler,
  getCustomerInfoJsonRouteHandler,
  getCustomerListJsonRouteHandler,
  getOrderAbandonedListJsonRouteHandler,
  getOrderCountJsonRouteHandler,
  getOrderFinancialStatusListJsonRouteHandler,
  getOrderFindJsonRouteHandler,
  getOrderFulfillmentStatusListJsonRouteHandler,
  getOrderInfoJsonRouteHandler,
  getOrderListJsonRouteHandler,
  getOrderShipmentInfoJsonRouteHandler,
  getOrderShipmentListJsonRouteHandler,
  getOrderStatusListJsonRouteHandler,
  getOrderTransactionListJsonRouteHandler,
  getProductAttributeListJsonRouteHandler,
  getProductBrandListJsonRouteHandler,
  getProductChildItemFindJsonRouteHandler,
  getProductChildItemInfoJsonRouteHandler,
  getProductChildItemListJsonRouteHandler,
  getProductCountJsonRouteHandler,
  getProductCurrencyListJsonRouteHandler,
  getProductFieldsJsonRouteHandler,
  getProductFindJsonRouteHandler,
  getProductInfoJsonRouteHandler,
  getProductListJsonRouteHandler,
  getProductOptionListJsonRouteHandler,
  getProductReviewListJsonRouteHandler,
  getProductVariantCountJsonRouteHandler,
  getProductVariantInfoJsonRouteHandler,
  getProductVariantListJsonRouteHandler,
  getSubscriberListJsonRouteHandler,
  getTaxClassInfoJsonRouteHandler,
  getWebhookCountJsonRouteHandler,
  getWebhookEventsJsonRouteHandler,
  getWebhookListJsonRouteHandler,
  postAccountCartAddJsonRouteHandler,
  postAttributeAddJsonRouteHandler,
  postAttributeAssignGroupJsonRouteHandler,
  postAttributeAssignSetJsonRouteHandler,
  postAttributeUnassignGroupJsonRouteHandler,
  postAttributeUnassignSetJsonRouteHandler,
  postAttributeUpdateJsonRouteHandler,
  postBasketItemAddJsonRouteHandler,
  postBasketLiveShippingServiceCreateJsonRouteHandler,
  postBridgeDeleteJsonRouteHandler,
  postBridgeUpdateJsonRouteHandler,
  postCartClearCacheJsonRouteHandler,
  postCartCouponAddJsonRouteHandler,
  postCartCouponConditionAddJsonRouteHandler,
  postCartCreateJsonRouteHandler,
  postCartGiftcardAddJsonRouteHandler,
  postCartMetaDataSetJsonRouteHandler,
  postCartScriptAddJsonRouteHandler,
  postCategoryAddJsonRouteHandler,
  postCategoryAssignJsonRouteHandler,
  postCategoryImageAddJsonRouteHandler,
  postCategoryUnassignJsonRouteHandler,
  postCustomerAddJsonRouteHandler,
  postCustomerGroupAddJsonRouteHandler,
  postOrderAddJsonRouteHandler,
  postOrderPreestimateShippingListJsonRouteHandler,
  postOrderRefundAddJsonRouteHandler,
  postOrderShipmentAddJsonRouteHandler,
  postOrderShipmentTrackingAddJsonRouteHandler,
  postProductAddJsonRouteHandler,
  postProductAttributeValueSetJsonRouteHandler,
  postProductAttributeValueUnsetJsonRouteHandler,
  postProductCurrencyAddJsonRouteHandler,
  postProductImageAddJsonRouteHandler,
  postProductManufacturerAddJsonRouteHandler,
  postProductOptionAddJsonRouteHandler,
  postProductOptionAssignJsonRouteHandler,
  postProductOptionValueAddJsonRouteHandler,
  postProductOptionValueAssignJsonRouteHandler,
  postProductPriceAddJsonRouteHandler,
  postProductStoreAssignJsonRouteHandler,
  postProductTaxAddJsonRouteHandler,
  postProductVariantAddJsonRouteHandler,
  postProductVariantImageAddJsonRouteHandler,
  postProductVariantPriceAddJsonRouteHandler,
  postWebhookCreateJsonRouteHandler,
  putAccountConfigUpdateJsonRouteHandler,
  putCartConfigUpdateJsonRouteHandler,
  putCategoryUpdateJsonRouteHandler,
  putCustomerUpdateJsonRouteHandler,
  putOrderShipmentUpdateJsonRouteHandler,
  putOrderUpdateJsonRouteHandler,
  putProductImageUpdateJsonRouteHandler,
  putProductOptionValueUpdateJsonRouteHandler,
  putProductPriceUpdateJsonRouteHandler,
  putProductUpdateJsonRouteHandler,
  putProductVariantPriceUpdateJsonRouteHandler,
  putProductVariantUpdateJsonRouteHandler,
  putWebhookUpdateJsonRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccountCartAddJsonRoute, postAccountCartAddJsonRouteHandler)
  .openapi(getAccountCartListJsonRoute, getAccountCartListJsonRouteHandler)
  .openapi(putAccountConfigUpdateJsonRoute, putAccountConfigUpdateJsonRouteHandler)
  .openapi(getAccountFailedWebhooksJsonRoute, getAccountFailedWebhooksJsonRouteHandler)
  .openapi(getAccountSupportedPlatformsJsonRoute, getAccountSupportedPlatformsJsonRouteHandler)
  .openapi(postAttributeAddJsonRoute, postAttributeAddJsonRouteHandler)
  .openapi(postAttributeAssignGroupJsonRoute, postAttributeAssignGroupJsonRouteHandler)
  .openapi(postAttributeAssignSetJsonRoute, postAttributeAssignSetJsonRouteHandler)
  .openapi(getAttributeAttributesetListJsonRoute, getAttributeAttributesetListJsonRouteHandler)
  .openapi(getAttributeCountJsonRoute, getAttributeCountJsonRouteHandler)
  .openapi(deleteAttributeDeleteJsonRoute, deleteAttributeDeleteJsonRouteHandler)
  .openapi(getAttributeGroupListJsonRoute, getAttributeGroupListJsonRouteHandler)
  .openapi(getAttributeInfoJsonRoute, getAttributeInfoJsonRouteHandler)
  .openapi(getAttributeListJsonRoute, getAttributeListJsonRouteHandler)
  .openapi(getAttributeTypeListJsonRoute, getAttributeTypeListJsonRouteHandler)
  .openapi(postAttributeUnassignGroupJsonRoute, postAttributeUnassignGroupJsonRouteHandler)
  .openapi(postAttributeUnassignSetJsonRoute, postAttributeUnassignSetJsonRouteHandler)
  .openapi(postAttributeUpdateJsonRoute, postAttributeUpdateJsonRouteHandler)
  .openapi(getBasketInfoJsonRoute, getBasketInfoJsonRouteHandler)
  .openapi(postBasketItemAddJsonRoute, postBasketItemAddJsonRouteHandler)
  .openapi(
    postBasketLiveShippingServiceCreateJsonRoute,
    postBasketLiveShippingServiceCreateJsonRouteHandler,
  )
  .openapi(
    deleteBasketLiveShippingServiceDeleteJsonRoute,
    deleteBasketLiveShippingServiceDeleteJsonRouteHandler,
  )
  .openapi(
    getBasketLiveShippingServiceListJsonRoute,
    getBasketLiveShippingServiceListJsonRouteHandler,
  )
  .openapi(postBridgeDeleteJsonRoute, postBridgeDeleteJsonRouteHandler)
  .openapi(getBridgeDownloadFileRoute, getBridgeDownloadFileRouteHandler)
  .openapi(postBridgeUpdateJsonRoute, postBridgeUpdateJsonRouteHandler)
  .openapi(getCartBridgeJsonRoute, getCartBridgeJsonRouteHandler)
  .openapi(getCartCatalogPriceRulesCountJsonRoute, getCartCatalogPriceRulesCountJsonRouteHandler)
  .openapi(getCartCatalogPriceRulesListJsonRoute, getCartCatalogPriceRulesListJsonRouteHandler)
  .openapi(postCartClearCacheJsonRoute, postCartClearCacheJsonRouteHandler)
  .openapi(getCartConfigJsonRoute, getCartConfigJsonRouteHandler)
  .openapi(putCartConfigUpdateJsonRoute, putCartConfigUpdateJsonRouteHandler)
  .openapi(postCartCouponAddJsonRoute, postCartCouponAddJsonRouteHandler)
  .openapi(postCartCouponConditionAddJsonRoute, postCartCouponConditionAddJsonRouteHandler)
  .openapi(getCartCouponCountJsonRoute, getCartCouponCountJsonRouteHandler)
  .openapi(deleteCartCouponDeleteJsonRoute, deleteCartCouponDeleteJsonRouteHandler)
  .openapi(getCartCouponListJsonRoute, getCartCouponListJsonRouteHandler)
  .openapi(postCartCreateJsonRoute, postCartCreateJsonRouteHandler)
  .openapi(deleteCartDeleteJsonRoute, deleteCartDeleteJsonRouteHandler)
  .openapi(getCartDisconnectJsonRoute, getCartDisconnectJsonRouteHandler)
  .openapi(postCartGiftcardAddJsonRoute, postCartGiftcardAddJsonRouteHandler)
  .openapi(getCartGiftcardCountJsonRoute, getCartGiftcardCountJsonRouteHandler)
  .openapi(getCartGiftcardListJsonRoute, getCartGiftcardListJsonRouteHandler)
  .openapi(getCartInfoJsonRoute, getCartInfoJsonRouteHandler)
  .openapi(getCartListJsonRoute, getCartListJsonRouteHandler)
  .openapi(getCartMetaDataListJsonRoute, getCartMetaDataListJsonRouteHandler)
  .openapi(postCartMetaDataSetJsonRoute, postCartMetaDataSetJsonRouteHandler)
  .openapi(deleteCartMetaDataUnsetJsonRoute, deleteCartMetaDataUnsetJsonRouteHandler)
  .openapi(getCartMethodsJsonRoute, getCartMethodsJsonRouteHandler)
  .openapi(getCartPluginListJsonRoute, getCartPluginListJsonRouteHandler)
  .openapi(postCartScriptAddJsonRoute, postCartScriptAddJsonRouteHandler)
  .openapi(deleteCartScriptDeleteJsonRoute, deleteCartScriptDeleteJsonRouteHandler)
  .openapi(getCartScriptListJsonRoute, getCartScriptListJsonRouteHandler)
  .openapi(getCartShippingZonesListJsonRoute, getCartShippingZonesListJsonRouteHandler)
  .openapi(getCartValidateJsonRoute, getCartValidateJsonRouteHandler)
  .openapi(postCategoryAddJsonRoute, postCategoryAddJsonRouteHandler)
  .openapi(postCategoryAssignJsonRoute, postCategoryAssignJsonRouteHandler)
  .openapi(getCategoryCountJsonRoute, getCategoryCountJsonRouteHandler)
  .openapi(deleteCategoryDeleteJsonRoute, deleteCategoryDeleteJsonRouteHandler)
  .openapi(getCategoryFindJsonRoute, getCategoryFindJsonRouteHandler)
  .openapi(postCategoryImageAddJsonRoute, postCategoryImageAddJsonRouteHandler)
  .openapi(deleteCategoryImageDeleteJsonRoute, deleteCategoryImageDeleteJsonRouteHandler)
  .openapi(getCategoryInfoJsonRoute, getCategoryInfoJsonRouteHandler)
  .openapi(getCategoryListJsonRoute, getCategoryListJsonRouteHandler)
  .openapi(postCategoryUnassignJsonRoute, postCategoryUnassignJsonRouteHandler)
  .openapi(putCategoryUpdateJsonRoute, putCategoryUpdateJsonRouteHandler)
  .openapi(postCustomerAddJsonRoute, postCustomerAddJsonRouteHandler)
  .openapi(getCustomerAttributeListJsonRoute, getCustomerAttributeListJsonRouteHandler)
  .openapi(getCustomerCountJsonRoute, getCustomerCountJsonRouteHandler)
  .openapi(getCustomerFindJsonRoute, getCustomerFindJsonRouteHandler)
  .openapi(postCustomerGroupAddJsonRoute, postCustomerGroupAddJsonRouteHandler)
  .openapi(getCustomerGroupListJsonRoute, getCustomerGroupListJsonRouteHandler)
  .openapi(getCustomerInfoJsonRoute, getCustomerInfoJsonRouteHandler)
  .openapi(getCustomerListJsonRoute, getCustomerListJsonRouteHandler)
  .openapi(putCustomerUpdateJsonRoute, putCustomerUpdateJsonRouteHandler)
  .openapi(getOrderAbandonedListJsonRoute, getOrderAbandonedListJsonRouteHandler)
  .openapi(postOrderAddJsonRoute, postOrderAddJsonRouteHandler)
  .openapi(getOrderCountJsonRoute, getOrderCountJsonRouteHandler)
  .openapi(getOrderFinancialStatusListJsonRoute, getOrderFinancialStatusListJsonRouteHandler)
  .openapi(getOrderFindJsonRoute, getOrderFindJsonRouteHandler)
  .openapi(getOrderFulfillmentStatusListJsonRoute, getOrderFulfillmentStatusListJsonRouteHandler)
  .openapi(getOrderInfoJsonRoute, getOrderInfoJsonRouteHandler)
  .openapi(getOrderListJsonRoute, getOrderListJsonRouteHandler)
  .openapi(
    postOrderPreestimateShippingListJsonRoute,
    postOrderPreestimateShippingListJsonRouteHandler,
  )
  .openapi(postOrderRefundAddJsonRoute, postOrderRefundAddJsonRouteHandler)
  .openapi(postOrderShipmentAddJsonRoute, postOrderShipmentAddJsonRouteHandler)
  .openapi(deleteOrderShipmentDeleteJsonRoute, deleteOrderShipmentDeleteJsonRouteHandler)
  .openapi(getOrderShipmentInfoJsonRoute, getOrderShipmentInfoJsonRouteHandler)
  .openapi(getOrderShipmentListJsonRoute, getOrderShipmentListJsonRouteHandler)
  .openapi(postOrderShipmentTrackingAddJsonRoute, postOrderShipmentTrackingAddJsonRouteHandler)
  .openapi(putOrderShipmentUpdateJsonRoute, putOrderShipmentUpdateJsonRouteHandler)
  .openapi(getOrderStatusListJsonRoute, getOrderStatusListJsonRouteHandler)
  .openapi(getOrderTransactionListJsonRoute, getOrderTransactionListJsonRouteHandler)
  .openapi(putOrderUpdateJsonRoute, putOrderUpdateJsonRouteHandler)
  .openapi(postProductAddJsonRoute, postProductAddJsonRouteHandler)
  .openapi(getProductAttributeListJsonRoute, getProductAttributeListJsonRouteHandler)
  .openapi(postProductAttributeValueSetJsonRoute, postProductAttributeValueSetJsonRouteHandler)
  .openapi(postProductAttributeValueUnsetJsonRoute, postProductAttributeValueUnsetJsonRouteHandler)
  .openapi(getProductBrandListJsonRoute, getProductBrandListJsonRouteHandler)
  .openapi(getProductChildItemFindJsonRoute, getProductChildItemFindJsonRouteHandler)
  .openapi(getProductChildItemInfoJsonRoute, getProductChildItemInfoJsonRouteHandler)
  .openapi(getProductChildItemListJsonRoute, getProductChildItemListJsonRouteHandler)
  .openapi(getProductCountJsonRoute, getProductCountJsonRouteHandler)
  .openapi(postProductCurrencyAddJsonRoute, postProductCurrencyAddJsonRouteHandler)
  .openapi(getProductCurrencyListJsonRoute, getProductCurrencyListJsonRouteHandler)
  .openapi(deleteProductDeleteJsonRoute, deleteProductDeleteJsonRouteHandler)
  .openapi(getProductFieldsJsonRoute, getProductFieldsJsonRouteHandler)
  .openapi(getProductFindJsonRoute, getProductFindJsonRouteHandler)
  .openapi(postProductImageAddJsonRoute, postProductImageAddJsonRouteHandler)
  .openapi(deleteProductImageDeleteJsonRoute, deleteProductImageDeleteJsonRouteHandler)
  .openapi(putProductImageUpdateJsonRoute, putProductImageUpdateJsonRouteHandler)
  .openapi(getProductInfoJsonRoute, getProductInfoJsonRouteHandler)
  .openapi(getProductListJsonRoute, getProductListJsonRouteHandler)
  .openapi(postProductManufacturerAddJsonRoute, postProductManufacturerAddJsonRouteHandler)
  .openapi(postProductOptionAddJsonRoute, postProductOptionAddJsonRouteHandler)
  .openapi(postProductOptionAssignJsonRoute, postProductOptionAssignJsonRouteHandler)
  .openapi(getProductOptionListJsonRoute, getProductOptionListJsonRouteHandler)
  .openapi(postProductOptionValueAddJsonRoute, postProductOptionValueAddJsonRouteHandler)
  .openapi(postProductOptionValueAssignJsonRoute, postProductOptionValueAssignJsonRouteHandler)
  .openapi(putProductOptionValueUpdateJsonRoute, putProductOptionValueUpdateJsonRouteHandler)
  .openapi(postProductPriceAddJsonRoute, postProductPriceAddJsonRouteHandler)
  .openapi(deleteProductPriceDeleteJsonRoute, deleteProductPriceDeleteJsonRouteHandler)
  .openapi(putProductPriceUpdateJsonRoute, putProductPriceUpdateJsonRouteHandler)
  .openapi(getProductReviewListJsonRoute, getProductReviewListJsonRouteHandler)
  .openapi(postProductStoreAssignJsonRoute, postProductStoreAssignJsonRouteHandler)
  .openapi(postProductTaxAddJsonRoute, postProductTaxAddJsonRouteHandler)
  .openapi(putProductUpdateJsonRoute, putProductUpdateJsonRouteHandler)
  .openapi(postProductVariantAddJsonRoute, postProductVariantAddJsonRouteHandler)
  .openapi(getProductVariantCountJsonRoute, getProductVariantCountJsonRouteHandler)
  .openapi(deleteProductVariantDeleteJsonRoute, deleteProductVariantDeleteJsonRouteHandler)
  .openapi(postProductVariantImageAddJsonRoute, postProductVariantImageAddJsonRouteHandler)
  .openapi(
    deleteProductVariantImageDeleteJsonRoute,
    deleteProductVariantImageDeleteJsonRouteHandler,
  )
  .openapi(getProductVariantInfoJsonRoute, getProductVariantInfoJsonRouteHandler)
  .openapi(getProductVariantListJsonRoute, getProductVariantListJsonRouteHandler)
  .openapi(postProductVariantPriceAddJsonRoute, postProductVariantPriceAddJsonRouteHandler)
  .openapi(
    deleteProductVariantPriceDeleteJsonRoute,
    deleteProductVariantPriceDeleteJsonRouteHandler,
  )
  .openapi(putProductVariantPriceUpdateJsonRoute, putProductVariantPriceUpdateJsonRouteHandler)
  .openapi(putProductVariantUpdateJsonRoute, putProductVariantUpdateJsonRouteHandler)
  .openapi(getSubscriberListJsonRoute, getSubscriberListJsonRouteHandler)
  .openapi(getTaxClassInfoJsonRoute, getTaxClassInfoJsonRouteHandler)
  .openapi(getWebhookCountJsonRoute, getWebhookCountJsonRouteHandler)
  .openapi(postWebhookCreateJsonRoute, postWebhookCreateJsonRouteHandler)
  .openapi(deleteWebhookDeleteJsonRoute, deleteWebhookDeleteJsonRouteHandler)
  .openapi(getWebhookEventsJsonRoute, getWebhookEventsJsonRouteHandler)
  .openapi(getWebhookListJsonRoute, getWebhookListJsonRouteHandler)
  .openapi(putWebhookUpdateJsonRoute, putWebhookUpdateJsonRouteHandler)

export default app
