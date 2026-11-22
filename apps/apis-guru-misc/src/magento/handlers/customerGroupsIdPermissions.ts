import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomerGroupsIdPermissionsRoute } from '../routes'

const app = new OpenAPIHono()

export const customerGroupsIdPermissionsHandler = app.openapi(
  getV1CustomerGroupsIdPermissionsRoute,
  (c) => {
    throw new Error('Not implemented')
  },
)
