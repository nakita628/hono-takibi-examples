import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1AddressesAddressIdRoute,
  deleteV1AmazonOrderRefRoute,
  deleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuRoute,
  deleteV1BundleProductsSkuOptionsOptionIdRoute,
  deleteV1CartsCartIdCouponsRoute,
  deleteV1CartsCartIdGiftCardsGiftCardCodeRoute,
  deleteV1CartsCartIdItemsItemIdRoute,
  deleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeRoute,
  deleteV1CartsMineCollectionPointSearchRequestRoute,
  deleteV1CartsMineCouponsRoute,
  deleteV1CartsMineGiftCardsGiftCardCodeRoute,
  deleteV1CartsMineItemsItemIdRoute,
  deleteV1CategoriesCategoryIdProductsSkuRoute,
  deleteV1CategoriesCategoryIdRoute,
  deleteV1CmsBlockBlockIdRoute,
  deleteV1CmsPagePageIdRoute,
  deleteV1CompanyCompanyIdRoute,
  deleteV1CompanyRoleRoleIdRoute,
  deleteV1ConfigurableProductsSkuChildrenChildSkuRoute,
  deleteV1ConfigurableProductsSkuOptionsIdRoute,
  deleteV1CouponsCouponIdRoute,
  deleteV1CustomerGroupsIdRoute,
  deleteV1CustomersCustomerIdRoute,
  deleteV1EavAttributeSetsAttributeSetIdRoute,
  deleteV1GiftWrappingsIdRoute,
  deleteV1GuestCartsCartIdCollectionPointSearchRequestRoute,
  deleteV1GuestCartsCartIdCouponsRoute,
  deleteV1GuestCartsCartIdItemsItemIdRoute,
  deleteV1NegotiableCartsCartIdCouponsRoute,
  deleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeRoute,
  deleteV1ProductsAttributesAttributeCodeOptionsOptionIdRoute,
  deleteV1ProductsAttributesAttributeCodeRoute,
  deleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeRoute,
  deleteV1ProductsAttributeSetsAttributeSetIdRoute,
  deleteV1ProductsAttributeSetsGroupsGroupIdRoute,
  deleteV1ProductsDownloadableLinksIdRoute,
  deleteV1ProductsDownloadableLinksSamplesIdRoute,
  deleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyRoute,
  deleteV1ProductsSkuLinksTypeLinkedProductSkuRoute,
  deleteV1ProductsSkuMediaEntryIdRoute,
  deleteV1ProductsSkuOptionsOptionIdRoute,
  deleteV1ProductsSkuRoute,
  deleteV1ProductsSkuWebsitesWebsiteIdRoute,
  deleteV1ReturnsIdRoute,
  deleteV1ReturnsIdTrackingNumbersTrackIdRoute,
  deleteV1SalesRulesRuleIdRoute,
  deleteV1SharedCatalogSharedCatalogIdRoute,
  deleteV1ShipmentTrackIdRoute,
  deleteV1TaxClassesTaxClassIdRoute,
  deleteV1TaxRatesRateIdRoute,
  deleteV1TaxRulesRuleIdRoute,
  deleteV1TeamTeamIdRoute,
  getV1AnalyticsLinkRoute,
  getV1AttributeMetadataCustomerAddressAttributeAttributeCodeRoute,
  getV1AttributeMetadataCustomerAddressCustomRoute,
  getV1AttributeMetadataCustomerAddressFormFormCodeRoute,
  getV1AttributeMetadataCustomerAddressRoute,
  getV1AttributeMetadataCustomerAttributeAttributeCodeRoute,
  getV1AttributeMetadataCustomerCustomRoute,
  getV1AttributeMetadataCustomerFormFormCodeRoute,
  getV1AttributeMetadataCustomerRoute,
  getV1BulkBulkUuidDetailedStatusRoute,
  getV1BulkBulkUuidOperationStatusStatusRoute,
  getV1BulkBulkUuidStatusRoute,
  getV1BundleProductsOptionsTypesRoute,
  getV1BundleProductsProductSkuChildrenRoute,
  getV1BundleProductsSkuOptionsAllRoute,
  getV1BundleProductsSkuOptionsOptionIdRoute,
  getV1CartsCartIdBillingAddressRoute,
  getV1CartsCartIdCouponsRoute,
  getV1CartsCartIdGiftMessageItemIdRoute,
  getV1CartsCartIdGiftMessageRoute,
  getV1CartsCartIdItemsRoute,
  getV1CartsCartIdPaymentMethodsRoute,
  getV1CartsCartIdRoute,
  getV1CartsCartIdSelectedPaymentMethodRoute,
  getV1CartsCartIdShippingMethodsRoute,
  getV1CartsCartIdTotalsRoute,
  getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeRoute,
  getV1CartsLicenceRoute,
  getV1CartsMineBillingAddressRoute,
  getV1CartsMineCheckGiftCardGiftCardCodeRoute,
  getV1CartsMineCollectionPointSearchResultRoute,
  getV1CartsMineCouponsRoute,
  getV1CartsMineGiftMessageItemIdRoute,
  getV1CartsMineGiftMessageRoute,
  getV1CartsMineItemsRoute,
  getV1CartsMinePaymentInformationRoute,
  getV1CartsMinePaymentMethodsRoute,
  getV1CartsMineRoute,
  getV1CartsMineSelectedPaymentMethodRoute,
  getV1CartsMineShippingMethodsRoute,
  getV1CartsMineTotalsRoute,
  getV1CartsQuoteIdGiftCardsRoute,
  getV1CartsSearchRoute,
  getV1CategoriesAttributesAttributeCodeOptionsRoute,
  getV1CategoriesAttributesAttributeCodeRoute,
  getV1CategoriesAttributesRoute,
  getV1CategoriesCategoryIdProductsRoute,
  getV1CategoriesCategoryIdRoute,
  getV1CategoriesListRoute,
  getV1CategoriesRoute,
  getV1CmsBlockBlockIdRoute,
  getV1CmsBlockSearchRoute,
  getV1CmsPagePageIdRoute,
  getV1CmsPageSearchRoute,
  getV1CompanyCompanyIdRoute,
  getV1CompanyCreditsCompanyCompanyIdRoute,
  getV1CompanyCreditsCreditIdRoute,
  getV1CompanyCreditsHistoryRoute,
  getV1CompanyCreditsIndexRoute,
  getV1CompanyIndexRoute,
  getV1CompanyRoleIndexRoute,
  getV1CompanyRoleRoleIdRoute,
  getV1CompanyRoleRoleIdUsersRoute,
  getV1ConfigurableProductsSkuChildrenRoute,
  getV1ConfigurableProductsSkuOptionsAllRoute,
  getV1ConfigurableProductsSkuOptionsIdRoute,
  getV1CouponsCouponIdRoute,
  getV1CouponsSearchRoute,
  getV1CreditmemoIdCommentsRoute,
  getV1CreditmemoIdRoute,
  getV1CreditmemosRoute,
  getV1CustomerGroupsDefaultRoute,
  getV1CustomerGroupsDefaultStoreIdRoute,
  getV1CustomerGroupsIdPermissionsRoute,
  getV1CustomerGroupsIdRoute,
  getV1CustomerGroupsSearchRoute,
  getV1CustomersAddressesAddressIdRoute,
  getV1CustomersCustomerIdBillingAddressRoute,
  getV1CustomersCustomerIdConfirmRoute,
  getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenRoute,
  getV1CustomersCustomerIdPermissionsReadonlyRoute,
  getV1CustomersCustomerIdRoute,
  getV1CustomersCustomerIdShippingAddressRoute,
  getV1CustomersMeBillingAddressRoute,
  getV1CustomersMeRoute,
  getV1CustomersMeShippingAddressRoute,
  getV1CustomersSearchRoute,
  getV1DirectoryCountriesCountryIdRoute,
  getV1DirectoryCountriesRoute,
  getV1DirectoryCurrencyRoute,
  getV1EavAttributeSetsAttributeSetIdRoute,
  getV1EavAttributeSetsListRoute,
  getV1GiftWrappingsIdRoute,
  getV1GiftWrappingsRoute,
  getV1GuestCartsCartIdBillingAddressRoute,
  getV1GuestCartsCartIdCollectionPointSearchResultRoute,
  getV1GuestCartsCartIdCouponsRoute,
  getV1GuestCartsCartIdGiftMessageItemIdRoute,
  getV1GuestCartsCartIdGiftMessageRoute,
  getV1GuestCartsCartIdItemsRoute,
  getV1GuestCartsCartIdPaymentInformationRoute,
  getV1GuestCartsCartIdPaymentMethodsRoute,
  getV1GuestCartsCartIdRoute,
  getV1GuestCartsCartIdSelectedPaymentMethodRoute,
  getV1GuestCartsCartIdShippingMethodsRoute,
  getV1GuestCartsCartIdTotalsRoute,
  getV1HierarchyIdRoute,
  getV1InvoicesIdCommentsRoute,
  getV1InvoicesIdRoute,
  getV1InvoicesRoute,
  getV1ModulesRoute,
  getV1NegotiableCartsCartIdBillingAddressRoute,
  getV1NegotiableCartsCartIdPaymentInformationRoute,
  getV1NegotiableCartsCartIdTotalsRoute,
  getV1NegotiableQuoteAttachmentContentRoute,
  getV1NegotiableQuoteQuoteIdCommentsRoute,
  getV1OrdersIdCommentsRoute,
  getV1OrdersIdRoute,
  getV1OrdersIdStatusesRoute,
  getV1OrdersItemsIdRoute,
  getV1OrdersItemsRoute,
  getV1OrdersRoute,
  getV1ProductsAttributesAttributeCodeOptionsRoute,
  getV1ProductsAttributesAttributeCodeRoute,
  getV1ProductsAttributeSetsAttributeSetIdAttributesRoute,
  getV1ProductsAttributeSetsAttributeSetIdRoute,
  getV1ProductsAttributeSetsGroupsListRoute,
  getV1ProductsAttributeSetsSetsListRoute,
  getV1ProductsAttributesRoute,
  getV1ProductsAttributesTypesRoute,
  getV1ProductsLinksTypeAttributesRoute,
  getV1ProductsLinksTypesRoute,
  getV1ProductsMediaTypesAttributeSetNameRoute,
  getV1ProductsOptionsTypesRoute,
  getV1ProductsRenderInfoRoute,
  getV1ProductsRoute,
  getV1ProductsSkuDownloadableLinksRoute,
  getV1ProductsSkuDownloadableLinksSamplesRoute,
  getV1ProductsSkuGroupPricesCustomerGroupIdTiersRoute,
  getV1ProductsSkuLinksTypeRoute,
  getV1ProductsSkuMediaEntryIdRoute,
  getV1ProductsSkuMediaRoute,
  getV1ProductsSkuOptionsOptionIdRoute,
  getV1ProductsSkuOptionsRoute,
  getV1ProductsSkuRoute,
  getV1ProductsTypesRoute,
  getV1ReturnsAttributeMetadataAttributeCodeRoute,
  getV1ReturnsAttributeMetadataCustomRoute,
  getV1ReturnsAttributeMetadataFormFormCodeRoute,
  getV1ReturnsAttributeMetadataRoute,
  getV1ReturnsIdCommentsRoute,
  getV1ReturnsIdLabelsRoute,
  getV1ReturnsIdRoute,
  getV1ReturnsIdTrackingNumbersRoute,
  getV1ReturnsRoute,
  getV1SalesRulesRuleIdRoute,
  getV1SalesRulesSearchRoute,
  getV1SearchRoute,
  getV1SharedCatalogIdCategoriesRoute,
  getV1SharedCatalogIdProductsRoute,
  getV1SharedCatalogIndexRoute,
  getV1SharedCatalogSharedCatalogIdCompaniesRoute,
  getV1SharedCatalogSharedCatalogIdRoute,
  getV1ShipmentIdCommentsRoute,
  getV1ShipmentIdLabelRoute,
  getV1ShipmentIdRoute,
  getV1ShipmentsRoute,
  getV1StockItemsLowStockIndexRoute,
  getV1StockItemsProductSkuRoute,
  getV1StockStatusesProductSkuRoute,
  getV1StoreStoreConfigsRoute,
  getV1StoreStoreGroupsRoute,
  getV1StoreStoreViewsRoute,
  getV1StoreWebsitesRoute,
  getV1TaxClassesSearchRoute,
  getV1TaxClassesTaxClassIdRoute,
  getV1TaxRatesRateIdRoute,
  getV1TaxRatesSearchRoute,
  getV1TaxRulesRuleIdRoute,
  getV1TaxRulesSearchRoute,
  getV1TeamIndexRoute,
  getV1TeamTeamIdRoute,
  getV1TransactionsIdRoute,
  getV1TransactionsRoute,
  postV1BundleProductsOptionsAddRoute,
  postV1BundleProductsSkuLinksOptionIdRoute,
  postV1CartsCartIdBillingAddressRoute,
  postV1CartsCartIdEstimateShippingMethodsByAddressIdRoute,
  postV1CartsCartIdEstimateShippingMethodsRoute,
  postV1CartsCartIdGiftMessageItemIdRoute,
  postV1CartsCartIdGiftMessageRoute,
  postV1CartsCartIdShippingInformationRoute,
  postV1CartsCartIdTotalsInformationRoute,
  postV1CartsGuestCartsCartIdGiftCardsRoute,
  postV1CartsIndexRoute,
  postV1CartsMineBalanceApplyRoute,
  postV1CartsMineBalanceUnapplyRoute,
  postV1CartsMineBillingAddressRoute,
  postV1CartsMineCheckoutFieldsRoute,
  postV1CartsMineCollectionPointSelectRoute,
  postV1CartsMineDeliveryOptionRoute,
  postV1CartsMineEstimateShippingMethodsByAddressIdRoute,
  postV1CartsMineEstimateShippingMethodsRoute,
  postV1CartsMineGiftCardsRoute,
  postV1CartsMineGiftMessageItemIdRoute,
  postV1CartsMineGiftMessageRoute,
  postV1CartsMineItemsRoute,
  postV1CartsMinePaymentInformationRoute,
  postV1CartsMineRoute,
  postV1CartsMineSetPaymentInformationRoute,
  postV1CartsMineShippingInformationRoute,
  postV1CartsMineTotalsInformationRoute,
  postV1CartsQuoteIdItemsRoute,
  postV1CategoriesCategoryIdProductsRoute,
  postV1CategoriesRoute,
  postV1CmsBlockRoute,
  postV1CmsPageRoute,
  postV1CompanyCreditsCreditIdDecreaseBalanceRoute,
  postV1CompanyCreditsCreditIdIncreaseBalanceRoute,
  postV1CompanyIndexRoute,
  postV1CompanyRoleIndexRoute,
  postV1ConfigurableProductsSkuChildRoute,
  postV1ConfigurableProductsSkuOptionsRoute,
  postV1CouponsDeleteByCodesRoute,
  postV1CouponsDeleteByIdsRoute,
  postV1CouponsGenerateRoute,
  postV1CouponsRoute,
  postV1CreditmemoIdCommentsRoute,
  postV1CreditmemoIdEmailsRoute,
  postV1CreditmemoRefundRoute,
  postV1CreditmemoRoute,
  postV1CustomerGroupsRoute,
  postV1CustomersConfirmRoute,
  postV1CustomersCustomerIdCartsRoute,
  postV1CustomersIsEmailAvailableRoute,
  postV1CustomersResetPasswordRoute,
  postV1CustomersRoute,
  postV1EavAttributeSetsRoute,
  postV1GiftregistryMineEstimateShippingMethodsRoute,
  postV1GiftWrappingsRoute,
  postV1GuestCartsCartIdBillingAddressRoute,
  postV1GuestCartsCartIdCheckoutFieldsRoute,
  postV1GuestCartsCartIdCollectionPointSelectRoute,
  postV1GuestCartsCartIdDeliveryOptionRoute,
  postV1GuestCartsCartIdEstimateShippingMethodsRoute,
  postV1GuestCartsCartIdGiftMessageItemIdRoute,
  postV1GuestCartsCartIdGiftMessageRoute,
  postV1GuestCartsCartIdItemsRoute,
  postV1GuestCartsCartIdPaymentInformationRoute,
  postV1GuestCartsCartIdSetPaymentInformationRoute,
  postV1GuestCartsCartIdShippingInformationRoute,
  postV1GuestCartsCartIdTotalsInformationRoute,
  postV1GuestCartsRoute,
  postV1GuestGiftregistryCartIdEstimateShippingMethodsRoute,
  postV1IntegrationAdminTokenRoute,
  postV1IntegrationCustomerTokenRoute,
  postV1InvoiceInvoiceIdRefundRoute,
  postV1InvoicesCommentsRoute,
  postV1InvoicesIdCaptureRoute,
  postV1InvoicesIdEmailsRoute,
  postV1InvoicesIdVoidRoute,
  postV1InvoicesIndexRoute,
  postV1NegotiableCartsCartIdBillingAddressRoute,
  postV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdRoute,
  postV1NegotiableCartsCartIdEstimateShippingMethodsRoute,
  postV1NegotiableCartsCartIdGiftCardsRoute,
  postV1NegotiableCartsCartIdPaymentInformationRoute,
  postV1NegotiableCartsCartIdSetPaymentInformationRoute,
  postV1NegotiableCartsCartIdShippingInformationRoute,
  postV1NegotiableQuoteDeclineRoute,
  postV1NegotiableQuotePricesUpdatedRoute,
  postV1NegotiableQuoteRequestRoute,
  postV1NegotiableQuoteSubmitToCustomerRoute,
  postV1OrderOrderIdInvoiceRoute,
  postV1OrderOrderIdRefundRoute,
  postV1OrderOrderIdShipRoute,
  postV1OrdersIdCancelRoute,
  postV1OrdersIdCommentsRoute,
  postV1OrdersIdEmailsRoute,
  postV1OrdersIdHoldRoute,
  postV1OrdersIdUnholdRoute,
  postV1OrdersIndexRoute,
  postV1ProductsAttributesAttributeCodeOptionsRoute,
  postV1ProductsAttributeSetsAttributesRoute,
  postV1ProductsAttributeSetsGroupsRoute,
  postV1ProductsAttributeSetsRoute,
  postV1ProductsAttributesRoute,
  postV1ProductsBasePricesInformationRoute,
  postV1ProductsBasePricesRoute,
  postV1ProductsCostDeleteRoute,
  postV1ProductsCostInformationRoute,
  postV1ProductsCostRoute,
  postV1ProductsOptionsRoute,
  postV1ProductsRoute,
  postV1ProductsSkuDownloadableLinksRoute,
  postV1ProductsSkuDownloadableLinksSamplesRoute,
  postV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceRoute,
  postV1ProductsSkuLinksRoute,
  postV1ProductsSkuMediaRoute,
  postV1ProductsSkuWebsitesRoute,
  postV1ProductsSpecialPriceDeleteRoute,
  postV1ProductsSpecialPriceInformationRoute,
  postV1ProductsSpecialPriceRoute,
  postV1ProductsTierPricesDeleteRoute,
  postV1ProductsTierPricesInformationRoute,
  postV1ProductsTierPricesRoute,
  postV1RequisitionListsRoute,
  postV1ReturnsIdCommentsRoute,
  postV1ReturnsIdTrackingNumbersRoute,
  postV1ReturnsRoute,
  postV1RewardMineUseRewardRoute,
  postV1SalesRulesRoute,
  postV1SharedCatalogIdAssignCategoriesRoute,
  postV1SharedCatalogIdAssignProductsRoute,
  postV1SharedCatalogIdUnassignCategoriesRoute,
  postV1SharedCatalogIdUnassignProductsRoute,
  postV1SharedCatalogRoute,
  postV1SharedCatalogSharedCatalogIdAssignCompaniesRoute,
  postV1SharedCatalogSharedCatalogIdUnassignCompaniesRoute,
  postV1ShipmentIdCommentsRoute,
  postV1ShipmentIdEmailsRoute,
  postV1ShipmentIndexRoute,
  postV1ShipmentTrackRoute,
  postV1TaxClassesRoute,
  postV1TaxRatesRoute,
  postV1TaxRulesRoute,
  postV1TeamCompanyIdRoute,
  postV1WorldpayGuestCartsCartIdPaymentInformationRoute,
  putV1AmazonBillingAddressAmazonOrderReferenceIdRoute,
  putV1AmazonShippingAddressAmazonOrderReferenceIdRoute,
  putV1BundleProductsOptionsOptionIdRoute,
  putV1BundleProductsSkuLinksIdRoute,
  putV1CartsCartIdCouponsCouponCodeRoute,
  putV1CartsCartIdGiftCardsRoute,
  putV1CartsCartIdItemsItemIdRoute,
  putV1CartsCartIdOrderRoute,
  putV1CartsCartIdRoute,
  putV1CartsCartIdSelectedPaymentMethodRoute,
  putV1CartsMineCollectionPointSearchRequestRoute,
  putV1CartsMineCollectTotalsRoute,
  putV1CartsMineCouponsCouponCodeRoute,
  putV1CartsMineItemsItemIdRoute,
  putV1CartsMineOrderRoute,
  putV1CartsMineRoute,
  putV1CartsMineSelectedPaymentMethodRoute,
  putV1CategoriesCategoryIdMoveRoute,
  putV1CategoriesCategoryIdProductsRoute,
  putV1CategoriesIdRoute,
  putV1CmsBlockIdRoute,
  putV1CmsPageIdRoute,
  putV1CompanyAssignRolesRoute,
  putV1CompanyCompanyIdRoute,
  putV1CompanyCreditsHistoryHistoryIdRoute,
  putV1CompanyCreditsIdRoute,
  putV1CompanyRoleIdRoute,
  putV1ConfigurableProductsSkuOptionsIdRoute,
  putV1ConfigurableProductsVariationRoute,
  putV1CouponsCouponIdRoute,
  putV1CreditmemoIdRoute,
  putV1CustomerGroupsDefaultIdRoute,
  putV1CustomerGroupsIdRoute,
  putV1CustomersCustomerIdRoute,
  putV1CustomersEmailActivateRoute,
  putV1CustomersMeActivateRoute,
  putV1CustomersMePasswordRoute,
  putV1CustomersMeRoute,
  putV1CustomersPasswordRoute,
  putV1CustomersValidateRoute,
  putV1EavAttributeSetsAttributeSetIdRoute,
  putV1GiftWrappingsWrappingIdRoute,
  putV1GuestCartsCartIdCollectionPointSearchRequestRoute,
  putV1GuestCartsCartIdCollectTotalsRoute,
  putV1GuestCartsCartIdCouponsCouponCodeRoute,
  putV1GuestCartsCartIdItemsItemIdRoute,
  putV1GuestCartsCartIdOrderRoute,
  putV1GuestCartsCartIdRoute,
  putV1GuestCartsCartIdSelectedPaymentMethodRoute,
  putV1HierarchyMoveIdRoute,
  putV1NegotiableCartsCartIdCouponsCouponCodeRoute,
  putV1NegotiableQuoteQuoteIdRoute,
  putV1NegotiableQuoteQuoteIdShippingMethodRoute,
  putV1OrdersCreateRoute,
  putV1OrdersParentIdRoute,
  putV1ProductsAttributesAttributeCodeRoute,
  putV1ProductsAttributeSetsAttributeSetIdGroupsRoute,
  putV1ProductsAttributeSetsAttributeSetIdRoute,
  putV1ProductsOptionsOptionIdRoute,
  putV1ProductsProductSkuStockItemsItemIdRoute,
  putV1ProductsSkuDownloadableLinksIdRoute,
  putV1ProductsSkuDownloadableLinksSamplesIdRoute,
  putV1ProductsSkuLinksRoute,
  putV1ProductsSkuMediaEntryIdRoute,
  putV1ProductsSkuRoute,
  putV1ProductsSkuWebsitesRoute,
  putV1ProductsTierPricesRoute,
  putV1ReturnsIdRoute,
  putV1SalesRulesRuleIdRoute,
  putV1SharedCatalogIdRoute,
  putV1TaxClassesClassIdRoute,
  putV1TaxRatesRoute,
  putV1TaxRulesRoute,
  putV1TeamTeamIdRoute,
  putV1TemandoRmaRmaIdShipmentsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const v1Handler = app
  .openapi(deleteV1AddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AmazonBillingAddressAmazonOrderReferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1AmazonShippingAddressAmazonOrderReferenceIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1AmazonOrderRefRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AnalyticsLinkRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttributeMetadataCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttributeMetadataCustomerAttributeAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttributeMetadataCustomerCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttributeMetadataCustomerFormFormCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttributeMetadataCustomerAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttributeMetadataCustomerAddressAttributeAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttributeMetadataCustomerAddressCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1AttributeMetadataCustomerAddressFormFormCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BulkBulkUuidDetailedStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BulkBulkUuidOperationStatusStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BulkBulkUuidStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BundleProductsOptionsAddRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleProductsOptionsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BundleProductsOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleProductsProductSkuChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1BundleProductsSkuLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1BundleProductsSkuLinksOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleProductsSkuOptionsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BundleProductsSkuOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1BundleProductsSkuOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsGuestCartsCartIdGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsLicenceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineBalanceApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineBalanceUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineCheckGiftCardGiftCardCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineCheckoutFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineCollectTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CartsMineCollectionPointSearchRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineCollectionPointSearchRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineCollectionPointSearchResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineCollectionPointSelectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CartsMineCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineCouponsCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineDeliveryOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineEstimateShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineEstimateShippingMethodsByAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CartsMineGiftCardsGiftCardCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CartsMineItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMinePaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMinePaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMinePaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsMineSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineSetPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineShippingInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsMineTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsMineTotalsInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CartsCartIdCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsCartIdCouponsCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsCartIdEstimateShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsCartIdEstimateShippingMethodsByAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsCartIdGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsCartIdGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsCartIdGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CartsCartIdGiftCardsGiftCardCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CartsCartIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsCartIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsCartIdOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CartsCartIdSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsCartIdShippingInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsCartIdTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsCartIdTotalsInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CartsQuoteIdGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CartsQuoteIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesAttributesAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesAttributesAttributeCodeOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesCategoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CategoriesCategoryIdMoveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CategoriesCategoryIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CategoriesCategoryIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CategoriesCategoryIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CategoriesCategoryIdProductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CmsBlockRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CmsBlockSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CmsBlockBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CmsBlockBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CmsBlockIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CmsPageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CmsPageSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CmsPageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CmsPagePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CmsPagePageIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CompanyIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CompanyAssignRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CompanyRoleIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CompanyRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CompanyRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyRoleRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyRoleRoleIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CompanyCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CompanyCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyCreditsIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyCreditsCompanyCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyCreditsHistoryRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CompanyCreditsHistoryHistoryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CompanyCreditsCreditIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CompanyCreditsCreditIdDecreaseBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CompanyCreditsCreditIdIncreaseBalanceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CompanyCreditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigurableProductsVariationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigurableProductsSkuChildRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurableProductsSkuChildrenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigurableProductsSkuChildrenChildSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ConfigurableProductsSkuOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurableProductsSkuOptionsAllRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ConfigurableProductsSkuOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ConfigurableProductsSkuOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ConfigurableProductsSkuOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CouponsDeleteByCodesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CouponsDeleteByIdsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CouponsGenerateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CouponsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CouponsCouponIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CouponsCouponIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CouponsCouponIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemoRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CreditmemoIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemoIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CreditmemoIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CreditmemosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerGroupsDefaultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomerGroupsDefaultIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerGroupsDefaultStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerGroupsSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomerGroupsIdPermissionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersIsEmailAvailableRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersMeActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersMeBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersMePasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersMeShippingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersValidateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersCustomerIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1CustomersCustomerIdCartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerIdPermissionsReadonlyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1CustomersCustomerIdShippingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1CustomersEmailActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DirectoryCountriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DirectoryCountriesCountryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1DirectoryCurrencyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1EavAttributeSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EavAttributeSetsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1EavAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1EavAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1EavAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GiftWrappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GiftWrappingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GiftWrappingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GiftWrappingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GiftWrappingsWrappingIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GiftregistryMineEstimateShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdCheckoutFieldsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdCollectTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GuestCartsCartIdCollectionPointSearchRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdCollectionPointSearchRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdCollectionPointSearchResultRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdCollectionPointSelectRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GuestCartsCartIdCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdCouponsCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdDeliveryOptionRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdEstimateShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdGiftMessageRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdGiftMessageItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1GuestCartsCartIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdPaymentMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1GuestCartsCartIdSelectedPaymentMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdSetPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdShippingInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1GuestCartsCartIdTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestCartsCartIdTotalsInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1GuestGiftregistryCartIdEstimateShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1HierarchyMoveIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1HierarchyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationAdminTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1IntegrationCustomerTokenRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoiceInvoiceIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1InvoicesIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1InvoicesIdVoidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ModulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NegotiableCartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableCartsCartIdBillingAddressRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NegotiableCartsCartIdCouponsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1NegotiableCartsCartIdCouponsCouponCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableCartsCartIdEstimateShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableCartsCartIdGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NegotiableCartsCartIdPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableCartsCartIdPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableCartsCartIdSetPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableCartsCartIdShippingInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NegotiableCartsCartIdTotalsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NegotiableQuoteAttachmentContentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableQuoteDeclineRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableQuotePricesUpdatedRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableQuoteRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1NegotiableQuoteSubmitToCustomerRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1NegotiableQuoteQuoteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1NegotiableQuoteQuoteIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1NegotiableQuoteQuoteIdShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrderOrderIdInvoiceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrderOrderIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrderOrderIdShipRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrdersCreateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersIdHoldRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1OrdersIdStatusesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1OrdersIdUnholdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1OrdersParentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsRenderInfoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsAttributeSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsAttributeSetsAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsAttributeSetsGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsAttributeSetsGroupsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsAttributeSetsGroupsGroupIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsAttributeSetsSetsListRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsAttributeSetsAttributeSetIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsAttributeSetsAttributeSetIdAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsAttributeSetsAttributeSetIdGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsAttributesTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsAttributesAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsAttributesAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsAttributesAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsAttributesAttributeCodeOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsAttributesAttributeCodeOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsAttributesAttributeCodeOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsBasePricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsBasePricesInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsCostRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsCostDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsCostInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsDownloadableLinksSamplesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsDownloadableLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsLinksTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsLinksTypeAttributesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsMediaTypesAttributeSetNameRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsOptionsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSpecialPriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSpecialPriceDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSpecialPriceInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsTierPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsTierPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsTierPricesDeleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsTierPricesInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsProductSkuStockItemsItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuDownloadableLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSkuDownloadableLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuDownloadableLinksSamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSkuDownloadableLinksSamplesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsSkuDownloadableLinksSamplesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsSkuDownloadableLinksIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuGroupPricesCustomerGroupIdTiersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSkuLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsSkuLinksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuLinksTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsSkuLinksTypeLinkedProductSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSkuMediaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsSkuMediaEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuMediaEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsSkuMediaEntryIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsSkuOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ProductsSkuOptionsOptionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ProductsSkuWebsitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ProductsSkuWebsitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ProductsSkuWebsitesWebsiteIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RequisitionListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1ReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReturnsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReturnsIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReturnsIdLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReturnsIdTrackingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ReturnsIdTrackingNumbersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ReturnsIdTrackingNumbersTrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReturnsAttributeMetadataRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReturnsAttributeMetadataCustomRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReturnsAttributeMetadataFormFormCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ReturnsAttributeMetadataAttributeCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1RewardMineUseRewardRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SalesRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesRulesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SalesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SalesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SalesRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SharedCatalogRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SharedCatalogIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1SharedCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SharedCatalogIdAssignCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SharedCatalogIdAssignProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SharedCatalogIdCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SharedCatalogIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SharedCatalogIdUnassignCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SharedCatalogIdUnassignProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1SharedCatalogSharedCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SharedCatalogSharedCatalogIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SharedCatalogSharedCatalogIdAssignCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1SharedCatalogSharedCatalogIdCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1SharedCatalogSharedCatalogIdUnassignCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShipmentIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShipmentTrackRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1ShipmentTrackIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShipmentIdCommentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1ShipmentIdEmailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentIdLabelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1ShipmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StockItemsLowStockIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StockItemsProductSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StockStatusesProductSkuRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StoreStoreConfigsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StoreStoreGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StoreStoreViewsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1StoreWebsitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TaxClassesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxClassesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TaxClassesClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TaxClassesTaxClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxClassesTaxClassIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxRatesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TaxRatesRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxRatesRateIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TaxRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TaxRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxRulesSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TaxRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TaxRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamIndexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1TeamCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1TeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TeamTeamIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putV1TemandoRmaRmaIdShipmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1TransactionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1WorldpayGuestCartsCartIdPaymentInformationRoute, (c) => {
    throw new Error('Not implemented')
  })
