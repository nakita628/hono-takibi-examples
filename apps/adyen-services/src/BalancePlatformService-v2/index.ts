import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
  deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute,
  deleteBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
  deleteBalanceAccountsIdTransferLimitsTransferLimitIdRoute,
  deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
  deleteBalancePlatformsIdTransferLimitsTransferLimitIdRoute,
  deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  deleteRegisteredDevicesIdRoute,
  deleteScaAssociationsRoute,
  deleteScaDevicesDeviceIdRoute,
  deleteTransactionRulesTransactionRuleIdRoute,
  getAccountHoldersIdBalanceAccountsRoute,
  getAccountHoldersIdRoute,
  getAccountHoldersIdTaxFormsRoute,
  getAccountHoldersIdTaxFormSummaryRoute,
  getAccountHoldersIdTransactionRulesRoute,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRoute,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesRoute,
  getBalanceAccountsBalanceAccountIdRecurringTopUpsRoute,
  getBalanceAccountsBalanceAccountIdSweepsRoute,
  getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsRoute,
  getBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
  getBalanceAccountsIdPaymentInstrumentsRoute,
  getBalanceAccountsIdRoute,
  getBalanceAccountsIdTransactionRulesRoute,
  getBalanceAccountsIdTransferLimitsCurrentRoute,
  getBalanceAccountsIdTransferLimitsRoute,
  getBalanceAccountsIdTransferLimitsTransferLimitIdRoute,
  getBalancePlatformsBalancePlatformIdPayoutSchedulesIdRoute,
  getBalancePlatformsBalancePlatformIdPayoutSchedulesRoute,
  getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute,
  getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
  getBalancePlatformsIdAccountHoldersRoute,
  getBalancePlatformsIdRoute,
  getBalancePlatformsIdTransactionRulesRoute,
  getBalancePlatformsIdTransferLimitsRoute,
  getBalancePlatformsIdTransferLimitsTransferLimitIdRoute,
  getCardordersIdItemsRoute,
  getCardordersRoute,
  getGrantAccountsIdRoute,
  getGrantOffersGrantOfferIdRoute,
  getGrantOffersRoute,
  getMandatesMandateIdRoute,
  getMandatesRoute,
  getNetworkTokensNetworkTokenIdRoute,
  getPaymentInstrumentGroupsIdRoute,
  getPaymentInstrumentGroupsIdTransactionRulesRoute,
  getPaymentInstrumentsIdNetworkTokenActivationDataRoute,
  getPaymentInstrumentsIdNetworkTokensRoute,
  getPaymentInstrumentsIdRevealRoute,
  getPaymentInstrumentsIdRoute,
  getPaymentInstrumentsIdTransactionRulesRoute,
  getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  getPublicKeyRoute,
  getRegisteredDevicesRoute,
  getScaAssociationsRoute,
  getTransactionRulesTransactionRuleIdRoute,
  patchAccountHoldersIdRoute,
  patchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
  patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute,
  patchBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
  patchBalanceAccountsIdRoute,
  patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
  patchMandatesMandateIdRoute,
  patchNetworkTokensNetworkTokenIdRoute,
  patchPaymentInstrumentsIdRoute,
  patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  patchRegisteredDevicesDeviceIdAssociationsRoute,
  patchRegisteredDevicesIdRoute,
  patchScaAssociationsRoute,
  patchScaDevicesDeviceIdRoute,
  patchTransactionRulesTransactionRuleIdRoute,
  postAccountHoldersRoute,
  postBalanceAccountsBalanceAccountIdPayoutSchedulesRoute,
  postBalanceAccountsBalanceAccountIdRecurringTopUpsRoute,
  postBalanceAccountsBalanceAccountIdSweepsRoute,
  postBalanceAccountsIdTransferLimitsApproveRoute,
  postBalanceAccountsIdTransferLimitsRoute,
  postBalanceAccountsRoute,
  postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute,
  postBalancePlatformsIdTransferLimitsRoute,
  postMandatesMandateIdCancelRoute,
  postPaymentInstrumentGroupsRoute,
  postPaymentInstrumentsIdNetworkTokenActivationDataRoute,
  postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
  postPaymentInstrumentsRevealRoute,
  postPaymentInstrumentsRoute,
  postPinsChangeRoute,
  postPinsRevealRoute,
  postRegisteredDevicesDeviceIdAssociationsRoute,
  postRegisteredDevicesRoute,
  postScaDevicesDeviceIdScaAssociationsRoute,
  postScaDevicesRoute,
  postTransactionRulesRoute,
  postTransferRoutesCalculateRoute,
  postValidateBankAccountIdentificationRoute,
} from './routes'
import {
  deleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRouteHandler,
  deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRouteHandler,
  deleteBalanceAccountsBalanceAccountIdSweepsSweepIdRouteHandler,
  deleteBalanceAccountsIdTransferLimitsTransferLimitIdRouteHandler,
  deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRouteHandler,
  deleteBalancePlatformsIdTransferLimitsTransferLimitIdRouteHandler,
  deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRouteHandler,
  deleteRegisteredDevicesIdRouteHandler,
  deleteScaAssociationsRouteHandler,
  deleteScaDevicesDeviceIdRouteHandler,
  deleteTransactionRulesTransactionRuleIdRouteHandler,
  getAccountHoldersIdBalanceAccountsRouteHandler,
  getAccountHoldersIdRouteHandler,
  getAccountHoldersIdTaxFormsRouteHandler,
  getAccountHoldersIdTaxFormSummaryRouteHandler,
  getAccountHoldersIdTransactionRulesRouteHandler,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRouteHandler,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesIdRouteHandler,
  getBalanceAccountsBalanceAccountIdPayoutSchedulesRouteHandler,
  getBalanceAccountsBalanceAccountIdRecurringTopUpsRouteHandler,
  getBalanceAccountsBalanceAccountIdSweepsRouteHandler,
  getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsRouteHandler,
  getBalanceAccountsBalanceAccountIdSweepsSweepIdRouteHandler,
  getBalanceAccountsIdPaymentInstrumentsRouteHandler,
  getBalanceAccountsIdRouteHandler,
  getBalanceAccountsIdTransactionRulesRouteHandler,
  getBalanceAccountsIdTransferLimitsCurrentRouteHandler,
  getBalanceAccountsIdTransferLimitsRouteHandler,
  getBalanceAccountsIdTransferLimitsTransferLimitIdRouteHandler,
  getBalancePlatformsBalancePlatformIdPayoutSchedulesIdRouteHandler,
  getBalancePlatformsBalancePlatformIdPayoutSchedulesRouteHandler,
  getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRouteHandler,
  getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRouteHandler,
  getBalancePlatformsIdAccountHoldersRouteHandler,
  getBalancePlatformsIdRouteHandler,
  getBalancePlatformsIdTransactionRulesRouteHandler,
  getBalancePlatformsIdTransferLimitsRouteHandler,
  getBalancePlatformsIdTransferLimitsTransferLimitIdRouteHandler,
  getCardordersIdItemsRouteHandler,
  getCardordersRouteHandler,
  getGrantAccountsIdRouteHandler,
  getGrantOffersGrantOfferIdRouteHandler,
  getGrantOffersRouteHandler,
  getMandatesMandateIdRouteHandler,
  getMandatesRouteHandler,
  getNetworkTokensNetworkTokenIdRouteHandler,
  getPaymentInstrumentGroupsIdRouteHandler,
  getPaymentInstrumentGroupsIdTransactionRulesRouteHandler,
  getPaymentInstrumentsIdNetworkTokenActivationDataRouteHandler,
  getPaymentInstrumentsIdNetworkTokensRouteHandler,
  getPaymentInstrumentsIdRevealRouteHandler,
  getPaymentInstrumentsIdRouteHandler,
  getPaymentInstrumentsIdTransactionRulesRouteHandler,
  getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRouteHandler,
  getPublicKeyRouteHandler,
  getRegisteredDevicesRouteHandler,
  getScaAssociationsRouteHandler,
  getTransactionRulesTransactionRuleIdRouteHandler,
  patchAccountHoldersIdRouteHandler,
  patchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRouteHandler,
  patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRouteHandler,
  patchBalanceAccountsBalanceAccountIdSweepsSweepIdRouteHandler,
  patchBalanceAccountsIdRouteHandler,
  patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRouteHandler,
  patchMandatesMandateIdRouteHandler,
  patchNetworkTokensNetworkTokenIdRouteHandler,
  patchPaymentInstrumentsIdRouteHandler,
  patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRouteHandler,
  patchRegisteredDevicesDeviceIdAssociationsRouteHandler,
  patchRegisteredDevicesIdRouteHandler,
  patchScaAssociationsRouteHandler,
  patchScaDevicesDeviceIdRouteHandler,
  patchTransactionRulesTransactionRuleIdRouteHandler,
  postAccountHoldersRouteHandler,
  postBalanceAccountsBalanceAccountIdPayoutSchedulesRouteHandler,
  postBalanceAccountsBalanceAccountIdRecurringTopUpsRouteHandler,
  postBalanceAccountsBalanceAccountIdSweepsRouteHandler,
  postBalanceAccountsIdTransferLimitsApproveRouteHandler,
  postBalanceAccountsIdTransferLimitsRouteHandler,
  postBalanceAccountsRouteHandler,
  postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRouteHandler,
  postBalancePlatformsIdTransferLimitsRouteHandler,
  postMandatesMandateIdCancelRouteHandler,
  postPaymentInstrumentGroupsRouteHandler,
  postPaymentInstrumentsIdNetworkTokenActivationDataRouteHandler,
  postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRouteHandler,
  postPaymentInstrumentsRevealRouteHandler,
  postPaymentInstrumentsRouteHandler,
  postPinsChangeRouteHandler,
  postPinsRevealRouteHandler,
  postRegisteredDevicesDeviceIdAssociationsRouteHandler,
  postRegisteredDevicesRouteHandler,
  postScaDevicesDeviceIdScaAssociationsRouteHandler,
  postScaDevicesRouteHandler,
  postTransactionRulesRouteHandler,
  postTransferRoutesCalculateRouteHandler,
  postValidateBankAccountIdentificationRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(postAccountHoldersRoute, postAccountHoldersRouteHandler)
  .openapi(getAccountHoldersIdRoute, getAccountHoldersIdRouteHandler)
  .openapi(patchAccountHoldersIdRoute, patchAccountHoldersIdRouteHandler)
  .openapi(getAccountHoldersIdBalanceAccountsRoute, getAccountHoldersIdBalanceAccountsRouteHandler)
  .openapi(getAccountHoldersIdTaxFormsRoute, getAccountHoldersIdTaxFormsRouteHandler)
  .openapi(
    getAccountHoldersIdTransactionRulesRoute,
    getAccountHoldersIdTransactionRulesRouteHandler,
  )
  .openapi(postBalanceAccountsRoute, postBalanceAccountsRouteHandler)
  .openapi(
    getBalanceAccountsBalanceAccountIdSweepsRoute,
    getBalanceAccountsBalanceAccountIdSweepsRouteHandler,
  )
  .openapi(
    postBalanceAccountsBalanceAccountIdSweepsRoute,
    postBalanceAccountsBalanceAccountIdSweepsRouteHandler,
  )
  .openapi(
    getBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
    getBalanceAccountsBalanceAccountIdSweepsSweepIdRouteHandler,
  )
  .openapi(
    deleteBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
    deleteBalanceAccountsBalanceAccountIdSweepsSweepIdRouteHandler,
  )
  .openapi(
    patchBalanceAccountsBalanceAccountIdSweepsSweepIdRoute,
    patchBalanceAccountsBalanceAccountIdSweepsSweepIdRouteHandler,
  )
  .openapi(getBalanceAccountsIdRoute, getBalanceAccountsIdRouteHandler)
  .openapi(patchBalanceAccountsIdRoute, patchBalanceAccountsIdRouteHandler)
  .openapi(
    getBalanceAccountsIdPaymentInstrumentsRoute,
    getBalanceAccountsIdPaymentInstrumentsRouteHandler,
  )
  .openapi(
    getBalanceAccountsIdTransactionRulesRoute,
    getBalanceAccountsIdTransactionRulesRouteHandler,
  )
  .openapi(getBalancePlatformsIdRoute, getBalancePlatformsIdRouteHandler)
  .openapi(
    getBalancePlatformsIdAccountHoldersRoute,
    getBalancePlatformsIdAccountHoldersRouteHandler,
  )
  .openapi(
    getBalancePlatformsIdTransactionRulesRoute,
    getBalancePlatformsIdTransactionRulesRouteHandler,
  )
  .openapi(getCardordersRoute, getCardordersRouteHandler)
  .openapi(getCardordersIdItemsRoute, getCardordersIdItemsRouteHandler)
  .openapi(getGrantAccountsIdRoute, getGrantAccountsIdRouteHandler)
  .openapi(getGrantOffersRoute, getGrantOffersRouteHandler)
  .openapi(getGrantOffersGrantOfferIdRoute, getGrantOffersGrantOfferIdRouteHandler)
  .openapi(getNetworkTokensNetworkTokenIdRoute, getNetworkTokensNetworkTokenIdRouteHandler)
  .openapi(patchNetworkTokensNetworkTokenIdRoute, patchNetworkTokensNetworkTokenIdRouteHandler)
  .openapi(postPaymentInstrumentGroupsRoute, postPaymentInstrumentGroupsRouteHandler)
  .openapi(getPaymentInstrumentGroupsIdRoute, getPaymentInstrumentGroupsIdRouteHandler)
  .openapi(
    getPaymentInstrumentGroupsIdTransactionRulesRoute,
    getPaymentInstrumentGroupsIdTransactionRulesRouteHandler,
  )
  .openapi(postPaymentInstrumentsRoute, postPaymentInstrumentsRouteHandler)
  .openapi(postPaymentInstrumentsRevealRoute, postPaymentInstrumentsRevealRouteHandler)
  .openapi(getPaymentInstrumentsIdRoute, getPaymentInstrumentsIdRouteHandler)
  .openapi(patchPaymentInstrumentsIdRoute, patchPaymentInstrumentsIdRouteHandler)
  .openapi(
    getPaymentInstrumentsIdNetworkTokenActivationDataRoute,
    getPaymentInstrumentsIdNetworkTokenActivationDataRouteHandler,
  )
  .openapi(
    postPaymentInstrumentsIdNetworkTokenActivationDataRoute,
    postPaymentInstrumentsIdNetworkTokenActivationDataRouteHandler,
  )
  .openapi(
    getPaymentInstrumentsIdNetworkTokensRoute,
    getPaymentInstrumentsIdNetworkTokensRouteHandler,
  )
  .openapi(getPaymentInstrumentsIdRevealRoute, getPaymentInstrumentsIdRevealRouteHandler)
  .openapi(
    getPaymentInstrumentsIdTransactionRulesRoute,
    getPaymentInstrumentsIdTransactionRulesRouteHandler,
  )
  .openapi(postPinsChangeRoute, postPinsChangeRouteHandler)
  .openapi(postPinsRevealRoute, postPinsRevealRouteHandler)
  .openapi(getPublicKeyRoute, getPublicKeyRouteHandler)
  .openapi(getRegisteredDevicesRoute, getRegisteredDevicesRouteHandler)
  .openapi(postRegisteredDevicesRoute, postRegisteredDevicesRouteHandler)
  .openapi(
    postRegisteredDevicesDeviceIdAssociationsRoute,
    postRegisteredDevicesDeviceIdAssociationsRouteHandler,
  )
  .openapi(
    patchRegisteredDevicesDeviceIdAssociationsRoute,
    patchRegisteredDevicesDeviceIdAssociationsRouteHandler,
  )
  .openapi(deleteRegisteredDevicesIdRoute, deleteRegisteredDevicesIdRouteHandler)
  .openapi(patchRegisteredDevicesIdRoute, patchRegisteredDevicesIdRouteHandler)
  .openapi(postTransactionRulesRoute, postTransactionRulesRouteHandler)
  .openapi(
    getTransactionRulesTransactionRuleIdRoute,
    getTransactionRulesTransactionRuleIdRouteHandler,
  )
  .openapi(
    deleteTransactionRulesTransactionRuleIdRoute,
    deleteTransactionRulesTransactionRuleIdRouteHandler,
  )
  .openapi(
    patchTransactionRulesTransactionRuleIdRoute,
    patchTransactionRulesTransactionRuleIdRouteHandler,
  )
  .openapi(postTransferRoutesCalculateRoute, postTransferRoutesCalculateRouteHandler)
  .openapi(
    postValidateBankAccountIdentificationRoute,
    postValidateBankAccountIdentificationRouteHandler,
  )
  .openapi(getAccountHoldersIdTaxFormSummaryRoute, getAccountHoldersIdTaxFormSummaryRouteHandler)
  .openapi(
    getBalanceAccountsBalanceAccountIdPayoutSchedulesRoute,
    getBalanceAccountsBalanceAccountIdPayoutSchedulesRouteHandler,
  )
  .openapi(
    postBalanceAccountsBalanceAccountIdPayoutSchedulesRoute,
    postBalanceAccountsBalanceAccountIdPayoutSchedulesRouteHandler,
  )
  .openapi(
    getBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
    getBalanceAccountsBalanceAccountIdPayoutSchedulesIdRouteHandler,
  )
  .openapi(
    deleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
    deleteBalanceAccountsBalanceAccountIdPayoutSchedulesIdRouteHandler,
  )
  .openapi(
    patchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRoute,
    patchBalanceAccountsBalanceAccountIdPayoutSchedulesIdRouteHandler,
  )
  .openapi(
    getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRoute,
    getBalanceAccountsBalanceAccountIdPayoutSchedulesIdExecutionsRouteHandler,
  )
  .openapi(
    getBalanceAccountsBalanceAccountIdRecurringTopUpsRoute,
    getBalanceAccountsBalanceAccountIdRecurringTopUpsRouteHandler,
  )
  .openapi(
    postBalanceAccountsBalanceAccountIdRecurringTopUpsRoute,
    postBalanceAccountsBalanceAccountIdRecurringTopUpsRouteHandler,
  )
  .openapi(
    deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute,
    deleteBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRouteHandler,
  )
  .openapi(
    patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRoute,
    patchBalanceAccountsBalanceAccountIdRecurringTopUpsTopUpIdRouteHandler,
  )
  .openapi(
    getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsRoute,
    getBalanceAccountsBalanceAccountIdSweepsSweepIdExecutionsRouteHandler,
  )
  .openapi(getBalanceAccountsIdTransferLimitsRoute, getBalanceAccountsIdTransferLimitsRouteHandler)
  .openapi(
    postBalanceAccountsIdTransferLimitsRoute,
    postBalanceAccountsIdTransferLimitsRouteHandler,
  )
  .openapi(
    postBalanceAccountsIdTransferLimitsApproveRoute,
    postBalanceAccountsIdTransferLimitsApproveRouteHandler,
  )
  .openapi(
    getBalanceAccountsIdTransferLimitsCurrentRoute,
    getBalanceAccountsIdTransferLimitsCurrentRouteHandler,
  )
  .openapi(
    getBalanceAccountsIdTransferLimitsTransferLimitIdRoute,
    getBalanceAccountsIdTransferLimitsTransferLimitIdRouteHandler,
  )
  .openapi(
    deleteBalanceAccountsIdTransferLimitsTransferLimitIdRoute,
    deleteBalanceAccountsIdTransferLimitsTransferLimitIdRouteHandler,
  )
  .openapi(
    getBalancePlatformsBalancePlatformIdPayoutSchedulesRoute,
    getBalancePlatformsBalancePlatformIdPayoutSchedulesRouteHandler,
  )
  .openapi(
    getBalancePlatformsBalancePlatformIdPayoutSchedulesIdRoute,
    getBalancePlatformsBalancePlatformIdPayoutSchedulesIdRouteHandler,
  )
  .openapi(
    getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute,
    getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRouteHandler,
  )
  .openapi(
    postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRoute,
    postBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsRouteHandler,
  )
  .openapi(
    getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
    getBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRouteHandler,
  )
  .openapi(
    deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
    deleteBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRouteHandler,
  )
  .openapi(
    patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRoute,
    patchBalancePlatformsBalancePlatformIdWebhooksWebhookIdSettingsSettingIdRouteHandler,
  )
  .openapi(
    getBalancePlatformsIdTransferLimitsRoute,
    getBalancePlatformsIdTransferLimitsRouteHandler,
  )
  .openapi(
    postBalancePlatformsIdTransferLimitsRoute,
    postBalancePlatformsIdTransferLimitsRouteHandler,
  )
  .openapi(
    getBalancePlatformsIdTransferLimitsTransferLimitIdRoute,
    getBalancePlatformsIdTransferLimitsTransferLimitIdRouteHandler,
  )
  .openapi(
    deleteBalancePlatformsIdTransferLimitsTransferLimitIdRoute,
    deleteBalancePlatformsIdTransferLimitsTransferLimitIdRouteHandler,
  )
  .openapi(getMandatesRoute, getMandatesRouteHandler)
  .openapi(getMandatesMandateIdRoute, getMandatesMandateIdRouteHandler)
  .openapi(patchMandatesMandateIdRoute, patchMandatesMandateIdRouteHandler)
  .openapi(postMandatesMandateIdCancelRoute, postMandatesMandateIdCancelRouteHandler)
  .openapi(
    getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
    getPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRouteHandler,
  )
  .openapi(
    postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
    postPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRouteHandler,
  )
  .openapi(
    deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
    deletePaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRouteHandler,
  )
  .openapi(
    patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRoute,
    patchPaymentInstrumentsPaymentInstrumentIdAuthorisedCardUsersRouteHandler,
  )
  .openapi(getScaAssociationsRoute, getScaAssociationsRouteHandler)
  .openapi(deleteScaAssociationsRoute, deleteScaAssociationsRouteHandler)
  .openapi(patchScaAssociationsRoute, patchScaAssociationsRouteHandler)
  .openapi(postScaDevicesRoute, postScaDevicesRouteHandler)
  .openapi(deleteScaDevicesDeviceIdRoute, deleteScaDevicesDeviceIdRouteHandler)
  .openapi(patchScaDevicesDeviceIdRoute, patchScaDevicesDeviceIdRouteHandler)
  .openapi(
    postScaDevicesDeviceIdScaAssociationsRoute,
    postScaDevicesDeviceIdScaAssociationsRouteHandler,
  )

export default app
