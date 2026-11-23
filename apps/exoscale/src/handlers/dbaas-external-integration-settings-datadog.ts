import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute,
  postDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute,
} from '../routes'

const app = new OpenAPIHono()

export const dbaasExternalIntegrationSettingsDatadogHandler = app
  .openapi(postDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDbaasExternalIntegrationSettingsDatadogIntegrationIdRoute, (c) => {
    throw new Error('Not implemented')
  })
