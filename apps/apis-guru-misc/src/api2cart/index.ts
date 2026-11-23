import { OpenAPIHono } from '@hono/zod-openapi'
import {
  accountCartAddJsonHandler,
  accountCartListJsonHandler,
  accountConfigUpdateJsonHandler,
  accountFailedWebhooksJsonHandler,
  accountSupportedPlatformsJsonHandler,
  attributeAddJsonHandler,
  attributeAssignGroupJsonHandler,
  attributeAssignSetJsonHandler,
  attributeAttributesetListJsonHandler,
  attributeCountJsonHandler,
  attributeDeleteJsonHandler,
  attributeGroupListJsonHandler,
  attributeInfoJsonHandler,
  attributeListJsonHandler,
  attributeTypeListJsonHandler,
  attributeUnassignGroupJsonHandler,
  attributeUnassignSetJsonHandler,
  attributeUpdateJsonHandler,
  basketInfoJsonHandler,
  basketItemAddJsonHandler,
  basketLiveShippingServiceCreateJsonHandler,
  basketLiveShippingServiceDeleteJsonHandler,
  basketLiveShippingServiceListJsonHandler,
  bridgeDeleteJsonHandler,
  bridgeDownloadFileHandler,
  bridgeUpdateJsonHandler,
  cartBridgeJsonHandler,
  cartCatalogPriceRulesCountJsonHandler,
  cartCatalogPriceRulesListJsonHandler,
  cartClearCacheJsonHandler,
  cartConfigJsonHandler,
  cartConfigUpdateJsonHandler,
  cartCouponAddJsonHandler,
  cartCouponConditionAddJsonHandler,
  cartCouponCountJsonHandler,
  cartCouponDeleteJsonHandler,
  cartCouponListJsonHandler,
  cartCreateJsonHandler,
  cartDeleteJsonHandler,
  cartDisconnectJsonHandler,
  cartGiftcardAddJsonHandler,
  cartGiftcardCountJsonHandler,
  cartGiftcardListJsonHandler,
  cartInfoJsonHandler,
  cartListJsonHandler,
  cartMetaDataListJsonHandler,
  cartMetaDataSetJsonHandler,
  cartMetaDataUnsetJsonHandler,
  cartMethodsJsonHandler,
  cartPluginListJsonHandler,
  cartScriptAddJsonHandler,
  cartScriptDeleteJsonHandler,
  cartScriptListJsonHandler,
  cartShippingZonesListJsonHandler,
  cartValidateJsonHandler,
  categoryAddJsonHandler,
  categoryAssignJsonHandler,
  categoryCountJsonHandler,
  categoryDeleteJsonHandler,
  categoryFindJsonHandler,
  categoryImageAddJsonHandler,
  categoryImageDeleteJsonHandler,
  categoryInfoJsonHandler,
  categoryListJsonHandler,
  categoryUnassignJsonHandler,
  categoryUpdateJsonHandler,
  customerAddJsonHandler,
  customerAttributeListJsonHandler,
  customerCountJsonHandler,
  customerFindJsonHandler,
  customerGroupAddJsonHandler,
  customerGroupListJsonHandler,
  customerInfoJsonHandler,
  customerListJsonHandler,
  customerUpdateJsonHandler,
  orderAbandonedListJsonHandler,
  orderAddJsonHandler,
  orderCountJsonHandler,
  orderFinancialStatusListJsonHandler,
  orderFindJsonHandler,
  orderFulfillmentStatusListJsonHandler,
  orderInfoJsonHandler,
  orderListJsonHandler,
  orderPreestimateShippingListJsonHandler,
  orderRefundAddJsonHandler,
  orderShipmentAddJsonHandler,
  orderShipmentDeleteJsonHandler,
  orderShipmentInfoJsonHandler,
  orderShipmentListJsonHandler,
  orderShipmentTrackingAddJsonHandler,
  orderShipmentUpdateJsonHandler,
  orderStatusListJsonHandler,
  orderTransactionListJsonHandler,
  orderUpdateJsonHandler,
  productAddJsonHandler,
  productAttributeListJsonHandler,
  productAttributeValueSetJsonHandler,
  productAttributeValueUnsetJsonHandler,
  productBrandListJsonHandler,
  productChildItemFindJsonHandler,
  productChildItemInfoJsonHandler,
  productChildItemListJsonHandler,
  productCountJsonHandler,
  productCurrencyAddJsonHandler,
  productCurrencyListJsonHandler,
  productDeleteJsonHandler,
  productFieldsJsonHandler,
  productFindJsonHandler,
  productImageAddJsonHandler,
  productImageDeleteJsonHandler,
  productImageUpdateJsonHandler,
  productInfoJsonHandler,
  productListJsonHandler,
  productManufacturerAddJsonHandler,
  productOptionAddJsonHandler,
  productOptionAssignJsonHandler,
  productOptionListJsonHandler,
  productOptionValueAddJsonHandler,
  productOptionValueAssignJsonHandler,
  productOptionValueUpdateJsonHandler,
  productPriceAddJsonHandler,
  productPriceDeleteJsonHandler,
  productPriceUpdateJsonHandler,
  productReviewListJsonHandler,
  productStoreAssignJsonHandler,
  productTaxAddJsonHandler,
  productUpdateJsonHandler,
  productVariantAddJsonHandler,
  productVariantCountJsonHandler,
  productVariantDeleteJsonHandler,
  productVariantImageAddJsonHandler,
  productVariantImageDeleteJsonHandler,
  productVariantInfoJsonHandler,
  productVariantListJsonHandler,
  productVariantPriceAddJsonHandler,
  productVariantPriceDeleteJsonHandler,
  productVariantPriceUpdateJsonHandler,
  productVariantUpdateJsonHandler,
  subscriberListJsonHandler,
  taxClassInfoJsonHandler,
  webhookCountJsonHandler,
  webhookCreateJsonHandler,
  webhookDeleteJsonHandler,
  webhookEventsJsonHandler,
  webhookListJsonHandler,
  webhookUpdateJsonHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', accountCartAddJsonHandler)
  .route('/', accountCartListJsonHandler)
  .route('/', accountConfigUpdateJsonHandler)
  .route('/', accountFailedWebhooksJsonHandler)
  .route('/', accountSupportedPlatformsJsonHandler)
  .route('/', attributeAddJsonHandler)
  .route('/', attributeAssignGroupJsonHandler)
  .route('/', attributeAssignSetJsonHandler)
  .route('/', attributeAttributesetListJsonHandler)
  .route('/', attributeCountJsonHandler)
  .route('/', attributeDeleteJsonHandler)
  .route('/', attributeGroupListJsonHandler)
  .route('/', attributeInfoJsonHandler)
  .route('/', attributeListJsonHandler)
  .route('/', attributeTypeListJsonHandler)
  .route('/', attributeUnassignGroupJsonHandler)
  .route('/', attributeUnassignSetJsonHandler)
  .route('/', attributeUpdateJsonHandler)
  .route('/', basketInfoJsonHandler)
  .route('/', basketItemAddJsonHandler)
  .route('/', basketLiveShippingServiceCreateJsonHandler)
  .route('/', basketLiveShippingServiceDeleteJsonHandler)
  .route('/', basketLiveShippingServiceListJsonHandler)
  .route('/', bridgeDeleteJsonHandler)
  .route('/', bridgeDownloadFileHandler)
  .route('/', bridgeUpdateJsonHandler)
  .route('/', cartBridgeJsonHandler)
  .route('/', cartCatalogPriceRulesCountJsonHandler)
  .route('/', cartCatalogPriceRulesListJsonHandler)
  .route('/', cartClearCacheJsonHandler)
  .route('/', cartConfigJsonHandler)
  .route('/', cartConfigUpdateJsonHandler)
  .route('/', cartCouponAddJsonHandler)
  .route('/', cartCouponConditionAddJsonHandler)
  .route('/', cartCouponCountJsonHandler)
  .route('/', cartCouponDeleteJsonHandler)
  .route('/', cartCouponListJsonHandler)
  .route('/', cartCreateJsonHandler)
  .route('/', cartDeleteJsonHandler)
  .route('/', cartDisconnectJsonHandler)
  .route('/', cartGiftcardAddJsonHandler)
  .route('/', cartGiftcardCountJsonHandler)
  .route('/', cartGiftcardListJsonHandler)
  .route('/', cartInfoJsonHandler)
  .route('/', cartListJsonHandler)
  .route('/', cartMetaDataListJsonHandler)
  .route('/', cartMetaDataSetJsonHandler)
  .route('/', cartMetaDataUnsetJsonHandler)
  .route('/', cartMethodsJsonHandler)
  .route('/', cartPluginListJsonHandler)
  .route('/', cartScriptAddJsonHandler)
  .route('/', cartScriptDeleteJsonHandler)
  .route('/', cartScriptListJsonHandler)
  .route('/', cartShippingZonesListJsonHandler)
  .route('/', cartValidateJsonHandler)
  .route('/', categoryAddJsonHandler)
  .route('/', categoryAssignJsonHandler)
  .route('/', categoryCountJsonHandler)
  .route('/', categoryDeleteJsonHandler)
  .route('/', categoryFindJsonHandler)
  .route('/', categoryImageAddJsonHandler)
  .route('/', categoryImageDeleteJsonHandler)
  .route('/', categoryInfoJsonHandler)
  .route('/', categoryListJsonHandler)
  .route('/', categoryUnassignJsonHandler)
  .route('/', categoryUpdateJsonHandler)
  .route('/', customerAddJsonHandler)
  .route('/', customerAttributeListJsonHandler)
  .route('/', customerCountJsonHandler)
  .route('/', customerFindJsonHandler)
  .route('/', customerGroupAddJsonHandler)
  .route('/', customerGroupListJsonHandler)
  .route('/', customerInfoJsonHandler)
  .route('/', customerListJsonHandler)
  .route('/', customerUpdateJsonHandler)
  .route('/', orderAbandonedListJsonHandler)
  .route('/', orderAddJsonHandler)
  .route('/', orderCountJsonHandler)
  .route('/', orderFinancialStatusListJsonHandler)
  .route('/', orderFindJsonHandler)
  .route('/', orderFulfillmentStatusListJsonHandler)
  .route('/', orderInfoJsonHandler)
  .route('/', orderListJsonHandler)
  .route('/', orderPreestimateShippingListJsonHandler)
  .route('/', orderRefundAddJsonHandler)
  .route('/', orderShipmentAddJsonHandler)
  .route('/', orderShipmentDeleteJsonHandler)
  .route('/', orderShipmentInfoJsonHandler)
  .route('/', orderShipmentListJsonHandler)
  .route('/', orderShipmentTrackingAddJsonHandler)
  .route('/', orderShipmentUpdateJsonHandler)
  .route('/', orderStatusListJsonHandler)
  .route('/', orderTransactionListJsonHandler)
  .route('/', orderUpdateJsonHandler)
  .route('/', productAddJsonHandler)
  .route('/', productAttributeListJsonHandler)
  .route('/', productAttributeValueSetJsonHandler)
  .route('/', productAttributeValueUnsetJsonHandler)
  .route('/', productBrandListJsonHandler)
  .route('/', productChildItemFindJsonHandler)
  .route('/', productChildItemInfoJsonHandler)
  .route('/', productChildItemListJsonHandler)
  .route('/', productCountJsonHandler)
  .route('/', productCurrencyAddJsonHandler)
  .route('/', productCurrencyListJsonHandler)
  .route('/', productDeleteJsonHandler)
  .route('/', productFieldsJsonHandler)
  .route('/', productFindJsonHandler)
  .route('/', productImageAddJsonHandler)
  .route('/', productImageDeleteJsonHandler)
  .route('/', productImageUpdateJsonHandler)
  .route('/', productInfoJsonHandler)
  .route('/', productListJsonHandler)
  .route('/', productManufacturerAddJsonHandler)
  .route('/', productOptionAddJsonHandler)
  .route('/', productOptionAssignJsonHandler)
  .route('/', productOptionListJsonHandler)
  .route('/', productOptionValueAddJsonHandler)
  .route('/', productOptionValueAssignJsonHandler)
  .route('/', productOptionValueUpdateJsonHandler)
  .route('/', productPriceAddJsonHandler)
  .route('/', productPriceDeleteJsonHandler)
  .route('/', productPriceUpdateJsonHandler)
  .route('/', productReviewListJsonHandler)
  .route('/', productStoreAssignJsonHandler)
  .route('/', productTaxAddJsonHandler)
  .route('/', productUpdateJsonHandler)
  .route('/', productVariantAddJsonHandler)
  .route('/', productVariantCountJsonHandler)
  .route('/', productVariantDeleteJsonHandler)
  .route('/', productVariantImageAddJsonHandler)
  .route('/', productVariantImageDeleteJsonHandler)
  .route('/', productVariantInfoJsonHandler)
  .route('/', productVariantListJsonHandler)
  .route('/', productVariantPriceAddJsonHandler)
  .route('/', productVariantPriceDeleteJsonHandler)
  .route('/', productVariantPriceUpdateJsonHandler)
  .route('/', productVariantUpdateJsonHandler)
  .route('/', subscriberListJsonHandler)
  .route('/', taxClassInfoJsonHandler)
  .route('/', webhookCountJsonHandler)
  .route('/', webhookCreateJsonHandler)
  .route('/', webhookDeleteJsonHandler)
  .route('/', webhookEventsJsonHandler)
  .route('/', webhookListJsonHandler)
  .route('/', webhookUpdateJsonHandler)

export default app
