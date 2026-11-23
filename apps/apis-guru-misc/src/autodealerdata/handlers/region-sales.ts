import { OpenAPIHono } from '@hono/zod-openapi'
import { getRegionSalesRoute } from '../routes'

const app = new OpenAPIHono()

export const regionSalesHandler = app.openapi(getRegionSalesRoute, (c) => {
  throw new Error('Not implemented')
})
