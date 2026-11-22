import { OpenAPIHono } from '@hono/zod-openapi'
import { getOrgStackRegionsRoute } from '../routes'

const app = new OpenAPIHono()

export const orgStackRegionsHandler = app.openapi(getOrgStackRegionsRoute, (c) => {
  throw new Error('Not implemented')
})
