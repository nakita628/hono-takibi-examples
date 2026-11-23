import type { RouteHandler } from '@hono/zod-openapi'
import type {
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

export const deleteV1AddressesAddressIdRouteHandler: RouteHandler<
  typeof deleteV1AddressesAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AmazonBillingAddressAmazonOrderReferenceIdRouteHandler: RouteHandler<
  typeof putV1AmazonBillingAddressAmazonOrderReferenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1AmazonShippingAddressAmazonOrderReferenceIdRouteHandler: RouteHandler<
  typeof putV1AmazonShippingAddressAmazonOrderReferenceIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1AmazonOrderRefRouteHandler: RouteHandler<
  typeof deleteV1AmazonOrderRefRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AnalyticsLinkRouteHandler: RouteHandler<typeof getV1AnalyticsLinkRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1AttributeMetadataCustomerRouteHandler: RouteHandler<
  typeof getV1AttributeMetadataCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AttributeMetadataCustomerAttributeAttributeCodeRouteHandler: RouteHandler<
  typeof getV1AttributeMetadataCustomerAttributeAttributeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AttributeMetadataCustomerCustomRouteHandler: RouteHandler<
  typeof getV1AttributeMetadataCustomerCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AttributeMetadataCustomerFormFormCodeRouteHandler: RouteHandler<
  typeof getV1AttributeMetadataCustomerFormFormCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AttributeMetadataCustomerAddressRouteHandler: RouteHandler<
  typeof getV1AttributeMetadataCustomerAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AttributeMetadataCustomerAddressAttributeAttributeCodeRouteHandler: RouteHandler<
  typeof getV1AttributeMetadataCustomerAddressAttributeAttributeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AttributeMetadataCustomerAddressCustomRouteHandler: RouteHandler<
  typeof getV1AttributeMetadataCustomerAddressCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1AttributeMetadataCustomerAddressFormFormCodeRouteHandler: RouteHandler<
  typeof getV1AttributeMetadataCustomerAddressFormFormCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BulkBulkUuidDetailedStatusRouteHandler: RouteHandler<
  typeof getV1BulkBulkUuidDetailedStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BulkBulkUuidOperationStatusStatusRouteHandler: RouteHandler<
  typeof getV1BulkBulkUuidOperationStatusStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BulkBulkUuidStatusRouteHandler: RouteHandler<
  typeof getV1BulkBulkUuidStatusRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BundleProductsOptionsAddRouteHandler: RouteHandler<
  typeof postV1BundleProductsOptionsAddRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BundleProductsOptionsTypesRouteHandler: RouteHandler<
  typeof getV1BundleProductsOptionsTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1BundleProductsOptionsOptionIdRouteHandler: RouteHandler<
  typeof putV1BundleProductsOptionsOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BundleProductsProductSkuChildrenRouteHandler: RouteHandler<
  typeof getV1BundleProductsProductSkuChildrenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1BundleProductsSkuLinksIdRouteHandler: RouteHandler<
  typeof putV1BundleProductsSkuLinksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1BundleProductsSkuLinksOptionIdRouteHandler: RouteHandler<
  typeof postV1BundleProductsSkuLinksOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BundleProductsSkuOptionsAllRouteHandler: RouteHandler<
  typeof getV1BundleProductsSkuOptionsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BundleProductsSkuOptionsOptionIdRouteHandler: RouteHandler<
  typeof deleteV1BundleProductsSkuOptionsOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1BundleProductsSkuOptionsOptionIdRouteHandler: RouteHandler<
  typeof getV1BundleProductsSkuOptionsOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuRouteHandler: RouteHandler<
  typeof deleteV1BundleProductsSkuOptionsOptionIdChildrenChildSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsIndexRouteHandler: RouteHandler<typeof postV1CartsIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeRouteHandler: RouteHandler<
  typeof getV1CartsGuestCartsCartIdCheckGiftCardGiftCardCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsGuestCartsCartIdGiftCardsRouteHandler: RouteHandler<
  typeof postV1CartsGuestCartsCartIdGiftCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeRouteHandler: RouteHandler<
  typeof deleteV1CartsGuestCartsCartIdGiftCardsGiftCardCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsLicenceRouteHandler: RouteHandler<typeof getV1CartsLicenceRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineRouteHandler: RouteHandler<typeof getV1CartsMineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineRouteHandler: RouteHandler<typeof postV1CartsMineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsMineRouteHandler: RouteHandler<typeof putV1CartsMineRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineBalanceApplyRouteHandler: RouteHandler<
  typeof postV1CartsMineBalanceApplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineBalanceUnapplyRouteHandler: RouteHandler<
  typeof postV1CartsMineBalanceUnapplyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineBillingAddressRouteHandler: RouteHandler<
  typeof getV1CartsMineBillingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineBillingAddressRouteHandler: RouteHandler<
  typeof postV1CartsMineBillingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineCheckGiftCardGiftCardCodeRouteHandler: RouteHandler<
  typeof getV1CartsMineCheckGiftCardGiftCardCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineCheckoutFieldsRouteHandler: RouteHandler<
  typeof postV1CartsMineCheckoutFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsMineCollectTotalsRouteHandler: RouteHandler<
  typeof putV1CartsMineCollectTotalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CartsMineCollectionPointSearchRequestRouteHandler: RouteHandler<
  typeof deleteV1CartsMineCollectionPointSearchRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsMineCollectionPointSearchRequestRouteHandler: RouteHandler<
  typeof putV1CartsMineCollectionPointSearchRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineCollectionPointSearchResultRouteHandler: RouteHandler<
  typeof getV1CartsMineCollectionPointSearchResultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineCollectionPointSelectRouteHandler: RouteHandler<
  typeof postV1CartsMineCollectionPointSelectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CartsMineCouponsRouteHandler: RouteHandler<
  typeof deleteV1CartsMineCouponsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineCouponsRouteHandler: RouteHandler<
  typeof getV1CartsMineCouponsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsMineCouponsCouponCodeRouteHandler: RouteHandler<
  typeof putV1CartsMineCouponsCouponCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineDeliveryOptionRouteHandler: RouteHandler<
  typeof postV1CartsMineDeliveryOptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineEstimateShippingMethodsRouteHandler: RouteHandler<
  typeof postV1CartsMineEstimateShippingMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineEstimateShippingMethodsByAddressIdRouteHandler: RouteHandler<
  typeof postV1CartsMineEstimateShippingMethodsByAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineGiftMessageRouteHandler: RouteHandler<
  typeof getV1CartsMineGiftMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineGiftMessageRouteHandler: RouteHandler<
  typeof postV1CartsMineGiftMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineGiftMessageItemIdRouteHandler: RouteHandler<
  typeof getV1CartsMineGiftMessageItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineGiftMessageItemIdRouteHandler: RouteHandler<
  typeof postV1CartsMineGiftMessageItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineGiftCardsRouteHandler: RouteHandler<
  typeof postV1CartsMineGiftCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CartsMineGiftCardsGiftCardCodeRouteHandler: RouteHandler<
  typeof deleteV1CartsMineGiftCardsGiftCardCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineItemsRouteHandler: RouteHandler<
  typeof getV1CartsMineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineItemsRouteHandler: RouteHandler<
  typeof postV1CartsMineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CartsMineItemsItemIdRouteHandler: RouteHandler<
  typeof deleteV1CartsMineItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsMineItemsItemIdRouteHandler: RouteHandler<
  typeof putV1CartsMineItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsMineOrderRouteHandler: RouteHandler<
  typeof putV1CartsMineOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMinePaymentInformationRouteHandler: RouteHandler<
  typeof getV1CartsMinePaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMinePaymentInformationRouteHandler: RouteHandler<
  typeof postV1CartsMinePaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMinePaymentMethodsRouteHandler: RouteHandler<
  typeof getV1CartsMinePaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineSelectedPaymentMethodRouteHandler: RouteHandler<
  typeof getV1CartsMineSelectedPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsMineSelectedPaymentMethodRouteHandler: RouteHandler<
  typeof putV1CartsMineSelectedPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineSetPaymentInformationRouteHandler: RouteHandler<
  typeof postV1CartsMineSetPaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineShippingInformationRouteHandler: RouteHandler<
  typeof postV1CartsMineShippingInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineShippingMethodsRouteHandler: RouteHandler<
  typeof getV1CartsMineShippingMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsMineTotalsRouteHandler: RouteHandler<
  typeof getV1CartsMineTotalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsMineTotalsInformationRouteHandler: RouteHandler<
  typeof postV1CartsMineTotalsInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsSearchRouteHandler: RouteHandler<typeof getV1CartsSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CartsCartIdRouteHandler: RouteHandler<typeof getV1CartsCartIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1CartsCartIdRouteHandler: RouteHandler<typeof putV1CartsCartIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CartsCartIdBillingAddressRouteHandler: RouteHandler<
  typeof getV1CartsCartIdBillingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsCartIdBillingAddressRouteHandler: RouteHandler<
  typeof postV1CartsCartIdBillingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CartsCartIdCouponsRouteHandler: RouteHandler<
  typeof deleteV1CartsCartIdCouponsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsCartIdCouponsRouteHandler: RouteHandler<
  typeof getV1CartsCartIdCouponsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsCartIdCouponsCouponCodeRouteHandler: RouteHandler<
  typeof putV1CartsCartIdCouponsCouponCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsCartIdEstimateShippingMethodsRouteHandler: RouteHandler<
  typeof postV1CartsCartIdEstimateShippingMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsCartIdEstimateShippingMethodsByAddressIdRouteHandler: RouteHandler<
  typeof postV1CartsCartIdEstimateShippingMethodsByAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsCartIdGiftMessageRouteHandler: RouteHandler<
  typeof getV1CartsCartIdGiftMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsCartIdGiftMessageRouteHandler: RouteHandler<
  typeof postV1CartsCartIdGiftMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsCartIdGiftMessageItemIdRouteHandler: RouteHandler<
  typeof getV1CartsCartIdGiftMessageItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsCartIdGiftMessageItemIdRouteHandler: RouteHandler<
  typeof postV1CartsCartIdGiftMessageItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsCartIdGiftCardsRouteHandler: RouteHandler<
  typeof putV1CartsCartIdGiftCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CartsCartIdGiftCardsGiftCardCodeRouteHandler: RouteHandler<
  typeof deleteV1CartsCartIdGiftCardsGiftCardCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsCartIdItemsRouteHandler: RouteHandler<
  typeof getV1CartsCartIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CartsCartIdItemsItemIdRouteHandler: RouteHandler<
  typeof deleteV1CartsCartIdItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsCartIdItemsItemIdRouteHandler: RouteHandler<
  typeof putV1CartsCartIdItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsCartIdOrderRouteHandler: RouteHandler<
  typeof putV1CartsCartIdOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsCartIdPaymentMethodsRouteHandler: RouteHandler<
  typeof getV1CartsCartIdPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsCartIdSelectedPaymentMethodRouteHandler: RouteHandler<
  typeof getV1CartsCartIdSelectedPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CartsCartIdSelectedPaymentMethodRouteHandler: RouteHandler<
  typeof putV1CartsCartIdSelectedPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsCartIdShippingInformationRouteHandler: RouteHandler<
  typeof postV1CartsCartIdShippingInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsCartIdShippingMethodsRouteHandler: RouteHandler<
  typeof getV1CartsCartIdShippingMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsCartIdTotalsRouteHandler: RouteHandler<
  typeof getV1CartsCartIdTotalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsCartIdTotalsInformationRouteHandler: RouteHandler<
  typeof postV1CartsCartIdTotalsInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CartsQuoteIdGiftCardsRouteHandler: RouteHandler<
  typeof getV1CartsQuoteIdGiftCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CartsQuoteIdItemsRouteHandler: RouteHandler<
  typeof postV1CartsQuoteIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CategoriesRouteHandler: RouteHandler<typeof getV1CategoriesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CategoriesRouteHandler: RouteHandler<typeof postV1CategoriesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CategoriesAttributesRouteHandler: RouteHandler<
  typeof getV1CategoriesAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CategoriesAttributesAttributeCodeRouteHandler: RouteHandler<
  typeof getV1CategoriesAttributesAttributeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CategoriesAttributesAttributeCodeOptionsRouteHandler: RouteHandler<
  typeof getV1CategoriesAttributesAttributeCodeOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CategoriesListRouteHandler: RouteHandler<
  typeof getV1CategoriesListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CategoriesCategoryIdRouteHandler: RouteHandler<
  typeof deleteV1CategoriesCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CategoriesCategoryIdRouteHandler: RouteHandler<
  typeof getV1CategoriesCategoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CategoriesCategoryIdMoveRouteHandler: RouteHandler<
  typeof putV1CategoriesCategoryIdMoveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CategoriesCategoryIdProductsRouteHandler: RouteHandler<
  typeof getV1CategoriesCategoryIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CategoriesCategoryIdProductsRouteHandler: RouteHandler<
  typeof postV1CategoriesCategoryIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CategoriesCategoryIdProductsRouteHandler: RouteHandler<
  typeof putV1CategoriesCategoryIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CategoriesCategoryIdProductsSkuRouteHandler: RouteHandler<
  typeof deleteV1CategoriesCategoryIdProductsSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CategoriesIdRouteHandler: RouteHandler<typeof putV1CategoriesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CmsBlockRouteHandler: RouteHandler<typeof postV1CmsBlockRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CmsBlockSearchRouteHandler: RouteHandler<
  typeof getV1CmsBlockSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CmsBlockBlockIdRouteHandler: RouteHandler<
  typeof deleteV1CmsBlockBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CmsBlockBlockIdRouteHandler: RouteHandler<
  typeof getV1CmsBlockBlockIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CmsBlockIdRouteHandler: RouteHandler<typeof putV1CmsBlockIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CmsPageRouteHandler: RouteHandler<typeof postV1CmsPageRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CmsPageSearchRouteHandler: RouteHandler<typeof getV1CmsPageSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1CmsPageIdRouteHandler: RouteHandler<typeof putV1CmsPageIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CmsPagePageIdRouteHandler: RouteHandler<
  typeof deleteV1CmsPagePageIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CmsPagePageIdRouteHandler: RouteHandler<typeof getV1CmsPagePageIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CompanyIndexRouteHandler: RouteHandler<typeof getV1CompanyIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CompanyIndexRouteHandler: RouteHandler<typeof postV1CompanyIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1CompanyAssignRolesRouteHandler: RouteHandler<
  typeof putV1CompanyAssignRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CompanyRoleIndexRouteHandler: RouteHandler<
  typeof getV1CompanyRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CompanyRoleIndexRouteHandler: RouteHandler<
  typeof postV1CompanyRoleIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CompanyRoleIdRouteHandler: RouteHandler<typeof putV1CompanyRoleIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1CompanyRoleRoleIdRouteHandler: RouteHandler<
  typeof deleteV1CompanyRoleRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CompanyRoleRoleIdRouteHandler: RouteHandler<
  typeof getV1CompanyRoleRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CompanyRoleRoleIdUsersRouteHandler: RouteHandler<
  typeof getV1CompanyRoleRoleIdUsersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CompanyCompanyIdRouteHandler: RouteHandler<
  typeof deleteV1CompanyCompanyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CompanyCompanyIdRouteHandler: RouteHandler<
  typeof getV1CompanyCompanyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CompanyCompanyIdRouteHandler: RouteHandler<
  typeof putV1CompanyCompanyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CompanyCreditsIndexRouteHandler: RouteHandler<
  typeof getV1CompanyCreditsIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CompanyCreditsCompanyCompanyIdRouteHandler: RouteHandler<
  typeof getV1CompanyCreditsCompanyCompanyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CompanyCreditsHistoryRouteHandler: RouteHandler<
  typeof getV1CompanyCreditsHistoryRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CompanyCreditsHistoryHistoryIdRouteHandler: RouteHandler<
  typeof putV1CompanyCreditsHistoryHistoryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CompanyCreditsCreditIdRouteHandler: RouteHandler<
  typeof getV1CompanyCreditsCreditIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CompanyCreditsCreditIdDecreaseBalanceRouteHandler: RouteHandler<
  typeof postV1CompanyCreditsCreditIdDecreaseBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CompanyCreditsCreditIdIncreaseBalanceRouteHandler: RouteHandler<
  typeof postV1CompanyCreditsCreditIdIncreaseBalanceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CompanyCreditsIdRouteHandler: RouteHandler<
  typeof putV1CompanyCreditsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConfigurableProductsVariationRouteHandler: RouteHandler<
  typeof putV1ConfigurableProductsVariationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigurableProductsSkuChildRouteHandler: RouteHandler<
  typeof postV1ConfigurableProductsSkuChildRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigurableProductsSkuChildrenRouteHandler: RouteHandler<
  typeof getV1ConfigurableProductsSkuChildrenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConfigurableProductsSkuChildrenChildSkuRouteHandler: RouteHandler<
  typeof deleteV1ConfigurableProductsSkuChildrenChildSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ConfigurableProductsSkuOptionsRouteHandler: RouteHandler<
  typeof postV1ConfigurableProductsSkuOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigurableProductsSkuOptionsAllRouteHandler: RouteHandler<
  typeof getV1ConfigurableProductsSkuOptionsAllRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ConfigurableProductsSkuOptionsIdRouteHandler: RouteHandler<
  typeof deleteV1ConfigurableProductsSkuOptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ConfigurableProductsSkuOptionsIdRouteHandler: RouteHandler<
  typeof getV1ConfigurableProductsSkuOptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ConfigurableProductsSkuOptionsIdRouteHandler: RouteHandler<
  typeof putV1ConfigurableProductsSkuOptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CouponsRouteHandler: RouteHandler<typeof postV1CouponsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CouponsDeleteByCodesRouteHandler: RouteHandler<
  typeof postV1CouponsDeleteByCodesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CouponsDeleteByIdsRouteHandler: RouteHandler<
  typeof postV1CouponsDeleteByIdsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CouponsGenerateRouteHandler: RouteHandler<
  typeof postV1CouponsGenerateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CouponsSearchRouteHandler: RouteHandler<typeof getV1CouponsSearchRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteV1CouponsCouponIdRouteHandler: RouteHandler<
  typeof deleteV1CouponsCouponIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CouponsCouponIdRouteHandler: RouteHandler<
  typeof getV1CouponsCouponIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CouponsCouponIdRouteHandler: RouteHandler<
  typeof putV1CouponsCouponIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CreditmemoRouteHandler: RouteHandler<typeof postV1CreditmemoRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CreditmemoRefundRouteHandler: RouteHandler<
  typeof postV1CreditmemoRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemoIdRouteHandler: RouteHandler<typeof getV1CreditmemoIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1CreditmemoIdRouteHandler: RouteHandler<typeof putV1CreditmemoIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemoIdCommentsRouteHandler: RouteHandler<
  typeof getV1CreditmemoIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CreditmemoIdCommentsRouteHandler: RouteHandler<
  typeof postV1CreditmemoIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CreditmemoIdEmailsRouteHandler: RouteHandler<
  typeof postV1CreditmemoIdEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CreditmemosRouteHandler: RouteHandler<typeof getV1CreditmemosRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1CustomerGroupsRouteHandler: RouteHandler<
  typeof postV1CustomerGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomerGroupsDefaultRouteHandler: RouteHandler<
  typeof getV1CustomerGroupsDefaultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CustomerGroupsDefaultIdRouteHandler: RouteHandler<
  typeof putV1CustomerGroupsDefaultIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomerGroupsDefaultStoreIdRouteHandler: RouteHandler<
  typeof getV1CustomerGroupsDefaultStoreIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomerGroupsSearchRouteHandler: RouteHandler<
  typeof getV1CustomerGroupsSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomerGroupsIdRouteHandler: RouteHandler<
  typeof deleteV1CustomerGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomerGroupsIdRouteHandler: RouteHandler<
  typeof getV1CustomerGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CustomerGroupsIdRouteHandler: RouteHandler<
  typeof putV1CustomerGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomerGroupsIdPermissionsRouteHandler: RouteHandler<
  typeof getV1CustomerGroupsIdPermissionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersRouteHandler: RouteHandler<typeof postV1CustomersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersAddressesAddressIdRouteHandler: RouteHandler<
  typeof getV1CustomersAddressesAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersConfirmRouteHandler: RouteHandler<
  typeof postV1CustomersConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersIsEmailAvailableRouteHandler: RouteHandler<
  typeof postV1CustomersIsEmailAvailableRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersMeRouteHandler: RouteHandler<typeof getV1CustomersMeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1CustomersMeRouteHandler: RouteHandler<typeof putV1CustomersMeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1CustomersMeActivateRouteHandler: RouteHandler<
  typeof putV1CustomersMeActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersMeBillingAddressRouteHandler: RouteHandler<
  typeof getV1CustomersMeBillingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CustomersMePasswordRouteHandler: RouteHandler<
  typeof putV1CustomersMePasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersMeShippingAddressRouteHandler: RouteHandler<
  typeof getV1CustomersMeShippingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CustomersPasswordRouteHandler: RouteHandler<
  typeof putV1CustomersPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersResetPasswordRouteHandler: RouteHandler<
  typeof postV1CustomersResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersSearchRouteHandler: RouteHandler<
  typeof getV1CustomersSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CustomersValidateRouteHandler: RouteHandler<
  typeof putV1CustomersValidateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1CustomersCustomerIdRouteHandler: RouteHandler<
  typeof deleteV1CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerIdRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CustomersCustomerIdRouteHandler: RouteHandler<
  typeof putV1CustomersCustomerIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerIdBillingAddressRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerIdBillingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1CustomersCustomerIdCartsRouteHandler: RouteHandler<
  typeof postV1CustomersCustomerIdCartsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerIdConfirmRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerIdConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerIdPasswordResetLinkTokenResetPasswordLinkTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerIdPermissionsReadonlyRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerIdPermissionsReadonlyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1CustomersCustomerIdShippingAddressRouteHandler: RouteHandler<
  typeof getV1CustomersCustomerIdShippingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1CustomersEmailActivateRouteHandler: RouteHandler<
  typeof putV1CustomersEmailActivateRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DirectoryCountriesRouteHandler: RouteHandler<
  typeof getV1DirectoryCountriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DirectoryCountriesCountryIdRouteHandler: RouteHandler<
  typeof getV1DirectoryCountriesCountryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1DirectoryCurrencyRouteHandler: RouteHandler<
  typeof getV1DirectoryCurrencyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1EavAttributeSetsRouteHandler: RouteHandler<
  typeof postV1EavAttributeSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EavAttributeSetsListRouteHandler: RouteHandler<
  typeof getV1EavAttributeSetsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1EavAttributeSetsAttributeSetIdRouteHandler: RouteHandler<
  typeof deleteV1EavAttributeSetsAttributeSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1EavAttributeSetsAttributeSetIdRouteHandler: RouteHandler<
  typeof getV1EavAttributeSetsAttributeSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1EavAttributeSetsAttributeSetIdRouteHandler: RouteHandler<
  typeof putV1EavAttributeSetsAttributeSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GiftWrappingsRouteHandler: RouteHandler<typeof getV1GiftWrappingsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1GiftWrappingsRouteHandler: RouteHandler<
  typeof postV1GiftWrappingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1GiftWrappingsIdRouteHandler: RouteHandler<
  typeof deleteV1GiftWrappingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GiftWrappingsIdRouteHandler: RouteHandler<
  typeof getV1GiftWrappingsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GiftWrappingsWrappingIdRouteHandler: RouteHandler<
  typeof putV1GiftWrappingsWrappingIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GiftregistryMineEstimateShippingMethodsRouteHandler: RouteHandler<
  typeof postV1GiftregistryMineEstimateShippingMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsRouteHandler: RouteHandler<typeof postV1GuestCartsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuestCartsCartIdRouteHandler: RouteHandler<
  typeof putV1GuestCartsCartIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdBillingAddressRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdBillingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdBillingAddressRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdBillingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdCheckoutFieldsRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdCheckoutFieldsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuestCartsCartIdCollectTotalsRouteHandler: RouteHandler<
  typeof putV1GuestCartsCartIdCollectTotalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1GuestCartsCartIdCollectionPointSearchRequestRouteHandler: RouteHandler<
  typeof deleteV1GuestCartsCartIdCollectionPointSearchRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuestCartsCartIdCollectionPointSearchRequestRouteHandler: RouteHandler<
  typeof putV1GuestCartsCartIdCollectionPointSearchRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdCollectionPointSearchResultRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdCollectionPointSearchResultRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdCollectionPointSelectRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdCollectionPointSelectRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1GuestCartsCartIdCouponsRouteHandler: RouteHandler<
  typeof deleteV1GuestCartsCartIdCouponsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdCouponsRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdCouponsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuestCartsCartIdCouponsCouponCodeRouteHandler: RouteHandler<
  typeof putV1GuestCartsCartIdCouponsCouponCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdDeliveryOptionRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdDeliveryOptionRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdEstimateShippingMethodsRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdEstimateShippingMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdGiftMessageRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdGiftMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdGiftMessageRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdGiftMessageRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdGiftMessageItemIdRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdGiftMessageItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdGiftMessageItemIdRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdGiftMessageItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdItemsRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdItemsRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1GuestCartsCartIdItemsItemIdRouteHandler: RouteHandler<
  typeof deleteV1GuestCartsCartIdItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuestCartsCartIdItemsItemIdRouteHandler: RouteHandler<
  typeof putV1GuestCartsCartIdItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuestCartsCartIdOrderRouteHandler: RouteHandler<
  typeof putV1GuestCartsCartIdOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdPaymentInformationRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdPaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdPaymentInformationRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdPaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdPaymentMethodsRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdPaymentMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdSelectedPaymentMethodRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdSelectedPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1GuestCartsCartIdSelectedPaymentMethodRouteHandler: RouteHandler<
  typeof putV1GuestCartsCartIdSelectedPaymentMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdSetPaymentInformationRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdSetPaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdShippingInformationRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdShippingInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdShippingMethodsRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdShippingMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1GuestCartsCartIdTotalsRouteHandler: RouteHandler<
  typeof getV1GuestCartsCartIdTotalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestCartsCartIdTotalsInformationRouteHandler: RouteHandler<
  typeof postV1GuestCartsCartIdTotalsInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1GuestGiftregistryCartIdEstimateShippingMethodsRouteHandler: RouteHandler<
  typeof postV1GuestGiftregistryCartIdEstimateShippingMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1HierarchyMoveIdRouteHandler: RouteHandler<
  typeof putV1HierarchyMoveIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1HierarchyIdRouteHandler: RouteHandler<typeof getV1HierarchyIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1IntegrationAdminTokenRouteHandler: RouteHandler<
  typeof postV1IntegrationAdminTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1IntegrationCustomerTokenRouteHandler: RouteHandler<
  typeof postV1IntegrationCustomerTokenRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoiceInvoiceIdRefundRouteHandler: RouteHandler<
  typeof postV1InvoiceInvoiceIdRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesRouteHandler: RouteHandler<typeof getV1InvoicesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesIndexRouteHandler: RouteHandler<
  typeof postV1InvoicesIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesCommentsRouteHandler: RouteHandler<
  typeof postV1InvoicesCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesIdRouteHandler: RouteHandler<typeof getV1InvoicesIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesIdCaptureRouteHandler: RouteHandler<
  typeof postV1InvoicesIdCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1InvoicesIdCommentsRouteHandler: RouteHandler<
  typeof getV1InvoicesIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesIdEmailsRouteHandler: RouteHandler<
  typeof postV1InvoicesIdEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1InvoicesIdVoidRouteHandler: RouteHandler<
  typeof postV1InvoicesIdVoidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ModulesRouteHandler: RouteHandler<typeof getV1ModulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NegotiableCartsCartIdBillingAddressRouteHandler: RouteHandler<
  typeof getV1NegotiableCartsCartIdBillingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableCartsCartIdBillingAddressRouteHandler: RouteHandler<
  typeof postV1NegotiableCartsCartIdBillingAddressRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NegotiableCartsCartIdCouponsRouteHandler: RouteHandler<
  typeof deleteV1NegotiableCartsCartIdCouponsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1NegotiableCartsCartIdCouponsCouponCodeRouteHandler: RouteHandler<
  typeof putV1NegotiableCartsCartIdCouponsCouponCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableCartsCartIdEstimateShippingMethodsRouteHandler: RouteHandler<
  typeof postV1NegotiableCartsCartIdEstimateShippingMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdRouteHandler: RouteHandler<
  typeof postV1NegotiableCartsCartIdEstimateShippingMethodsByAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableCartsCartIdGiftCardsRouteHandler: RouteHandler<
  typeof postV1NegotiableCartsCartIdGiftCardsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeRouteHandler: RouteHandler<
  typeof deleteV1NegotiableCartsCartIdGiftCardsGiftCardCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NegotiableCartsCartIdPaymentInformationRouteHandler: RouteHandler<
  typeof getV1NegotiableCartsCartIdPaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableCartsCartIdPaymentInformationRouteHandler: RouteHandler<
  typeof postV1NegotiableCartsCartIdPaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableCartsCartIdSetPaymentInformationRouteHandler: RouteHandler<
  typeof postV1NegotiableCartsCartIdSetPaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableCartsCartIdShippingInformationRouteHandler: RouteHandler<
  typeof postV1NegotiableCartsCartIdShippingInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NegotiableCartsCartIdTotalsRouteHandler: RouteHandler<
  typeof getV1NegotiableCartsCartIdTotalsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NegotiableQuoteAttachmentContentRouteHandler: RouteHandler<
  typeof getV1NegotiableQuoteAttachmentContentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableQuoteDeclineRouteHandler: RouteHandler<
  typeof postV1NegotiableQuoteDeclineRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableQuotePricesUpdatedRouteHandler: RouteHandler<
  typeof postV1NegotiableQuotePricesUpdatedRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableQuoteRequestRouteHandler: RouteHandler<
  typeof postV1NegotiableQuoteRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1NegotiableQuoteSubmitToCustomerRouteHandler: RouteHandler<
  typeof postV1NegotiableQuoteSubmitToCustomerRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1NegotiableQuoteQuoteIdRouteHandler: RouteHandler<
  typeof putV1NegotiableQuoteQuoteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1NegotiableQuoteQuoteIdCommentsRouteHandler: RouteHandler<
  typeof getV1NegotiableQuoteQuoteIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1NegotiableQuoteQuoteIdShippingMethodRouteHandler: RouteHandler<
  typeof putV1NegotiableQuoteQuoteIdShippingMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrderOrderIdInvoiceRouteHandler: RouteHandler<
  typeof postV1OrderOrderIdInvoiceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrderOrderIdRefundRouteHandler: RouteHandler<
  typeof postV1OrderOrderIdRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrderOrderIdShipRouteHandler: RouteHandler<
  typeof postV1OrderOrderIdShipRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersRouteHandler: RouteHandler<typeof getV1OrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrdersIndexRouteHandler: RouteHandler<typeof postV1OrdersIndexRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1OrdersCreateRouteHandler: RouteHandler<typeof putV1OrdersCreateRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1OrdersItemsRouteHandler: RouteHandler<typeof getV1OrdersItemsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1OrdersItemsIdRouteHandler: RouteHandler<typeof getV1OrdersItemsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1OrdersIdRouteHandler: RouteHandler<typeof getV1OrdersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrdersIdCancelRouteHandler: RouteHandler<
  typeof postV1OrdersIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1OrdersIdCommentsRouteHandler: RouteHandler<
  typeof getV1OrdersIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrdersIdCommentsRouteHandler: RouteHandler<
  typeof postV1OrdersIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrdersIdEmailsRouteHandler: RouteHandler<
  typeof postV1OrdersIdEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrdersIdHoldRouteHandler: RouteHandler<typeof postV1OrdersIdHoldRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1OrdersIdStatusesRouteHandler: RouteHandler<
  typeof getV1OrdersIdStatusesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1OrdersIdUnholdRouteHandler: RouteHandler<
  typeof postV1OrdersIdUnholdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1OrdersParentIdRouteHandler: RouteHandler<
  typeof putV1OrdersParentIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsRouteHandler: RouteHandler<typeof getV1ProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsRouteHandler: RouteHandler<typeof postV1ProductsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsRenderInfoRouteHandler: RouteHandler<
  typeof getV1ProductsRenderInfoRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsAttributeSetsRouteHandler: RouteHandler<
  typeof postV1ProductsAttributeSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsAttributeSetsAttributesRouteHandler: RouteHandler<
  typeof postV1ProductsAttributeSetsAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsAttributeSetsGroupsRouteHandler: RouteHandler<
  typeof postV1ProductsAttributeSetsGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsAttributeSetsGroupsListRouteHandler: RouteHandler<
  typeof getV1ProductsAttributeSetsGroupsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsAttributeSetsGroupsGroupIdRouteHandler: RouteHandler<
  typeof deleteV1ProductsAttributeSetsGroupsGroupIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsAttributeSetsSetsListRouteHandler: RouteHandler<
  typeof getV1ProductsAttributeSetsSetsListRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsAttributeSetsAttributeSetIdRouteHandler: RouteHandler<
  typeof deleteV1ProductsAttributeSetsAttributeSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsAttributeSetsAttributeSetIdRouteHandler: RouteHandler<
  typeof getV1ProductsAttributeSetsAttributeSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProductsAttributeSetsAttributeSetIdRouteHandler: RouteHandler<
  typeof putV1ProductsAttributeSetsAttributeSetIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsAttributeSetsAttributeSetIdAttributesRouteHandler: RouteHandler<
  typeof getV1ProductsAttributeSetsAttributeSetIdAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeRouteHandler: RouteHandler<
  typeof deleteV1ProductsAttributeSetsAttributeSetIdAttributesAttributeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProductsAttributeSetsAttributeSetIdGroupsRouteHandler: RouteHandler<
  typeof putV1ProductsAttributeSetsAttributeSetIdGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsAttributesRouteHandler: RouteHandler<
  typeof getV1ProductsAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsAttributesRouteHandler: RouteHandler<
  typeof postV1ProductsAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsAttributesTypesRouteHandler: RouteHandler<
  typeof getV1ProductsAttributesTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsAttributesAttributeCodeRouteHandler: RouteHandler<
  typeof deleteV1ProductsAttributesAttributeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsAttributesAttributeCodeRouteHandler: RouteHandler<
  typeof getV1ProductsAttributesAttributeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProductsAttributesAttributeCodeRouteHandler: RouteHandler<
  typeof putV1ProductsAttributesAttributeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsAttributesAttributeCodeOptionsRouteHandler: RouteHandler<
  typeof getV1ProductsAttributesAttributeCodeOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsAttributesAttributeCodeOptionsRouteHandler: RouteHandler<
  typeof postV1ProductsAttributesAttributeCodeOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsAttributesAttributeCodeOptionsOptionIdRouteHandler: RouteHandler<
  typeof deleteV1ProductsAttributesAttributeCodeOptionsOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsBasePricesRouteHandler: RouteHandler<
  typeof postV1ProductsBasePricesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsBasePricesInformationRouteHandler: RouteHandler<
  typeof postV1ProductsBasePricesInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsCostRouteHandler: RouteHandler<typeof postV1ProductsCostRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1ProductsCostDeleteRouteHandler: RouteHandler<
  typeof postV1ProductsCostDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsCostInformationRouteHandler: RouteHandler<
  typeof postV1ProductsCostInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsDownloadableLinksSamplesIdRouteHandler: RouteHandler<
  typeof deleteV1ProductsDownloadableLinksSamplesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsDownloadableLinksIdRouteHandler: RouteHandler<
  typeof deleteV1ProductsDownloadableLinksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsLinksTypesRouteHandler: RouteHandler<
  typeof getV1ProductsLinksTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsLinksTypeAttributesRouteHandler: RouteHandler<
  typeof getV1ProductsLinksTypeAttributesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsMediaTypesAttributeSetNameRouteHandler: RouteHandler<
  typeof getV1ProductsMediaTypesAttributeSetNameRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsOptionsRouteHandler: RouteHandler<
  typeof postV1ProductsOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsOptionsTypesRouteHandler: RouteHandler<
  typeof getV1ProductsOptionsTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProductsOptionsOptionIdRouteHandler: RouteHandler<
  typeof putV1ProductsOptionsOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsSpecialPriceRouteHandler: RouteHandler<
  typeof postV1ProductsSpecialPriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsSpecialPriceDeleteRouteHandler: RouteHandler<
  typeof postV1ProductsSpecialPriceDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsSpecialPriceInformationRouteHandler: RouteHandler<
  typeof postV1ProductsSpecialPriceInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsTierPricesRouteHandler: RouteHandler<
  typeof postV1ProductsTierPricesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProductsTierPricesRouteHandler: RouteHandler<
  typeof putV1ProductsTierPricesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsTierPricesDeleteRouteHandler: RouteHandler<
  typeof postV1ProductsTierPricesDeleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsTierPricesInformationRouteHandler: RouteHandler<
  typeof postV1ProductsTierPricesInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsTypesRouteHandler: RouteHandler<typeof getV1ProductsTypesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1ProductsProductSkuStockItemsItemIdRouteHandler: RouteHandler<
  typeof putV1ProductsProductSkuStockItemsItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsSkuRouteHandler: RouteHandler<
  typeof deleteV1ProductsSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsSkuRouteHandler: RouteHandler<typeof getV1ProductsSkuRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const putV1ProductsSkuRouteHandler: RouteHandler<typeof putV1ProductsSkuRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ProductsSkuDownloadableLinksRouteHandler: RouteHandler<
  typeof getV1ProductsSkuDownloadableLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsSkuDownloadableLinksRouteHandler: RouteHandler<
  typeof postV1ProductsSkuDownloadableLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsSkuDownloadableLinksSamplesRouteHandler: RouteHandler<
  typeof getV1ProductsSkuDownloadableLinksSamplesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsSkuDownloadableLinksSamplesRouteHandler: RouteHandler<
  typeof postV1ProductsSkuDownloadableLinksSamplesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProductsSkuDownloadableLinksSamplesIdRouteHandler: RouteHandler<
  typeof putV1ProductsSkuDownloadableLinksSamplesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProductsSkuDownloadableLinksIdRouteHandler: RouteHandler<
  typeof putV1ProductsSkuDownloadableLinksIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsSkuGroupPricesCustomerGroupIdTiersRouteHandler: RouteHandler<
  typeof getV1ProductsSkuGroupPricesCustomerGroupIdTiersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyRouteHandler: RouteHandler<
  typeof deleteV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceRouteHandler: RouteHandler<
  typeof postV1ProductsSkuGroupPricesCustomerGroupIdTiersQtyPricePriceRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsSkuLinksRouteHandler: RouteHandler<
  typeof postV1ProductsSkuLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProductsSkuLinksRouteHandler: RouteHandler<
  typeof putV1ProductsSkuLinksRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsSkuLinksTypeRouteHandler: RouteHandler<
  typeof getV1ProductsSkuLinksTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsSkuLinksTypeLinkedProductSkuRouteHandler: RouteHandler<
  typeof deleteV1ProductsSkuLinksTypeLinkedProductSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsSkuMediaRouteHandler: RouteHandler<
  typeof getV1ProductsSkuMediaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsSkuMediaRouteHandler: RouteHandler<
  typeof postV1ProductsSkuMediaRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsSkuMediaEntryIdRouteHandler: RouteHandler<
  typeof deleteV1ProductsSkuMediaEntryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsSkuMediaEntryIdRouteHandler: RouteHandler<
  typeof getV1ProductsSkuMediaEntryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProductsSkuMediaEntryIdRouteHandler: RouteHandler<
  typeof putV1ProductsSkuMediaEntryIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsSkuOptionsRouteHandler: RouteHandler<
  typeof getV1ProductsSkuOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsSkuOptionsOptionIdRouteHandler: RouteHandler<
  typeof deleteV1ProductsSkuOptionsOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ProductsSkuOptionsOptionIdRouteHandler: RouteHandler<
  typeof getV1ProductsSkuOptionsOptionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ProductsSkuWebsitesRouteHandler: RouteHandler<
  typeof postV1ProductsSkuWebsitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ProductsSkuWebsitesRouteHandler: RouteHandler<
  typeof putV1ProductsSkuWebsitesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ProductsSkuWebsitesWebsiteIdRouteHandler: RouteHandler<
  typeof deleteV1ProductsSkuWebsitesWebsiteIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RequisitionListsRouteHandler: RouteHandler<
  typeof postV1RequisitionListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReturnsRouteHandler: RouteHandler<typeof getV1ReturnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReturnsRouteHandler: RouteHandler<typeof postV1ReturnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReturnsIdRouteHandler: RouteHandler<typeof deleteV1ReturnsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1ReturnsIdRouteHandler: RouteHandler<typeof getV1ReturnsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1ReturnsIdRouteHandler: RouteHandler<typeof putV1ReturnsIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReturnsIdCommentsRouteHandler: RouteHandler<
  typeof getV1ReturnsIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReturnsIdCommentsRouteHandler: RouteHandler<
  typeof postV1ReturnsIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReturnsIdLabelsRouteHandler: RouteHandler<
  typeof getV1ReturnsIdLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReturnsIdTrackingNumbersRouteHandler: RouteHandler<
  typeof getV1ReturnsIdTrackingNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ReturnsIdTrackingNumbersRouteHandler: RouteHandler<
  typeof postV1ReturnsIdTrackingNumbersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ReturnsIdTrackingNumbersTrackIdRouteHandler: RouteHandler<
  typeof deleteV1ReturnsIdTrackingNumbersTrackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReturnsAttributeMetadataRouteHandler: RouteHandler<
  typeof getV1ReturnsAttributeMetadataRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReturnsAttributeMetadataCustomRouteHandler: RouteHandler<
  typeof getV1ReturnsAttributeMetadataCustomRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReturnsAttributeMetadataFormFormCodeRouteHandler: RouteHandler<
  typeof getV1ReturnsAttributeMetadataFormFormCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ReturnsAttributeMetadataAttributeCodeRouteHandler: RouteHandler<
  typeof getV1ReturnsAttributeMetadataAttributeCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1RewardMineUseRewardRouteHandler: RouteHandler<
  typeof postV1RewardMineUseRewardRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SalesRulesRouteHandler: RouteHandler<typeof postV1SalesRulesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1SalesRulesSearchRouteHandler: RouteHandler<
  typeof getV1SalesRulesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SalesRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteV1SalesRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SalesRulesRuleIdRouteHandler: RouteHandler<
  typeof getV1SalesRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SalesRulesRuleIdRouteHandler: RouteHandler<
  typeof putV1SalesRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SearchRouteHandler: RouteHandler<typeof getV1SearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SharedCatalogRouteHandler: RouteHandler<
  typeof postV1SharedCatalogRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SharedCatalogIndexRouteHandler: RouteHandler<
  typeof getV1SharedCatalogIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1SharedCatalogIdRouteHandler: RouteHandler<
  typeof putV1SharedCatalogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SharedCatalogIdAssignCategoriesRouteHandler: RouteHandler<
  typeof postV1SharedCatalogIdAssignCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SharedCatalogIdAssignProductsRouteHandler: RouteHandler<
  typeof postV1SharedCatalogIdAssignProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SharedCatalogIdCategoriesRouteHandler: RouteHandler<
  typeof getV1SharedCatalogIdCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SharedCatalogIdProductsRouteHandler: RouteHandler<
  typeof getV1SharedCatalogIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SharedCatalogIdUnassignCategoriesRouteHandler: RouteHandler<
  typeof postV1SharedCatalogIdUnassignCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SharedCatalogIdUnassignProductsRouteHandler: RouteHandler<
  typeof postV1SharedCatalogIdUnassignProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1SharedCatalogSharedCatalogIdRouteHandler: RouteHandler<
  typeof deleteV1SharedCatalogSharedCatalogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SharedCatalogSharedCatalogIdRouteHandler: RouteHandler<
  typeof getV1SharedCatalogSharedCatalogIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SharedCatalogSharedCatalogIdAssignCompaniesRouteHandler: RouteHandler<
  typeof postV1SharedCatalogSharedCatalogIdAssignCompaniesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1SharedCatalogSharedCatalogIdCompaniesRouteHandler: RouteHandler<
  typeof getV1SharedCatalogSharedCatalogIdCompaniesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1SharedCatalogSharedCatalogIdUnassignCompaniesRouteHandler: RouteHandler<
  typeof postV1SharedCatalogSharedCatalogIdUnassignCompaniesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ShipmentIndexRouteHandler: RouteHandler<
  typeof postV1ShipmentIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ShipmentTrackRouteHandler: RouteHandler<
  typeof postV1ShipmentTrackRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1ShipmentTrackIdRouteHandler: RouteHandler<
  typeof deleteV1ShipmentTrackIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ShipmentIdRouteHandler: RouteHandler<typeof getV1ShipmentIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ShipmentIdCommentsRouteHandler: RouteHandler<
  typeof getV1ShipmentIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ShipmentIdCommentsRouteHandler: RouteHandler<
  typeof postV1ShipmentIdCommentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1ShipmentIdEmailsRouteHandler: RouteHandler<
  typeof postV1ShipmentIdEmailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ShipmentIdLabelRouteHandler: RouteHandler<
  typeof getV1ShipmentIdLabelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1ShipmentsRouteHandler: RouteHandler<typeof getV1ShipmentsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StockItemsLowStockIndexRouteHandler: RouteHandler<
  typeof getV1StockItemsLowStockIndexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StockItemsProductSkuRouteHandler: RouteHandler<
  typeof getV1StockItemsProductSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StockStatusesProductSkuRouteHandler: RouteHandler<
  typeof getV1StockStatusesProductSkuRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StoreStoreConfigsRouteHandler: RouteHandler<
  typeof getV1StoreStoreConfigsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StoreStoreGroupsRouteHandler: RouteHandler<
  typeof getV1StoreStoreGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StoreStoreViewsRouteHandler: RouteHandler<
  typeof getV1StoreStoreViewsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1StoreWebsitesRouteHandler: RouteHandler<typeof getV1StoreWebsitesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postV1TaxClassesRouteHandler: RouteHandler<typeof postV1TaxClassesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TaxClassesSearchRouteHandler: RouteHandler<
  typeof getV1TaxClassesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TaxClassesClassIdRouteHandler: RouteHandler<
  typeof putV1TaxClassesClassIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TaxClassesTaxClassIdRouteHandler: RouteHandler<
  typeof deleteV1TaxClassesTaxClassIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxClassesTaxClassIdRouteHandler: RouteHandler<
  typeof getV1TaxClassesTaxClassIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TaxRatesRouteHandler: RouteHandler<typeof postV1TaxRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TaxRatesRouteHandler: RouteHandler<typeof putV1TaxRatesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxRatesSearchRouteHandler: RouteHandler<
  typeof getV1TaxRatesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TaxRatesRateIdRouteHandler: RouteHandler<
  typeof deleteV1TaxRatesRateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxRatesRateIdRouteHandler: RouteHandler<
  typeof getV1TaxRatesRateIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TaxRulesRouteHandler: RouteHandler<typeof postV1TaxRulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TaxRulesRouteHandler: RouteHandler<typeof putV1TaxRulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxRulesSearchRouteHandler: RouteHandler<
  typeof getV1TaxRulesSearchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TaxRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteV1TaxRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TaxRulesRuleIdRouteHandler: RouteHandler<
  typeof getV1TaxRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TeamIndexRouteHandler: RouteHandler<typeof getV1TeamIndexRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1TeamCompanyIdRouteHandler: RouteHandler<
  typeof postV1TeamCompanyIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteV1TeamTeamIdRouteHandler: RouteHandler<typeof deleteV1TeamTeamIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TeamTeamIdRouteHandler: RouteHandler<typeof getV1TeamTeamIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TeamTeamIdRouteHandler: RouteHandler<typeof putV1TeamTeamIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const putV1TemandoRmaRmaIdShipmentsRouteHandler: RouteHandler<
  typeof putV1TemandoRmaRmaIdShipmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getV1TransactionsRouteHandler: RouteHandler<typeof getV1TransactionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getV1TransactionsIdRouteHandler: RouteHandler<
  typeof getV1TransactionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postV1WorldpayGuestCartsCartIdPaymentInformationRouteHandler: RouteHandler<
  typeof postV1WorldpayGuestCartsCartIdPaymentInformationRoute
> = async (c) => {
  throw new Error('Not implemented')
}
