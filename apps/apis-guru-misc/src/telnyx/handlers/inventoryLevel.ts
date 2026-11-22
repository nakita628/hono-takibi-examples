import { OpenAPIHono } from '@hono/zod-openapi'
import { getInventoryCoverageRoute } from '../routes'

const app = new OpenAPIHono()

export const inventoryLevelHandler = app.openapi(getInventoryCoverageRoute, (c) => {
  throw new Error('Not implemented')
})
