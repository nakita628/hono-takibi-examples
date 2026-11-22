import { OpenAPIHono } from '@hono/zod-openapi'
import {
  deleteV1IntegrationsConfigurationIdRoute,
  getV1IntegrationsConfigurationIdProductsRoute,
  getV1IntegrationsConfigurationIdRoute,
  getV1IntegrationsConfigurationsRoute,
  getV1IntegrationsGitNamespacesRoute,
  getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansRoute,
  getV1IntegrationsSearchRepoRoute,
  postV1IntegrationsInstallationsIntegrationConfigurationIdResourcesResourceIdConnectionsRoute,
  postV1StorageStoresIntegrationDirectRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getV1IntegrationsGitNamespacesRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsSearchRepoRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(
    getV1IntegrationsIntegrationIntegrationIdOrSlugProductsProductIdOrSlugPlansRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(
    postV1IntegrationsInstallationsIntegrationConfigurationIdResourcesResourceIdConnectionsRoute,
    (c) => {
      throw new Error('Not implemented')
    },
  )
  .openapi(getV1IntegrationsConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(deleteV1IntegrationsConfigurationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getV1IntegrationsConfigurationIdProductsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postV1StorageStoresIntegrationDirectRoute, (c) => {
    throw new Error('Not implemented')
  })
