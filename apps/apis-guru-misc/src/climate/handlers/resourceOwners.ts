import { OpenAPIHono } from '@hono/zod-openapi'
import { getV4ResourceOwnersResourceOwnerIdRoute } from '../routes'

const app = new OpenAPIHono()

export const resourceOwnersHandler = app.openapi(getV4ResourceOwnersResourceOwnerIdRoute, (c) => {
  throw new Error('Not implemented')
})
