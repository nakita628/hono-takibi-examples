import { OpenAPIHono } from '@hono/zod-openapi'
import { getDistributionsRoute } from '../routes'

const app = new OpenAPIHono()

export const distributionsHandler = app.openapi(getDistributionsRoute, (c) => {
  throw new Error('Not implemented')
})
