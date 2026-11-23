import { OpenAPIHono } from '@hono/zod-openapi'
import { postUpdateIdentityProviderConfigurationRoute } from '../routes'

const app = new OpenAPIHono()

export const updateIdentityProviderConfigurationHandler = app.openapi(
  postUpdateIdentityProviderConfigurationRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
