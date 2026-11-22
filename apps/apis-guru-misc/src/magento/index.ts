import { OpenAPIHono } from '@hono/zod-openapi'
import {
  addressesAddressIdHandler,
  amazonBillingAddressAmazonOrderReferenceIdHandler,
  amazonOrderRefHandler,
  amazonShippingAddressAmazonOrderReferenceIdHandler,
  analyticsLinkHandler,
  attributeMetadataCustomerAddressAttributeAttributeCodeHandler,
  attributeMetadataCustomerAddressCustomHandler,
  attributeMetadataCustomerAddressFormFormCodeHandler,
  attributeMetadataCustomerAddressHandler,
  attributeMetadataCustomerAttributeAttributeCodeHandler,
  attributeMetadataCustomerCustomHandler,
  attributeMetadataCustomerFormFormCodeHandler,
  attributeMetadataCustomerHandler,
  bulkBulkUuidDetailedStatusHandler,
  bulkBulkUuidOperationStatusStatusHandler,
  bulkBulkUuidStatusHandler,
  bundleProductsOptionsAddHandler,
  bundleProductsOptionsOptionIdHandler,
  bundleProductsOptionsTypesHandler,
  bundleProductsProductSkuChildrenHandler,
  bundleProductsSkuLinksIdHandler,
  bundleProductsSkuLinksOptionIdHandler,
  bundleProductsSkuOptionsAllHandler,
  bundleProductsSkuOptionsOptionIdChildrenChildSkuHandler,
  bundleProductsSkuOptionsOptionIdHandler,
  cartsCartIdBillingAddressHandler,
  cartsCartIdCouponsCouponCodeHandler,
  cartsCartIdCouponsHandler,
  cartsCartIdEstimateShippingMethodsByAddressIdHandler,
  cartsCartIdEstimateShippingMethodsHandler,
  cartsCartIdGiftCardsGiftCardCodeHandler,
  cartsCartIdGiftCardsHandler,
  cartsCartIdGiftMessageHandler,
  cartsCartIdGiftMessageItemIdHandler,
  cartsCartIdHandler,
  cartsCartIdItemsHandler,
  cartsCartIdItemsItemIdHandler,
  cartsCartIdOrderHandler,
  cartsCartIdPaymentMethodsHandler,
  cartsCartIdSelectedPaymentMethodHandler,
  cartsCartIdShippingInformationHandler,
  cartsCartIdShippingMethodsHandler,
  cartsCartIdTotalsHandler,
  cartsCartIdTotalsInformationHandler,
  cartsGuestCartsCartIdCheckGiftCardGiftCardCodeHandler,
  cartsGuestCartsCartIdGiftCardsGiftCardCodeHandler,
  cartsGuestCartsCartIdGiftCardsHandler,
  cartsHandler,
  cartsLicenceHandler,
  cartsMineBalanceApplyHandler,
  cartsMineBalanceUnapplyHandler,
  cartsMineBillingAddressHandler,
  cartsMineCheckGiftCardGiftCardCodeHandler,
  cartsMineCheckoutFieldsHandler,
  cartsMineCollectionPointSearchRequestHandler,
  cartsMineCollectionPointSearchResultHandler,
  cartsMineCollectionPointSelectHandler,
  cartsMineCollectTotalsHandler,
  cartsMineCouponsCouponCodeHandler,
  cartsMineCouponsHandler,
  cartsMineDeliveryOptionHandler,
  cartsMineEstimateShippingMethodsByAddressIdHandler,
  cartsMineEstimateShippingMethodsHandler,
  cartsMineGiftCardsGiftCardCodeHandler,
  cartsMineGiftCardsHandler,
  cartsMineGiftMessageHandler,
  cartsMineGiftMessageItemIdHandler,
  cartsMineHandler,
  cartsMineItemsHandler,
  cartsMineItemsItemIdHandler,
  cartsMineOrderHandler,
  cartsMinePaymentInformationHandler,
  cartsMinePaymentMethodsHandler,
  cartsMineSelectedPaymentMethodHandler,
  cartsMineSetPaymentInformationHandler,
  cartsMineShippingInformationHandler,
  cartsMineShippingMethodsHandler,
  cartsMineTotalsHandler,
  cartsMineTotalsInformationHandler,
  cartsQuoteIdGiftCardsHandler,
  cartsQuoteIdItemsHandler,
  cartsSearchHandler,
  categoriesAttributesAttributeCodeHandler,
  categoriesAttributesAttributeCodeOptionsHandler,
  categoriesAttributesHandler,
  categoriesCategoryIdHandler,
  categoriesCategoryIdMoveHandler,
  categoriesCategoryIdProductsHandler,
  categoriesCategoryIdProductsSkuHandler,
  categoriesHandler,
  categoriesIdHandler,
  categoriesListHandler,
  cmsBlockBlockIdHandler,
  cmsBlockHandler,
  cmsBlockIdHandler,
  cmsBlockSearchHandler,
  cmsPageHandler,
  cmsPageIdHandler,
  cmsPagePageIdHandler,
  cmsPageSearchHandler,
  companyAssignRolesHandler,
  companyCompanyIdHandler,
  companyCreditsCompanyCompanyIdHandler,
  companyCreditsCreditIdDecreaseBalanceHandler,
  companyCreditsCreditIdHandler,
  companyCreditsCreditIdIncreaseBalanceHandler,
  companyCreditsHandler,
  companyCreditsHistoryHandler,
  companyCreditsHistoryHistoryIdHandler,
  companyCreditsIdHandler,
  companyHandler,
  companyRoleHandler,
  companyRoleIdHandler,
  companyRoleRoleIdHandler,
  companyRoleRoleIdUsersHandler,
  configurableProductsSkuChildHandler,
  configurableProductsSkuChildrenChildSkuHandler,
  configurableProductsSkuChildrenHandler,
  configurableProductsSkuOptionsAllHandler,
  configurableProductsSkuOptionsHandler,
  configurableProductsSkuOptionsIdHandler,
  configurableProductsVariationHandler,
  couponsCouponIdHandler,
  couponsDeleteByCodesHandler,
  couponsDeleteByIdsHandler,
  couponsGenerateHandler,
  couponsHandler,
  couponsSearchHandler,
  creditmemoHandler,
  creditmemoIdCommentsHandler,
  creditmemoIdEmailsHandler,
  creditmemoIdHandler,
  creditmemoRefundHandler,
  creditmemosHandler,
  customerGroupsDefaultHandler,
  customerGroupsDefaultIdHandler,
  customerGroupsDefaultStoreIdHandler,
  customerGroupsHandler,
  customerGroupsIdHandler,
  customerGroupsIdPermissionsHandler,
  customerGroupsSearchHandler,
  customersAddressesAddressIdHandler,
  customersConfirmHandler,
  customersCustomerIdBillingAddressHandler,
  customersCustomerIdCartsHandler,
  customersCustomerIdConfirmHandler,
  customersCustomerIdHandler,
  customersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenHandler,
  customersCustomerIdPermissionsReadonlyHandler,
  customersCustomerIdShippingAddressHandler,
  customersEmailActivateHandler,
  customersHandler,
  customersIsEmailAvailableHandler,
  customersMeActivateHandler,
  customersMeBillingAddressHandler,
  customersMeHandler,
  customersMePasswordHandler,
  customersMeShippingAddressHandler,
  customersPasswordHandler,
  customersResetPasswordHandler,
  customersSearchHandler,
  customersValidateHandler,
  directoryCountriesCountryIdHandler,
  directoryCountriesHandler,
  directoryCurrencyHandler,
  eavAttributeSetsAttributeSetIdHandler,
  eavAttributeSetsHandler,
  eavAttributeSetsListHandler,
  giftregistryMineEstimateShippingMethodsHandler,
  giftWrappingsHandler,
  giftWrappingsIdHandler,
  giftWrappingsWrappingIdHandler,
  guestCartsCartIdBillingAddressHandler,
  guestCartsCartIdCheckoutFieldsHandler,
  guestCartsCartIdCollectionPointSearchRequestHandler,
  guestCartsCartIdCollectionPointSearchResultHandler,
  guestCartsCartIdCollectionPointSelectHandler,
  guestCartsCartIdCollectTotalsHandler,
  guestCartsCartIdCouponsCouponCodeHandler,
  guestCartsCartIdCouponsHandler,
  guestCartsCartIdDeliveryOptionHandler,
  guestCartsCartIdEstimateShippingMethodsHandler,
  guestCartsCartIdGiftMessageHandler,
  guestCartsCartIdGiftMessageItemIdHandler,
  guestCartsCartIdHandler,
  guestCartsCartIdItemsHandler,
  guestCartsCartIdItemsItemIdHandler,
  guestCartsCartIdOrderHandler,
  guestCartsCartIdPaymentInformationHandler,
  guestCartsCartIdPaymentMethodsHandler,
  guestCartsCartIdSelectedPaymentMethodHandler,
  guestCartsCartIdSetPaymentInformationHandler,
  guestCartsCartIdShippingInformationHandler,
  guestCartsCartIdShippingMethodsHandler,
  guestCartsCartIdTotalsHandler,
  guestCartsCartIdTotalsInformationHandler,
  guestCartsHandler,
  guestGiftregistryCartIdEstimateShippingMethodsHandler,
  hierarchyIdHandler,
  hierarchyMoveIdHandler,
  integrationAdminTokenHandler,
  integrationCustomerTokenHandler,
  invoiceInvoiceIdRefundHandler,
  invoicesCommentsHandler,
  invoicesHandler,
  invoicesIdCaptureHandler,
  invoicesIdCommentsHandler,
  invoicesIdEmailsHandler,
  invoicesIdHandler,
  invoicesIdVoidHandler,
  modulesHandler,
  negotiableCartsCartIdBillingAddressHandler,
  negotiableCartsCartIdCouponsCouponCodeHandler,
  negotiableCartsCartIdCouponsHandler,
  negotiableCartsCartIdEstimateShippingMethodsByAddressIdHandler,
  negotiableCartsCartIdEstimateShippingMethodsHandler,
  negotiableCartsCartIdGiftCardsGiftCardCodeHandler,
  negotiableCartsCartIdGiftCardsHandler,
  negotiableCartsCartIdPaymentInformationHandler,
  negotiableCartsCartIdSetPaymentInformationHandler,
  negotiableCartsCartIdShippingInformationHandler,
  negotiableCartsCartIdTotalsHandler,
  negotiableQuoteAttachmentContentHandler,
  negotiableQuoteDeclineHandler,
  negotiableQuotePricesUpdatedHandler,
  negotiableQuoteQuoteIdCommentsHandler,
  negotiableQuoteQuoteIdHandler,
  negotiableQuoteQuoteIdShippingMethodHandler,
  negotiableQuoteRequestHandler,
  negotiableQuoteSubmitToCustomerHandler,
  orderOrderIdInvoiceHandler,
  orderOrderIdRefundHandler,
  orderOrderIdShipHandler,
  ordersCreateHandler,
  ordersHandler,
  ordersIdCancelHandler,
  ordersIdCommentsHandler,
  ordersIdEmailsHandler,
  ordersIdHandler,
  ordersIdHoldHandler,
  ordersIdStatusesHandler,
  ordersIdUnholdHandler,
  ordersItemsHandler,
  ordersItemsIdHandler,
  ordersParentIdHandler,
  productsAttributesAttributeCodeHandler,
  productsAttributesAttributeCodeOptionsHandler,
  productsAttributesAttributeCodeOptionsOptionIdHandler,
  productsAttributeSetsAttributeSetIdAttributesAttributeCodeHandler,
  productsAttributeSetsAttributeSetIdAttributesHandler,
  productsAttributeSetsAttributeSetIdGroupsHandler,
  productsAttributeSetsAttributeSetIdHandler,
  productsAttributeSetsAttributesHandler,
  productsAttributeSetsGroupsGroupIdHandler,
  productsAttributeSetsGroupsHandler,
  productsAttributeSetsGroupsListHandler,
  productsAttributeSetsHandler,
  productsAttributeSetsSetsListHandler,
  productsAttributesHandler,
  productsAttributesTypesHandler,
  productsBasePricesHandler,
  productsBasePricesInformationHandler,
  productsCostDeleteHandler,
  productsCostHandler,
  productsCostInformationHandler,
  productsDownloadableLinksIdHandler,
  productsDownloadableLinksSamplesIdHandler,
  productsHandler,
  productsLinksTypeAttributesHandler,
  productsLinksTypesHandler,
  productsMediaTypesAttributeSetNameHandler,
  productsOptionsHandler,
  productsOptionsOptionIdHandler,
  productsOptionsTypesHandler,
  productsProductSkuStockItemsItemIdHandler,
  productsRenderInfoHandler,
  productsSkuDownloadableLinksHandler,
  productsSkuDownloadableLinksIdHandler,
  productsSkuDownloadableLinksSamplesHandler,
  productsSkuDownloadableLinksSamplesIdHandler,
  productsSkuGroupPricesCustomerGroupIdTiersHandler,
  productsSkuGroupPricesCustomerGroupIdTiersQtyHandler,
  productsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceHandler,
  productsSkuHandler,
  productsSkuLinksHandler,
  productsSkuLinksTypeHandler,
  productsSkuLinksTypeLinkedProductSkuHandler,
  productsSkuMediaEntryIdHandler,
  productsSkuMediaHandler,
  productsSkuOptionsHandler,
  productsSkuOptionsOptionIdHandler,
  productsSkuWebsitesHandler,
  productsSkuWebsitesWebsiteIdHandler,
  productsSpecialPriceDeleteHandler,
  productsSpecialPriceHandler,
  productsSpecialPriceInformationHandler,
  productsTierPricesDeleteHandler,
  productsTierPricesHandler,
  productsTierPricesInformationHandler,
  productsTypesHandler,
  requisitionListsHandler,
  returnsAttributeMetadataAttributeCodeHandler,
  returnsAttributeMetadataCustomHandler,
  returnsAttributeMetadataFormFormCodeHandler,
  returnsAttributeMetadataHandler,
  returnsHandler,
  returnsIdCommentsHandler,
  returnsIdHandler,
  returnsIdLabelsHandler,
  returnsIdTrackingNumbersHandler,
  returnsIdTrackingNumbersTrackIdHandler,
  rewardMineUseRewardHandler,
  salesRulesHandler,
  salesRulesRuleIdHandler,
  salesRulesSearchHandler,
  searchHandler,
  sharedCatalogHandler,
  sharedCatalogIdAssignCategoriesHandler,
  sharedCatalogIdAssignProductsHandler,
  sharedCatalogIdCategoriesHandler,
  sharedCatalogIdHandler,
  sharedCatalogIdProductsHandler,
  sharedCatalogIdUnassignCategoriesHandler,
  sharedCatalogIdUnassignProductsHandler,
  sharedCatalogSharedCatalogIdAssignCompaniesHandler,
  sharedCatalogSharedCatalogIdCompaniesHandler,
  sharedCatalogSharedCatalogIdHandler,
  sharedCatalogSharedCatalogIdUnassignCompaniesHandler,
  shipmentHandler,
  shipmentIdCommentsHandler,
  shipmentIdEmailsHandler,
  shipmentIdHandler,
  shipmentIdLabelHandler,
  shipmentsHandler,
  shipmentTrackHandler,
  shipmentTrackIdHandler,
  stockItemsLowStockHandler,
  stockItemsProductSkuHandler,
  stockStatusesProductSkuHandler,
  storeStoreConfigsHandler,
  storeStoreGroupsHandler,
  storeStoreViewsHandler,
  storeWebsitesHandler,
  taxClassesClassIdHandler,
  taxClassesHandler,
  taxClassesSearchHandler,
  taxClassesTaxClassIdHandler,
  taxRatesHandler,
  taxRatesRateIdHandler,
  taxRatesSearchHandler,
  taxRulesHandler,
  taxRulesRuleIdHandler,
  taxRulesSearchHandler,
  teamCompanyIdHandler,
  teamHandler,
  teamTeamIdHandler,
  temandoRmaRmaIdShipmentsHandler,
  transactionsHandler,
  transactionsIdHandler,
  worldpayGuestCartsCartIdPaymentInformationHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .route('/', addressesAddressIdHandler)
  .route('/', amazonBillingAddressAmazonOrderReferenceIdHandler)
  .route('/', amazonShippingAddressAmazonOrderReferenceIdHandler)
  .route('/', amazonOrderRefHandler)
  .route('/', analyticsLinkHandler)
  .route('/', attributeMetadataCustomerHandler)
  .route('/', attributeMetadataCustomerAttributeAttributeCodeHandler)
  .route('/', attributeMetadataCustomerCustomHandler)
  .route('/', attributeMetadataCustomerFormFormCodeHandler)
  .route('/', attributeMetadataCustomerAddressHandler)
  .route('/', attributeMetadataCustomerAddressAttributeAttributeCodeHandler)
  .route('/', attributeMetadataCustomerAddressCustomHandler)
  .route('/', attributeMetadataCustomerAddressFormFormCodeHandler)
  .route('/', bulkBulkUuidDetailedStatusHandler)
  .route('/', bulkBulkUuidOperationStatusStatusHandler)
  .route('/', bulkBulkUuidStatusHandler)
  .route('/', bundleProductsOptionsAddHandler)
  .route('/', bundleProductsOptionsTypesHandler)
  .route('/', bundleProductsOptionsOptionIdHandler)
  .route('/', bundleProductsProductSkuChildrenHandler)
  .route('/', bundleProductsSkuLinksIdHandler)
  .route('/', bundleProductsSkuLinksOptionIdHandler)
  .route('/', bundleProductsSkuOptionsAllHandler)
  .route('/', bundleProductsSkuOptionsOptionIdHandler)
  .route('/', bundleProductsSkuOptionsOptionIdChildrenChildSkuHandler)
  .route('/', cartsHandler)
  .route('/', cartsGuestCartsCartIdCheckGiftCardGiftCardCodeHandler)
  .route('/', cartsGuestCartsCartIdGiftCardsHandler)
  .route('/', cartsGuestCartsCartIdGiftCardsGiftCardCodeHandler)
  .route('/', cartsLicenceHandler)
  .route('/', cartsMineHandler)
  .route('/', cartsMineBalanceApplyHandler)
  .route('/', cartsMineBalanceUnapplyHandler)
  .route('/', cartsMineBillingAddressHandler)
  .route('/', cartsMineCheckGiftCardGiftCardCodeHandler)
  .route('/', cartsMineCheckoutFieldsHandler)
  .route('/', cartsMineCollectTotalsHandler)
  .route('/', cartsMineCollectionPointSearchRequestHandler)
  .route('/', cartsMineCollectionPointSearchResultHandler)
  .route('/', cartsMineCollectionPointSelectHandler)
  .route('/', cartsMineCouponsHandler)
  .route('/', cartsMineCouponsCouponCodeHandler)
  .route('/', cartsMineDeliveryOptionHandler)
  .route('/', cartsMineEstimateShippingMethodsHandler)
  .route('/', cartsMineEstimateShippingMethodsByAddressIdHandler)
  .route('/', cartsMineGiftMessageHandler)
  .route('/', cartsMineGiftMessageItemIdHandler)
  .route('/', cartsMineGiftCardsHandler)
  .route('/', cartsMineGiftCardsGiftCardCodeHandler)
  .route('/', cartsMineItemsHandler)
  .route('/', cartsMineItemsItemIdHandler)
  .route('/', cartsMineOrderHandler)
  .route('/', cartsMinePaymentInformationHandler)
  .route('/', cartsMinePaymentMethodsHandler)
  .route('/', cartsMineSelectedPaymentMethodHandler)
  .route('/', cartsMineSetPaymentInformationHandler)
  .route('/', cartsMineShippingInformationHandler)
  .route('/', cartsMineShippingMethodsHandler)
  .route('/', cartsMineTotalsHandler)
  .route('/', cartsMineTotalsInformationHandler)
  .route('/', cartsSearchHandler)
  .route('/', cartsCartIdHandler)
  .route('/', cartsCartIdBillingAddressHandler)
  .route('/', cartsCartIdCouponsHandler)
  .route('/', cartsCartIdCouponsCouponCodeHandler)
  .route('/', cartsCartIdEstimateShippingMethodsHandler)
  .route('/', cartsCartIdEstimateShippingMethodsByAddressIdHandler)
  .route('/', cartsCartIdGiftMessageHandler)
  .route('/', cartsCartIdGiftMessageItemIdHandler)
  .route('/', cartsCartIdGiftCardsHandler)
  .route('/', cartsCartIdGiftCardsGiftCardCodeHandler)
  .route('/', cartsCartIdItemsHandler)
  .route('/', cartsCartIdItemsItemIdHandler)
  .route('/', cartsCartIdOrderHandler)
  .route('/', cartsCartIdPaymentMethodsHandler)
  .route('/', cartsCartIdSelectedPaymentMethodHandler)
  .route('/', cartsCartIdShippingInformationHandler)
  .route('/', cartsCartIdShippingMethodsHandler)
  .route('/', cartsCartIdTotalsHandler)
  .route('/', cartsCartIdTotalsInformationHandler)
  .route('/', cartsQuoteIdGiftCardsHandler)
  .route('/', cartsQuoteIdItemsHandler)
  .route('/', categoriesHandler)
  .route('/', categoriesAttributesHandler)
  .route('/', categoriesAttributesAttributeCodeHandler)
  .route('/', categoriesAttributesAttributeCodeOptionsHandler)
  .route('/', categoriesListHandler)
  .route('/', categoriesCategoryIdHandler)
  .route('/', categoriesCategoryIdMoveHandler)
  .route('/', categoriesCategoryIdProductsHandler)
  .route('/', categoriesCategoryIdProductsSkuHandler)
  .route('/', categoriesIdHandler)
  .route('/', cmsBlockHandler)
  .route('/', cmsBlockSearchHandler)
  .route('/', cmsBlockBlockIdHandler)
  .route('/', cmsBlockIdHandler)
  .route('/', cmsPageHandler)
  .route('/', cmsPageSearchHandler)
  .route('/', cmsPageIdHandler)
  .route('/', cmsPagePageIdHandler)
  .route('/', companyHandler)
  .route('/', companyAssignRolesHandler)
  .route('/', companyRoleHandler)
  .route('/', companyRoleIdHandler)
  .route('/', companyRoleRoleIdHandler)
  .route('/', companyRoleRoleIdUsersHandler)
  .route('/', companyCompanyIdHandler)
  .route('/', companyCreditsHandler)
  .route('/', companyCreditsCompanyCompanyIdHandler)
  .route('/', companyCreditsHistoryHandler)
  .route('/', companyCreditsHistoryHistoryIdHandler)
  .route('/', companyCreditsCreditIdHandler)
  .route('/', companyCreditsCreditIdDecreaseBalanceHandler)
  .route('/', companyCreditsCreditIdIncreaseBalanceHandler)
  .route('/', companyCreditsIdHandler)
  .route('/', configurableProductsVariationHandler)
  .route('/', configurableProductsSkuChildHandler)
  .route('/', configurableProductsSkuChildrenHandler)
  .route('/', configurableProductsSkuChildrenChildSkuHandler)
  .route('/', configurableProductsSkuOptionsHandler)
  .route('/', configurableProductsSkuOptionsAllHandler)
  .route('/', configurableProductsSkuOptionsIdHandler)
  .route('/', couponsHandler)
  .route('/', couponsDeleteByCodesHandler)
  .route('/', couponsDeleteByIdsHandler)
  .route('/', couponsGenerateHandler)
  .route('/', couponsSearchHandler)
  .route('/', couponsCouponIdHandler)
  .route('/', creditmemoHandler)
  .route('/', creditmemoRefundHandler)
  .route('/', creditmemoIdHandler)
  .route('/', creditmemoIdCommentsHandler)
  .route('/', creditmemoIdEmailsHandler)
  .route('/', creditmemosHandler)
  .route('/', customerGroupsHandler)
  .route('/', customerGroupsDefaultHandler)
  .route('/', customerGroupsDefaultIdHandler)
  .route('/', customerGroupsDefaultStoreIdHandler)
  .route('/', customerGroupsSearchHandler)
  .route('/', customerGroupsIdHandler)
  .route('/', customerGroupsIdPermissionsHandler)
  .route('/', customersHandler)
  .route('/', customersAddressesAddressIdHandler)
  .route('/', customersConfirmHandler)
  .route('/', customersIsEmailAvailableHandler)
  .route('/', customersMeHandler)
  .route('/', customersMeActivateHandler)
  .route('/', customersMeBillingAddressHandler)
  .route('/', customersMePasswordHandler)
  .route('/', customersMeShippingAddressHandler)
  .route('/', customersPasswordHandler)
  .route('/', customersResetPasswordHandler)
  .route('/', customersSearchHandler)
  .route('/', customersValidateHandler)
  .route('/', customersCustomerIdHandler)
  .route('/', customersCustomerIdBillingAddressHandler)
  .route('/', customersCustomerIdCartsHandler)
  .route('/', customersCustomerIdConfirmHandler)
  .route('/', customersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenHandler)
  .route('/', customersCustomerIdPermissionsReadonlyHandler)
  .route('/', customersCustomerIdShippingAddressHandler)
  .route('/', customersEmailActivateHandler)
  .route('/', directoryCountriesHandler)
  .route('/', directoryCountriesCountryIdHandler)
  .route('/', directoryCurrencyHandler)
  .route('/', eavAttributeSetsHandler)
  .route('/', eavAttributeSetsListHandler)
  .route('/', eavAttributeSetsAttributeSetIdHandler)
  .route('/', giftWrappingsHandler)
  .route('/', giftWrappingsIdHandler)
  .route('/', giftWrappingsWrappingIdHandler)
  .route('/', giftregistryMineEstimateShippingMethodsHandler)
  .route('/', guestCartsHandler)
  .route('/', guestCartsCartIdHandler)
  .route('/', guestCartsCartIdBillingAddressHandler)
  .route('/', guestCartsCartIdCheckoutFieldsHandler)
  .route('/', guestCartsCartIdCollectTotalsHandler)
  .route('/', guestCartsCartIdCollectionPointSearchRequestHandler)
  .route('/', guestCartsCartIdCollectionPointSearchResultHandler)
  .route('/', guestCartsCartIdCollectionPointSelectHandler)
  .route('/', guestCartsCartIdCouponsHandler)
  .route('/', guestCartsCartIdCouponsCouponCodeHandler)
  .route('/', guestCartsCartIdDeliveryOptionHandler)
  .route('/', guestCartsCartIdEstimateShippingMethodsHandler)
  .route('/', guestCartsCartIdGiftMessageHandler)
  .route('/', guestCartsCartIdGiftMessageItemIdHandler)
  .route('/', guestCartsCartIdItemsHandler)
  .route('/', guestCartsCartIdItemsItemIdHandler)
  .route('/', guestCartsCartIdOrderHandler)
  .route('/', guestCartsCartIdPaymentInformationHandler)
  .route('/', guestCartsCartIdPaymentMethodsHandler)
  .route('/', guestCartsCartIdSelectedPaymentMethodHandler)
  .route('/', guestCartsCartIdSetPaymentInformationHandler)
  .route('/', guestCartsCartIdShippingInformationHandler)
  .route('/', guestCartsCartIdShippingMethodsHandler)
  .route('/', guestCartsCartIdTotalsHandler)
  .route('/', guestCartsCartIdTotalsInformationHandler)
  .route('/', guestGiftregistryCartIdEstimateShippingMethodsHandler)
  .route('/', hierarchyMoveIdHandler)
  .route('/', hierarchyIdHandler)
  .route('/', integrationAdminTokenHandler)
  .route('/', integrationCustomerTokenHandler)
  .route('/', invoiceInvoiceIdRefundHandler)
  .route('/', invoicesHandler)
  .route('/', invoicesCommentsHandler)
  .route('/', invoicesIdHandler)
  .route('/', invoicesIdCaptureHandler)
  .route('/', invoicesIdCommentsHandler)
  .route('/', invoicesIdEmailsHandler)
  .route('/', invoicesIdVoidHandler)
  .route('/', modulesHandler)
  .route('/', negotiableCartsCartIdBillingAddressHandler)
  .route('/', negotiableCartsCartIdCouponsHandler)
  .route('/', negotiableCartsCartIdCouponsCouponCodeHandler)
  .route('/', negotiableCartsCartIdEstimateShippingMethodsHandler)
  .route('/', negotiableCartsCartIdEstimateShippingMethodsByAddressIdHandler)
  .route('/', negotiableCartsCartIdGiftCardsHandler)
  .route('/', negotiableCartsCartIdGiftCardsGiftCardCodeHandler)
  .route('/', negotiableCartsCartIdPaymentInformationHandler)
  .route('/', negotiableCartsCartIdSetPaymentInformationHandler)
  .route('/', negotiableCartsCartIdShippingInformationHandler)
  .route('/', negotiableCartsCartIdTotalsHandler)
  .route('/', negotiableQuoteAttachmentContentHandler)
  .route('/', negotiableQuoteDeclineHandler)
  .route('/', negotiableQuotePricesUpdatedHandler)
  .route('/', negotiableQuoteRequestHandler)
  .route('/', negotiableQuoteSubmitToCustomerHandler)
  .route('/', negotiableQuoteQuoteIdHandler)
  .route('/', negotiableQuoteQuoteIdCommentsHandler)
  .route('/', negotiableQuoteQuoteIdShippingMethodHandler)
  .route('/', orderOrderIdInvoiceHandler)
  .route('/', orderOrderIdRefundHandler)
  .route('/', orderOrderIdShipHandler)
  .route('/', ordersHandler)
  .route('/', ordersCreateHandler)
  .route('/', ordersItemsHandler)
  .route('/', ordersItemsIdHandler)
  .route('/', ordersIdHandler)
  .route('/', ordersIdCancelHandler)
  .route('/', ordersIdCommentsHandler)
  .route('/', ordersIdEmailsHandler)
  .route('/', ordersIdHoldHandler)
  .route('/', ordersIdStatusesHandler)
  .route('/', ordersIdUnholdHandler)
  .route('/', ordersParentIdHandler)
  .route('/', productsHandler)
  .route('/', productsRenderInfoHandler)
  .route('/', productsAttributeSetsHandler)
  .route('/', productsAttributeSetsAttributesHandler)
  .route('/', productsAttributeSetsGroupsHandler)
  .route('/', productsAttributeSetsGroupsListHandler)
  .route('/', productsAttributeSetsGroupsGroupIdHandler)
  .route('/', productsAttributeSetsSetsListHandler)
  .route('/', productsAttributeSetsAttributeSetIdHandler)
  .route('/', productsAttributeSetsAttributeSetIdAttributesHandler)
  .route('/', productsAttributeSetsAttributeSetIdAttributesAttributeCodeHandler)
  .route('/', productsAttributeSetsAttributeSetIdGroupsHandler)
  .route('/', productsAttributesHandler)
  .route('/', productsAttributesTypesHandler)
  .route('/', productsAttributesAttributeCodeHandler)
  .route('/', productsAttributesAttributeCodeOptionsHandler)
  .route('/', productsAttributesAttributeCodeOptionsOptionIdHandler)
  .route('/', productsBasePricesHandler)
  .route('/', productsBasePricesInformationHandler)
  .route('/', productsCostHandler)
  .route('/', productsCostDeleteHandler)
  .route('/', productsCostInformationHandler)
  .route('/', productsDownloadableLinksSamplesIdHandler)
  .route('/', productsDownloadableLinksIdHandler)
  .route('/', productsLinksTypesHandler)
  .route('/', productsLinksTypeAttributesHandler)
  .route('/', productsMediaTypesAttributeSetNameHandler)
  .route('/', productsOptionsHandler)
  .route('/', productsOptionsTypesHandler)
  .route('/', productsOptionsOptionIdHandler)
  .route('/', productsSpecialPriceHandler)
  .route('/', productsSpecialPriceDeleteHandler)
  .route('/', productsSpecialPriceInformationHandler)
  .route('/', productsTierPricesHandler)
  .route('/', productsTierPricesDeleteHandler)
  .route('/', productsTierPricesInformationHandler)
  .route('/', productsTypesHandler)
  .route('/', productsProductSkuStockItemsItemIdHandler)
  .route('/', productsSkuHandler)
  .route('/', productsSkuDownloadableLinksHandler)
  .route('/', productsSkuDownloadableLinksSamplesHandler)
  .route('/', productsSkuDownloadableLinksSamplesIdHandler)
  .route('/', productsSkuDownloadableLinksIdHandler)
  .route('/', productsSkuGroupPricesCustomerGroupIdTiersHandler)
  .route('/', productsSkuGroupPricesCustomerGroupIdTiersQtyHandler)
  .route('/', productsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceHandler)
  .route('/', productsSkuLinksHandler)
  .route('/', productsSkuLinksTypeHandler)
  .route('/', productsSkuLinksTypeLinkedProductSkuHandler)
  .route('/', productsSkuMediaHandler)
  .route('/', productsSkuMediaEntryIdHandler)
  .route('/', productsSkuOptionsHandler)
  .route('/', productsSkuOptionsOptionIdHandler)
  .route('/', productsSkuWebsitesHandler)
  .route('/', productsSkuWebsitesWebsiteIdHandler)
  .route('/', requisitionListsHandler)
  .route('/', returnsHandler)
  .route('/', returnsIdHandler)
  .route('/', returnsIdCommentsHandler)
  .route('/', returnsIdLabelsHandler)
  .route('/', returnsIdTrackingNumbersHandler)
  .route('/', returnsIdTrackingNumbersTrackIdHandler)
  .route('/', returnsAttributeMetadataHandler)
  .route('/', returnsAttributeMetadataCustomHandler)
  .route('/', returnsAttributeMetadataFormFormCodeHandler)
  .route('/', returnsAttributeMetadataAttributeCodeHandler)
  .route('/', rewardMineUseRewardHandler)
  .route('/', salesRulesHandler)
  .route('/', salesRulesSearchHandler)
  .route('/', salesRulesRuleIdHandler)
  .route('/', searchHandler)
  .route('/', sharedCatalogHandler)
  .route('/', sharedCatalogIdHandler)
  .route('/', sharedCatalogIdAssignCategoriesHandler)
  .route('/', sharedCatalogIdAssignProductsHandler)
  .route('/', sharedCatalogIdCategoriesHandler)
  .route('/', sharedCatalogIdProductsHandler)
  .route('/', sharedCatalogIdUnassignCategoriesHandler)
  .route('/', sharedCatalogIdUnassignProductsHandler)
  .route('/', sharedCatalogSharedCatalogIdHandler)
  .route('/', sharedCatalogSharedCatalogIdAssignCompaniesHandler)
  .route('/', sharedCatalogSharedCatalogIdCompaniesHandler)
  .route('/', sharedCatalogSharedCatalogIdUnassignCompaniesHandler)
  .route('/', shipmentHandler)
  .route('/', shipmentTrackHandler)
  .route('/', shipmentTrackIdHandler)
  .route('/', shipmentIdHandler)
  .route('/', shipmentIdCommentsHandler)
  .route('/', shipmentIdEmailsHandler)
  .route('/', shipmentIdLabelHandler)
  .route('/', shipmentsHandler)
  .route('/', stockItemsLowStockHandler)
  .route('/', stockItemsProductSkuHandler)
  .route('/', stockStatusesProductSkuHandler)
  .route('/', storeStoreConfigsHandler)
  .route('/', storeStoreGroupsHandler)
  .route('/', storeStoreViewsHandler)
  .route('/', storeWebsitesHandler)
  .route('/', taxClassesHandler)
  .route('/', taxClassesSearchHandler)
  .route('/', taxClassesClassIdHandler)
  .route('/', taxClassesTaxClassIdHandler)
  .route('/', taxRatesHandler)
  .route('/', taxRatesSearchHandler)
  .route('/', taxRatesRateIdHandler)
  .route('/', taxRulesHandler)
  .route('/', taxRulesSearchHandler)
  .route('/', taxRulesRuleIdHandler)
  .route('/', teamHandler)
  .route('/', teamCompanyIdHandler)
  .route('/', teamTeamIdHandler)
  .route('/', temandoRmaRmaIdShipmentsHandler)
  .route('/', transactionsHandler)
  .route('/', transactionsIdHandler)
  .route('/', worldpayGuestCartsCartIdPaymentInformationHandler)

export default app
