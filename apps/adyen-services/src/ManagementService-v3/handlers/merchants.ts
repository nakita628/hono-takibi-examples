import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
  deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute,
  deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute,
  deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRoute,
  deleteMerchantsMerchantIdTerminalThemesIdAssetsRoute,
  deleteMerchantsMerchantIdTerminalThemesIdRoute,
  deleteMerchantsMerchantIdWebhooksWebhookIdRoute,
  getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
  getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRoute,
  getMerchantsMerchantIdApiCredentialsApiCredentialIdRoute,
  getMerchantsMerchantIdApiCredentialsRoute,
  getMerchantsMerchantIdBillingEntitiesRoute,
  getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRoute,
  getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRoute,
  getMerchantsMerchantIdPaymentMethodSettingsRoute,
  getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute,
  getMerchantsMerchantIdPayoutSettingsRoute,
  getMerchantsMerchantIdRoute,
  getMerchantsMerchantIdShippingLocationsRoute,
  getMerchantsMerchantIdSplitConfigurationsRoute,
  getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute,
  getMerchantsMerchantIdStoresReferenceTerminalLogosRoute,
  getMerchantsMerchantIdStoresReferenceTerminalSettingsRoute,
  getMerchantsMerchantIdStoresRoute,
  getMerchantsMerchantIdStoresStoreIdRoute,
  getMerchantsMerchantIdTerminalLogosRoute,
  getMerchantsMerchantIdTerminalModelsRoute,
  getMerchantsMerchantIdTerminalOrdersOrderIdRoute,
  getMerchantsMerchantIdTerminalOrdersRoute,
  getMerchantsMerchantIdTerminalProductsRoute,
  getMerchantsMerchantIdTerminalSettingsRoute,
  getMerchantsMerchantIdTerminalThemesIdRoute,
  getMerchantsMerchantIdTerminalThemesRoute,
  getMerchantsMerchantIdUsersRoute,
  getMerchantsMerchantIdUsersUserIdRoute,
  getMerchantsMerchantIdWebhooksRoute,
  getMerchantsMerchantIdWebhooksWebhookIdRoute,
  getMerchantsRoute,
  patchMerchantsMerchantIdApiCredentialsApiCredentialIdRoute,
  patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRoute,
  patchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute,
  patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute,
  patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRoute,
  patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicIdRoute,
  patchMerchantsMerchantIdStoresReferenceTerminalLogosRoute,
  patchMerchantsMerchantIdStoresReferenceTerminalSettingsRoute,
  patchMerchantsMerchantIdStoresStoreIdRoute,
  patchMerchantsMerchantIdTerminalLogosRoute,
  patchMerchantsMerchantIdTerminalOrdersOrderIdRoute,
  patchMerchantsMerchantIdTerminalSettingsRoute,
  patchMerchantsMerchantIdTerminalThemesIdRoute,
  patchMerchantsMerchantIdUsersUserIdRoute,
  patchMerchantsMerchantIdWebhooksWebhookIdRoute,
  postMerchantsMerchantIdActivateRoute,
  postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRoute,
  postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRoute,
  postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyRoute,
  postMerchantsMerchantIdApiCredentialsRoute,
  postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRoute,
  postMerchantsMerchantIdPaymentMethodSettingsRoute,
  postMerchantsMerchantIdPayoutSettingsRoute,
  postMerchantsMerchantIdShippingLocationsRoute,
  postMerchantsMerchantIdSplitConfigurationsRoute,
  postMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute,
  postMerchantsMerchantIdStoresRoute,
  postMerchantsMerchantIdTerminalOrdersOrderIdCancelRoute,
  postMerchantsMerchantIdTerminalOrdersRoute,
  postMerchantsMerchantIdTerminalThemesIdApplyRoute,
  postMerchantsMerchantIdTerminalThemesIdAssetsReplaceRoute,
  postMerchantsMerchantIdTerminalThemesIdAssetsRoute,
  postMerchantsMerchantIdTerminalThemesRoute,
  postMerchantsMerchantIdTerminalThemesUnapplyRoute,
  postMerchantsMerchantIdUsersRoute,
  postMerchantsMerchantIdWebhooksRoute,
  postMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRoute,
  postMerchantsMerchantIdWebhooksWebhookIdTestRoute,
  postMerchantsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const merchantsHandler = app
  .openapi(getMerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdActivateRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdApiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdApiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdApiCredentialsApiCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdApiCredentialsApiCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMerchantsMerchantIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdApiCredentialsApiCredentialIdGenerateClientKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdBillingEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdPaymentMethodSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdPaymentMethodSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    postMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdAddApplePayDomainsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    getMerchantsMerchantIdPaymentMethodSettingsPaymentMethodIdGetApplePayDomainsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMerchantsMerchantIdPayoutSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdPayoutSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdPayoutSettingsPayoutSettingsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdShippingLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdShippingLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdSplitConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdSplitConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    patchMerchantsMerchantIdSplitConfigurationsSplitConfigurationIdRulesRuleIdSplitLogicSplitLogicIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getMerchantsMerchantIdStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdStoresRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdStoresReferenceTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdStoresReferenceTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdStoresReferenceTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdStoresReferenceTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdStoresStoreIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdTerminalOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantsMerchantIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdWebhooksWebhookIdGenerateHmacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdWebhooksWebhookIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalThemesUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getMerchantsMerchantIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantsMerchantIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchMerchantsMerchantIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalThemesIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalThemesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteMerchantsMerchantIdTerminalThemesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postMerchantsMerchantIdTerminalThemesIdAssetsReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
