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
  deleteAuthMfaFactorsIdRoute,
  deleteAuthSessionRoute,
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
  getAuthMfaFactorsRoute,
  getAuthUserProvidersRoute,
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
  postAuthAuthProviderUserRoute,
  postAuthMfaChallengesIdVerifyRoute,
  postAuthMfaFactorsIdVerifyRoute,
  postAuthMfaFactorsRoute,
  postAuthMfaRecoveryCodesRoute,
  postAuthSessionRoute,
  postAuthTokenRefreshRoute,
  postAuthUserAuthProviderCallbackRoute,
  postAuthUserAuthProviderRegisterRoute,
  postAuthUserAuthProviderResetPasswordRoute,
  postAuthUserAuthProviderRoute,
  postAuthUserAuthProviderUpdateRoute,
} from './routes'
import {
  deleteAdminApiKeysIdRouteHandler,
  deleteAdminCampaignsIdRouteHandler,
  deleteAdminClaimsIdClaimItemsActionIdRouteHandler,
  deleteAdminClaimsIdInboundItemsActionIdRouteHandler,
  deleteAdminClaimsIdInboundShippingMethodActionIdRouteHandler,
  deleteAdminClaimsIdOutboundItemsActionIdRouteHandler,
  deleteAdminClaimsIdOutboundShippingMethodActionIdRouteHandler,
  deleteAdminClaimsIdRequestRouteHandler,
  deleteAdminCollectionsIdRouteHandler,
  deleteAdminCustomerGroupsIdRouteHandler,
  deleteAdminCustomersIdAddressesAddressIdRouteHandler,
  deleteAdminCustomersIdRouteHandler,
  deleteAdminDraftOrdersIdEditItemsActionIdRouteHandler,
  deleteAdminDraftOrdersIdEditPromotionsRouteHandler,
  deleteAdminDraftOrdersIdEditRouteHandler,
  deleteAdminDraftOrdersIdEditShippingMethodsActionIdRouteHandler,
  deleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRouteHandler,
  deleteAdminDraftOrdersIdRouteHandler,
  deleteAdminExchangesIdInboundItemsActionIdRouteHandler,
  deleteAdminExchangesIdInboundShippingMethodActionIdRouteHandler,
  deleteAdminExchangesIdOutboundItemsActionIdRouteHandler,
  deleteAdminExchangesIdOutboundShippingMethodActionIdRouteHandler,
  deleteAdminExchangesIdRequestRouteHandler,
  deleteAdminFulfillmentSetsIdRouteHandler,
  deleteAdminFulfillmentSetsIdServiceZonesZoneIdRouteHandler,
  deleteAdminInventoryItemsIdLocationLevelsLocationIdRouteHandler,
  deleteAdminInventoryItemsIdRouteHandler,
  deleteAdminInvitesIdRouteHandler,
  deleteAdminLayoutsZoneConfigurationRouteHandler,
  deleteAdminOrderEditsIdItemsActionIdRouteHandler,
  deleteAdminOrderEditsIdRouteHandler,
  deleteAdminOrderEditsIdShippingMethodActionIdRouteHandler,
  deleteAdminPaymentCollectionsIdRouteHandler,
  deleteAdminPriceListsIdRouteHandler,
  deleteAdminPricePreferencesIdRouteHandler,
  deleteAdminProductCategoriesIdRouteHandler,
  deleteAdminProductOptionsIdRouteHandler,
  deleteAdminProductOptionsIdValuesValueIdRouteHandler,
  deleteAdminProductsIdRouteHandler,
  deleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRouteHandler,
  deleteAdminProductsIdVariantsVariantIdRouteHandler,
  deleteAdminProductTagsIdRouteHandler,
  deleteAdminProductTypesIdRouteHandler,
  deleteAdminPromotionsIdRouteHandler,
  deleteAdminPropertyLabelsIdRouteHandler,
  deleteAdminRefundReasonsIdRouteHandler,
  deleteAdminRegionsIdRouteHandler,
  deleteAdminReservationsIdRouteHandler,
  deleteAdminReturnReasonsIdRouteHandler,
  deleteAdminReturnsIdDismissItemsActionIdRouteHandler,
  deleteAdminReturnsIdReceiveItemsActionIdRouteHandler,
  deleteAdminReturnsIdReceiveRouteHandler,
  deleteAdminReturnsIdRequestItemsActionIdRouteHandler,
  deleteAdminReturnsIdRequestRouteHandler,
  deleteAdminReturnsIdShippingMethodActionIdRouteHandler,
  deleteAdminSalesChannelsIdRouteHandler,
  deleteAdminSearchIndexesIdRouteHandler,
  deleteAdminShippingOptionsIdRouteHandler,
  deleteAdminShippingOptionTypesIdRouteHandler,
  deleteAdminShippingProfilesIdRouteHandler,
  deleteAdminStockLocationsIdRouteHandler,
  deleteAdminTaxRatesIdRouteHandler,
  deleteAdminTaxRatesIdRulesRuleIdRouteHandler,
  deleteAdminTaxRegionsIdRouteHandler,
  deleteAdminUploadsIdRouteHandler,
  deleteAdminUsersIdRolesRoleIdRouteHandler,
  deleteAdminUsersIdRolesRouteHandler,
  deleteAdminUsersIdRouteHandler,
  deleteAdminViewsEntityConfigurationsIdRouteHandler,
  deleteAuthMfaFactorsIdRouteHandler,
  deleteAuthSessionRouteHandler,
  getAdminApiKeysIdRouteHandler,
  getAdminApiKeysRouteHandler,
  getAdminCampaignsIdRouteHandler,
  getAdminCampaignsRouteHandler,
  getAdminClaimsIdRouteHandler,
  getAdminClaimsRouteHandler,
  getAdminCollectionsIdRouteHandler,
  getAdminCollectionsRouteHandler,
  getAdminCurrenciesCodeRouteHandler,
  getAdminCurrenciesRouteHandler,
  getAdminCustomerGroupsIdRouteHandler,
  getAdminCustomerGroupsRouteHandler,
  getAdminCustomersIdAddressesAddressIdRouteHandler,
  getAdminCustomersIdAddressesRouteHandler,
  getAdminCustomersIdRouteHandler,
  getAdminCustomersRouteHandler,
  getAdminDraftOrdersIdRouteHandler,
  getAdminDraftOrdersRouteHandler,
  getAdminExchangesIdRouteHandler,
  getAdminExchangesRouteHandler,
  getAdminFeatureFlagsRouteHandler,
  getAdminFulfillmentProvidersIdOptionsRouteHandler,
  getAdminFulfillmentProvidersRouteHandler,
  getAdminFulfillmentSetsIdServiceZonesZoneIdRouteHandler,
  getAdminGiftCardsIdOrdersRouteHandler,
  getAdminGiftCardsIdRouteHandler,
  getAdminGiftCardsRouteHandler,
  getAdminIndexDetailsRouteHandler,
  getAdminInventoryItemsIdLocationLevelsRouteHandler,
  getAdminInventoryItemsIdRouteHandler,
  getAdminInventoryItemsRouteHandler,
  getAdminInvitesIdRouteHandler,
  getAdminInvitesRouteHandler,
  getAdminLayoutsConfigurationsRouteHandler,
  getAdminLayoutsZoneConfigurationRouteHandler,
  getAdminLocalesCodeRouteHandler,
  getAdminLocalesRouteHandler,
  getAdminModulesRouteHandler,
  getAdminNotificationsIdRouteHandler,
  getAdminNotificationsRouteHandler,
  getAdminOrdersIdChangesRouteHandler,
  getAdminOrdersIdLineItemsRouteHandler,
  getAdminOrdersIdPreviewRouteHandler,
  getAdminOrdersIdRouteHandler,
  getAdminOrdersIdShippingOptionsRouteHandler,
  getAdminOrdersRouteHandler,
  getAdminPaymentsIdRouteHandler,
  getAdminPaymentsPaymentProvidersRouteHandler,
  getAdminPaymentsRouteHandler,
  getAdminPluginsRouteHandler,
  getAdminPriceListsIdPricesRouteHandler,
  getAdminPriceListsIdRouteHandler,
  getAdminPriceListsRouteHandler,
  getAdminPricePreferencesIdRouteHandler,
  getAdminPricePreferencesRouteHandler,
  getAdminProductCategoriesIdRouteHandler,
  getAdminProductCategoriesRouteHandler,
  getAdminProductOptionsIdRouteHandler,
  getAdminProductOptionsIdValuesRouteHandler,
  getAdminProductOptionsIdValuesValueIdRouteHandler,
  getAdminProductOptionsRouteHandler,
  getAdminProductsIdOptionsRouteHandler,
  getAdminProductsIdRouteHandler,
  getAdminProductsIdVariantsRouteHandler,
  getAdminProductsIdVariantsVariantIdRouteHandler,
  getAdminProductsRouteHandler,
  getAdminProductTagsIdRouteHandler,
  getAdminProductTagsRouteHandler,
  getAdminProductTypesIdRouteHandler,
  getAdminProductTypesRouteHandler,
  getAdminProductVariantsRouteHandler,
  getAdminPromotionsIdRouteHandler,
  getAdminPromotionsIdRuleTypeRouteHandler,
  getAdminPromotionsRouteHandler,
  getAdminPromotionsRuleAttributeOptionsRuleTypeRouteHandler,
  getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdRouteHandler,
  getAdminPropertyLabelsIdRouteHandler,
  getAdminPropertyLabelsRouteHandler,
  getAdminRefundReasonsIdRouteHandler,
  getAdminRefundReasonsRouteHandler,
  getAdminRegionsIdRouteHandler,
  getAdminRegionsRouteHandler,
  getAdminReservationsIdRouteHandler,
  getAdminReservationsRouteHandler,
  getAdminReturnReasonsIdRouteHandler,
  getAdminReturnReasonsRouteHandler,
  getAdminReturnsIdRouteHandler,
  getAdminReturnsRouteHandler,
  getAdminSalesChannelsIdRouteHandler,
  getAdminSalesChannelsRouteHandler,
  getAdminSearchIndexesRouteHandler,
  getAdminSearchRouteHandler,
  getAdminShippingOptionsIdRouteHandler,
  getAdminShippingOptionsRouteHandler,
  getAdminShippingOptionTypesIdRouteHandler,
  getAdminShippingOptionTypesRouteHandler,
  getAdminShippingProfilesIdRouteHandler,
  getAdminShippingProfilesRouteHandler,
  getAdminStockLocationsIdRouteHandler,
  getAdminStockLocationsRouteHandler,
  getAdminStoreCreditAccountsIdRouteHandler,
  getAdminStoreCreditAccountsIdTransactionsRouteHandler,
  getAdminStoreCreditAccountsRouteHandler,
  getAdminStoresIdRouteHandler,
  getAdminStoresRouteHandler,
  getAdminTaxProvidersRouteHandler,
  getAdminTaxRatesIdRouteHandler,
  getAdminTaxRatesRouteHandler,
  getAdminTaxRegionsIdRouteHandler,
  getAdminTaxRegionsRouteHandler,
  getAdminTranslationsEntitiesRouteHandler,
  getAdminTranslationsRouteHandler,
  getAdminTranslationsSettingsRouteHandler,
  getAdminTranslationsStatisticsRouteHandler,
  getAdminUploadsIdRouteHandler,
  getAdminUsersIdAuthProvidersRouteHandler,
  getAdminUsersIdRolesRouteHandler,
  getAdminUsersIdRouteHandler,
  getAdminUsersMeRouteHandler,
  getAdminUsersRouteHandler,
  getAdminViewsEntitiesRouteHandler,
  getAdminViewsEntityColumnsRouteHandler,
  getAdminViewsEntityConfigurationsActiveRouteHandler,
  getAdminViewsEntityConfigurationsIdRouteHandler,
  getAdminViewsEntityConfigurationsRouteHandler,
  getAdminWorkflowsExecutionsIdRouteHandler,
  getAdminWorkflowsExecutionsRouteHandler,
  getAdminWorkflowsExecutionsWorkflowIdSubscribeRouteHandler,
  getAdminWorkflowsExecutionsWorkflowIdTransactionIdRouteHandler,
  getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeRouteHandler,
  getAuthMfaFactorsRouteHandler,
  getAuthUserProvidersRouteHandler,
  postAdminApiKeysIdRevokeRouteHandler,
  postAdminApiKeysIdRouteHandler,
  postAdminApiKeysIdSalesChannelsRouteHandler,
  postAdminApiKeysRouteHandler,
  postAdminCampaignsIdPromotionsRouteHandler,
  postAdminCampaignsIdRouteHandler,
  postAdminCampaignsRouteHandler,
  postAdminClaimsIdCancelRouteHandler,
  postAdminClaimsIdClaimItemsActionIdRouteHandler,
  postAdminClaimsIdClaimItemsRouteHandler,
  postAdminClaimsIdInboundItemsActionIdRouteHandler,
  postAdminClaimsIdInboundItemsRouteHandler,
  postAdminClaimsIdInboundShippingMethodActionIdRouteHandler,
  postAdminClaimsIdInboundShippingMethodRouteHandler,
  postAdminClaimsIdOutboundItemsActionIdRouteHandler,
  postAdminClaimsIdOutboundItemsRouteHandler,
  postAdminClaimsIdOutboundShippingMethodActionIdRouteHandler,
  postAdminClaimsIdOutboundShippingMethodRouteHandler,
  postAdminClaimsIdRequestRouteHandler,
  postAdminClaimsRouteHandler,
  postAdminCollectionsIdProductsRouteHandler,
  postAdminCollectionsIdRouteHandler,
  postAdminCollectionsRouteHandler,
  postAdminCustomerGroupsIdCustomersRouteHandler,
  postAdminCustomerGroupsIdRouteHandler,
  postAdminCustomerGroupsRouteHandler,
  postAdminCustomersExportRouteHandler,
  postAdminCustomersIdAddressesAddressIdRouteHandler,
  postAdminCustomersIdAddressesRouteHandler,
  postAdminCustomersIdCustomerGroupsRouteHandler,
  postAdminCustomersIdRouteHandler,
  postAdminCustomersRouteHandler,
  postAdminDraftOrdersIdConvertToOrderRouteHandler,
  postAdminDraftOrdersIdEditConfirmRouteHandler,
  postAdminDraftOrdersIdEditItemsActionIdRouteHandler,
  postAdminDraftOrdersIdEditItemsItemItemIdRouteHandler,
  postAdminDraftOrdersIdEditItemsRouteHandler,
  postAdminDraftOrdersIdEditPromotionsRouteHandler,
  postAdminDraftOrdersIdEditRequestRouteHandler,
  postAdminDraftOrdersIdEditRouteHandler,
  postAdminDraftOrdersIdEditShippingMethodsActionIdRouteHandler,
  postAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRouteHandler,
  postAdminDraftOrdersIdEditShippingMethodsRouteHandler,
  postAdminDraftOrdersIdRouteHandler,
  postAdminDraftOrdersRouteHandler,
  postAdminExchangesIdCancelRouteHandler,
  postAdminExchangesIdInboundItemsActionIdRouteHandler,
  postAdminExchangesIdInboundItemsRouteHandler,
  postAdminExchangesIdInboundShippingMethodActionIdRouteHandler,
  postAdminExchangesIdInboundShippingMethodRouteHandler,
  postAdminExchangesIdOutboundItemsActionIdRouteHandler,
  postAdminExchangesIdOutboundItemsRouteHandler,
  postAdminExchangesIdOutboundShippingMethodActionIdRouteHandler,
  postAdminExchangesIdOutboundShippingMethodRouteHandler,
  postAdminExchangesIdRequestRouteHandler,
  postAdminExchangesRouteHandler,
  postAdminFulfillmentSetsIdServiceZonesRouteHandler,
  postAdminFulfillmentSetsIdServiceZonesZoneIdRouteHandler,
  postAdminFulfillmentsIdCancelRouteHandler,
  postAdminFulfillmentsIdShipmentRouteHandler,
  postAdminFulfillmentsRouteHandler,
  postAdminGiftCardsIdRouteHandler,
  postAdminGiftCardsRouteHandler,
  postAdminIndexSyncRouteHandler,
  postAdminInventoryItemsExportRouteHandler,
  postAdminInventoryItemsIdLocationLevelsBatchRouteHandler,
  postAdminInventoryItemsIdLocationLevelsLocationIdRouteHandler,
  postAdminInventoryItemsIdLocationLevelsRouteHandler,
  postAdminInventoryItemsIdRouteHandler,
  postAdminInventoryItemsLocationLevelsBatchRouteHandler,
  postAdminInventoryItemsRouteHandler,
  postAdminInvitesAcceptRouteHandler,
  postAdminInvitesIdResendRouteHandler,
  postAdminInvitesRouteHandler,
  postAdminLayoutsZoneConfigurationRouteHandler,
  postAdminOrderChangesIdRouteHandler,
  postAdminOrderEditsIdConfirmRouteHandler,
  postAdminOrderEditsIdItemsActionIdRouteHandler,
  postAdminOrderEditsIdItemsItemItemIdRouteHandler,
  postAdminOrderEditsIdItemsRouteHandler,
  postAdminOrderEditsIdRequestRouteHandler,
  postAdminOrderEditsIdShippingMethodActionIdRouteHandler,
  postAdminOrderEditsIdShippingMethodRouteHandler,
  postAdminOrderEditsRouteHandler,
  postAdminOrdersExportRouteHandler,
  postAdminOrdersIdArchiveRouteHandler,
  postAdminOrdersIdCancelRouteHandler,
  postAdminOrdersIdCompleteRouteHandler,
  postAdminOrdersIdCreditLinesRouteHandler,
  postAdminOrdersIdFulfillmentsFulfillmentIdCancelRouteHandler,
  postAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredRouteHandler,
  postAdminOrdersIdFulfillmentsFulfillmentIdShipmentsRouteHandler,
  postAdminOrdersIdFulfillmentsRouteHandler,
  postAdminOrdersIdPaymentSessionsAuthorizeRouteHandler,
  postAdminOrdersIdRouteHandler,
  postAdminOrdersIdTransferCancelRouteHandler,
  postAdminOrdersIdTransferGuestRouteHandler,
  postAdminOrdersIdTransferRouteHandler,
  postAdminPaymentCollectionsIdMarkAsPaidRouteHandler,
  postAdminPaymentCollectionsIdPaymentSessionsRouteHandler,
  postAdminPaymentCollectionsRouteHandler,
  postAdminPaymentsIdCaptureRouteHandler,
  postAdminPaymentsIdRefundRouteHandler,
  postAdminPriceListsIdPricesBatchRouteHandler,
  postAdminPriceListsIdProductsRouteHandler,
  postAdminPriceListsIdRouteHandler,
  postAdminPriceListsRouteHandler,
  postAdminPricePreferencesIdRouteHandler,
  postAdminPricePreferencesRouteHandler,
  postAdminProductCategoriesIdProductsRouteHandler,
  postAdminProductCategoriesIdRouteHandler,
  postAdminProductCategoriesRouteHandler,
  postAdminProductOptionsIdRouteHandler,
  postAdminProductOptionsIdValuesValueIdRouteHandler,
  postAdminProductOptionsRouteHandler,
  postAdminProductsBatchRouteHandler,
  postAdminProductsExportRouteHandler,
  postAdminProductsIdImagesImageIdVariantsBatchRouteHandler,
  postAdminProductsIdOptionsBatchRouteHandler,
  postAdminProductsIdRouteHandler,
  postAdminProductsIdVariantsBatchRouteHandler,
  postAdminProductsIdVariantsInventoryItemsBatchRouteHandler,
  postAdminProductsIdVariantsRouteHandler,
  postAdminProductsIdVariantsVariantIdImagesBatchRouteHandler,
  postAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRouteHandler,
  postAdminProductsIdVariantsVariantIdInventoryItemsRouteHandler,
  postAdminProductsIdVariantsVariantIdRouteHandler,
  postAdminProductsImportRouteHandler,
  postAdminProductsImportsRouteHandler,
  postAdminProductsImportsTransactionIdConfirmRouteHandler,
  postAdminProductsImportTransactionIdConfirmRouteHandler,
  postAdminProductsRouteHandler,
  postAdminProductTagsIdRouteHandler,
  postAdminProductTagsRouteHandler,
  postAdminProductTypesIdRouteHandler,
  postAdminProductTypesRouteHandler,
  postAdminPromotionsIdBuyRulesBatchRouteHandler,
  postAdminPromotionsIdRouteHandler,
  postAdminPromotionsIdRulesBatchRouteHandler,
  postAdminPromotionsIdTargetRulesBatchRouteHandler,
  postAdminPromotionsRouteHandler,
  postAdminPropertyLabelsBatchRouteHandler,
  postAdminPropertyLabelsIdRouteHandler,
  postAdminPropertyLabelsRouteHandler,
  postAdminRefundReasonsIdRouteHandler,
  postAdminRefundReasonsRouteHandler,
  postAdminRegionsIdRouteHandler,
  postAdminRegionsRouteHandler,
  postAdminReservationsIdRouteHandler,
  postAdminReservationsRouteHandler,
  postAdminReturnReasonsIdRouteHandler,
  postAdminReturnReasonsRouteHandler,
  postAdminReturnsIdCancelRouteHandler,
  postAdminReturnsIdDismissItemsActionIdRouteHandler,
  postAdminReturnsIdDismissItemsRouteHandler,
  postAdminReturnsIdReceiveConfirmRouteHandler,
  postAdminReturnsIdReceiveItemsActionIdRouteHandler,
  postAdminReturnsIdReceiveItemsRouteHandler,
  postAdminReturnsIdReceiveRouteHandler,
  postAdminReturnsIdRequestItemsActionIdRouteHandler,
  postAdminReturnsIdRequestItemsRouteHandler,
  postAdminReturnsIdRequestRouteHandler,
  postAdminReturnsIdRouteHandler,
  postAdminReturnsIdShippingMethodActionIdRouteHandler,
  postAdminReturnsIdShippingMethodRouteHandler,
  postAdminReturnsRouteHandler,
  postAdminSalesChannelsIdProductsRouteHandler,
  postAdminSalesChannelsIdRouteHandler,
  postAdminSalesChannelsRouteHandler,
  postAdminSearchIndexesIdReindexRouteHandler,
  postAdminShippingOptionsIdRouteHandler,
  postAdminShippingOptionsIdRulesBatchRouteHandler,
  postAdminShippingOptionsRouteHandler,
  postAdminShippingOptionTypesIdRouteHandler,
  postAdminShippingOptionTypesRouteHandler,
  postAdminShippingProfilesIdRouteHandler,
  postAdminShippingProfilesRouteHandler,
  postAdminStockLocationsIdFulfillmentProvidersRouteHandler,
  postAdminStockLocationsIdFulfillmentSetsRouteHandler,
  postAdminStockLocationsIdRouteHandler,
  postAdminStockLocationsIdSalesChannelsRouteHandler,
  postAdminStockLocationsRouteHandler,
  postAdminStoreCreditAccountsIdCreditRouteHandler,
  postAdminStoreCreditAccountsIdDebitRouteHandler,
  postAdminStoreCreditAccountsRouteHandler,
  postAdminStoresIdRouteHandler,
  postAdminTaxRatesIdRouteHandler,
  postAdminTaxRatesIdRulesRouteHandler,
  postAdminTaxRatesRouteHandler,
  postAdminTaxRegionsIdRouteHandler,
  postAdminTaxRegionsRouteHandler,
  postAdminTranslationsBatchRouteHandler,
  postAdminTranslationsSettingsBatchRouteHandler,
  postAdminUploadsPresignedUrlsRouteHandler,
  postAdminUploadsRouteHandler,
  postAdminUsersIdResetPasswordRouteHandler,
  postAdminUsersIdRolesRouteHandler,
  postAdminUsersIdRouteHandler,
  postAdminUsersMeRouteHandler,
  postAdminViewsEntityConfigurationsActiveRouteHandler,
  postAdminViewsEntityConfigurationsIdRouteHandler,
  postAdminViewsEntityConfigurationsRouteHandler,
  postAdminWorkflowsExecutionsWorkflowIdRunRouteHandler,
  postAdminWorkflowsExecutionsWorkflowIdStepsFailureRouteHandler,
  postAdminWorkflowsExecutionsWorkflowIdStepsSuccessRouteHandler,
  postAuthAuthProviderUserRouteHandler,
  postAuthMfaChallengesIdVerifyRouteHandler,
  postAuthMfaFactorsIdVerifyRouteHandler,
  postAuthMfaFactorsRouteHandler,
  postAuthMfaRecoveryCodesRouteHandler,
  postAuthSessionRouteHandler,
  postAuthTokenRefreshRouteHandler,
  postAuthUserAuthProviderCallbackRouteHandler,
  postAuthUserAuthProviderRegisterRouteHandler,
  postAuthUserAuthProviderResetPasswordRouteHandler,
  postAuthUserAuthProviderRouteHandler,
  postAuthUserAuthProviderUpdateRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(getAdminApiKeysRoute, getAdminApiKeysRouteHandler)
  .openapi(postAdminApiKeysRoute, postAdminApiKeysRouteHandler)
  .openapi(getAdminApiKeysIdRoute, getAdminApiKeysIdRouteHandler)
  .openapi(postAdminApiKeysIdRoute, postAdminApiKeysIdRouteHandler)
  .openapi(deleteAdminApiKeysIdRoute, deleteAdminApiKeysIdRouteHandler)
  .openapi(postAdminApiKeysIdRevokeRoute, postAdminApiKeysIdRevokeRouteHandler)
  .openapi(postAdminApiKeysIdSalesChannelsRoute, postAdminApiKeysIdSalesChannelsRouteHandler)
  .openapi(getAdminCampaignsRoute, getAdminCampaignsRouteHandler)
  .openapi(postAdminCampaignsRoute, postAdminCampaignsRouteHandler)
  .openapi(getAdminCampaignsIdRoute, getAdminCampaignsIdRouteHandler)
  .openapi(postAdminCampaignsIdRoute, postAdminCampaignsIdRouteHandler)
  .openapi(deleteAdminCampaignsIdRoute, deleteAdminCampaignsIdRouteHandler)
  .openapi(postAdminCampaignsIdPromotionsRoute, postAdminCampaignsIdPromotionsRouteHandler)
  .openapi(getAdminClaimsRoute, getAdminClaimsRouteHandler)
  .openapi(postAdminClaimsRoute, postAdminClaimsRouteHandler)
  .openapi(getAdminClaimsIdRoute, getAdminClaimsIdRouteHandler)
  .openapi(postAdminClaimsIdCancelRoute, postAdminClaimsIdCancelRouteHandler)
  .openapi(postAdminClaimsIdClaimItemsRoute, postAdminClaimsIdClaimItemsRouteHandler)
  .openapi(
    postAdminClaimsIdClaimItemsActionIdRoute,
    postAdminClaimsIdClaimItemsActionIdRouteHandler,
  )
  .openapi(
    deleteAdminClaimsIdClaimItemsActionIdRoute,
    deleteAdminClaimsIdClaimItemsActionIdRouteHandler,
  )
  .openapi(postAdminClaimsIdInboundItemsRoute, postAdminClaimsIdInboundItemsRouteHandler)
  .openapi(
    postAdminClaimsIdInboundItemsActionIdRoute,
    postAdminClaimsIdInboundItemsActionIdRouteHandler,
  )
  .openapi(
    deleteAdminClaimsIdInboundItemsActionIdRoute,
    deleteAdminClaimsIdInboundItemsActionIdRouteHandler,
  )
  .openapi(
    postAdminClaimsIdInboundShippingMethodRoute,
    postAdminClaimsIdInboundShippingMethodRouteHandler,
  )
  .openapi(
    postAdminClaimsIdInboundShippingMethodActionIdRoute,
    postAdminClaimsIdInboundShippingMethodActionIdRouteHandler,
  )
  .openapi(
    deleteAdminClaimsIdInboundShippingMethodActionIdRoute,
    deleteAdminClaimsIdInboundShippingMethodActionIdRouteHandler,
  )
  .openapi(postAdminClaimsIdOutboundItemsRoute, postAdminClaimsIdOutboundItemsRouteHandler)
  .openapi(
    postAdminClaimsIdOutboundItemsActionIdRoute,
    postAdminClaimsIdOutboundItemsActionIdRouteHandler,
  )
  .openapi(
    deleteAdminClaimsIdOutboundItemsActionIdRoute,
    deleteAdminClaimsIdOutboundItemsActionIdRouteHandler,
  )
  .openapi(
    postAdminClaimsIdOutboundShippingMethodRoute,
    postAdminClaimsIdOutboundShippingMethodRouteHandler,
  )
  .openapi(
    postAdminClaimsIdOutboundShippingMethodActionIdRoute,
    postAdminClaimsIdOutboundShippingMethodActionIdRouteHandler,
  )
  .openapi(
    deleteAdminClaimsIdOutboundShippingMethodActionIdRoute,
    deleteAdminClaimsIdOutboundShippingMethodActionIdRouteHandler,
  )
  .openapi(postAdminClaimsIdRequestRoute, postAdminClaimsIdRequestRouteHandler)
  .openapi(deleteAdminClaimsIdRequestRoute, deleteAdminClaimsIdRequestRouteHandler)
  .openapi(getAdminCollectionsRoute, getAdminCollectionsRouteHandler)
  .openapi(postAdminCollectionsRoute, postAdminCollectionsRouteHandler)
  .openapi(getAdminCollectionsIdRoute, getAdminCollectionsIdRouteHandler)
  .openapi(postAdminCollectionsIdRoute, postAdminCollectionsIdRouteHandler)
  .openapi(deleteAdminCollectionsIdRoute, deleteAdminCollectionsIdRouteHandler)
  .openapi(postAdminCollectionsIdProductsRoute, postAdminCollectionsIdProductsRouteHandler)
  .openapi(getAdminCurrenciesRoute, getAdminCurrenciesRouteHandler)
  .openapi(getAdminCurrenciesCodeRoute, getAdminCurrenciesCodeRouteHandler)
  .openapi(getAdminCustomerGroupsRoute, getAdminCustomerGroupsRouteHandler)
  .openapi(postAdminCustomerGroupsRoute, postAdminCustomerGroupsRouteHandler)
  .openapi(getAdminCustomerGroupsIdRoute, getAdminCustomerGroupsIdRouteHandler)
  .openapi(postAdminCustomerGroupsIdRoute, postAdminCustomerGroupsIdRouteHandler)
  .openapi(deleteAdminCustomerGroupsIdRoute, deleteAdminCustomerGroupsIdRouteHandler)
  .openapi(postAdminCustomerGroupsIdCustomersRoute, postAdminCustomerGroupsIdCustomersRouteHandler)
  .openapi(getAdminCustomersRoute, getAdminCustomersRouteHandler)
  .openapi(postAdminCustomersRoute, postAdminCustomersRouteHandler)
  .openapi(postAdminCustomersExportRoute, postAdminCustomersExportRouteHandler)
  .openapi(getAdminCustomersIdRoute, getAdminCustomersIdRouteHandler)
  .openapi(postAdminCustomersIdRoute, postAdminCustomersIdRouteHandler)
  .openapi(deleteAdminCustomersIdRoute, deleteAdminCustomersIdRouteHandler)
  .openapi(getAdminCustomersIdAddressesRoute, getAdminCustomersIdAddressesRouteHandler)
  .openapi(postAdminCustomersIdAddressesRoute, postAdminCustomersIdAddressesRouteHandler)
  .openapi(
    getAdminCustomersIdAddressesAddressIdRoute,
    getAdminCustomersIdAddressesAddressIdRouteHandler,
  )
  .openapi(
    postAdminCustomersIdAddressesAddressIdRoute,
    postAdminCustomersIdAddressesAddressIdRouteHandler,
  )
  .openapi(
    deleteAdminCustomersIdAddressesAddressIdRoute,
    deleteAdminCustomersIdAddressesAddressIdRouteHandler,
  )
  .openapi(postAdminCustomersIdCustomerGroupsRoute, postAdminCustomersIdCustomerGroupsRouteHandler)
  .openapi(getAdminDraftOrdersRoute, getAdminDraftOrdersRouteHandler)
  .openapi(postAdminDraftOrdersRoute, postAdminDraftOrdersRouteHandler)
  .openapi(getAdminDraftOrdersIdRoute, getAdminDraftOrdersIdRouteHandler)
  .openapi(postAdminDraftOrdersIdRoute, postAdminDraftOrdersIdRouteHandler)
  .openapi(deleteAdminDraftOrdersIdRoute, deleteAdminDraftOrdersIdRouteHandler)
  .openapi(
    postAdminDraftOrdersIdConvertToOrderRoute,
    postAdminDraftOrdersIdConvertToOrderRouteHandler,
  )
  .openapi(postAdminDraftOrdersIdEditRoute, postAdminDraftOrdersIdEditRouteHandler)
  .openapi(deleteAdminDraftOrdersIdEditRoute, deleteAdminDraftOrdersIdEditRouteHandler)
  .openapi(postAdminDraftOrdersIdEditConfirmRoute, postAdminDraftOrdersIdEditConfirmRouteHandler)
  .openapi(postAdminDraftOrdersIdEditItemsRoute, postAdminDraftOrdersIdEditItemsRouteHandler)
  .openapi(
    postAdminDraftOrdersIdEditItemsItemItemIdRoute,
    postAdminDraftOrdersIdEditItemsItemItemIdRouteHandler,
  )
  .openapi(
    postAdminDraftOrdersIdEditItemsActionIdRoute,
    postAdminDraftOrdersIdEditItemsActionIdRouteHandler,
  )
  .openapi(
    deleteAdminDraftOrdersIdEditItemsActionIdRoute,
    deleteAdminDraftOrdersIdEditItemsActionIdRouteHandler,
  )
  .openapi(
    postAdminDraftOrdersIdEditPromotionsRoute,
    postAdminDraftOrdersIdEditPromotionsRouteHandler,
  )
  .openapi(
    deleteAdminDraftOrdersIdEditPromotionsRoute,
    deleteAdminDraftOrdersIdEditPromotionsRouteHandler,
  )
  .openapi(postAdminDraftOrdersIdEditRequestRoute, postAdminDraftOrdersIdEditRequestRouteHandler)
  .openapi(
    postAdminDraftOrdersIdEditShippingMethodsRoute,
    postAdminDraftOrdersIdEditShippingMethodsRouteHandler,
  )
  .openapi(
    postAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute,
    postAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRouteHandler,
  )
  .openapi(
    deleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRoute,
    deleteAdminDraftOrdersIdEditShippingMethodsMethodMethodIdRouteHandler,
  )
  .openapi(
    postAdminDraftOrdersIdEditShippingMethodsActionIdRoute,
    postAdminDraftOrdersIdEditShippingMethodsActionIdRouteHandler,
  )
  .openapi(
    deleteAdminDraftOrdersIdEditShippingMethodsActionIdRoute,
    deleteAdminDraftOrdersIdEditShippingMethodsActionIdRouteHandler,
  )
  .openapi(getAdminExchangesRoute, getAdminExchangesRouteHandler)
  .openapi(postAdminExchangesRoute, postAdminExchangesRouteHandler)
  .openapi(getAdminExchangesIdRoute, getAdminExchangesIdRouteHandler)
  .openapi(postAdminExchangesIdCancelRoute, postAdminExchangesIdCancelRouteHandler)
  .openapi(postAdminExchangesIdInboundItemsRoute, postAdminExchangesIdInboundItemsRouteHandler)
  .openapi(
    postAdminExchangesIdInboundItemsActionIdRoute,
    postAdminExchangesIdInboundItemsActionIdRouteHandler,
  )
  .openapi(
    deleteAdminExchangesIdInboundItemsActionIdRoute,
    deleteAdminExchangesIdInboundItemsActionIdRouteHandler,
  )
  .openapi(
    postAdminExchangesIdInboundShippingMethodRoute,
    postAdminExchangesIdInboundShippingMethodRouteHandler,
  )
  .openapi(
    postAdminExchangesIdInboundShippingMethodActionIdRoute,
    postAdminExchangesIdInboundShippingMethodActionIdRouteHandler,
  )
  .openapi(
    deleteAdminExchangesIdInboundShippingMethodActionIdRoute,
    deleteAdminExchangesIdInboundShippingMethodActionIdRouteHandler,
  )
  .openapi(postAdminExchangesIdOutboundItemsRoute, postAdminExchangesIdOutboundItemsRouteHandler)
  .openapi(
    postAdminExchangesIdOutboundItemsActionIdRoute,
    postAdminExchangesIdOutboundItemsActionIdRouteHandler,
  )
  .openapi(
    deleteAdminExchangesIdOutboundItemsActionIdRoute,
    deleteAdminExchangesIdOutboundItemsActionIdRouteHandler,
  )
  .openapi(
    postAdminExchangesIdOutboundShippingMethodRoute,
    postAdminExchangesIdOutboundShippingMethodRouteHandler,
  )
  .openapi(
    postAdminExchangesIdOutboundShippingMethodActionIdRoute,
    postAdminExchangesIdOutboundShippingMethodActionIdRouteHandler,
  )
  .openapi(
    deleteAdminExchangesIdOutboundShippingMethodActionIdRoute,
    deleteAdminExchangesIdOutboundShippingMethodActionIdRouteHandler,
  )
  .openapi(postAdminExchangesIdRequestRoute, postAdminExchangesIdRequestRouteHandler)
  .openapi(deleteAdminExchangesIdRequestRoute, deleteAdminExchangesIdRequestRouteHandler)
  .openapi(getAdminFeatureFlagsRoute, getAdminFeatureFlagsRouteHandler)
  .openapi(getAdminFulfillmentProvidersRoute, getAdminFulfillmentProvidersRouteHandler)
  .openapi(
    getAdminFulfillmentProvidersIdOptionsRoute,
    getAdminFulfillmentProvidersIdOptionsRouteHandler,
  )
  .openapi(deleteAdminFulfillmentSetsIdRoute, deleteAdminFulfillmentSetsIdRouteHandler)
  .openapi(
    postAdminFulfillmentSetsIdServiceZonesRoute,
    postAdminFulfillmentSetsIdServiceZonesRouteHandler,
  )
  .openapi(
    getAdminFulfillmentSetsIdServiceZonesZoneIdRoute,
    getAdminFulfillmentSetsIdServiceZonesZoneIdRouteHandler,
  )
  .openapi(
    postAdminFulfillmentSetsIdServiceZonesZoneIdRoute,
    postAdminFulfillmentSetsIdServiceZonesZoneIdRouteHandler,
  )
  .openapi(
    deleteAdminFulfillmentSetsIdServiceZonesZoneIdRoute,
    deleteAdminFulfillmentSetsIdServiceZonesZoneIdRouteHandler,
  )
  .openapi(postAdminFulfillmentsRoute, postAdminFulfillmentsRouteHandler)
  .openapi(postAdminFulfillmentsIdCancelRoute, postAdminFulfillmentsIdCancelRouteHandler)
  .openapi(postAdminFulfillmentsIdShipmentRoute, postAdminFulfillmentsIdShipmentRouteHandler)
  .openapi(getAdminGiftCardsRoute, getAdminGiftCardsRouteHandler)
  .openapi(postAdminGiftCardsRoute, postAdminGiftCardsRouteHandler)
  .openapi(getAdminGiftCardsIdRoute, getAdminGiftCardsIdRouteHandler)
  .openapi(postAdminGiftCardsIdRoute, postAdminGiftCardsIdRouteHandler)
  .openapi(getAdminGiftCardsIdOrdersRoute, getAdminGiftCardsIdOrdersRouteHandler)
  .openapi(getAdminIndexDetailsRoute, getAdminIndexDetailsRouteHandler)
  .openapi(postAdminIndexSyncRoute, postAdminIndexSyncRouteHandler)
  .openapi(getAdminInventoryItemsRoute, getAdminInventoryItemsRouteHandler)
  .openapi(postAdminInventoryItemsRoute, postAdminInventoryItemsRouteHandler)
  .openapi(postAdminInventoryItemsExportRoute, postAdminInventoryItemsExportRouteHandler)
  .openapi(
    postAdminInventoryItemsLocationLevelsBatchRoute,
    postAdminInventoryItemsLocationLevelsBatchRouteHandler,
  )
  .openapi(getAdminInventoryItemsIdRoute, getAdminInventoryItemsIdRouteHandler)
  .openapi(postAdminInventoryItemsIdRoute, postAdminInventoryItemsIdRouteHandler)
  .openapi(deleteAdminInventoryItemsIdRoute, deleteAdminInventoryItemsIdRouteHandler)
  .openapi(
    getAdminInventoryItemsIdLocationLevelsRoute,
    getAdminInventoryItemsIdLocationLevelsRouteHandler,
  )
  .openapi(
    postAdminInventoryItemsIdLocationLevelsRoute,
    postAdminInventoryItemsIdLocationLevelsRouteHandler,
  )
  .openapi(
    postAdminInventoryItemsIdLocationLevelsBatchRoute,
    postAdminInventoryItemsIdLocationLevelsBatchRouteHandler,
  )
  .openapi(
    postAdminInventoryItemsIdLocationLevelsLocationIdRoute,
    postAdminInventoryItemsIdLocationLevelsLocationIdRouteHandler,
  )
  .openapi(
    deleteAdminInventoryItemsIdLocationLevelsLocationIdRoute,
    deleteAdminInventoryItemsIdLocationLevelsLocationIdRouteHandler,
  )
  .openapi(getAdminInvitesRoute, getAdminInvitesRouteHandler)
  .openapi(postAdminInvitesRoute, postAdminInvitesRouteHandler)
  .openapi(postAdminInvitesAcceptRoute, postAdminInvitesAcceptRouteHandler)
  .openapi(getAdminInvitesIdRoute, getAdminInvitesIdRouteHandler)
  .openapi(deleteAdminInvitesIdRoute, deleteAdminInvitesIdRouteHandler)
  .openapi(postAdminInvitesIdResendRoute, postAdminInvitesIdResendRouteHandler)
  .openapi(getAdminLayoutsConfigurationsRoute, getAdminLayoutsConfigurationsRouteHandler)
  .openapi(getAdminLayoutsZoneConfigurationRoute, getAdminLayoutsZoneConfigurationRouteHandler)
  .openapi(postAdminLayoutsZoneConfigurationRoute, postAdminLayoutsZoneConfigurationRouteHandler)
  .openapi(
    deleteAdminLayoutsZoneConfigurationRoute,
    deleteAdminLayoutsZoneConfigurationRouteHandler,
  )
  .openapi(getAdminLocalesRoute, getAdminLocalesRouteHandler)
  .openapi(getAdminLocalesCodeRoute, getAdminLocalesCodeRouteHandler)
  .openapi(getAdminModulesRoute, getAdminModulesRouteHandler)
  .openapi(getAdminNotificationsRoute, getAdminNotificationsRouteHandler)
  .openapi(getAdminNotificationsIdRoute, getAdminNotificationsIdRouteHandler)
  .openapi(postAdminOrderChangesIdRoute, postAdminOrderChangesIdRouteHandler)
  .openapi(postAdminOrderEditsRoute, postAdminOrderEditsRouteHandler)
  .openapi(deleteAdminOrderEditsIdRoute, deleteAdminOrderEditsIdRouteHandler)
  .openapi(postAdminOrderEditsIdConfirmRoute, postAdminOrderEditsIdConfirmRouteHandler)
  .openapi(postAdminOrderEditsIdItemsRoute, postAdminOrderEditsIdItemsRouteHandler)
  .openapi(
    postAdminOrderEditsIdItemsItemItemIdRoute,
    postAdminOrderEditsIdItemsItemItemIdRouteHandler,
  )
  .openapi(postAdminOrderEditsIdItemsActionIdRoute, postAdminOrderEditsIdItemsActionIdRouteHandler)
  .openapi(
    deleteAdminOrderEditsIdItemsActionIdRoute,
    deleteAdminOrderEditsIdItemsActionIdRouteHandler,
  )
  .openapi(postAdminOrderEditsIdRequestRoute, postAdminOrderEditsIdRequestRouteHandler)
  .openapi(
    postAdminOrderEditsIdShippingMethodRoute,
    postAdminOrderEditsIdShippingMethodRouteHandler,
  )
  .openapi(
    postAdminOrderEditsIdShippingMethodActionIdRoute,
    postAdminOrderEditsIdShippingMethodActionIdRouteHandler,
  )
  .openapi(
    deleteAdminOrderEditsIdShippingMethodActionIdRoute,
    deleteAdminOrderEditsIdShippingMethodActionIdRouteHandler,
  )
  .openapi(getAdminOrdersRoute, getAdminOrdersRouteHandler)
  .openapi(postAdminOrdersExportRoute, postAdminOrdersExportRouteHandler)
  .openapi(getAdminOrdersIdRoute, getAdminOrdersIdRouteHandler)
  .openapi(postAdminOrdersIdRoute, postAdminOrdersIdRouteHandler)
  .openapi(postAdminOrdersIdArchiveRoute, postAdminOrdersIdArchiveRouteHandler)
  .openapi(postAdminOrdersIdCancelRoute, postAdminOrdersIdCancelRouteHandler)
  .openapi(getAdminOrdersIdChangesRoute, getAdminOrdersIdChangesRouteHandler)
  .openapi(postAdminOrdersIdCompleteRoute, postAdminOrdersIdCompleteRouteHandler)
  .openapi(postAdminOrdersIdCreditLinesRoute, postAdminOrdersIdCreditLinesRouteHandler)
  .openapi(postAdminOrdersIdFulfillmentsRoute, postAdminOrdersIdFulfillmentsRouteHandler)
  .openapi(
    postAdminOrdersIdFulfillmentsFulfillmentIdCancelRoute,
    postAdminOrdersIdFulfillmentsFulfillmentIdCancelRouteHandler,
  )
  .openapi(
    postAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredRoute,
    postAdminOrdersIdFulfillmentsFulfillmentIdMarkAsDeliveredRouteHandler,
  )
  .openapi(
    postAdminOrdersIdFulfillmentsFulfillmentIdShipmentsRoute,
    postAdminOrdersIdFulfillmentsFulfillmentIdShipmentsRouteHandler,
  )
  .openapi(getAdminOrdersIdLineItemsRoute, getAdminOrdersIdLineItemsRouteHandler)
  .openapi(
    postAdminOrdersIdPaymentSessionsAuthorizeRoute,
    postAdminOrdersIdPaymentSessionsAuthorizeRouteHandler,
  )
  .openapi(getAdminOrdersIdPreviewRoute, getAdminOrdersIdPreviewRouteHandler)
  .openapi(getAdminOrdersIdShippingOptionsRoute, getAdminOrdersIdShippingOptionsRouteHandler)
  .openapi(postAdminOrdersIdTransferRoute, postAdminOrdersIdTransferRouteHandler)
  .openapi(postAdminOrdersIdTransferCancelRoute, postAdminOrdersIdTransferCancelRouteHandler)
  .openapi(postAdminOrdersIdTransferGuestRoute, postAdminOrdersIdTransferGuestRouteHandler)
  .openapi(postAdminPaymentCollectionsRoute, postAdminPaymentCollectionsRouteHandler)
  .openapi(deleteAdminPaymentCollectionsIdRoute, deleteAdminPaymentCollectionsIdRouteHandler)
  .openapi(
    postAdminPaymentCollectionsIdMarkAsPaidRoute,
    postAdminPaymentCollectionsIdMarkAsPaidRouteHandler,
  )
  .openapi(
    postAdminPaymentCollectionsIdPaymentSessionsRoute,
    postAdminPaymentCollectionsIdPaymentSessionsRouteHandler,
  )
  .openapi(getAdminPaymentsRoute, getAdminPaymentsRouteHandler)
  .openapi(getAdminPaymentsPaymentProvidersRoute, getAdminPaymentsPaymentProvidersRouteHandler)
  .openapi(getAdminPaymentsIdRoute, getAdminPaymentsIdRouteHandler)
  .openapi(postAdminPaymentsIdCaptureRoute, postAdminPaymentsIdCaptureRouteHandler)
  .openapi(postAdminPaymentsIdRefundRoute, postAdminPaymentsIdRefundRouteHandler)
  .openapi(getAdminPluginsRoute, getAdminPluginsRouteHandler)
  .openapi(getAdminPriceListsRoute, getAdminPriceListsRouteHandler)
  .openapi(postAdminPriceListsRoute, postAdminPriceListsRouteHandler)
  .openapi(getAdminPriceListsIdRoute, getAdminPriceListsIdRouteHandler)
  .openapi(postAdminPriceListsIdRoute, postAdminPriceListsIdRouteHandler)
  .openapi(deleteAdminPriceListsIdRoute, deleteAdminPriceListsIdRouteHandler)
  .openapi(getAdminPriceListsIdPricesRoute, getAdminPriceListsIdPricesRouteHandler)
  .openapi(postAdminPriceListsIdPricesBatchRoute, postAdminPriceListsIdPricesBatchRouteHandler)
  .openapi(postAdminPriceListsIdProductsRoute, postAdminPriceListsIdProductsRouteHandler)
  .openapi(getAdminPricePreferencesRoute, getAdminPricePreferencesRouteHandler)
  .openapi(postAdminPricePreferencesRoute, postAdminPricePreferencesRouteHandler)
  .openapi(getAdminPricePreferencesIdRoute, getAdminPricePreferencesIdRouteHandler)
  .openapi(postAdminPricePreferencesIdRoute, postAdminPricePreferencesIdRouteHandler)
  .openapi(deleteAdminPricePreferencesIdRoute, deleteAdminPricePreferencesIdRouteHandler)
  .openapi(getAdminProductCategoriesRoute, getAdminProductCategoriesRouteHandler)
  .openapi(postAdminProductCategoriesRoute, postAdminProductCategoriesRouteHandler)
  .openapi(getAdminProductCategoriesIdRoute, getAdminProductCategoriesIdRouteHandler)
  .openapi(postAdminProductCategoriesIdRoute, postAdminProductCategoriesIdRouteHandler)
  .openapi(deleteAdminProductCategoriesIdRoute, deleteAdminProductCategoriesIdRouteHandler)
  .openapi(
    postAdminProductCategoriesIdProductsRoute,
    postAdminProductCategoriesIdProductsRouteHandler,
  )
  .openapi(getAdminProductOptionsRoute, getAdminProductOptionsRouteHandler)
  .openapi(postAdminProductOptionsRoute, postAdminProductOptionsRouteHandler)
  .openapi(getAdminProductOptionsIdRoute, getAdminProductOptionsIdRouteHandler)
  .openapi(postAdminProductOptionsIdRoute, postAdminProductOptionsIdRouteHandler)
  .openapi(deleteAdminProductOptionsIdRoute, deleteAdminProductOptionsIdRouteHandler)
  .openapi(getAdminProductOptionsIdValuesRoute, getAdminProductOptionsIdValuesRouteHandler)
  .openapi(
    getAdminProductOptionsIdValuesValueIdRoute,
    getAdminProductOptionsIdValuesValueIdRouteHandler,
  )
  .openapi(
    postAdminProductOptionsIdValuesValueIdRoute,
    postAdminProductOptionsIdValuesValueIdRouteHandler,
  )
  .openapi(
    deleteAdminProductOptionsIdValuesValueIdRoute,
    deleteAdminProductOptionsIdValuesValueIdRouteHandler,
  )
  .openapi(getAdminProductTagsRoute, getAdminProductTagsRouteHandler)
  .openapi(postAdminProductTagsRoute, postAdminProductTagsRouteHandler)
  .openapi(getAdminProductTagsIdRoute, getAdminProductTagsIdRouteHandler)
  .openapi(postAdminProductTagsIdRoute, postAdminProductTagsIdRouteHandler)
  .openapi(deleteAdminProductTagsIdRoute, deleteAdminProductTagsIdRouteHandler)
  .openapi(getAdminProductTypesRoute, getAdminProductTypesRouteHandler)
  .openapi(postAdminProductTypesRoute, postAdminProductTypesRouteHandler)
  .openapi(getAdminProductTypesIdRoute, getAdminProductTypesIdRouteHandler)
  .openapi(postAdminProductTypesIdRoute, postAdminProductTypesIdRouteHandler)
  .openapi(deleteAdminProductTypesIdRoute, deleteAdminProductTypesIdRouteHandler)
  .openapi(getAdminProductVariantsRoute, getAdminProductVariantsRouteHandler)
  .openapi(getAdminProductsRoute, getAdminProductsRouteHandler)
  .openapi(postAdminProductsRoute, postAdminProductsRouteHandler)
  .openapi(postAdminProductsBatchRoute, postAdminProductsBatchRouteHandler)
  .openapi(postAdminProductsExportRoute, postAdminProductsExportRouteHandler)
  .openapi(postAdminProductsImportRoute, postAdminProductsImportRouteHandler)
  .openapi(
    postAdminProductsImportTransactionIdConfirmRoute,
    postAdminProductsImportTransactionIdConfirmRouteHandler,
  )
  .openapi(postAdminProductsImportsRoute, postAdminProductsImportsRouteHandler)
  .openapi(
    postAdminProductsImportsTransactionIdConfirmRoute,
    postAdminProductsImportsTransactionIdConfirmRouteHandler,
  )
  .openapi(getAdminProductsIdRoute, getAdminProductsIdRouteHandler)
  .openapi(postAdminProductsIdRoute, postAdminProductsIdRouteHandler)
  .openapi(deleteAdminProductsIdRoute, deleteAdminProductsIdRouteHandler)
  .openapi(
    postAdminProductsIdImagesImageIdVariantsBatchRoute,
    postAdminProductsIdImagesImageIdVariantsBatchRouteHandler,
  )
  .openapi(getAdminProductsIdOptionsRoute, getAdminProductsIdOptionsRouteHandler)
  .openapi(postAdminProductsIdOptionsBatchRoute, postAdminProductsIdOptionsBatchRouteHandler)
  .openapi(getAdminProductsIdVariantsRoute, getAdminProductsIdVariantsRouteHandler)
  .openapi(postAdminProductsIdVariantsRoute, postAdminProductsIdVariantsRouteHandler)
  .openapi(postAdminProductsIdVariantsBatchRoute, postAdminProductsIdVariantsBatchRouteHandler)
  .openapi(
    postAdminProductsIdVariantsInventoryItemsBatchRoute,
    postAdminProductsIdVariantsInventoryItemsBatchRouteHandler,
  )
  .openapi(
    getAdminProductsIdVariantsVariantIdRoute,
    getAdminProductsIdVariantsVariantIdRouteHandler,
  )
  .openapi(
    postAdminProductsIdVariantsVariantIdRoute,
    postAdminProductsIdVariantsVariantIdRouteHandler,
  )
  .openapi(
    deleteAdminProductsIdVariantsVariantIdRoute,
    deleteAdminProductsIdVariantsVariantIdRouteHandler,
  )
  .openapi(
    postAdminProductsIdVariantsVariantIdImagesBatchRoute,
    postAdminProductsIdVariantsVariantIdImagesBatchRouteHandler,
  )
  .openapi(
    postAdminProductsIdVariantsVariantIdInventoryItemsRoute,
    postAdminProductsIdVariantsVariantIdInventoryItemsRouteHandler,
  )
  .openapi(
    postAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute,
    postAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRouteHandler,
  )
  .openapi(
    deleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRoute,
    deleteAdminProductsIdVariantsVariantIdInventoryItemsInventoryItemIdRouteHandler,
  )
  .openapi(getAdminPromotionsRoute, getAdminPromotionsRouteHandler)
  .openapi(postAdminPromotionsRoute, postAdminPromotionsRouteHandler)
  .openapi(
    getAdminPromotionsRuleAttributeOptionsRuleTypeRoute,
    getAdminPromotionsRuleAttributeOptionsRuleTypeRouteHandler,
  )
  .openapi(
    getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdRoute,
    getAdminPromotionsRuleValueOptionsRuleTypeRuleAttributeIdRouteHandler,
  )
  .openapi(getAdminPromotionsIdRoute, getAdminPromotionsIdRouteHandler)
  .openapi(postAdminPromotionsIdRoute, postAdminPromotionsIdRouteHandler)
  .openapi(deleteAdminPromotionsIdRoute, deleteAdminPromotionsIdRouteHandler)
  .openapi(postAdminPromotionsIdBuyRulesBatchRoute, postAdminPromotionsIdBuyRulesBatchRouteHandler)
  .openapi(postAdminPromotionsIdRulesBatchRoute, postAdminPromotionsIdRulesBatchRouteHandler)
  .openapi(
    postAdminPromotionsIdTargetRulesBatchRoute,
    postAdminPromotionsIdTargetRulesBatchRouteHandler,
  )
  .openapi(getAdminPromotionsIdRuleTypeRoute, getAdminPromotionsIdRuleTypeRouteHandler)
  .openapi(getAdminPropertyLabelsRoute, getAdminPropertyLabelsRouteHandler)
  .openapi(postAdminPropertyLabelsRoute, postAdminPropertyLabelsRouteHandler)
  .openapi(postAdminPropertyLabelsBatchRoute, postAdminPropertyLabelsBatchRouteHandler)
  .openapi(getAdminPropertyLabelsIdRoute, getAdminPropertyLabelsIdRouteHandler)
  .openapi(postAdminPropertyLabelsIdRoute, postAdminPropertyLabelsIdRouteHandler)
  .openapi(deleteAdminPropertyLabelsIdRoute, deleteAdminPropertyLabelsIdRouteHandler)
  .openapi(getAdminRefundReasonsRoute, getAdminRefundReasonsRouteHandler)
  .openapi(postAdminRefundReasonsRoute, postAdminRefundReasonsRouteHandler)
  .openapi(getAdminRefundReasonsIdRoute, getAdminRefundReasonsIdRouteHandler)
  .openapi(postAdminRefundReasonsIdRoute, postAdminRefundReasonsIdRouteHandler)
  .openapi(deleteAdminRefundReasonsIdRoute, deleteAdminRefundReasonsIdRouteHandler)
  .openapi(getAdminRegionsRoute, getAdminRegionsRouteHandler)
  .openapi(postAdminRegionsRoute, postAdminRegionsRouteHandler)
  .openapi(getAdminRegionsIdRoute, getAdminRegionsIdRouteHandler)
  .openapi(postAdminRegionsIdRoute, postAdminRegionsIdRouteHandler)
  .openapi(deleteAdminRegionsIdRoute, deleteAdminRegionsIdRouteHandler)
  .openapi(getAdminReservationsRoute, getAdminReservationsRouteHandler)
  .openapi(postAdminReservationsRoute, postAdminReservationsRouteHandler)
  .openapi(getAdminReservationsIdRoute, getAdminReservationsIdRouteHandler)
  .openapi(postAdminReservationsIdRoute, postAdminReservationsIdRouteHandler)
  .openapi(deleteAdminReservationsIdRoute, deleteAdminReservationsIdRouteHandler)
  .openapi(getAdminReturnReasonsRoute, getAdminReturnReasonsRouteHandler)
  .openapi(postAdminReturnReasonsRoute, postAdminReturnReasonsRouteHandler)
  .openapi(getAdminReturnReasonsIdRoute, getAdminReturnReasonsIdRouteHandler)
  .openapi(postAdminReturnReasonsIdRoute, postAdminReturnReasonsIdRouteHandler)
  .openapi(deleteAdminReturnReasonsIdRoute, deleteAdminReturnReasonsIdRouteHandler)
  .openapi(getAdminReturnsRoute, getAdminReturnsRouteHandler)
  .openapi(postAdminReturnsRoute, postAdminReturnsRouteHandler)
  .openapi(getAdminReturnsIdRoute, getAdminReturnsIdRouteHandler)
  .openapi(postAdminReturnsIdRoute, postAdminReturnsIdRouteHandler)
  .openapi(postAdminReturnsIdCancelRoute, postAdminReturnsIdCancelRouteHandler)
  .openapi(postAdminReturnsIdDismissItemsRoute, postAdminReturnsIdDismissItemsRouteHandler)
  .openapi(
    postAdminReturnsIdDismissItemsActionIdRoute,
    postAdminReturnsIdDismissItemsActionIdRouteHandler,
  )
  .openapi(
    deleteAdminReturnsIdDismissItemsActionIdRoute,
    deleteAdminReturnsIdDismissItemsActionIdRouteHandler,
  )
  .openapi(postAdminReturnsIdReceiveRoute, postAdminReturnsIdReceiveRouteHandler)
  .openapi(deleteAdminReturnsIdReceiveRoute, deleteAdminReturnsIdReceiveRouteHandler)
  .openapi(postAdminReturnsIdReceiveItemsRoute, postAdminReturnsIdReceiveItemsRouteHandler)
  .openapi(
    postAdminReturnsIdReceiveItemsActionIdRoute,
    postAdminReturnsIdReceiveItemsActionIdRouteHandler,
  )
  .openapi(
    deleteAdminReturnsIdReceiveItemsActionIdRoute,
    deleteAdminReturnsIdReceiveItemsActionIdRouteHandler,
  )
  .openapi(postAdminReturnsIdReceiveConfirmRoute, postAdminReturnsIdReceiveConfirmRouteHandler)
  .openapi(postAdminReturnsIdRequestRoute, postAdminReturnsIdRequestRouteHandler)
  .openapi(deleteAdminReturnsIdRequestRoute, deleteAdminReturnsIdRequestRouteHandler)
  .openapi(postAdminReturnsIdRequestItemsRoute, postAdminReturnsIdRequestItemsRouteHandler)
  .openapi(
    postAdminReturnsIdRequestItemsActionIdRoute,
    postAdminReturnsIdRequestItemsActionIdRouteHandler,
  )
  .openapi(
    deleteAdminReturnsIdRequestItemsActionIdRoute,
    deleteAdminReturnsIdRequestItemsActionIdRouteHandler,
  )
  .openapi(postAdminReturnsIdShippingMethodRoute, postAdminReturnsIdShippingMethodRouteHandler)
  .openapi(
    postAdminReturnsIdShippingMethodActionIdRoute,
    postAdminReturnsIdShippingMethodActionIdRouteHandler,
  )
  .openapi(
    deleteAdminReturnsIdShippingMethodActionIdRoute,
    deleteAdminReturnsIdShippingMethodActionIdRouteHandler,
  )
  .openapi(getAdminSalesChannelsRoute, getAdminSalesChannelsRouteHandler)
  .openapi(postAdminSalesChannelsRoute, postAdminSalesChannelsRouteHandler)
  .openapi(getAdminSalesChannelsIdRoute, getAdminSalesChannelsIdRouteHandler)
  .openapi(postAdminSalesChannelsIdRoute, postAdminSalesChannelsIdRouteHandler)
  .openapi(deleteAdminSalesChannelsIdRoute, deleteAdminSalesChannelsIdRouteHandler)
  .openapi(postAdminSalesChannelsIdProductsRoute, postAdminSalesChannelsIdProductsRouteHandler)
  .openapi(getAdminSearchRoute, getAdminSearchRouteHandler)
  .openapi(getAdminSearchIndexesRoute, getAdminSearchIndexesRouteHandler)
  .openapi(deleteAdminSearchIndexesIdRoute, deleteAdminSearchIndexesIdRouteHandler)
  .openapi(postAdminSearchIndexesIdReindexRoute, postAdminSearchIndexesIdReindexRouteHandler)
  .openapi(getAdminShippingOptionTypesRoute, getAdminShippingOptionTypesRouteHandler)
  .openapi(postAdminShippingOptionTypesRoute, postAdminShippingOptionTypesRouteHandler)
  .openapi(getAdminShippingOptionTypesIdRoute, getAdminShippingOptionTypesIdRouteHandler)
  .openapi(postAdminShippingOptionTypesIdRoute, postAdminShippingOptionTypesIdRouteHandler)
  .openapi(deleteAdminShippingOptionTypesIdRoute, deleteAdminShippingOptionTypesIdRouteHandler)
  .openapi(getAdminShippingOptionsRoute, getAdminShippingOptionsRouteHandler)
  .openapi(postAdminShippingOptionsRoute, postAdminShippingOptionsRouteHandler)
  .openapi(getAdminShippingOptionsIdRoute, getAdminShippingOptionsIdRouteHandler)
  .openapi(postAdminShippingOptionsIdRoute, postAdminShippingOptionsIdRouteHandler)
  .openapi(deleteAdminShippingOptionsIdRoute, deleteAdminShippingOptionsIdRouteHandler)
  .openapi(
    postAdminShippingOptionsIdRulesBatchRoute,
    postAdminShippingOptionsIdRulesBatchRouteHandler,
  )
  .openapi(getAdminShippingProfilesRoute, getAdminShippingProfilesRouteHandler)
  .openapi(postAdminShippingProfilesRoute, postAdminShippingProfilesRouteHandler)
  .openapi(getAdminShippingProfilesIdRoute, getAdminShippingProfilesIdRouteHandler)
  .openapi(postAdminShippingProfilesIdRoute, postAdminShippingProfilesIdRouteHandler)
  .openapi(deleteAdminShippingProfilesIdRoute, deleteAdminShippingProfilesIdRouteHandler)
  .openapi(getAdminStockLocationsRoute, getAdminStockLocationsRouteHandler)
  .openapi(postAdminStockLocationsRoute, postAdminStockLocationsRouteHandler)
  .openapi(getAdminStockLocationsIdRoute, getAdminStockLocationsIdRouteHandler)
  .openapi(postAdminStockLocationsIdRoute, postAdminStockLocationsIdRouteHandler)
  .openapi(deleteAdminStockLocationsIdRoute, deleteAdminStockLocationsIdRouteHandler)
  .openapi(
    postAdminStockLocationsIdFulfillmentProvidersRoute,
    postAdminStockLocationsIdFulfillmentProvidersRouteHandler,
  )
  .openapi(
    postAdminStockLocationsIdFulfillmentSetsRoute,
    postAdminStockLocationsIdFulfillmentSetsRouteHandler,
  )
  .openapi(
    postAdminStockLocationsIdSalesChannelsRoute,
    postAdminStockLocationsIdSalesChannelsRouteHandler,
  )
  .openapi(getAdminStoreCreditAccountsRoute, getAdminStoreCreditAccountsRouteHandler)
  .openapi(postAdminStoreCreditAccountsRoute, postAdminStoreCreditAccountsRouteHandler)
  .openapi(getAdminStoreCreditAccountsIdRoute, getAdminStoreCreditAccountsIdRouteHandler)
  .openapi(
    postAdminStoreCreditAccountsIdCreditRoute,
    postAdminStoreCreditAccountsIdCreditRouteHandler,
  )
  .openapi(
    postAdminStoreCreditAccountsIdDebitRoute,
    postAdminStoreCreditAccountsIdDebitRouteHandler,
  )
  .openapi(
    getAdminStoreCreditAccountsIdTransactionsRoute,
    getAdminStoreCreditAccountsIdTransactionsRouteHandler,
  )
  .openapi(getAdminStoresRoute, getAdminStoresRouteHandler)
  .openapi(getAdminStoresIdRoute, getAdminStoresIdRouteHandler)
  .openapi(postAdminStoresIdRoute, postAdminStoresIdRouteHandler)
  .openapi(getAdminTaxProvidersRoute, getAdminTaxProvidersRouteHandler)
  .openapi(getAdminTaxRatesRoute, getAdminTaxRatesRouteHandler)
  .openapi(postAdminTaxRatesRoute, postAdminTaxRatesRouteHandler)
  .openapi(getAdminTaxRatesIdRoute, getAdminTaxRatesIdRouteHandler)
  .openapi(postAdminTaxRatesIdRoute, postAdminTaxRatesIdRouteHandler)
  .openapi(deleteAdminTaxRatesIdRoute, deleteAdminTaxRatesIdRouteHandler)
  .openapi(postAdminTaxRatesIdRulesRoute, postAdminTaxRatesIdRulesRouteHandler)
  .openapi(deleteAdminTaxRatesIdRulesRuleIdRoute, deleteAdminTaxRatesIdRulesRuleIdRouteHandler)
  .openapi(getAdminTaxRegionsRoute, getAdminTaxRegionsRouteHandler)
  .openapi(postAdminTaxRegionsRoute, postAdminTaxRegionsRouteHandler)
  .openapi(getAdminTaxRegionsIdRoute, getAdminTaxRegionsIdRouteHandler)
  .openapi(postAdminTaxRegionsIdRoute, postAdminTaxRegionsIdRouteHandler)
  .openapi(deleteAdminTaxRegionsIdRoute, deleteAdminTaxRegionsIdRouteHandler)
  .openapi(getAdminTranslationsRoute, getAdminTranslationsRouteHandler)
  .openapi(postAdminTranslationsBatchRoute, postAdminTranslationsBatchRouteHandler)
  .openapi(getAdminTranslationsEntitiesRoute, getAdminTranslationsEntitiesRouteHandler)
  .openapi(getAdminTranslationsSettingsRoute, getAdminTranslationsSettingsRouteHandler)
  .openapi(postAdminTranslationsSettingsBatchRoute, postAdminTranslationsSettingsBatchRouteHandler)
  .openapi(getAdminTranslationsStatisticsRoute, getAdminTranslationsStatisticsRouteHandler)
  .openapi(postAdminUploadsRoute, postAdminUploadsRouteHandler)
  .openapi(postAdminUploadsPresignedUrlsRoute, postAdminUploadsPresignedUrlsRouteHandler)
  .openapi(getAdminUploadsIdRoute, getAdminUploadsIdRouteHandler)
  .openapi(deleteAdminUploadsIdRoute, deleteAdminUploadsIdRouteHandler)
  .openapi(getAdminUsersRoute, getAdminUsersRouteHandler)
  .openapi(getAdminUsersMeRoute, getAdminUsersMeRouteHandler)
  .openapi(postAdminUsersMeRoute, postAdminUsersMeRouteHandler)
  .openapi(getAdminUsersIdRoute, getAdminUsersIdRouteHandler)
  .openapi(postAdminUsersIdRoute, postAdminUsersIdRouteHandler)
  .openapi(deleteAdminUsersIdRoute, deleteAdminUsersIdRouteHandler)
  .openapi(getAdminUsersIdAuthProvidersRoute, getAdminUsersIdAuthProvidersRouteHandler)
  .openapi(postAdminUsersIdResetPasswordRoute, postAdminUsersIdResetPasswordRouteHandler)
  .openapi(getAdminUsersIdRolesRoute, getAdminUsersIdRolesRouteHandler)
  .openapi(postAdminUsersIdRolesRoute, postAdminUsersIdRolesRouteHandler)
  .openapi(deleteAdminUsersIdRolesRoute, deleteAdminUsersIdRolesRouteHandler)
  .openapi(deleteAdminUsersIdRolesRoleIdRoute, deleteAdminUsersIdRolesRoleIdRouteHandler)
  .openapi(getAdminViewsEntitiesRoute, getAdminViewsEntitiesRouteHandler)
  .openapi(getAdminViewsEntityColumnsRoute, getAdminViewsEntityColumnsRouteHandler)
  .openapi(getAdminViewsEntityConfigurationsRoute, getAdminViewsEntityConfigurationsRouteHandler)
  .openapi(postAdminViewsEntityConfigurationsRoute, postAdminViewsEntityConfigurationsRouteHandler)
  .openapi(
    getAdminViewsEntityConfigurationsActiveRoute,
    getAdminViewsEntityConfigurationsActiveRouteHandler,
  )
  .openapi(
    postAdminViewsEntityConfigurationsActiveRoute,
    postAdminViewsEntityConfigurationsActiveRouteHandler,
  )
  .openapi(
    getAdminViewsEntityConfigurationsIdRoute,
    getAdminViewsEntityConfigurationsIdRouteHandler,
  )
  .openapi(
    postAdminViewsEntityConfigurationsIdRoute,
    postAdminViewsEntityConfigurationsIdRouteHandler,
  )
  .openapi(
    deleteAdminViewsEntityConfigurationsIdRoute,
    deleteAdminViewsEntityConfigurationsIdRouteHandler,
  )
  .openapi(getAdminWorkflowsExecutionsRoute, getAdminWorkflowsExecutionsRouteHandler)
  .openapi(getAdminWorkflowsExecutionsIdRoute, getAdminWorkflowsExecutionsIdRouteHandler)
  .openapi(
    postAdminWorkflowsExecutionsWorkflowIdRunRoute,
    postAdminWorkflowsExecutionsWorkflowIdRunRouteHandler,
  )
  .openapi(
    postAdminWorkflowsExecutionsWorkflowIdStepsFailureRoute,
    postAdminWorkflowsExecutionsWorkflowIdStepsFailureRouteHandler,
  )
  .openapi(
    postAdminWorkflowsExecutionsWorkflowIdStepsSuccessRoute,
    postAdminWorkflowsExecutionsWorkflowIdStepsSuccessRouteHandler,
  )
  .openapi(
    getAdminWorkflowsExecutionsWorkflowIdSubscribeRoute,
    getAdminWorkflowsExecutionsWorkflowIdSubscribeRouteHandler,
  )
  .openapi(
    getAdminWorkflowsExecutionsWorkflowIdTransactionIdRoute,
    getAdminWorkflowsExecutionsWorkflowIdTransactionIdRouteHandler,
  )
  .openapi(
    getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeRoute,
    getAdminWorkflowsExecutionsWorkflowIdTransactionIdSubscribeRouteHandler,
  )
  .openapi(postAuthMfaChallengesIdVerifyRoute, postAuthMfaChallengesIdVerifyRouteHandler)
  .openapi(getAuthMfaFactorsRoute, getAuthMfaFactorsRouteHandler)
  .openapi(postAuthMfaFactorsRoute, postAuthMfaFactorsRouteHandler)
  .openapi(deleteAuthMfaFactorsIdRoute, deleteAuthMfaFactorsIdRouteHandler)
  .openapi(postAuthMfaFactorsIdVerifyRoute, postAuthMfaFactorsIdVerifyRouteHandler)
  .openapi(postAuthMfaRecoveryCodesRoute, postAuthMfaRecoveryCodesRouteHandler)
  .openapi(postAuthSessionRoute, postAuthSessionRouteHandler)
  .openapi(deleteAuthSessionRoute, deleteAuthSessionRouteHandler)
  .openapi(postAuthTokenRefreshRoute, postAuthTokenRefreshRouteHandler)
  .openapi(getAuthUserProvidersRoute, getAuthUserProvidersRouteHandler)
  .openapi(postAuthUserAuthProviderRoute, postAuthUserAuthProviderRouteHandler)
  .openapi(postAuthUserAuthProviderCallbackRoute, postAuthUserAuthProviderCallbackRouteHandler)
  .openapi(postAuthUserAuthProviderRegisterRoute, postAuthUserAuthProviderRegisterRouteHandler)
  .openapi(
    postAuthUserAuthProviderResetPasswordRoute,
    postAuthUserAuthProviderResetPasswordRouteHandler,
  )
  .openapi(postAuthUserAuthProviderUpdateRoute, postAuthUserAuthProviderUpdateRouteHandler)
  .openapi(postAuthAuthProviderUserRoute, postAuthAuthProviderUserRouteHandler)

export default app
