import { OpenAPIHono } from '@hono/zod-openapi'
import { getRegionDailySalesRoute } from '../routes'

const app = new OpenAPIHono()

export const regionDailySalesHandler = app.openapi(getRegionDailySalesRoute, (c) => {
  throw new Error('Not implemented')
})
