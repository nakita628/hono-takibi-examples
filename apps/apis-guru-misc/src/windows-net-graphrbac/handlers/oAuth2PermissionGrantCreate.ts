import { OpenAPIHono } from '@hono/zod-openapi'
import { postTenantIDOauth2PermissionGrantsRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuth2PermissionGrantCreateHandler = app.openapi(
  postTenantIDOauth2PermissionGrantsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
