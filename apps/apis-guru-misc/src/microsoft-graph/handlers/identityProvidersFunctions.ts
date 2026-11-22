import { OpenAPIHono } from '@hono/zod-openapi'
import { getIdentityProvidersMicrosoftGraphAvailableProviderTypesRoute } from '../routes'

const app = new OpenAPIHono()

export const identityProvidersFunctionsHandler = app.openapi(
  getIdentityProvidersMicrosoftGraphAvailableProviderTypesRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
