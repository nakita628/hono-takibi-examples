import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauth2PermissionGrantsDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const oauth2PermissionGrantsOAuth2PermissionGrantFunctionsHandler = app.openapi(
  getOauth2PermissionGrantsDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
