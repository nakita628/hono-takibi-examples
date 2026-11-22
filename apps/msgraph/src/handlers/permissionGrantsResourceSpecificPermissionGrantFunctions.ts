import { OpenAPIHono } from '@hono/zod-openapi'
import { getPermissionGrantsDeltaRoute } from '../routes'

const app = new OpenAPIHono()

export const permissionGrantsResourceSpecificPermissionGrantFunctionsHandler = app.openapi(
  getPermissionGrantsDeltaRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
