import { OpenAPIHono } from '@hono/zod-openapi'
import { deleteDeletepermissionversionPermissionArnPermissionVersionRoute } from '../routes'

const app = new OpenAPIHono()

export const deletepermissionversionPermissionArnPermissionVersionHandler = app.openapi(
  deleteDeletepermissionversionPermissionArnPermissionVersionRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
