import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauth2PermissionGrantsMicrosoftGraphDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const oauth2PermissionGrantsFunctionsHandler = app.openapi(
  getOauth2PermissionGrantsMicrosoftGraphDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
