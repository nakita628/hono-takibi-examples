import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getClientsClientIdConfigUiAccountsPlatformPlatformKeyRoute,
  getConfigCompaniesCompanyIdSyncCommerceRoute,
  getConfigIntegrationsPlatformKeyBrandingRoute,
  getConfigIntegrationsRoute,
  getConfigSyncCommerceCommerceKeyAccountingKeyStartRoute,
  getMetaCompaniesCompanyIdConnectionsRoute,
  getMetaCompaniesCompanyIdSyncCommerceStatusRoute,
  getMetaCompaniesRoute,
  getSyncCommerceConfigUiTextRoute,
  patchMetaCompaniesCompanyIdConnectionsConnectionIdRoute,
  patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRoute,
  patchSyncCommerceConfigUiTextRoute,
  postCompaniesCompanyIdSyncCommerceLatestRoute,
  postConfigCompaniesCompanyIdSyncCommerceRoute,
  postMetaCompaniesCompanyIdConnectionsRoute,
  postMetaCompaniesCompanyIdSyncCommerceHistoricRoute,
  postMetaCompaniesSyncRoute,
} from './routes'
import {
  getClientsClientIdConfigUiAccountsPlatformPlatformKeyRouteHandler,
  getConfigCompaniesCompanyIdSyncCommerceRouteHandler,
  getConfigIntegrationsPlatformKeyBrandingRouteHandler,
  getConfigIntegrationsRouteHandler,
  getConfigSyncCommerceCommerceKeyAccountingKeyStartRouteHandler,
  getMetaCompaniesCompanyIdConnectionsRouteHandler,
  getMetaCompaniesCompanyIdSyncCommerceStatusRouteHandler,
  getMetaCompaniesRouteHandler,
  getSyncCommerceConfigUiTextRouteHandler,
  patchMetaCompaniesCompanyIdConnectionsConnectionIdRouteHandler,
  patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRouteHandler,
  patchSyncCommerceConfigUiTextRouteHandler,
  postCompaniesCompanyIdSyncCommerceLatestRouteHandler,
  postConfigCompaniesCompanyIdSyncCommerceRouteHandler,
  postMetaCompaniesCompanyIdConnectionsRouteHandler,
  postMetaCompaniesCompanyIdSyncCommerceHistoricRouteHandler,
  postMetaCompaniesSyncRouteHandler,
} from './handlers'

const app = new OpenAPIHono()

export const api = app
  .openapi(
    getClientsClientIdConfigUiAccountsPlatformPlatformKeyRoute,
    getClientsClientIdConfigUiAccountsPlatformPlatformKeyRouteHandler,
  )
  .openapi(
    postCompaniesCompanyIdSyncCommerceLatestRoute,
    postCompaniesCompanyIdSyncCommerceLatestRouteHandler,
  )
  .openapi(
    getConfigCompaniesCompanyIdSyncCommerceRoute,
    getConfigCompaniesCompanyIdSyncCommerceRouteHandler,
  )
  .openapi(
    postConfigCompaniesCompanyIdSyncCommerceRoute,
    postConfigCompaniesCompanyIdSyncCommerceRouteHandler,
  )
  .openapi(getConfigIntegrationsRoute, getConfigIntegrationsRouteHandler)
  .openapi(
    getConfigIntegrationsPlatformKeyBrandingRoute,
    getConfigIntegrationsPlatformKeyBrandingRouteHandler,
  )
  .openapi(
    getConfigSyncCommerceCommerceKeyAccountingKeyStartRoute,
    getConfigSyncCommerceCommerceKeyAccountingKeyStartRouteHandler,
  )
  .openapi(getMetaCompaniesRoute, getMetaCompaniesRouteHandler)
  .openapi(postMetaCompaniesSyncRoute, postMetaCompaniesSyncRouteHandler)
  .openapi(
    getMetaCompaniesCompanyIdConnectionsRoute,
    getMetaCompaniesCompanyIdConnectionsRouteHandler,
  )
  .openapi(
    postMetaCompaniesCompanyIdConnectionsRoute,
    postMetaCompaniesCompanyIdConnectionsRouteHandler,
  )
  .openapi(
    patchMetaCompaniesCompanyIdConnectionsConnectionIdRoute,
    patchMetaCompaniesCompanyIdConnectionsConnectionIdRouteHandler,
  )
  .openapi(
    postMetaCompaniesCompanyIdSyncCommerceHistoricRoute,
    postMetaCompaniesCompanyIdSyncCommerceHistoricRouteHandler,
  )
  .openapi(
    getMetaCompaniesCompanyIdSyncCommerceStatusRoute,
    getMetaCompaniesCompanyIdSyncCommerceStatusRouteHandler,
  )
  .openapi(
    patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRoute,
    patchSyncCommerceConfigUiAccountsPlatformCommerceKeyRouteHandler,
  )
  .openapi(getSyncCommerceConfigUiTextRoute, getSyncCommerceConfigUiTextRouteHandler)
  .openapi(patchSyncCommerceConfigUiTextRoute, patchSyncCommerceConfigUiTextRouteHandler)

export default app
