import { OpenAPIHono } from '@hono/zod-openapi'
import { getOauth2PermissionGrantsCountRoute } from '../routes'

const app = new OpenAPIHono()

export const oauth2PermissionGrantsHandler = app.openapi(
  getOauth2PermissionGrantsCountRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
