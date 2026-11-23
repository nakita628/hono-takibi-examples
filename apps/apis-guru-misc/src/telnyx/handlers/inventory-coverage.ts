import { OpenAPIHono } from '@hono/zod-openapi'
import { getInventoryCoverageRoute } from '../routes'

const app = new OpenAPIHono()

export const inventoryCoverageHandler = app.openapi(getInventoryCoverageRoute, (c) => {
  throw new Error('Not implemented')
})
