import { OpenAPIHono } from '@hono/zod-openapi'
import { getV1CustomerGroupsDefaultRoute } from '../routes'

const app = new OpenAPIHono()

export const customerGroupsDefaultHandler = app.openapi(getV1CustomerGroupsDefaultRoute, (c) => {
  throw new Error('Not implemented')
})
