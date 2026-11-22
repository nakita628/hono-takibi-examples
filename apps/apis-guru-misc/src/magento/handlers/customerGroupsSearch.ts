import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomerGroupsSearchRoute } from '../routes'

const app = new OpenAPIHono()

export const customerGroupsSearchHandler = app.openapi(getV1CustomerGroupsSearchRoute, (c) => {
  throw new Error('Not implemented')
})
