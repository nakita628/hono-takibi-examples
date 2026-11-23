import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConfigCompaniesCompanyIdSyncCommerceRoute,
  getConfigIntegrationsPlatformKeyBrandingRoute,
  getConfigIntegrationsRoute,
  getConfigSyncCommerceCommerceKeyAccountingKeyStartRoute,
  postConfigCompaniesCompanyIdSyncCommerceRoute,
} from '../routes'

const app = new OpenAPIHono()

export const configHandler = app
  .openapi(getConfigCompaniesCompanyIdSyncCommerceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(postConfigCompaniesCompanyIdSyncCommerceRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigIntegrationsPlatformKeyBrandingRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigSyncCommerceCommerceKeyAccountingKeyStartRoute, (c) => {
    throw new Error('Not implemented')
  })
