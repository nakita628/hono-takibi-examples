import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteTenantIDOauth2PermissionGrantsObjectIdRoute } from '../routes'

const app = new OpenAPIHono()

export const oAuth2PermissionGrantDeleteHandler = app.openapi(
  deleteTenantIDOauth2PermissionGrantsObjectIdRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
