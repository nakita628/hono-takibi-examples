import type { RouteHandler } from '@hono/zod-openapi'
import type {
  deleteAdminApiKeysIdRoute,
  deleteAdminCampaignsIdRoute,
  deleteAdminClaimsIdClaimItemsActionIdRoute,
  deleteAdminClaimsIdInboundItemsActionIdRoute,
  deleteAdminClaimsIdInboundShippingMethodActionIdRoute,
  deleteAdminClaimsIdOutboundItemsActionIdRoute,
  deleteAdminClaimsIdOutboundShippingMethodActionIdRoute,
  deleteAdminClaimsIdRequestRoute,
  deleteAdminCollectionsIdRoute,
  deleteAdminCustomerGroupsIdRoute,
  deleteAdminCustomersIdAddressesAddressIdRoute,
  deleteAdminCustomersIdRoute,
  deleteAdminDraftOrdersIdEditItemsActionIdRoute,
  deleteAdminDraftOrdersIdEditPromotionsRoute,
  deleteAdminDraftOrdersIdEditRoute,
  deleteAdminDraftOrdersIdEditShippingMethodsActionIdRoute,
  deleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute,
  deleteAdminDraftOrdersIdRoute,
  deleteAdminExchangesIdInboundItemsActionIdRoute,
  deleteAdminExchangesIdInboundShippingMethodActionIdRoute,
  deleteAdminExchangesIdOutboundItemsActionIdRoute,
  deleteAdminExchangesIdOutboundShippingMethodActionIdRoute,
  deleteAdminExchangesIdRequestRoute,
  deleteAdminFulfillmentSetsIdRoute,
  deleteAdminFulfillmentSetsIdServiceZonesZoneIdRoute,
  deleteAdminInventoryItemsIdLocationLevelsLocationIdRoute,
  deleteAdminInventoryItemsIdRoute,
  deleteAdminInvitesIdRoute,
  deleteAdminLayoutsZoneConfigurationRoute,
  deleteAdminOrderEditsIdItemsActionIdRoute,
  deleteAdminOrderEditsIdRoute,
  deleteAdminOrderEditsIdShippingMethodActionIdRoute,
  deleteAdminPaymentCollectionsIdRoute,
  deleteAdminPriceListsIdRoute,
  deleteAdminPricePreferencesIdRoute,
  deleteAdminProductCategoriesIdRoute,
  deleteAdminProductOptionsIdRoute,
  deleteAdminProductOptionsIdValuesValueIdRoute,
  deleteAdminProductsIdRoute,
  deleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute,
  deleteAdminProductsIdVariantsVariantIdRoute,
  deleteAdminProductTagsIdRoute,
  deleteAdminProductTypesIdRoute,
  deleteAdminPromotionsIdRoute,
  deleteAdminPropertyLabelsIdRoute,
  deleteAdminRefundReasonsIdRoute,
  deleteAdminRegionsIdRoute,
  deleteAdminReservationsIdRoute,
  deleteAdminReturnReasonsIdRoute,
  deleteAdminReturnsIdDismissItemsActionIdRoute,
  deleteAdminReturnsIdReceiveItemsActionIdRoute,
  deleteAdminReturnsIdReceiveRoute,
  deleteAdminReturnsIdRequestItemsActionIdRoute,
  deleteAdminReturnsIdRequestRoute,
  deleteAdminReturnsIdShippingMethodActionIdRoute,
  deleteAdminSalesChannelsIdRoute,
  deleteAdminSearchIndexesIdRoute,
  deleteAdminShippingOptionsIdRoute,
  deleteAdminShippingOptionTypesIdRoute,
  deleteAdminShippingProfilesIdRoute,
  deleteAdminStockLocationsIdRoute,
  deleteAdminTaxRatesIdRoute,
  deleteAdminTaxRatesIdRulesRuleIdRoute,
  deleteAdminTaxRegionsIdRoute,
  deleteAdminUploadsIdRoute,
  deleteAdminUsersIdRolesRoleIdRoute,
  deleteAdminUsersIdRolesRoute,
  deleteAdminUsersIdRoute,
  deleteAdminViewsEntityConfigurationsIdRoute,
  getAdminApiKeysIdRoute,
  getAdminApiKeysRoute,
  getAdminCampaignsIdRoute,
  getAdminCampaignsRoute,
  getAdminClaimsIdRoute,
  getAdminClaimsRoute,
  getAdminCollectionsIdRoute,
  getAdminCollectionsRoute,
  getAdminCurrenciesCodeRoute,
  getAdminCurrenciesRoute,
  getAdminCustomerGroupsIdRoute,
  getAdminCustomerGroupsRoute,
  getAdminCustomersIdAddressesAddressIdRoute,
  getAdminCustomersIdAddressesRoute,
  getAdminCustomersIdRoute,
  getAdminCustomersRoute,
  getAdminDraftOrdersIdRoute,
  getAdminDraftOrdersRoute,
  getAdminExchangesIdRoute,
  getAdminExchangesRoute,
  getAdminFeatureFlagsRoute,
  getAdminFulfillmentProvidersIdOptionsRoute,
  getAdminFulfillmentProvidersRoute,
  getAdminFulfillmentSetsIdServiceZonesZoneIdRoute,
  getAdminGiftCardsIdOrdersRoute,
  getAdminGiftCardsIdRoute,
  getAdminGiftCardsRoute,
  getAdminIndexDetailsRoute,
  getAdminInventoryItemsIdLocationLevelsRoute,
  getAdminInventoryItemsIdRoute,
  getAdminInventoryItemsRoute,
  getAdminInvitesIdRoute,
  getAdminInvitesRoute,
  getAdminLayoutsConfigurationsRoute,
  getAdminLayoutsZoneConfigurationRoute,
  getAdminLocalesCodeRoute,
  getAdminLocalesRoute,
  getAdminModulesRoute,
  getAdminNotificationsIdRoute,
  getAdminNotificationsRoute,
  getAdminOrdersIdChangesRoute,
  getAdminOrdersIdLineItemsRoute,
  getAdminOrdersIdPreviewRoute,
  getAdminOrdersIdRoute,
  getAdminOrdersIdShippingOptionsRoute,
  getAdminOrdersRoute,
  getAdminPaymentsIdRoute,
  getAdminPaymentsPaymentProvidersRoute,
  getAdminPaymentsRoute,
  getAdminPluginsRoute,
  getAdminPriceListsIdPricesRoute,
  getAdminPriceListsIdRoute,
  getAdminPriceListsRoute,
  getAdminPricePreferencesIdRoute,
  getAdminPricePreferencesRoute,
  getAdminProductCategoriesIdRoute,
  getAdminProductCategoriesRoute,
  getAdminProductOptionsIdRoute,
  getAdminProductOptionsIdValuesRoute,
  getAdminProductOptionsIdValuesValueIdRoute,
  getAdminProductOptionsRoute,
  getAdminProductsIdOptionsRoute,
  getAdminProductsIdRoute,
  getAdminProductsIdVariantsRoute,
  getAdminProductsIdVariantsVariantIdRoute,
  getAdminProductsRoute,
  getAdminProductTagsIdRoute,
  getAdminProductTagsRoute,
  getAdminProductTypesIdRoute,
  getAdminProductTypesRoute,
  getAdminProductVariantsRoute,
  getAdminPromotionsIdRoute,
  getAdminPromotionsIdRuleTypeRoute,
  getAdminPromotionsRoute,
  getAdminPromotionsRuleAttributeOptionsRuleTypeRoute,
  getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdRoute,
  getAdminPropertyLabelsIdRoute,
  getAdminPropertyLabelsRoute,
  getAdminRefundReasonsIdRoute,
  getAdminRefundReasonsRoute,
  getAdminRegionsIdRoute,
  getAdminRegionsRoute,
  getAdminReservationsIdRoute,
  getAdminReservationsRoute,
  getAdminReturnReasonsIdRoute,
  getAdminReturnReasonsRoute,
  getAdminReturnsIdRoute,
  getAdminReturnsRoute,
  getAdminSalesChannelsIdRoute,
  getAdminSalesChannelsRoute,
  getAdminSearchIndexesRoute,
  getAdminSearchRoute,
  getAdminShippingOptionsIdRoute,
  getAdminShippingOptionsRoute,
  getAdminShippingOptionTypesIdRoute,
  getAdminShippingOptionTypesRoute,
  getAdminShippingProfilesIdRoute,
  getAdminShippingProfilesRoute,
  getAdminStockLocationsIdRoute,
  getAdminStockLocationsRoute,
  getAdminStoreCreditAccountsIdRoute,
  getAdminStoreCreditAccountsIdTransactionsRoute,
  getAdminStoreCreditAccountsRoute,
  getAdminStoresIdRoute,
  getAdminStoresRoute,
  getAdminTaxProvidersRoute,
  getAdminTaxRatesIdRoute,
  getAdminTaxRatesRoute,
  getAdminTaxRegionsIdRoute,
  getAdminTaxRegionsRoute,
  getAdminTranslationsEntitiesRoute,
  getAdminTranslationsRoute,
  getAdminTranslationsSettingsRoute,
  getAdminTranslationsStatisticsRoute,
  getAdminUploadsIdRoute,
  getAdminUsersIdAuthProvidersRoute,
  getAdminUsersIdRolesRoute,
  getAdminUsersIdRoute,
  getAdminUsersMeRoute,
  getAdminUsersRoute,
  getAdminViewsEntitiesRoute,
  getAdminViewsEntityColumnsRoute,
  getAdminViewsEntityConfigurationsActiveRoute,
  getAdminViewsEntityConfigurationsIdRoute,
  getAdminViewsEntityConfigurationsRoute,
  getAdminWorkflowsExecutionsIdRoute,
  getAdminWorkflowsExecutionsRoute,
  getAdminWorkflowsExecutionsWorkflowIdSubscribeRoute,
  getAdminWorkflowsExecutionsWorkflowIdTransactionIdRoute,
  getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeRoute,
  postAdminApiKeysIdRevokeRoute,
  postAdminApiKeysIdRoute,
  postAdminApiKeysIdSalesChannelsRoute,
  postAdminApiKeysRoute,
  postAdminCampaignsIdPromotionsRoute,
  postAdminCampaignsIdRoute,
  postAdminCampaignsRoute,
  postAdminClaimsIdCancelRoute,
  postAdminClaimsIdClaimItemsActionIdRoute,
  postAdminClaimsIdClaimItemsRoute,
  postAdminClaimsIdInboundItemsActionIdRoute,
  postAdminClaimsIdInboundItemsRoute,
  postAdminClaimsIdInboundShippingMethodActionIdRoute,
  postAdminClaimsIdInboundShippingMethodRoute,
  postAdminClaimsIdOutboundItemsActionIdRoute,
  postAdminClaimsIdOutboundItemsRoute,
  postAdminClaimsIdOutboundShippingMethodActionIdRoute,
  postAdminClaimsIdOutboundShippingMethodRoute,
  postAdminClaimsIdRequestRoute,
  postAdminClaimsRoute,
  postAdminCollectionsIdProductsRoute,
  postAdminCollectionsIdRoute,
  postAdminCollectionsRoute,
  postAdminCustomerGroupsIdCustomersRoute,
  postAdminCustomerGroupsIdRoute,
  postAdminCustomerGroupsRoute,
  postAdminCustomersExportRoute,
  postAdminCustomersIdAddressesAddressIdRoute,
  postAdminCustomersIdAddressesRoute,
  postAdminCustomersIdCustomerGroupsRoute,
  postAdminCustomersIdRoute,
  postAdminCustomersRoute,
  postAdminDraftOrdersIdConvertToOrderRoute,
  postAdminDraftOrdersIdEditConfirmRoute,
  postAdminDraftOrdersIdEditItemsActionIdRoute,
  postAdminDraftOrdersIdEditItemsItemItemIdRoute,
  postAdminDraftOrdersIdEditItemsRoute,
  postAdminDraftOrdersIdEditPromotionsRoute,
  postAdminDraftOrdersIdEditRequestRoute,
  postAdminDraftOrdersIdEditRoute,
  postAdminDraftOrdersIdEditShippingMethodsActionIdRoute,
  postAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute,
  postAdminDraftOrdersIdEditShippingMethodsRoute,
  postAdminDraftOrdersIdRoute,
  postAdminDraftOrdersRoute,
  postAdminExchangesIdCancelRoute,
  postAdminExchangesIdInboundItemsActionIdRoute,
  postAdminExchangesIdInboundItemsRoute,
  postAdminExchangesIdInboundShippingMethodActionIdRoute,
  postAdminExchangesIdInboundShippingMethodRoute,
  postAdminExchangesIdOutboundItemsActionIdRoute,
  postAdminExchangesIdOutboundItemsRoute,
  postAdminExchangesIdOutboundShippingMethodActionIdRoute,
  postAdminExchangesIdOutboundShippingMethodRoute,
  postAdminExchangesIdRequestRoute,
  postAdminExchangesRoute,
  postAdminFulfillmentSetsIdServiceZonesRoute,
  postAdminFulfillmentSetsIdServiceZonesZoneIdRoute,
  postAdminFulfillmentsIdCancelRoute,
  postAdminFulfillmentsIdShipmentRoute,
  postAdminFulfillmentsRoute,
  postAdminGiftCardsIdRoute,
  postAdminGiftCardsRoute,
  postAdminIndexSyncRoute,
  postAdminInventoryItemsExportRoute,
  postAdminInventoryItemsIdLocationLevelsBatchRoute,
  postAdminInventoryItemsIdLocationLevelsLocationIdRoute,
  postAdminInventoryItemsIdLocationLevelsRoute,
  postAdminInventoryItemsIdRoute,
  postAdminInventoryItemsLocationLevelsBatchRoute,
  postAdminInventoryItemsRoute,
  postAdminInvitesAcceptRoute,
  postAdminInvitesIdResendRoute,
  postAdminInvitesRoute,
  postAdminLayoutsZoneConfigurationRoute,
  postAdminOrderChangesIdRoute,
  postAdminOrderEditsIdConfirmRoute,
  postAdminOrderEditsIdItemsActionIdRoute,
  postAdminOrderEditsIdItemsItemItemIdRoute,
  postAdminOrderEditsIdItemsRoute,
  postAdminOrderEditsIdRequestRoute,
  postAdminOrderEditsIdShippingMethodActionIdRoute,
  postAdminOrderEditsIdShippingMethodRoute,
  postAdminOrderEditsRoute,
  postAdminOrdersExportRoute,
  postAdminOrdersIdArchiveRoute,
  postAdminOrdersIdCancelRoute,
  postAdminOrdersIdCompleteRoute,
  postAdminOrdersIdCreditLinesRoute,
  postAdminOrdersIdFulfillmentsFulfillmentIdCancelRoute,
  postAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredRoute,
  postAdminOrdersIdFulfillmentsFulfillmentIdShipmentsRoute,
  postAdminOrdersIdFulfillmentsRoute,
  postAdminOrdersIdPaymentSessionsAuthorizeRoute,
  postAdminOrdersIdRoute,
  postAdminOrdersIdTransferCancelRoute,
  postAdminOrdersIdTransferGuestRoute,
  postAdminOrdersIdTransferRoute,
  postAdminPaymentCollectionsIdMarkAsPaidRoute,
  postAdminPaymentCollectionsIdPaymentSessionsRoute,
  postAdminPaymentCollectionsRoute,
  postAdminPaymentsIdCaptureRoute,
  postAdminPaymentsIdRefundRoute,
  postAdminPriceListsIdPricesBatchRoute,
  postAdminPriceListsIdProductsRoute,
  postAdminPriceListsIdRoute,
  postAdminPriceListsRoute,
  postAdminPricePreferencesIdRoute,
  postAdminPricePreferencesRoute,
  postAdminProductCategoriesIdProductsRoute,
  postAdminProductCategoriesIdRoute,
  postAdminProductCategoriesRoute,
  postAdminProductOptionsIdRoute,
  postAdminProductOptionsIdValuesValueIdRoute,
  postAdminProductOptionsRoute,
  postAdminProductsBatchRoute,
  postAdminProductsExportRoute,
  postAdminProductsIdImagesImageIdVariantsBatchRoute,
  postAdminProductsIdOptionsBatchRoute,
  postAdminProductsIdRoute,
  postAdminProductsIdVariantsBatchRoute,
  postAdminProductsIdVariantsInventoryItemsBatchRoute,
  postAdminProductsIdVariantsRoute,
  postAdminProductsIdVariantsVariantIdImagesBatchRoute,
  postAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute,
  postAdminProductsIdVariantsVariantIdInventoryItemsRoute,
  postAdminProductsIdVariantsVariantIdRoute,
  postAdminProductsImportRoute,
  postAdminProductsImportsRoute,
  postAdminProductsImportsTransactionIdConfirmRoute,
  postAdminProductsImportTransactionIdConfirmRoute,
  postAdminProductsRoute,
  postAdminProductTagsIdRoute,
  postAdminProductTagsRoute,
  postAdminProductTypesIdRoute,
  postAdminProductTypesRoute,
  postAdminPromotionsIdBuyRulesBatchRoute,
  postAdminPromotionsIdRoute,
  postAdminPromotionsIdRulesBatchRoute,
  postAdminPromotionsIdTargetRulesBatchRoute,
  postAdminPromotionsRoute,
  postAdminPropertyLabelsBatchRoute,
  postAdminPropertyLabelsIdRoute,
  postAdminPropertyLabelsRoute,
  postAdminRefundReasonsIdRoute,
  postAdminRefundReasonsRoute,
  postAdminRegionsIdRoute,
  postAdminRegionsRoute,
  postAdminReservationsIdRoute,
  postAdminReservationsRoute,
  postAdminReturnReasonsIdRoute,
  postAdminReturnReasonsRoute,
  postAdminReturnsIdCancelRoute,
  postAdminReturnsIdDismissItemsActionIdRoute,
  postAdminReturnsIdDismissItemsRoute,
  postAdminReturnsIdReceiveConfirmRoute,
  postAdminReturnsIdReceiveItemsActionIdRoute,
  postAdminReturnsIdReceiveItemsRoute,
  postAdminReturnsIdReceiveRoute,
  postAdminReturnsIdRequestItemsActionIdRoute,
  postAdminReturnsIdRequestItemsRoute,
  postAdminReturnsIdRequestRoute,
  postAdminReturnsIdRoute,
  postAdminReturnsIdShippingMethodActionIdRoute,
  postAdminReturnsIdShippingMethodRoute,
  postAdminReturnsRoute,
  postAdminSalesChannelsIdProductsRoute,
  postAdminSalesChannelsIdRoute,
  postAdminSalesChannelsRoute,
  postAdminSearchIndexesIdReindexRoute,
  postAdminShippingOptionsIdRoute,
  postAdminShippingOptionsIdRulesBatchRoute,
  postAdminShippingOptionsRoute,
  postAdminShippingOptionTypesIdRoute,
  postAdminShippingOptionTypesRoute,
  postAdminShippingProfilesIdRoute,
  postAdminShippingProfilesRoute,
  postAdminStockLocationsIdFulfillmentProvidersRoute,
  postAdminStockLocationsIdFulfillmentSetsRoute,
  postAdminStockLocationsIdRoute,
  postAdminStockLocationsIdSalesChannelsRoute,
  postAdminStockLocationsRoute,
  postAdminStoreCreditAccountsIdCreditRoute,
  postAdminStoreCreditAccountsIdDebitRoute,
  postAdminStoreCreditAccountsRoute,
  postAdminStoresIdRoute,
  postAdminTaxRatesIdRoute,
  postAdminTaxRatesIdRulesRoute,
  postAdminTaxRatesRoute,
  postAdminTaxRegionsIdRoute,
  postAdminTaxRegionsRoute,
  postAdminTranslationsBatchRoute,
  postAdminTranslationsSettingsBatchRoute,
  postAdminUploadsPresignedUrlsRoute,
  postAdminUploadsRoute,
  postAdminUsersIdResetPasswordRoute,
  postAdminUsersIdRolesRoute,
  postAdminUsersIdRoute,
  postAdminUsersMeRoute,
  postAdminViewsEntityConfigurationsActiveRoute,
  postAdminViewsEntityConfigurationsIdRoute,
  postAdminViewsEntityConfigurationsRoute,
  postAdminWorkflowsExecutionsWorkflowIdRunRoute,
  postAdminWorkflowsExecutionsWorkflowIdStepsFailureRoute,
  postAdminWorkflowsExecutionsWorkflowIdStepsSuccessRoute,
} from '../routes'

export const getAdminApiKeysRouteHandler: RouteHandler<typeof getAdminApiKeysRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminApiKeysRouteHandler: RouteHandler<typeof postAdminApiKeysRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminApiKeysIdRouteHandler: RouteHandler<typeof getAdminApiKeysIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminApiKeysIdRouteHandler: RouteHandler<typeof postAdminApiKeysIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAdminApiKeysIdRouteHandler: RouteHandler<
  typeof deleteAdminApiKeysIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminApiKeysIdRevokeRouteHandler: RouteHandler<
  typeof postAdminApiKeysIdRevokeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminApiKeysIdSalesChannelsRouteHandler: RouteHandler<
  typeof postAdminApiKeysIdSalesChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminCampaignsRouteHandler: RouteHandler<typeof getAdminCampaignsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminCampaignsRouteHandler: RouteHandler<typeof postAdminCampaignsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminCampaignsIdRouteHandler: RouteHandler<
  typeof getAdminCampaignsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCampaignsIdRouteHandler: RouteHandler<
  typeof postAdminCampaignsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminCampaignsIdRouteHandler: RouteHandler<
  typeof deleteAdminCampaignsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCampaignsIdPromotionsRouteHandler: RouteHandler<
  typeof postAdminCampaignsIdPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminClaimsRouteHandler: RouteHandler<typeof getAdminClaimsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsRouteHandler: RouteHandler<typeof postAdminClaimsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminClaimsIdRouteHandler: RouteHandler<typeof getAdminClaimsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdCancelRouteHandler: RouteHandler<
  typeof postAdminClaimsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdClaimItemsRouteHandler: RouteHandler<
  typeof postAdminClaimsIdClaimItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdClaimItemsActionIdRouteHandler: RouteHandler<
  typeof postAdminClaimsIdClaimItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminClaimsIdClaimItemsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminClaimsIdClaimItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdInboundItemsRouteHandler: RouteHandler<
  typeof postAdminClaimsIdInboundItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdInboundItemsActionIdRouteHandler: RouteHandler<
  typeof postAdminClaimsIdInboundItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminClaimsIdInboundItemsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminClaimsIdInboundItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdInboundShippingMethodRouteHandler: RouteHandler<
  typeof postAdminClaimsIdInboundShippingMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdInboundShippingMethodActionIdRouteHandler: RouteHandler<
  typeof postAdminClaimsIdInboundShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminClaimsIdInboundShippingMethodActionIdRouteHandler: RouteHandler<
  typeof deleteAdminClaimsIdInboundShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdOutboundItemsRouteHandler: RouteHandler<
  typeof postAdminClaimsIdOutboundItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdOutboundItemsActionIdRouteHandler: RouteHandler<
  typeof postAdminClaimsIdOutboundItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminClaimsIdOutboundItemsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminClaimsIdOutboundItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdOutboundShippingMethodRouteHandler: RouteHandler<
  typeof postAdminClaimsIdOutboundShippingMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdOutboundShippingMethodActionIdRouteHandler: RouteHandler<
  typeof postAdminClaimsIdOutboundShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminClaimsIdOutboundShippingMethodActionIdRouteHandler: RouteHandler<
  typeof deleteAdminClaimsIdOutboundShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminClaimsIdRequestRouteHandler: RouteHandler<
  typeof postAdminClaimsIdRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminClaimsIdRequestRouteHandler: RouteHandler<
  typeof deleteAdminClaimsIdRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminCollectionsRouteHandler: RouteHandler<
  typeof getAdminCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCollectionsRouteHandler: RouteHandler<
  typeof postAdminCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminCollectionsIdRouteHandler: RouteHandler<
  typeof getAdminCollectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCollectionsIdRouteHandler: RouteHandler<
  typeof postAdminCollectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminCollectionsIdRouteHandler: RouteHandler<
  typeof deleteAdminCollectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCollectionsIdProductsRouteHandler: RouteHandler<
  typeof postAdminCollectionsIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminCurrenciesRouteHandler: RouteHandler<typeof getAdminCurrenciesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminCurrenciesCodeRouteHandler: RouteHandler<
  typeof getAdminCurrenciesCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminCustomerGroupsRouteHandler: RouteHandler<
  typeof getAdminCustomerGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCustomerGroupsRouteHandler: RouteHandler<
  typeof postAdminCustomerGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminCustomerGroupsIdRouteHandler: RouteHandler<
  typeof getAdminCustomerGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCustomerGroupsIdRouteHandler: RouteHandler<
  typeof postAdminCustomerGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminCustomerGroupsIdRouteHandler: RouteHandler<
  typeof deleteAdminCustomerGroupsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCustomerGroupsIdCustomersRouteHandler: RouteHandler<
  typeof postAdminCustomerGroupsIdCustomersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminCustomersRouteHandler: RouteHandler<typeof getAdminCustomersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminCustomersRouteHandler: RouteHandler<typeof postAdminCustomersRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminCustomersExportRouteHandler: RouteHandler<
  typeof postAdminCustomersExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminCustomersIdRouteHandler: RouteHandler<
  typeof getAdminCustomersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCustomersIdRouteHandler: RouteHandler<
  typeof postAdminCustomersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminCustomersIdRouteHandler: RouteHandler<
  typeof deleteAdminCustomersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminCustomersIdAddressesRouteHandler: RouteHandler<
  typeof getAdminCustomersIdAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCustomersIdAddressesRouteHandler: RouteHandler<
  typeof postAdminCustomersIdAddressesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminCustomersIdAddressesAddressIdRouteHandler: RouteHandler<
  typeof getAdminCustomersIdAddressesAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCustomersIdAddressesAddressIdRouteHandler: RouteHandler<
  typeof postAdminCustomersIdAddressesAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminCustomersIdAddressesAddressIdRouteHandler: RouteHandler<
  typeof deleteAdminCustomersIdAddressesAddressIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminCustomersIdCustomerGroupsRouteHandler: RouteHandler<
  typeof postAdminCustomersIdCustomerGroupsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDraftOrdersRouteHandler: RouteHandler<
  typeof getAdminDraftOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminDraftOrdersIdRouteHandler: RouteHandler<
  typeof getAdminDraftOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDraftOrdersIdRouteHandler: RouteHandler<
  typeof deleteAdminDraftOrdersIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdConvertToOrderRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdConvertToOrderRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdEditRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDraftOrdersIdEditRouteHandler: RouteHandler<
  typeof deleteAdminDraftOrdersIdEditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdEditConfirmRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdEditConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdEditItemsRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdEditItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdEditItemsItemItemIdRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdEditItemsItemItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdEditItemsActionIdRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdEditItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDraftOrdersIdEditItemsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminDraftOrdersIdEditItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdEditPromotionsRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdEditPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDraftOrdersIdEditPromotionsRouteHandler: RouteHandler<
  typeof deleteAdminDraftOrdersIdEditPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdEditRequestRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdEditRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdEditShippingMethodsRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdEditShippingMethodsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRouteHandler: RouteHandler<
  typeof deleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminDraftOrdersIdEditShippingMethodsActionIdRouteHandler: RouteHandler<
  typeof postAdminDraftOrdersIdEditShippingMethodsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminDraftOrdersIdEditShippingMethodsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminDraftOrdersIdEditShippingMethodsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminExchangesRouteHandler: RouteHandler<typeof getAdminExchangesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesRouteHandler: RouteHandler<typeof postAdminExchangesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminExchangesIdRouteHandler: RouteHandler<
  typeof getAdminExchangesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesIdCancelRouteHandler: RouteHandler<
  typeof postAdminExchangesIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesIdInboundItemsRouteHandler: RouteHandler<
  typeof postAdminExchangesIdInboundItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesIdInboundItemsActionIdRouteHandler: RouteHandler<
  typeof postAdminExchangesIdInboundItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangesIdInboundItemsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminExchangesIdInboundItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesIdInboundShippingMethodRouteHandler: RouteHandler<
  typeof postAdminExchangesIdInboundShippingMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesIdInboundShippingMethodActionIdRouteHandler: RouteHandler<
  typeof postAdminExchangesIdInboundShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangesIdInboundShippingMethodActionIdRouteHandler: RouteHandler<
  typeof deleteAdminExchangesIdInboundShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesIdOutboundItemsRouteHandler: RouteHandler<
  typeof postAdminExchangesIdOutboundItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesIdOutboundItemsActionIdRouteHandler: RouteHandler<
  typeof postAdminExchangesIdOutboundItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangesIdOutboundItemsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminExchangesIdOutboundItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesIdOutboundShippingMethodRouteHandler: RouteHandler<
  typeof postAdminExchangesIdOutboundShippingMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesIdOutboundShippingMethodActionIdRouteHandler: RouteHandler<
  typeof postAdminExchangesIdOutboundShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangesIdOutboundShippingMethodActionIdRouteHandler: RouteHandler<
  typeof deleteAdminExchangesIdOutboundShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminExchangesIdRequestRouteHandler: RouteHandler<
  typeof postAdminExchangesIdRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminExchangesIdRequestRouteHandler: RouteHandler<
  typeof deleteAdminExchangesIdRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFeatureFlagsRouteHandler: RouteHandler<
  typeof getAdminFeatureFlagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFulfillmentProvidersRouteHandler: RouteHandler<
  typeof getAdminFulfillmentProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFulfillmentProvidersIdOptionsRouteHandler: RouteHandler<
  typeof getAdminFulfillmentProvidersIdOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminFulfillmentSetsIdRouteHandler: RouteHandler<
  typeof deleteAdminFulfillmentSetsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminFulfillmentSetsIdServiceZonesRouteHandler: RouteHandler<
  typeof postAdminFulfillmentSetsIdServiceZonesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminFulfillmentSetsIdServiceZonesZoneIdRouteHandler: RouteHandler<
  typeof getAdminFulfillmentSetsIdServiceZonesZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminFulfillmentSetsIdServiceZonesZoneIdRouteHandler: RouteHandler<
  typeof postAdminFulfillmentSetsIdServiceZonesZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminFulfillmentSetsIdServiceZonesZoneIdRouteHandler: RouteHandler<
  typeof deleteAdminFulfillmentSetsIdServiceZonesZoneIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminFulfillmentsRouteHandler: RouteHandler<
  typeof postAdminFulfillmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminFulfillmentsIdCancelRouteHandler: RouteHandler<
  typeof postAdminFulfillmentsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminFulfillmentsIdShipmentRouteHandler: RouteHandler<
  typeof postAdminFulfillmentsIdShipmentRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminGiftCardsRouteHandler: RouteHandler<typeof getAdminGiftCardsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminGiftCardsRouteHandler: RouteHandler<typeof postAdminGiftCardsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminGiftCardsIdRouteHandler: RouteHandler<
  typeof getAdminGiftCardsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminGiftCardsIdRouteHandler: RouteHandler<
  typeof postAdminGiftCardsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminGiftCardsIdOrdersRouteHandler: RouteHandler<
  typeof getAdminGiftCardsIdOrdersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminIndexDetailsRouteHandler: RouteHandler<
  typeof getAdminIndexDetailsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminIndexSyncRouteHandler: RouteHandler<typeof postAdminIndexSyncRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminInventoryItemsRouteHandler: RouteHandler<
  typeof getAdminInventoryItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminInventoryItemsRouteHandler: RouteHandler<
  typeof postAdminInventoryItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminInventoryItemsExportRouteHandler: RouteHandler<
  typeof postAdminInventoryItemsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminInventoryItemsLocationLevelsBatchRouteHandler: RouteHandler<
  typeof postAdminInventoryItemsLocationLevelsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminInventoryItemsIdRouteHandler: RouteHandler<
  typeof getAdminInventoryItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminInventoryItemsIdRouteHandler: RouteHandler<
  typeof postAdminInventoryItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminInventoryItemsIdRouteHandler: RouteHandler<
  typeof deleteAdminInventoryItemsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminInventoryItemsIdLocationLevelsRouteHandler: RouteHandler<
  typeof getAdminInventoryItemsIdLocationLevelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminInventoryItemsIdLocationLevelsRouteHandler: RouteHandler<
  typeof postAdminInventoryItemsIdLocationLevelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminInventoryItemsIdLocationLevelsBatchRouteHandler: RouteHandler<
  typeof postAdminInventoryItemsIdLocationLevelsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminInventoryItemsIdLocationLevelsLocationIdRouteHandler: RouteHandler<
  typeof postAdminInventoryItemsIdLocationLevelsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminInventoryItemsIdLocationLevelsLocationIdRouteHandler: RouteHandler<
  typeof deleteAdminInventoryItemsIdLocationLevelsLocationIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminInvitesRouteHandler: RouteHandler<typeof getAdminInvitesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminInvitesRouteHandler: RouteHandler<typeof postAdminInvitesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminInvitesAcceptRouteHandler: RouteHandler<
  typeof postAdminInvitesAcceptRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminInvitesIdRouteHandler: RouteHandler<typeof getAdminInvitesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAdminInvitesIdRouteHandler: RouteHandler<
  typeof deleteAdminInvitesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminInvitesIdResendRouteHandler: RouteHandler<
  typeof postAdminInvitesIdResendRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminLayoutsConfigurationsRouteHandler: RouteHandler<
  typeof getAdminLayoutsConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminLayoutsZoneConfigurationRouteHandler: RouteHandler<
  typeof getAdminLayoutsZoneConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminLayoutsZoneConfigurationRouteHandler: RouteHandler<
  typeof postAdminLayoutsZoneConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminLayoutsZoneConfigurationRouteHandler: RouteHandler<
  typeof deleteAdminLayoutsZoneConfigurationRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminLocalesRouteHandler: RouteHandler<typeof getAdminLocalesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminLocalesCodeRouteHandler: RouteHandler<
  typeof getAdminLocalesCodeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminModulesRouteHandler: RouteHandler<typeof getAdminModulesRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminNotificationsRouteHandler: RouteHandler<
  typeof getAdminNotificationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminNotificationsIdRouteHandler: RouteHandler<
  typeof getAdminNotificationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrderChangesIdRouteHandler: RouteHandler<
  typeof postAdminOrderChangesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrderEditsRouteHandler: RouteHandler<
  typeof postAdminOrderEditsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminOrderEditsIdRouteHandler: RouteHandler<
  typeof deleteAdminOrderEditsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrderEditsIdConfirmRouteHandler: RouteHandler<
  typeof postAdminOrderEditsIdConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrderEditsIdItemsRouteHandler: RouteHandler<
  typeof postAdminOrderEditsIdItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrderEditsIdItemsItemItemIdRouteHandler: RouteHandler<
  typeof postAdminOrderEditsIdItemsItemItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrderEditsIdItemsActionIdRouteHandler: RouteHandler<
  typeof postAdminOrderEditsIdItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminOrderEditsIdItemsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminOrderEditsIdItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrderEditsIdRequestRouteHandler: RouteHandler<
  typeof postAdminOrderEditsIdRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrderEditsIdShippingMethodRouteHandler: RouteHandler<
  typeof postAdminOrderEditsIdShippingMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrderEditsIdShippingMethodActionIdRouteHandler: RouteHandler<
  typeof postAdminOrderEditsIdShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminOrderEditsIdShippingMethodActionIdRouteHandler: RouteHandler<
  typeof deleteAdminOrderEditsIdShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminOrdersRouteHandler: RouteHandler<typeof getAdminOrdersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersExportRouteHandler: RouteHandler<
  typeof postAdminOrdersExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminOrdersIdRouteHandler: RouteHandler<typeof getAdminOrdersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdRouteHandler: RouteHandler<typeof postAdminOrdersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdArchiveRouteHandler: RouteHandler<
  typeof postAdminOrdersIdArchiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdCancelRouteHandler: RouteHandler<
  typeof postAdminOrdersIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminOrdersIdChangesRouteHandler: RouteHandler<
  typeof getAdminOrdersIdChangesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdCompleteRouteHandler: RouteHandler<
  typeof postAdminOrdersIdCompleteRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdCreditLinesRouteHandler: RouteHandler<
  typeof postAdminOrdersIdCreditLinesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdFulfillmentsRouteHandler: RouteHandler<
  typeof postAdminOrdersIdFulfillmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdFulfillmentsFulfillmentIdCancelRouteHandler: RouteHandler<
  typeof postAdminOrdersIdFulfillmentsFulfillmentIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredRouteHandler: RouteHandler<
  typeof postAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdFulfillmentsFulfillmentIdShipmentsRouteHandler: RouteHandler<
  typeof postAdminOrdersIdFulfillmentsFulfillmentIdShipmentsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminOrdersIdLineItemsRouteHandler: RouteHandler<
  typeof getAdminOrdersIdLineItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdPaymentSessionsAuthorizeRouteHandler: RouteHandler<
  typeof postAdminOrdersIdPaymentSessionsAuthorizeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminOrdersIdPreviewRouteHandler: RouteHandler<
  typeof getAdminOrdersIdPreviewRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminOrdersIdShippingOptionsRouteHandler: RouteHandler<
  typeof getAdminOrdersIdShippingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdTransferRouteHandler: RouteHandler<
  typeof postAdminOrdersIdTransferRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdTransferCancelRouteHandler: RouteHandler<
  typeof postAdminOrdersIdTransferCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminOrdersIdTransferGuestRouteHandler: RouteHandler<
  typeof postAdminOrdersIdTransferGuestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPaymentCollectionsRouteHandler: RouteHandler<
  typeof postAdminPaymentCollectionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminPaymentCollectionsIdRouteHandler: RouteHandler<
  typeof deleteAdminPaymentCollectionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPaymentCollectionsIdMarkAsPaidRouteHandler: RouteHandler<
  typeof postAdminPaymentCollectionsIdMarkAsPaidRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPaymentCollectionsIdPaymentSessionsRouteHandler: RouteHandler<
  typeof postAdminPaymentCollectionsIdPaymentSessionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPaymentsRouteHandler: RouteHandler<typeof getAdminPaymentsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminPaymentsPaymentProvidersRouteHandler: RouteHandler<
  typeof getAdminPaymentsPaymentProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPaymentsIdRouteHandler: RouteHandler<typeof getAdminPaymentsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminPaymentsIdCaptureRouteHandler: RouteHandler<
  typeof postAdminPaymentsIdCaptureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPaymentsIdRefundRouteHandler: RouteHandler<
  typeof postAdminPaymentsIdRefundRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPluginsRouteHandler: RouteHandler<typeof getAdminPluginsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPriceListsRouteHandler: RouteHandler<typeof getAdminPriceListsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminPriceListsRouteHandler: RouteHandler<
  typeof postAdminPriceListsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPriceListsIdRouteHandler: RouteHandler<
  typeof getAdminPriceListsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPriceListsIdRouteHandler: RouteHandler<
  typeof postAdminPriceListsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminPriceListsIdRouteHandler: RouteHandler<
  typeof deleteAdminPriceListsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPriceListsIdPricesRouteHandler: RouteHandler<
  typeof getAdminPriceListsIdPricesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPriceListsIdPricesBatchRouteHandler: RouteHandler<
  typeof postAdminPriceListsIdPricesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPriceListsIdProductsRouteHandler: RouteHandler<
  typeof postAdminPriceListsIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPricePreferencesRouteHandler: RouteHandler<
  typeof getAdminPricePreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPricePreferencesRouteHandler: RouteHandler<
  typeof postAdminPricePreferencesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPricePreferencesIdRouteHandler: RouteHandler<
  typeof getAdminPricePreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPricePreferencesIdRouteHandler: RouteHandler<
  typeof postAdminPricePreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminPricePreferencesIdRouteHandler: RouteHandler<
  typeof deleteAdminPricePreferencesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductCategoriesRouteHandler: RouteHandler<
  typeof getAdminProductCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductCategoriesRouteHandler: RouteHandler<
  typeof postAdminProductCategoriesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductCategoriesIdRouteHandler: RouteHandler<
  typeof getAdminProductCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductCategoriesIdRouteHandler: RouteHandler<
  typeof postAdminProductCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminProductCategoriesIdRouteHandler: RouteHandler<
  typeof deleteAdminProductCategoriesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductCategoriesIdProductsRouteHandler: RouteHandler<
  typeof postAdminProductCategoriesIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductOptionsRouteHandler: RouteHandler<
  typeof getAdminProductOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductOptionsRouteHandler: RouteHandler<
  typeof postAdminProductOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductOptionsIdRouteHandler: RouteHandler<
  typeof getAdminProductOptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductOptionsIdRouteHandler: RouteHandler<
  typeof postAdminProductOptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminProductOptionsIdRouteHandler: RouteHandler<
  typeof deleteAdminProductOptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductOptionsIdValuesRouteHandler: RouteHandler<
  typeof getAdminProductOptionsIdValuesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductOptionsIdValuesValueIdRouteHandler: RouteHandler<
  typeof getAdminProductOptionsIdValuesValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductOptionsIdValuesValueIdRouteHandler: RouteHandler<
  typeof postAdminProductOptionsIdValuesValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminProductOptionsIdValuesValueIdRouteHandler: RouteHandler<
  typeof deleteAdminProductOptionsIdValuesValueIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductTagsRouteHandler: RouteHandler<
  typeof getAdminProductTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductTagsRouteHandler: RouteHandler<
  typeof postAdminProductTagsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductTagsIdRouteHandler: RouteHandler<
  typeof getAdminProductTagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductTagsIdRouteHandler: RouteHandler<
  typeof postAdminProductTagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminProductTagsIdRouteHandler: RouteHandler<
  typeof deleteAdminProductTagsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductTypesRouteHandler: RouteHandler<
  typeof getAdminProductTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductTypesRouteHandler: RouteHandler<
  typeof postAdminProductTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductTypesIdRouteHandler: RouteHandler<
  typeof getAdminProductTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductTypesIdRouteHandler: RouteHandler<
  typeof postAdminProductTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminProductTypesIdRouteHandler: RouteHandler<
  typeof deleteAdminProductTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductVariantsRouteHandler: RouteHandler<
  typeof getAdminProductVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductsRouteHandler: RouteHandler<typeof getAdminProductsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminProductsRouteHandler: RouteHandler<typeof postAdminProductsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminProductsBatchRouteHandler: RouteHandler<
  typeof postAdminProductsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsExportRouteHandler: RouteHandler<
  typeof postAdminProductsExportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsImportRouteHandler: RouteHandler<
  typeof postAdminProductsImportRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsImportTransactionIdConfirmRouteHandler: RouteHandler<
  typeof postAdminProductsImportTransactionIdConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsImportsRouteHandler: RouteHandler<
  typeof postAdminProductsImportsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsImportsTransactionIdConfirmRouteHandler: RouteHandler<
  typeof postAdminProductsImportsTransactionIdConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductsIdRouteHandler: RouteHandler<typeof getAdminProductsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminProductsIdRouteHandler: RouteHandler<
  typeof postAdminProductsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminProductsIdRouteHandler: RouteHandler<
  typeof deleteAdminProductsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsIdImagesImageIdVariantsBatchRouteHandler: RouteHandler<
  typeof postAdminProductsIdImagesImageIdVariantsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductsIdOptionsRouteHandler: RouteHandler<
  typeof getAdminProductsIdOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsIdOptionsBatchRouteHandler: RouteHandler<
  typeof postAdminProductsIdOptionsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductsIdVariantsRouteHandler: RouteHandler<
  typeof getAdminProductsIdVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsIdVariantsRouteHandler: RouteHandler<
  typeof postAdminProductsIdVariantsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsIdVariantsBatchRouteHandler: RouteHandler<
  typeof postAdminProductsIdVariantsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsIdVariantsInventoryItemsBatchRouteHandler: RouteHandler<
  typeof postAdminProductsIdVariantsInventoryItemsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminProductsIdVariantsVariantIdRouteHandler: RouteHandler<
  typeof getAdminProductsIdVariantsVariantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsIdVariantsVariantIdRouteHandler: RouteHandler<
  typeof postAdminProductsIdVariantsVariantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminProductsIdVariantsVariantIdRouteHandler: RouteHandler<
  typeof deleteAdminProductsIdVariantsVariantIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsIdVariantsVariantIdImagesBatchRouteHandler: RouteHandler<
  typeof postAdminProductsIdVariantsVariantIdImagesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsIdVariantsVariantIdInventoryItemsRouteHandler: RouteHandler<
  typeof postAdminProductsIdVariantsVariantIdInventoryItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRouteHandler: RouteHandler<
  typeof postAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRouteHandler: RouteHandler<
  typeof deleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPromotionsRouteHandler: RouteHandler<typeof getAdminPromotionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminPromotionsRouteHandler: RouteHandler<
  typeof postAdminPromotionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPromotionsRuleAttributeOptionsRuleTypeRouteHandler: RouteHandler<
  typeof getAdminPromotionsRuleAttributeOptionsRuleTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdRouteHandler: RouteHandler<
  typeof getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPromotionsIdRouteHandler: RouteHandler<
  typeof getAdminPromotionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPromotionsIdRouteHandler: RouteHandler<
  typeof postAdminPromotionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminPromotionsIdRouteHandler: RouteHandler<
  typeof deleteAdminPromotionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPromotionsIdBuyRulesBatchRouteHandler: RouteHandler<
  typeof postAdminPromotionsIdBuyRulesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPromotionsIdRulesBatchRouteHandler: RouteHandler<
  typeof postAdminPromotionsIdRulesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPromotionsIdTargetRulesBatchRouteHandler: RouteHandler<
  typeof postAdminPromotionsIdTargetRulesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPromotionsIdRuleTypeRouteHandler: RouteHandler<
  typeof getAdminPromotionsIdRuleTypeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPropertyLabelsRouteHandler: RouteHandler<
  typeof getAdminPropertyLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPropertyLabelsRouteHandler: RouteHandler<
  typeof postAdminPropertyLabelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPropertyLabelsBatchRouteHandler: RouteHandler<
  typeof postAdminPropertyLabelsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminPropertyLabelsIdRouteHandler: RouteHandler<
  typeof getAdminPropertyLabelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminPropertyLabelsIdRouteHandler: RouteHandler<
  typeof postAdminPropertyLabelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminPropertyLabelsIdRouteHandler: RouteHandler<
  typeof deleteAdminPropertyLabelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRefundReasonsRouteHandler: RouteHandler<
  typeof getAdminRefundReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRefundReasonsRouteHandler: RouteHandler<
  typeof postAdminRefundReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRefundReasonsIdRouteHandler: RouteHandler<
  typeof getAdminRefundReasonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRefundReasonsIdRouteHandler: RouteHandler<
  typeof postAdminRefundReasonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminRefundReasonsIdRouteHandler: RouteHandler<
  typeof deleteAdminRefundReasonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminRegionsRouteHandler: RouteHandler<typeof getAdminRegionsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminRegionsRouteHandler: RouteHandler<typeof postAdminRegionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminRegionsIdRouteHandler: RouteHandler<typeof getAdminRegionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminRegionsIdRouteHandler: RouteHandler<typeof postAdminRegionsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAdminRegionsIdRouteHandler: RouteHandler<
  typeof deleteAdminRegionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminReservationsRouteHandler: RouteHandler<
  typeof getAdminReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReservationsRouteHandler: RouteHandler<
  typeof postAdminReservationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminReservationsIdRouteHandler: RouteHandler<
  typeof getAdminReservationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReservationsIdRouteHandler: RouteHandler<
  typeof postAdminReservationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminReservationsIdRouteHandler: RouteHandler<
  typeof deleteAdminReservationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminReturnReasonsRouteHandler: RouteHandler<
  typeof getAdminReturnReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnReasonsRouteHandler: RouteHandler<
  typeof postAdminReturnReasonsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminReturnReasonsIdRouteHandler: RouteHandler<
  typeof getAdminReturnReasonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnReasonsIdRouteHandler: RouteHandler<
  typeof postAdminReturnReasonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminReturnReasonsIdRouteHandler: RouteHandler<
  typeof deleteAdminReturnReasonsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminReturnsRouteHandler: RouteHandler<typeof getAdminReturnsRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsRouteHandler: RouteHandler<typeof postAdminReturnsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminReturnsIdRouteHandler: RouteHandler<typeof getAdminReturnsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdRouteHandler: RouteHandler<typeof postAdminReturnsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdCancelRouteHandler: RouteHandler<
  typeof postAdminReturnsIdCancelRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdDismissItemsRouteHandler: RouteHandler<
  typeof postAdminReturnsIdDismissItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdDismissItemsActionIdRouteHandler: RouteHandler<
  typeof postAdminReturnsIdDismissItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminReturnsIdDismissItemsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminReturnsIdDismissItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdReceiveRouteHandler: RouteHandler<
  typeof postAdminReturnsIdReceiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminReturnsIdReceiveRouteHandler: RouteHandler<
  typeof deleteAdminReturnsIdReceiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdReceiveItemsRouteHandler: RouteHandler<
  typeof postAdminReturnsIdReceiveItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdReceiveItemsActionIdRouteHandler: RouteHandler<
  typeof postAdminReturnsIdReceiveItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminReturnsIdReceiveItemsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminReturnsIdReceiveItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdReceiveConfirmRouteHandler: RouteHandler<
  typeof postAdminReturnsIdReceiveConfirmRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdRequestRouteHandler: RouteHandler<
  typeof postAdminReturnsIdRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminReturnsIdRequestRouteHandler: RouteHandler<
  typeof deleteAdminReturnsIdRequestRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdRequestItemsRouteHandler: RouteHandler<
  typeof postAdminReturnsIdRequestItemsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdRequestItemsActionIdRouteHandler: RouteHandler<
  typeof postAdminReturnsIdRequestItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminReturnsIdRequestItemsActionIdRouteHandler: RouteHandler<
  typeof deleteAdminReturnsIdRequestItemsActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdShippingMethodRouteHandler: RouteHandler<
  typeof postAdminReturnsIdShippingMethodRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminReturnsIdShippingMethodActionIdRouteHandler: RouteHandler<
  typeof postAdminReturnsIdShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminReturnsIdShippingMethodActionIdRouteHandler: RouteHandler<
  typeof deleteAdminReturnsIdShippingMethodActionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminSalesChannelsRouteHandler: RouteHandler<
  typeof getAdminSalesChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminSalesChannelsRouteHandler: RouteHandler<
  typeof postAdminSalesChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminSalesChannelsIdRouteHandler: RouteHandler<
  typeof getAdminSalesChannelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminSalesChannelsIdRouteHandler: RouteHandler<
  typeof postAdminSalesChannelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminSalesChannelsIdRouteHandler: RouteHandler<
  typeof deleteAdminSalesChannelsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminSalesChannelsIdProductsRouteHandler: RouteHandler<
  typeof postAdminSalesChannelsIdProductsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminSearchRouteHandler: RouteHandler<typeof getAdminSearchRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminSearchIndexesRouteHandler: RouteHandler<
  typeof getAdminSearchIndexesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminSearchIndexesIdRouteHandler: RouteHandler<
  typeof deleteAdminSearchIndexesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminSearchIndexesIdReindexRouteHandler: RouteHandler<
  typeof postAdminSearchIndexesIdReindexRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminShippingOptionTypesRouteHandler: RouteHandler<
  typeof getAdminShippingOptionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminShippingOptionTypesRouteHandler: RouteHandler<
  typeof postAdminShippingOptionTypesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminShippingOptionTypesIdRouteHandler: RouteHandler<
  typeof getAdminShippingOptionTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminShippingOptionTypesIdRouteHandler: RouteHandler<
  typeof postAdminShippingOptionTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminShippingOptionTypesIdRouteHandler: RouteHandler<
  typeof deleteAdminShippingOptionTypesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminShippingOptionsRouteHandler: RouteHandler<
  typeof getAdminShippingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminShippingOptionsRouteHandler: RouteHandler<
  typeof postAdminShippingOptionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminShippingOptionsIdRouteHandler: RouteHandler<
  typeof getAdminShippingOptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminShippingOptionsIdRouteHandler: RouteHandler<
  typeof postAdminShippingOptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminShippingOptionsIdRouteHandler: RouteHandler<
  typeof deleteAdminShippingOptionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminShippingOptionsIdRulesBatchRouteHandler: RouteHandler<
  typeof postAdminShippingOptionsIdRulesBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminShippingProfilesRouteHandler: RouteHandler<
  typeof getAdminShippingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminShippingProfilesRouteHandler: RouteHandler<
  typeof postAdminShippingProfilesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminShippingProfilesIdRouteHandler: RouteHandler<
  typeof getAdminShippingProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminShippingProfilesIdRouteHandler: RouteHandler<
  typeof postAdminShippingProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminShippingProfilesIdRouteHandler: RouteHandler<
  typeof deleteAdminShippingProfilesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminStockLocationsRouteHandler: RouteHandler<
  typeof getAdminStockLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminStockLocationsRouteHandler: RouteHandler<
  typeof postAdminStockLocationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminStockLocationsIdRouteHandler: RouteHandler<
  typeof getAdminStockLocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminStockLocationsIdRouteHandler: RouteHandler<
  typeof postAdminStockLocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminStockLocationsIdRouteHandler: RouteHandler<
  typeof deleteAdminStockLocationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminStockLocationsIdFulfillmentProvidersRouteHandler: RouteHandler<
  typeof postAdminStockLocationsIdFulfillmentProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminStockLocationsIdFulfillmentSetsRouteHandler: RouteHandler<
  typeof postAdminStockLocationsIdFulfillmentSetsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminStockLocationsIdSalesChannelsRouteHandler: RouteHandler<
  typeof postAdminStockLocationsIdSalesChannelsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminStoreCreditAccountsRouteHandler: RouteHandler<
  typeof getAdminStoreCreditAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminStoreCreditAccountsRouteHandler: RouteHandler<
  typeof postAdminStoreCreditAccountsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminStoreCreditAccountsIdRouteHandler: RouteHandler<
  typeof getAdminStoreCreditAccountsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminStoreCreditAccountsIdCreditRouteHandler: RouteHandler<
  typeof postAdminStoreCreditAccountsIdCreditRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminStoreCreditAccountsIdDebitRouteHandler: RouteHandler<
  typeof postAdminStoreCreditAccountsIdDebitRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminStoreCreditAccountsIdTransactionsRouteHandler: RouteHandler<
  typeof getAdminStoreCreditAccountsIdTransactionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminStoresRouteHandler: RouteHandler<typeof getAdminStoresRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminStoresIdRouteHandler: RouteHandler<typeof getAdminStoresIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminStoresIdRouteHandler: RouteHandler<typeof postAdminStoresIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminTaxProvidersRouteHandler: RouteHandler<
  typeof getAdminTaxProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTaxRatesRouteHandler: RouteHandler<typeof getAdminTaxRatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminTaxRatesRouteHandler: RouteHandler<typeof postAdminTaxRatesRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminTaxRatesIdRouteHandler: RouteHandler<typeof getAdminTaxRatesIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminTaxRatesIdRouteHandler: RouteHandler<
  typeof postAdminTaxRatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminTaxRatesIdRouteHandler: RouteHandler<
  typeof deleteAdminTaxRatesIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTaxRatesIdRulesRouteHandler: RouteHandler<
  typeof postAdminTaxRatesIdRulesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminTaxRatesIdRulesRuleIdRouteHandler: RouteHandler<
  typeof deleteAdminTaxRatesIdRulesRuleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTaxRegionsRouteHandler: RouteHandler<typeof getAdminTaxRegionsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminTaxRegionsRouteHandler: RouteHandler<
  typeof postAdminTaxRegionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTaxRegionsIdRouteHandler: RouteHandler<
  typeof getAdminTaxRegionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTaxRegionsIdRouteHandler: RouteHandler<
  typeof postAdminTaxRegionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminTaxRegionsIdRouteHandler: RouteHandler<
  typeof deleteAdminTaxRegionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTranslationsRouteHandler: RouteHandler<
  typeof getAdminTranslationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTranslationsBatchRouteHandler: RouteHandler<
  typeof postAdminTranslationsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTranslationsEntitiesRouteHandler: RouteHandler<
  typeof getAdminTranslationsEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTranslationsSettingsRouteHandler: RouteHandler<
  typeof getAdminTranslationsSettingsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminTranslationsSettingsBatchRouteHandler: RouteHandler<
  typeof postAdminTranslationsSettingsBatchRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminTranslationsStatisticsRouteHandler: RouteHandler<
  typeof getAdminTranslationsStatisticsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminUploadsRouteHandler: RouteHandler<typeof postAdminUploadsRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const postAdminUploadsPresignedUrlsRouteHandler: RouteHandler<
  typeof postAdminUploadsPresignedUrlsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminUploadsIdRouteHandler: RouteHandler<typeof getAdminUploadsIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAdminUploadsIdRouteHandler: RouteHandler<
  typeof deleteAdminUploadsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminUsersRouteHandler: RouteHandler<typeof getAdminUsersRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminUsersMeRouteHandler: RouteHandler<typeof getAdminUsersMeRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminUsersMeRouteHandler: RouteHandler<typeof postAdminUsersMeRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminUsersIdRouteHandler: RouteHandler<typeof getAdminUsersIdRoute> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminUsersIdRouteHandler: RouteHandler<typeof postAdminUsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const deleteAdminUsersIdRouteHandler: RouteHandler<typeof deleteAdminUsersIdRoute> = async (
  c,
) => {
  throw new Error('Not implemented')
}

export const getAdminUsersIdAuthProvidersRouteHandler: RouteHandler<
  typeof getAdminUsersIdAuthProvidersRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminUsersIdResetPasswordRouteHandler: RouteHandler<
  typeof postAdminUsersIdResetPasswordRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminUsersIdRolesRouteHandler: RouteHandler<
  typeof getAdminUsersIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminUsersIdRolesRouteHandler: RouteHandler<
  typeof postAdminUsersIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminUsersIdRolesRouteHandler: RouteHandler<
  typeof deleteAdminUsersIdRolesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminUsersIdRolesRoleIdRouteHandler: RouteHandler<
  typeof deleteAdminUsersIdRolesRoleIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminViewsEntitiesRouteHandler: RouteHandler<
  typeof getAdminViewsEntitiesRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminViewsEntityColumnsRouteHandler: RouteHandler<
  typeof getAdminViewsEntityColumnsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminViewsEntityConfigurationsRouteHandler: RouteHandler<
  typeof getAdminViewsEntityConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminViewsEntityConfigurationsRouteHandler: RouteHandler<
  typeof postAdminViewsEntityConfigurationsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminViewsEntityConfigurationsActiveRouteHandler: RouteHandler<
  typeof getAdminViewsEntityConfigurationsActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminViewsEntityConfigurationsActiveRouteHandler: RouteHandler<
  typeof postAdminViewsEntityConfigurationsActiveRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminViewsEntityConfigurationsIdRouteHandler: RouteHandler<
  typeof getAdminViewsEntityConfigurationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminViewsEntityConfigurationsIdRouteHandler: RouteHandler<
  typeof postAdminViewsEntityConfigurationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const deleteAdminViewsEntityConfigurationsIdRouteHandler: RouteHandler<
  typeof deleteAdminViewsEntityConfigurationsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminWorkflowsExecutionsRouteHandler: RouteHandler<
  typeof getAdminWorkflowsExecutionsRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminWorkflowsExecutionsIdRouteHandler: RouteHandler<
  typeof getAdminWorkflowsExecutionsIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminWorkflowsExecutionsWorkflowIdRunRouteHandler: RouteHandler<
  typeof postAdminWorkflowsExecutionsWorkflowIdRunRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminWorkflowsExecutionsWorkflowIdStepsFailureRouteHandler: RouteHandler<
  typeof postAdminWorkflowsExecutionsWorkflowIdStepsFailureRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const postAdminWorkflowsExecutionsWorkflowIdStepsSuccessRouteHandler: RouteHandler<
  typeof postAdminWorkflowsExecutionsWorkflowIdStepsSuccessRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminWorkflowsExecutionsWorkflowIdSubscribeRouteHandler: RouteHandler<
  typeof getAdminWorkflowsExecutionsWorkflowIdSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminWorkflowsExecutionsWorkflowIdTransactionIdRouteHandler: RouteHandler<
  typeof getAdminWorkflowsExecutionsWorkflowIdTransactionIdRoute
> = async (c) => {
  throw new Error('Not implemented')
}

export const getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeRouteHandler: RouteHandler<
  typeof getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeRoute
> = async (c) => {
  throw new Error('Not implemented')
}
