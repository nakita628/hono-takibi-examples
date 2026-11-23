import { OpenAPIHono } from '@hono/zod-openapi'
import { getApiChangeRequestsRoute } from '../routes'

const app = new OpenAPIHono()

export const apiHandler = app.openapi(getApiChangeRequestsRoute, (c) => {
  throw new Error('Not implemented')
})
