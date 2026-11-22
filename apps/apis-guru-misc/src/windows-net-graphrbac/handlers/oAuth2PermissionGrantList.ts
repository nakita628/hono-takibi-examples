import { OpenAPIHono } from '@hono/zod-openapi'
import { getTenantIDOauth2PermissionGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuth2PermissionGrantListHandler = app.openapi(
  getTenantIDOauth2PermissionGrantsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
