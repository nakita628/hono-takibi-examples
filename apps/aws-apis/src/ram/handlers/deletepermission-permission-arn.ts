import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeletepermissionPermissionArnRoute } from '../routes'

const app = new OpenAPIHono()

export const deletepermissionPermissionArnHandler = app.openapi(
  deleteDeletepermissionPermissionArnRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
