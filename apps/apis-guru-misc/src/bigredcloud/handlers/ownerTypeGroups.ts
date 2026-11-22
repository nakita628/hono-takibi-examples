import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1OwnerTypeGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const ownerTypeGroupsHandler = app.openapi(getV1OwnerTypeGroupsRoute, (c) => {
  throw new Error('Not implemented')
})
