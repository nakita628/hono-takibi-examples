import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getOrganizationsOrganizationIdDataIntegrationConfigurationsRoute,
  putOrganizationsOrganizationIdDataIntegrationConfigurationsSlugRoute,
} from '../routes'

const app = new OpenAPIHono()

export const pipesProviderHandler = app
  .openapi(getOrganizationsOrganizationIdDataIntegrationConfigurationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(putOrganizationsOrganizationIdDataIntegrationConfigurationsSlugRoute, (c) => {
    throw new Error('Not implemented')
  })
