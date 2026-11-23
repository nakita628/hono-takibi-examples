import { OpenAPIHono } from '@hono/zod-openapi'
import { getClientsClientIdConfigUiAccountsPlatformPlatformKeyRoute } from '../routes'

const app = new OpenAPIHono()

export const clientsHandler = app.openapi(
  getClientsClientIdConfigUiAccountsPlatformPlatformKeyRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
