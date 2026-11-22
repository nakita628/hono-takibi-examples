import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getConfigIntegrationsPlatformKeyBrandingRoute,
  getConfigIntegrationsRoute,
} from '../routes'

const app = new OpenAPIHono()

export const integrationsHandler = app
  .openapi(getConfigIntegrationsRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getConfigIntegrationsPlatformKeyBrandingRoute, (c) => {
    throw new Error('Not implemented')
  })
