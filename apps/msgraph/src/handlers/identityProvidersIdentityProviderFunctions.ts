import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdentityProvidersAvailableProviderTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const identityProvidersIdentityProviderFunctionsHandler = app.openapi(
  getIdentityProvidersAvailableProviderTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
