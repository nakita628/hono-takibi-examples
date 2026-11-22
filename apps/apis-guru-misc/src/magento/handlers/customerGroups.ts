import { OpenAPIHono } from '@hono/zod-openapi'
import { postV1CustomerGroupsRoute } from '../routes'

const app = new OpenAPIHono()

export const customerGroupsHandler = app.openapi(postV1CustomerGroupsRoute, (c) => {
  throw new Error('Not implemented')
})
