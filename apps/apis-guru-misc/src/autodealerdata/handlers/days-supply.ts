import { OpenAPIHono } from '@hono/zod-openapi'
import { getDaysSupplyRoute } from '../routes'

const app = new OpenAPIHono()

export const daysSupplyHandler = app.openapi(getDaysSupplyRoute, (c) => {
  throw new Error('Not implemented')
})
