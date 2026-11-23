import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
  deleteCompaniesCompanyIdCampaignManagementDonationCampaignIdRoute,
  deleteCompaniesCompanyIdTerminalThemesIdAssetsRoute,
  deleteCompaniesCompanyIdTerminalThemesIdRoute,
  deleteCompaniesCompanyIdWebhooksWebhookIdRoute,
  getCompaniesCompanyIdAndroidAppsIdRoute,
  getCompaniesCompanyIdAndroidAppsRoute,
  getCompaniesCompanyIdAndroidCertificatesRoute,
  getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
  getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRoute,
  getCompaniesCompanyIdApiCredentialsApiCredentialIdRoute,
  getCompaniesCompanyIdApiCredentialsRoute,
  getCompaniesCompanyIdBillingEntitiesRoute,
  getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdRoute,
  getCompaniesCompanyIdClientCertificatesRoute,
  getCompaniesCompanyIdMerchantsRoute,
  getCompaniesCompanyIdRoute,
  getCompaniesCompanyIdShippingLocationsRoute,
  getCompaniesCompanyIdTerminalActionsActionIdRoute,
  getCompaniesCompanyIdTerminalActionsRoute,
  getCompaniesCompanyIdTerminalLogosRoute,
  getCompaniesCompanyIdTerminalModelsRoute,
  getCompaniesCompanyIdTerminalOrdersOrderIdRoute,
  getCompaniesCompanyIdTerminalOrdersRoute,
  getCompaniesCompanyIdTerminalProductsRoute,
  getCompaniesCompanyIdTerminalSettingsRoute,
  getCompaniesCompanyIdTerminalThemesIdRoute,
  getCompaniesCompanyIdTerminalThemesRoute,
  getCompaniesCompanyIdUsersRoute,
  getCompaniesCompanyIdUsersUserIdRoute,
  getCompaniesCompanyIdWebhooksRoute,
  getCompaniesCompanyIdWebhooksWebhookIdRoute,
  getCompaniesRoute,
  patchCompaniesCompanyIdAndroidAppsIdRoute,
  patchCompaniesCompanyIdApiCredentialsApiCredentialIdRoute,
  patchCompaniesCompanyIdCampaignManagementDonationCampaignIdRoute,
  patchCompaniesCompanyIdTerminalLogosRoute,
  patchCompaniesCompanyIdTerminalOrdersOrderIdRoute,
  patchCompaniesCompanyIdTerminalSettingsRoute,
  patchCompaniesCompanyIdTerminalThemesIdRoute,
  patchCompaniesCompanyIdUsersUserIdRoute,
  patchCompaniesCompanyIdWebhooksWebhookIdRoute,
  postCompaniesCompanyIdAndroidAppsRoute,
  postCompaniesCompanyIdAndroidCertificatesRoute,
  postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRoute,
  postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRoute,
  postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRoute,
  postCompaniesCompanyIdApiCredentialsRoute,
  postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusRoute,
  postCompaniesCompanyIdCampaignManagementRoute,
  postCompaniesCompanyIdClientCertificatesRoute,
  postCompaniesCompanyIdNonprofitsRoute,
  postCompaniesCompanyIdShippingLocationsRoute,
  postCompaniesCompanyIdTerminalOrdersOrderIdCancelRoute,
  postCompaniesCompanyIdTerminalOrdersRoute,
  postCompaniesCompanyIdTerminalThemesIdApplyRoute,
  postCompaniesCompanyIdTerminalThemesIdAssetsReplaceRoute,
  postCompaniesCompanyIdTerminalThemesIdAssetsRoute,
  postCompaniesCompanyIdTerminalThemesRoute,
  postCompaniesCompanyIdTerminalThemesUnapplyRoute,
  postCompaniesCompanyIdUsersRoute,
  postCompaniesCompanyIdWebhooksRoute,
  postCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRoute,
  postCompaniesCompanyIdWebhooksWebhookIdTestRoute,
} from '../routes'

const app = new OpenAPIHono()

export const companiesHandler = app
  .openapi(getCompaniesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdAndroidAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdAndroidAppsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdAndroidAppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdAndroidAppsIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdAndroidCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdAndroidCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdApiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdApiCredentialsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdApiCredentialsApiCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdApiCredentialsApiCredentialIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    deleteCompaniesCompanyIdApiCredentialsApiCredentialIdAllowedOriginsOriginIdRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateApiKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdApiCredentialsApiCredentialIdGenerateClientKeyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdBillingEntitiesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdMerchantsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdShippingLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdShippingLocationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalActionsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalActionsActionIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdTerminalLogosRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalModelsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalOrdersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdTerminalOrdersOrderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalOrdersOrderIdCancelRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdTerminalSettingsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdUsersRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdUsersUserIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdWebhooksRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdWebhooksWebhookIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdWebhooksWebhookIdGenerateHmacRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdWebhooksWebhookIdTestRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdCampaignManagementRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdCampaignManagementAccountHoldersAccountHolderIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdCampaignManagementDonationCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdCampaignManagementDonationCampaignIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdCampaignManagementDonationCampaignIdStatusStatusRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdClientCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdClientCertificatesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdNonprofitsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalThemesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalThemesUnapplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getCompaniesCompanyIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(patchCompaniesCompanyIdTerminalThemesIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalThemesIdApplyRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalThemesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteCompaniesCompanyIdTerminalThemesIdAssetsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postCompaniesCompanyIdTerminalThemesIdAssetsReplaceRoute, (c) => {
    throw new Error('Not implemented')
  })
