import { OpenAPIHono } from '@hono/zod-openapi'
import {
  getDirectoryAdministrativeUnitsMicrosoftGraphDeltaRoute,
  getDirectoryFederationConfigurationsMicrosoftGraphAvailableProviderTypesRoute,
} from '../routes'

const app = new OpenAPIHono()

export const directoryFunctionsHandler = app
  .openapi(getDirectoryAdministrativeUnitsMicrosoftGraphDeltaRoute, (c) => {
    throw new Error('Not implemented')
  })
  .openapi(getDirectoryFederationConfigurationsMicrosoftGraphAvailableProviderTypesRoute, (c) => {
    throw new Error('Not implemented')
  })
