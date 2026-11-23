import { OpenAPIHono } from '@hono/zod-openapi'
import {
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

const app = new OpenAPIHono()

export const adminHandler = app
  .openapi(getAdminApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminApiKeysRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminApiKeysIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminApiKeysIdRevokeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminApiKeysIdSalesChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCampaignsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCampaignsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCampaignsIdPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminClaimsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdClaimItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdClaimItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdClaimItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdInboundItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdInboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdInboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdInboundShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdInboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdInboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdOutboundItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdOutboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdOutboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdOutboundShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdOutboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdOutboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminClaimsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminClaimsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCollectionsIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCurrenciesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCurrenciesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCustomerGroupsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomerGroupsIdCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCustomersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomersIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersIdAddressesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminCustomersIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminCustomersIdAddressesAddressIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminCustomersIdCustomerGroupsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDraftOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminDraftOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdConvertToOrderRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdEditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditItemsItemItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdEditItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdEditPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditShippingMethodsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminDraftOrdersIdEditShippingMethodsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminDraftOrdersIdEditShippingMethodsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminExchangesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdInboundItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdInboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminExchangesIdInboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdInboundShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdInboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminExchangesIdInboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdOutboundItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdOutboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminExchangesIdOutboundItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdOutboundShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdOutboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminExchangesIdOutboundShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminExchangesIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminExchangesIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFeatureFlagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFulfillmentProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFulfillmentProvidersIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminFulfillmentSetsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFulfillmentSetsIdServiceZonesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminFulfillmentSetsIdServiceZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFulfillmentSetsIdServiceZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminFulfillmentSetsIdServiceZonesZoneIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFulfillmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFulfillmentsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminFulfillmentsIdShipmentRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminGiftCardsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminGiftCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminGiftCardsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminGiftCardsIdOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminIndexDetailsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminIndexSyncRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminInventoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsLocationLevelsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminInventoryItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminInventoryItemsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminInventoryItemsIdLocationLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsIdLocationLevelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsIdLocationLevelsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInventoryItemsIdLocationLevelsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminInventoryItemsIdLocationLevelsLocationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInvitesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInvitesAcceptRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminInvitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminInvitesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminInvitesIdResendRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLayoutsConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLayoutsZoneConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminLayoutsZoneConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminLayoutsZoneConfigurationRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLocalesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminLocalesCodeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminModulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminNotificationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminNotificationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderChangesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOrderEditsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdItemsItemItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOrderEditsIdItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrderEditsIdShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminOrderEditsIdShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdArchiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersIdChangesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdCompleteRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdCreditLinesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdFulfillmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdFulfillmentsFulfillmentIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdFulfillmentsFulfillmentIdShipmentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersIdLineItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdPaymentSessionsAuthorizeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersIdPreviewRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminOrdersIdShippingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdTransferRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdTransferCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminOrdersIdTransferGuestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPaymentCollectionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPaymentCollectionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPaymentCollectionsIdMarkAsPaidRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPaymentCollectionsIdPaymentSessionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPaymentsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPaymentsPaymentProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPaymentsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPaymentsIdCaptureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPaymentsIdRefundRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPluginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPriceListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPriceListsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPriceListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPriceListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPriceListsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPriceListsIdPricesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPriceListsIdPricesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPriceListsIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPricePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPricePreferencesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPricePreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPricePreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPricePreferencesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductCategoriesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductCategoriesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductCategoriesIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductOptionsIdValuesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductOptionsIdValuesValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductOptionsIdValuesValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductOptionsIdValuesValueIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductTagsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductTagsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsExportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsImportRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsImportTransactionIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsImportsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsImportsTransactionIdConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdImagesImageIdVariantsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductsIdOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdOptionsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductsIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsInventoryItemsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminProductsIdVariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductsIdVariantsVariantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsVariantIdImagesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsVariantIdInventoryItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPromotionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPromotionsRuleAttributeOptionsRuleTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPromotionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPromotionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPromotionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPromotionsIdBuyRulesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPromotionsIdRulesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPromotionsIdTargetRulesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPromotionsIdRuleTypeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPropertyLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPropertyLabelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPropertyLabelsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminPropertyLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminPropertyLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminPropertyLabelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRefundReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRefundReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRefundReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRefundReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRefundReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReservationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReservationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminReturnReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnReasonsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminReturnReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnReasonsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdDismissItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdDismissItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdDismissItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdReceiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdReceiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdReceiveItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdReceiveItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdReceiveItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdReceiveConfirmRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdRequestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdRequestItemsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdRequestItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdRequestItemsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdShippingMethodRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminReturnsIdShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminReturnsIdShippingMethodActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSalesChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSalesChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSalesChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSalesChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminSalesChannelsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSalesChannelsIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSearchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminSearchIndexesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminSearchIndexesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminSearchIndexesIdReindexRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminShippingOptionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingOptionTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminShippingOptionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingOptionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminShippingOptionTypesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminShippingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingOptionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminShippingOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminShippingOptionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingOptionsIdRulesBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminShippingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingProfilesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminShippingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminShippingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminShippingProfilesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStockLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStockLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStockLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStockLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminStockLocationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStockLocationsIdFulfillmentProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStockLocationsIdFulfillmentSetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStockLocationsIdSalesChannelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStoreCreditAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStoreCreditAccountsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStoreCreditAccountsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStoreCreditAccountsIdCreditRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStoreCreditAccountsIdDebitRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStoreCreditAccountsIdTransactionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminStoresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminStoresIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTaxProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTaxRatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTaxRatesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTaxRatesIdRulesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTaxRatesIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTaxRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTaxRegionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTaxRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTaxRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminTaxRegionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTranslationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTranslationsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTranslationsEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTranslationsSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminTranslationsSettingsBatchRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminTranslationsStatisticsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUploadsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUploadsPresignedUrlsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUploadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUploadsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersMeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdAuthProvidersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdResetPasswordRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminUsersIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminUsersIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersIdRolesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminUsersIdRolesRoleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewsEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewsEntityColumnsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewsEntityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminViewsEntityConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewsEntityConfigurationsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminViewsEntityConfigurationsActiveRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminViewsEntityConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminViewsEntityConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteAdminViewsEntityConfigurationsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWorkflowsExecutionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWorkflowsExecutionsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWorkflowsExecutionsWorkflowIdRunRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWorkflowsExecutionsWorkflowIdStepsFailureRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postAdminWorkflowsExecutionsWorkflowIdStepsSuccessRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWorkflowsExecutionsWorkflowIdSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWorkflowsExecutionsWorkflowIdTransactionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeRoute, (c) => {
    throw new Error('Not implemented')
  })
